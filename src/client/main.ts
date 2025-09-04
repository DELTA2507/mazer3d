import * as THREE from 'three';
import { InitResponse, IncrementResponse, DecrementResponse } from '../shared/types/api';

const canvas = document.getElementById('bg') as HTMLCanvasElement;
const startScreen = document.getElementById('start-screen') as HTMLDivElement;
const startButton = document.getElementById('start-button') as HTMLButtonElement;
const leaderboard = document.getElementById('leaderboard') as HTMLParagraphElement;
const successScreen = document.getElementById('success-screen') as HTMLDivElement;
const restartButton = document.getElementById('restart-button') as HTMLButtonElement;

let currentPostId: string | null = null;
let mazeWalls: THREE.Mesh[] = [];
let player: THREE.Mesh;

const mazeSize = 6;
const ballRadius = 2;
let exitTile: { x: number, z: number };

function generateRandomLayout(rows: number, cols: number, wallProbability = 0.3): number[][] {
  const layout: number[][] = [];
  for (let z = 0; z < rows; z++) {
    const row: number[] = [];
    for (let x = 0; x < cols; x++) {
      if (z === 0 || z === rows - 1 || x === 0 || x === cols - 1) row.push(1);
      else row.push(Math.random() < wallProbability ? 1 : 0);
    }
    layout.push(row);
  }
  // Ensure exit at bottom row
  const exitX = Math.floor(Math.random() * (cols - 2)) + 1;
  layout[rows - 1][exitX] = 0;
  exitTile = { x: exitX, z: rows - 1 };
  return layout;
}

const layout: number[][] = generateRandomLayout(10, 10, 0.3);

function findSpawnPosition(layout: number[][], tileSize: number): THREE.Vector3 {
  const openTiles: { x: number, z: number }[] = [];
  layout.forEach((row, z) => row.forEach((val, x) => {
    if (val === 0 && z !== layout.length - 1) {
      const neighbors = [layout[z-1]?.[x], layout[z+1]?.[x], layout[z]?.[x-1], layout[z]?.[x+1]];
      if (!neighbors.some(n => n === 1)) openTiles.push({ x, z });
    }
  }));
  if (!openTiles.length) return new THREE.Vector3(tileSize / 2, ballRadius, tileSize / 2);
  const spawn = openTiles[Math.floor(Math.random() * openTiles.length)];
  return new THREE.Vector3(spawn.x * tileSize + tileSize / 2, ballRadius, spawn.z * tileSize + tileSize / 2);
}

startButton.addEventListener('click', () => {
  startScreen.style.transition = 'opacity 0.5s ease';
  startScreen.style.opacity = '0';
  setTimeout(() => {
    startScreen.style.display = 'none';
    startGame();
  }, 500);
});

restartButton.addEventListener('click', () => {
  window.location.reload();
});

async function fetchInitialCount(): Promise<void> {
  try {
    const response = await fetch('/api/init');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = (await response.json()) as InitResponse;
    if (data.type === 'init') {
      currentPostId = data.postId;
      leaderboard.textContent = `Best: ${data.count}`;
    }
  } catch (err) {
    console.error('Error fetching initial count:', err);
  }
}

async function updateCounter(action: 'increment' | 'decrement'): Promise<void> {
  if (!currentPostId) return;
  try {
    const response = await fetch(`/api/${action}`, { method: 'POST' });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = (await response.json()) as IncrementResponse | DecrementResponse;
    leaderboard.textContent = `Best: ${data.count}`;
  } catch (err) {
    console.error(`Error updating counter:`, err);
  }
}

