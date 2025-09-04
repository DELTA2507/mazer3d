import * as THREE from 'three';
import { InitResponse, IncrementResponse, DecrementResponse } from '../shared/types/api';

const canvas = document.getElementById('bg') as HTMLCanvasElement;
const startScreen = document.getElementById('start-screen') as HTMLDivElement;
const startButton = document.getElementById('start-button') as HTMLButtonElement;
const leaderboard = document.getElementById('leaderboard') as HTMLParagraphElement;

let currentPostId: string | null = null;
let mazeWalls: THREE.Mesh[] = [];
let player: THREE.Mesh;

const mazeSize = 6;
const ballRadius = 2;

function generateRandomLayout(rows: number, cols: number, wallProbability = 0.3): number[][] {
  const layout: number[][] = [];
  for (let z = 0; z < rows; z++) {
    const row: number[] = [];
    for (let x = 0; x < cols; x++) {
      if (z === 0 || z === rows - 1 || x === 0 || x === cols - 1) {
        row.push(1);
      } else {
        row.push(Math.random() < wallProbability ? 1 : 0);
      }
    }
    layout.push(row);
  }
  return layout;
}

const layout: number[][] = generateRandomLayout(10, 10, 0.3);

function findSpawnPosition(layout: number[][], tileSize: number): THREE.Vector3 {
  const openTiles: { x: number, z: number }[] = [];
  layout.forEach((row, z) => row.forEach((val, x) => {
    if (val === 0) {
      const neighbors = [
        layout[z-1]?.[x], layout[z+1]?.[x],
        layout[z]?.[x-1], layout[z]?.[x+1]
      ];
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

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

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

  window.addEventListener('keydown', e => {
    keys[e.key.toLowerCase()] = true;

    if (e.key === 'ArrowLeft') cameraAngle -= 0.05;
    if (e.key === 'ArrowRight') cameraAngle += 0.05;
    if (e.key === 'ArrowUp') cameraDistance = Math.max(5, cameraDistance - 0.5);
    if (e.key === 'ArrowDown') cameraDistance = Math.min(20, cameraDistance + 0.5);
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
    requestAnimationFrame(animate);

    const speed = 0.3;
    const nextPos = player.position.clone();
    if (keys['w']) nextPos.z -= speed;
    if (keys['s']) nextPos.z += speed;
    if (keys['a']) nextPos.x -= speed;
    if (keys['d']) nextPos.x += speed;

    if (!collide(nextPos)) player.position.copy(nextPos);

    const offsetX = Math.sin(cameraAngle) * cameraDistance;
    const offsetZ = Math.cos(cameraAngle) * cameraDistance;
    const cameraPos = new THREE.Vector3(
      player.position.x + offsetX,
      player.position.y + cameraHeight,
      player.position.z + offsetZ
    );
    camera.position.lerp(cameraPos, 0.1);
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
        const wall = new THREE.Mesh(
          new THREE.BoxGeometry(mazeSize, wallHeight, mazeSize),
          wallMat
        );
        wall.position.set(x * mazeSize, wallHeight / 2, z * mazeSize);
        scene.add(wall);
        maze.push(wall);
      }
    }
  }
}

void fetchInitialCount();