function startGame() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xff9b3d);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(50, 50, 50);
  scene.add(dirLight);

  mazeWalls = [];
  createMaze(scene, mazeWalls, layout);

  const playerMat = new THREE.MeshStandardMaterial({ color: 0xffa500, metalness: 0.3, roughness: 0.5 });
  const playerGeo = new THREE.SphereGeometry(ballRadius, 32, 32);
  player = new THREE.Mesh(playerGeo, playerMat);
  player.position.copy(findSpawnPosition(layout, mazeSize));
  scene.add(player);

  const keys: Record<string, boolean> = {};
  let cameraAngle = 0;
  let cameraDistance = 12;
  const cameraHeight = 8;
  let gameOver = false;

  window.addEventListener('keydown', e => {
    keys[e.key.toLowerCase()] = true;
    if (!gameOver) {
      if (e.key === 'ArrowLeft') cameraAngle -= 0.05;
      if (e.key === 'ArrowRight') cameraAngle += 0.05;
      if (e.key === 'ArrowUp') cameraDistance = Math.max(5, cameraDistance - 0.5);
      if (e.key === 'ArrowDown') cameraDistance = Math.min(20, cameraDistance + 0.5);
    }
  });

  window.addEventListener('keyup', e => keys[e.key.toLowerCase()] = false);

  function collide(pos: THREE.Vector3): boolean {
    const buffer = 0.1;
    return mazeWalls.some(wall => {
      const half = mazeSize / 2;
      const minX = wall.position.x - half - ballRadius + buffer;
      const maxX = wall.position.x + half + ballRadius - buffer;
      const minZ = wall.position.z - half - ballRadius + buffer;
      const maxZ = wall.position.z + half + ballRadius - buffer;
      return pos.x >= minX && pos.x <= maxX && pos.z >= minZ && pos.z <= maxZ;
    });
  }

  function animate() {
    if (!gameOver) requestAnimationFrame(animate);

    const speed = 0.3;
    const nextPos = player.position.clone();

    const forward = new THREE.Vector3(Math.sin(cameraAngle), 0, Math.cos(cameraAngle));
    const right = new THREE.Vector3(Math.sin(cameraAngle + Math.PI/2), 0, Math.cos(cameraAngle + Math.PI/2));

    if (!gameOver) {
      if (keys['w']) nextPos.add(forward.clone().multiplyScalar(-speed));
      if (keys['s']) nextPos.add(forward.clone().multiplyScalar(speed));
      if (keys['a']) nextPos.add(right.clone().multiplyScalar(-speed));
      if (keys['d']) nextPos.add(right.clone().multiplyScalar(speed));

      if (!collide(nextPos)) player.position.copy(nextPos);

      const exitCenterX = exitTile.x * mazeSize + mazeSize/2;
      const exitCenterZ = exitTile.z * mazeSize + mazeSize/2;
      if (Math.hypot(player.position.x - exitCenterX, player.position.z - exitCenterZ) < ballRadius + mazeSize/2) {
        gameOver = true;
        successScreen.classList.add('active');
      }
    }

    const offsetX = Math.sin(cameraAngle) * cameraDistance;
    const offsetZ = Math.cos(cameraAngle) * cameraDistance;
    let desiredCameraPos = new THREE.Vector3(player.position.x + offsetX, player.position.y + cameraHeight, player.position.z + offsetZ);

    mazeWalls.forEach(wall => {
      const half = mazeSize / 2 + 0.2;
      const dx = desiredCameraPos.x - wall.position.x;
      const dz = desiredCameraPos.z - wall.position.z;
      const overlapX = half - Math.abs(dx);
      const overlapZ = half - Math.abs(dz);
      if (overlapX > 0 && overlapZ > 0) {
        if (overlapX < overlapZ) desiredCameraPos.x += dx > 0 ? overlapX : -overlapX;
        else desiredCameraPos.z += dz > 0 ? overlapZ : -overlapZ;
      }
    });

    camera.position.lerp(desiredCameraPos, 0.1);
    camera.lookAt(player.position);

    renderer.render(scene, camera);
  }

  animate();
}

function createMaze(scene: THREE.Scene, maze: THREE.Mesh[], layout: number[][]) {
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xff7f00 });
  const wallHeight = 12;

  for (let z = 0; z < layout.length; z++) {
    const row = layout[z];
    if (!row) continue;
    for (let x = 0; x < row.length; x++) {
      if (layout[z][x] === 1) {
        const wall = new THREE.Mesh(new THREE.BoxGeometry(mazeSize, wallHeight, mazeSize), wallMat);
        wall.position.set(x * mazeSize, wallHeight / 2, z * mazeSize);
        scene.add(wall);
        maze.push(wall);
      }
    }
  }

  // optional: mark exit visually
  const exitMat = new THREE.MeshStandardMaterial({ color: 0x00ff00, metalness: 0.3, roughness: 0.5 });
  const exitGeo = new THREE.BoxGeometry(mazeSize, 0.5, mazeSize);
  const exitMesh = new THREE.Mesh(exitGeo, exitMat);
  exitMesh.position.set(exitTile.x * mazeSize + mazeSize/2, 0.25, exitTile.z * mazeSize + mazeSize/2);
  scene.add(exitMesh);
}

void fetchInitialCount();