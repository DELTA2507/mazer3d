(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="178",CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,ConstantColorFactor=211,OneMinusConstantColorFactor=212,ConstantAlphaFactor=213,OneMinusConstantAlphaFactor=214,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,AgXToneMapping=6,NeutralToneMapping=7,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,UnsignedInt5999Type=35902,AlphaFormat=1021,RGBFormat=1022,RGBAFormat=1023,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RGB_BPTC_SIGNED_Format=36494,RGB_BPTC_UNSIGNED_Format=36495,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,NoColorSpace="",SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",LinearTransfer="linear",SRGBTransfer="srgb",KeepStencilOp=7680,AlwaysStencilFunc=519,NeverCompare=512,LessCompare=513,EqualCompare=514,LessEqualCompare=515,GreaterCompare=516,NotEqualCompare=517,GreaterEqualCompare=518,AlwaysCompare=519,StaticDrawUsage=35044,GLSL3="300 es",WebGLCoordinateSystem=2e3,WebGPUCoordinateSystem=2001;class EventDispatcher{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _seed=1234567;const DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_lut[t&255]+_lut[t>>8&255]+_lut[t>>16&255]+_lut[t>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[n&63|128]+_lut[n>>8&255]+"-"+_lut[n>>16&255]+_lut[n>>24&255]+_lut[i&255]+_lut[i>>8&255]+_lut[i>>16&255]+_lut[i>>24&255]).toLowerCase()}function clamp(t,e,n){return Math.max(e,Math.min(n,t))}function euclideanModulo(t,e){return(t%e+e)%e}function mapLinear(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function inverseLerp(t,e,n){return t!==e?(n-t)/(e-t):0}function lerp(t,e,n){return(1-n)*t+n*e}function damp(t,e,n,i){return lerp(t,e,1-Math.exp(-n*i))}function pingpong(t,e=1){return e-Math.abs(euclideanModulo(t,e*2)-e)}function smoothstep(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function smootherstep(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function randInt(t,e){return t+Math.floor(Math.random()*(e-t+1))}function randFloat(t,e){return t+Math.random()*(e-t)}function randFloatSpread(t){return t*(.5-Math.random())}function seededRandom(t){t!==void 0&&(_seed=t);let e=_seed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function degToRad(t){return t*DEG2RAD}function radToDeg(t){return t*RAD2DEG}function isPowerOfTwo(t){return(t&t-1)===0&&t!==0}function ceilPowerOfTwo(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function floorPowerOfTwo(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function setQuaternionFromProperEuler(t,e,n,i,r){const a=Math.cos,s=Math.sin,o=a(n/2),l=s(n/2),c=a((e+i)/2),h=s((e+i)/2),u=a((e-i)/2),f=s((e-i)/2),p=a((i-e)/2),_=s((i-e)/2);switch(r){case"XYX":t.set(o*h,l*u,l*f,o*c);break;case"YZY":t.set(l*f,o*h,l*u,o*c);break;case"ZXZ":t.set(l*u,l*f,o*h,o*c);break;case"XZX":t.set(o*h,l*_,l*p,o*c);break;case"YXY":t.set(l*p,o*h,l*_,o*c);break;case"ZYZ":t.set(l*_,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function denormalize(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function normalize(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const MathUtils={DEG2RAD,RAD2DEG,generateUUID,clamp,euclideanModulo,mapLinear,inverseLerp,lerp,damp,pingpong,smoothstep,smootherstep,randInt,randFloat,randFloatSpread,seededRandom,degToRad,radToDeg,isPowerOfTwo,ceilPowerOfTwo,floorPowerOfTwo,setQuaternionFromProperEuler,normalize,denormalize};class Vector2{constructor(e=0,n=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=clamp(this.x,e.x,n.x),this.y=clamp(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=clamp(this.x,e,n),this.y=clamp(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(clamp(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Quaternion{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,s,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const f=a[s+0],p=a[s+1],_=a[s+2],v=a[s+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u;return}if(o===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(u!==v||l!==f||c!==p||h!==_){let m=1-o;const d=l*f+c*p+h*_+u*v,y=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const N=Math.sqrt(b),L=Math.atan2(N,d*y);m=Math.sin(m*L)/N,o=Math.sin(o*L)/N}const M=o*y;if(l=l*m+f*M,c=c*m+p*M,h=h*m+_*M,u=u*m+v*M,m===1-o){const N=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=N,c*=N,h*=N,u*=N}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=a[s],f=a[s+1],p=a[s+2],_=a[s+3];return e[n]=o*_+h*u+l*p-c*f,e[n+1]=l*_+h*f+c*u-o*p,e[n+2]=c*_+h*p+o*f-l*u,e[n+3]=h*_-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(a/2),f=l(i/2),p=l(r/2),_=l(a/2);switch(s){case"XYZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"YZX":this._x=f*h*u+c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u-f*p*_;break;case"XZY":this._x=f*h*u-c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],s=n[1],o=n[5],l=n[9],c=n[2],h=n[6],u=n[10],f=i+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(s-r)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(a-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(s-r)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,s=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+s*o+r*c-a*l,this._y=r*h+s*l+a*o-i*c,this._z=a*h+s*c+i*l-r*o,this._w=s*h-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=s*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=a*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(n),a*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,n=0,i=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$4.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),h=2*(o*n-a*r),u=2*(a*i-s*n);return this.x=n+l*c+s*u-o*h,this.y=i+l*h+o*c-a*u,this.z=r+l*u+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=clamp(this.x,e.x,n.x),this.y=clamp(this.y,e.y,n.y),this.z=clamp(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=clamp(this.x,e,n),this.y=clamp(this.y,e,n),this.z=clamp(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(clamp(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,s=n.x,o=n.y,l=n.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _vector$c.copy(this).projectOnVector(e),this.sub(_vector$c)}reflect(e){return this.sub(_vector$c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$c=new Vector3,_quaternion$4=new Quaternion;class Matrix3{constructor(e,n,i,r,a,s,o,l,c){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,c)}set(e,n,i,r,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],_=i[8],v=r[0],m=r[3],d=r[6],y=r[1],b=r[4],M=r[7],N=r[2],L=r[5],C=r[8];return a[0]=s*v+o*y+l*N,a[3]=s*m+o*b+l*L,a[6]=s*d+o*M+l*C,a[1]=c*v+h*y+u*N,a[4]=c*m+h*b+u*L,a[7]=c*d+h*M+u*C,a[2]=f*v+p*y+_*N,a[5]=f*m+p*b+_*L,a[8]=f*d+p*M+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*s*h-n*o*c-i*a*h+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*s-o*c,f=o*l-h*a,p=c*a-s*l,_=n*u+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(r*c-h*i)*v,e[2]=(o*i-r*s)*v,e[3]=f*v,e[4]=(h*n-r*l)*v,e[5]=(r*a-o*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(s*n-i*a)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(_m3.makeScale(e,n)),this}rotate(e){return this.premultiply(_m3.makeRotation(-e)),this}translate(e,n){return this.premultiply(_m3.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function createElementNS(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function createCanvasElement(){const t=createElementNS("canvas");return t.style.display="block",t}const _cache={};function warnOnce(t){t in _cache||(_cache[t]=!0,console.warn(t))}function probeAsync(t,e,n){return new Promise(function(i,r){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}function toNormalizedProjectionMatrix(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function toReversedProjectionMatrix(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const LINEAR_REC709_TO_XYZ=new Matrix3().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),XYZ_TO_LINEAR_REC709=new Matrix3().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function createColorManagement(){const t={enabled:!0,workingColorSpace:LinearSRGBColorSpace,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===SRGBTransfer&&(r.r=SRGBToLinear(r.r),r.g=SRGBToLinear(r.g),r.b=SRGBToLinear(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===SRGBTransfer&&(r.r=LinearToSRGB(r.r),r.g=LinearToSRGB(r.g),r.b=LinearToSRGB(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===NoColorSpace?LinearTransfer:this.spaces[r].transfer},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return warnOnce("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return warnOnce("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[LinearSRGBColorSpace]:{primaries:e,whitePoint:i,transfer:LinearTransfer,toXYZ:LINEAR_REC709_TO_XYZ,fromXYZ:XYZ_TO_LINEAR_REC709,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:SRGBColorSpace},outputColorSpaceConfig:{drawingBufferColorSpace:SRGBColorSpace}},[SRGBColorSpace]:{primaries:e,whitePoint:i,transfer:SRGBTransfer,toXYZ:LINEAR_REC709_TO_XYZ,fromXYZ:XYZ_TO_LINEAR_REC709,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:SRGBColorSpace}}}),t}const ColorManagement=createColorManagement();function SRGBToLinear(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function LinearToSRGB(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let _canvas;class ImageUtils{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const r=_canvas.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=_canvas}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=createElementNS("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=SRGBToLinear(a[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(SRGBToLinear(n[i]/255)*255):n[i]=SRGBToLinear(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _sourceId=0;class Source{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_sourceId++}),this.uuid=generateUUID(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(serializeImage(r[s].image)):a.push(serializeImage(r[s]))}else a=serializeImage(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function serializeImage(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ImageUtils.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _textureId=0;const _tempVec3=new Vector3;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,n=Texture.DEFAULT_MAPPING,i=ClampToEdgeWrapping,r=ClampToEdgeWrapping,a=LinearFilter,s=LinearMipmapLinearFilter,o=RGBAFormat,l=UnsignedByteType,c=Texture.DEFAULT_ANISOTROPY,h=NoColorSpace){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_tempVec3).x}get height(){return this.source.getSize(_tempVec3).y}get depth(){return this.source.getSize(_tempVec3).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(e=0,n=0,i=0,r=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],_=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(c+1)/2,M=(p+1)/2,N=(d+1)/2,L=(h+f)/4,C=(u+v)/4,F=(_+m)/4;return b>M&&b>N?b<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(b),r=L/i,a=C/i):M>N?M<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),i=L/r,a=F/r):N<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(N),i=C/a,r=F/a),this.set(i,r,a,n),this}let y=Math.sqrt((m-_)*(m-_)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=clamp(this.x,e.x,n.x),this.y=clamp(this.y,e.y,n.y),this.z=clamp(this.z,e.z,n.z),this.w=clamp(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=clamp(this.x,e,n),this.y=clamp(this.y,e,n),this.z=clamp(this.z,e,n),this.w=clamp(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(clamp(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RenderTarget extends EventDispatcher{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:LinearFilter,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Vector4(0,0,e,n),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,n);const r={width:e,height:n,depth:i.depth},a=new Texture(r);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:LinearFilter,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Source(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class WebGLRenderTarget extends RenderTarget{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class DataArrayTexture extends Texture{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Data3DTexture extends Texture{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Box3{constructor(e=new Vector3(1/0,1/0,1/0),n=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(_vector$b.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(_vector$b.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=_vector$b.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,_vector$b):_vector$b.fromBufferAttribute(a,s),_vector$b.applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$b);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_box$4.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_box$4.copy(i.boundingBox)),_box$4.applyMatrix4(e.matrixWorld),this.union(_box$4)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_vector$b),_vector$b.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(e.a,_center),_v1$7.subVectors(e.b,_center),_v2$4.subVectors(e.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let n=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(n,_v0$2,_v1$7,_v2$4,_extents)||(n=[1,0,0,0,1,0,0,0,1],!satForAxes(n,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),n=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(n,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_vector$b).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_vector$b).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$4=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(t,e,n,i,r){for(let a=0,s=t.length-3;a<=s;a+=3){_testAxis.fromArray(t,a);const o=r.x*Math.abs(_testAxis.x)+r.y*Math.abs(_testAxis.y)+r.z*Math.abs(_testAxis.z),l=e.dot(_testAxis),c=n.dot(_testAxis),h=i.dot(_testAxis);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const _box$3=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(e=new Vector3,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):_box$3.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_v1$6.subVectors(e,this.center);const n=_v1$6.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_v1$6,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v2$3.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,n=new Vector3(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$a)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_vector$a.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_vector$a.copy(this.origin).addScaledVector(this.direction,n),_vector$a.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){_segCenter.copy(e).add(n).multiplyScalar(.5),_segDir.copy(n).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const a=e.distanceTo(n)*.5,s=-this.direction.dot(_segDir),o=_diff.dot(this.direction),l=-_diff.dot(_segDir),c=_diff.lengthSq(),h=Math.abs(1-s*s);let u,f,p,_;if(h>0)if(u=s*l-o,f=s*o-l,_=a*h,u>=0)if(f>=-_)if(f<=_){const v=1/h;u*=v,f*=v,p=u*(u+s*f+2*o)+f*(s*u+f+2*l)+c}else f=a,u=Math.max(0,-(s*f+o)),p=-u*u+f*(f+2*l)+c;else f=-a,u=Math.max(0,-(s*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-s*a+o)),f=u>0?-a:Math.min(Math.max(-a,-l),a),p=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(u=Math.max(0,-(s*a+o)),f=u>0?a:Math.min(Math.max(-a,-l),a),p=-u*u+f*(f+2*l)+c);else f=s>0?-a:a,u=Math.max(0,-(s*f+o)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(_segCenter).addScaledVector(_segDir,f),p}intersectSphere(e,n){_vector$a.subVectors(e.center,this.origin);const i=_vector$a.dot(this.direction),r=_vector$a.dot(_vector$a)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(a=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,_vector$a)!==null}intersectTriangle(e,n,i,r,a){_edge1.subVectors(n,e),_edge2.subVectors(i,e),_normal$1.crossVectors(_edge1,_edge2);let s=this.direction.dot(_normal$1),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;_diff.subVectors(this.origin,e);const l=o*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(l<0)return null;const c=o*this.direction.dot(_edge1.cross(_diff));if(c<0||l+c>s)return null;const h=-o*_diff.dot(_normal$1);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(e,n,i,r,a,s,o,l,c,h,u,f,p,_,v,m){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,c,h,u,f,p,_,v,m)}set(e,n,i,r,a,s,o,l,c,h,u,f,p,_,v,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=a,d[5]=s,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/_v1$5.setFromMatrixColumn(e,0).length(),a=1/_v1$5.setFromMatrixColumn(e,1).length(),s=1/_v1$5.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const f=s*h,p=s*u,_=o*h,v=o*u;n[0]=l*h,n[4]=-l*u,n[8]=c,n[1]=p+_*c,n[5]=f-v*c,n[9]=-o*l,n[2]=v-f*c,n[6]=_+p*c,n[10]=s*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,_=c*h,v=c*u;n[0]=f+v*o,n[4]=_*o-p,n[8]=s*c,n[1]=s*u,n[5]=s*h,n[9]=-o,n[2]=p*o-_,n[6]=v+f*o,n[10]=s*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,_=c*h,v=c*u;n[0]=f-v*o,n[4]=-s*u,n[8]=_+p*o,n[1]=p+_*o,n[5]=s*h,n[9]=v-f*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const f=s*h,p=s*u,_=o*h,v=o*u;n[0]=l*h,n[4]=_*c-p,n[8]=f*c+v,n[1]=l*u,n[5]=v*c+f,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,p=s*c,_=o*l,v=o*c;n[0]=l*h,n[4]=v-f*u,n[8]=_*u+p,n[1]=u,n[5]=s*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*u+_,n[10]=f-v*u}else if(e.order==="XZY"){const f=s*l,p=s*c,_=o*l,v=o*c;n[0]=l*h,n[4]=-u,n[8]=c*h,n[1]=f*u+v,n[5]=s*h,n[9]=p*u-_,n[2]=_*u-p,n[6]=o*h,n[10]=v*u+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,n,i){const r=this.elements;return _z.subVectors(e,n),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(i,_z),_x.lengthSq()===0&&(Math.abs(i.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(i,_z)),_x.normalize(),_y.crossVectors(_z,_x),r[0]=_x.x,r[4]=_y.x,r[8]=_z.x,r[1]=_x.y,r[5]=_y.y,r[9]=_z.y,r[2]=_x.z,r[6]=_y.z,r[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],_=i[2],v=i[6],m=i[10],d=i[14],y=i[3],b=i[7],M=i[11],N=i[15],L=r[0],C=r[4],F=r[8],E=r[12],x=r[1],w=r[5],z=r[9],O=r[13],X=r[2],J=r[6],W=r[10],Z=r[14],V=r[3],ae=r[7],ce=r[11],Se=r[15];return a[0]=s*L+o*x+l*X+c*V,a[4]=s*C+o*w+l*J+c*ae,a[8]=s*F+o*z+l*W+c*ce,a[12]=s*E+o*O+l*Z+c*Se,a[1]=h*L+u*x+f*X+p*V,a[5]=h*C+u*w+f*J+p*ae,a[9]=h*F+u*z+f*W+p*ce,a[13]=h*E+u*O+f*Z+p*Se,a[2]=_*L+v*x+m*X+d*V,a[6]=_*C+v*w+m*J+d*ae,a[10]=_*F+v*z+m*W+d*ce,a[14]=_*E+v*O+m*Z+d*Se,a[3]=y*L+b*x+M*X+N*V,a[7]=y*C+b*w+M*J+N*ae,a[11]=y*F+b*z+M*W+N*ce,a[15]=y*E+b*O+M*Z+N*Se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],_=e[3],v=e[7],m=e[11],d=e[15];return _*(+a*l*u-r*c*u-a*o*f+i*c*f+r*o*p-i*l*p)+v*(+n*l*p-n*c*f+a*s*f-r*s*p+r*c*h-a*l*h)+m*(+n*c*u-n*o*p-a*s*u+i*s*p+a*o*h-i*c*h)+d*(-r*o*h-n*l*u+n*o*f+r*s*u-i*s*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],_=e[12],v=e[13],m=e[14],d=e[15],y=u*m*c-v*f*c+v*l*p-o*m*p-u*l*d+o*f*d,b=_*f*c-h*m*c-_*l*p+s*m*p+h*l*d-s*f*d,M=h*v*c-_*u*c+_*o*p-s*v*p-h*o*d+s*u*d,N=_*u*l-h*v*l-_*o*f+s*v*f+h*o*m-s*u*m,L=n*y+i*b+r*M+a*N;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=y*C,e[1]=(v*f*a-u*m*a-v*r*p+i*m*p+u*r*d-i*f*d)*C,e[2]=(o*m*a-v*l*a+v*r*c-i*m*c-o*r*d+i*l*d)*C,e[3]=(u*l*a-o*f*a-u*r*c+i*f*c+o*r*p-i*l*p)*C,e[4]=b*C,e[5]=(h*m*a-_*f*a+_*r*p-n*m*p-h*r*d+n*f*d)*C,e[6]=(_*l*a-s*m*a-_*r*c+n*m*c+s*r*d-n*l*d)*C,e[7]=(s*f*a-h*l*a+h*r*c-n*f*c-s*r*p+n*l*p)*C,e[8]=M*C,e[9]=(_*u*a-h*v*a-_*i*p+n*v*p+h*i*d-n*u*d)*C,e[10]=(s*v*a-_*o*a+_*i*c-n*v*c-s*i*d+n*o*d)*C,e[11]=(h*o*a-s*u*a-h*i*c+n*u*c+s*i*p-n*o*p)*C,e[12]=N*C,e[13]=(h*v*r-_*u*r+_*i*f-n*v*f-h*i*m+n*u*m)*C,e[14]=(_*o*r-s*v*r-_*i*l+n*v*l+s*i*m-n*o*m)*C,e[15]=(s*u*r-h*o*r+h*i*l-n*u*l-s*i*f+n*o*f)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*s,0,c*l-r*o,h*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,s=n._y,o=n._z,l=n._w,c=a+a,h=s+s,u=o+o,f=a*c,p=a*h,_=a*u,v=s*h,m=s*u,d=o*u,y=l*c,b=l*h,M=l*u,N=i.x,L=i.y,C=i.z;return r[0]=(1-(v+d))*N,r[1]=(p+M)*N,r[2]=(_-b)*N,r[3]=0,r[4]=(p-M)*L,r[5]=(1-(f+d))*L,r[6]=(m+y)*L,r[7]=0,r[8]=(_+b)*C,r[9]=(m-y)*C,r[10]=(1-(f+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=_v1$5.set(r[0],r[1],r[2]).length();const s=_v1$5.set(r[4],r[5],r[6]).length(),o=_v1$5.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],_m1$2.copy(this);const c=1/a,h=1/s,u=1/o;return _m1$2.elements[0]*=c,_m1$2.elements[1]*=c,_m1$2.elements[2]*=c,_m1$2.elements[4]*=h,_m1$2.elements[5]*=h,_m1$2.elements[6]*=h,_m1$2.elements[8]*=u,_m1$2.elements[9]*=u,_m1$2.elements[10]*=u,n.setFromRotationMatrix(_m1$2),i.x=a,i.y=s,i.z=o,this}makePerspective(e,n,i,r,a,s,o=WebGLCoordinateSystem){const l=this.elements,c=2*a/(n-e),h=2*a/(i-r),u=(n+e)/(n-e),f=(i+r)/(i-r);let p,_;if(o===WebGLCoordinateSystem)p=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===WebGPUCoordinateSystem)p=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,a,s,o=WebGLCoordinateSystem){const l=this.elements,c=1/(n-e),h=1/(i-r),u=1/(s-a),f=(n+e)*c,p=(i+r)*h;let _,v;if(o===WebGLCoordinateSystem)_=(s+a)*u,v=-2*u;else if(o===WebGPUCoordinateSystem)_=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const _v1$5=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$2=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(e=0,n=0,i=0,r=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(clamp(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-clamp(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(clamp(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-clamp(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _matrix$2.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix$2,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$1$1=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"},_childaddedEvent={type:"childadded",child:null},_childremovedEvent={type:"childremoved",child:null};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const e=new Vector3,n=new Euler,i=new Quaternion,r=new Vector3(1,1,1);function a(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _q1.setFromAxisAngle(e,n),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,n){return _q1.setFromAxisAngle(e,n),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,n){return _v1$4.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_m1$1$1.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_target.copy(e):_target.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1$1.lookAt(_position$3,_target,this.up):_m1$1$1.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$1$1),r&&(_m1$1$1.extractRotation(r.matrixWorld),_q1.setFromRotationMatrix(_m1$1$1),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_removedEvent),_childremovedEvent.child=e,this.dispatchEvent(_childremovedEvent),_childremovedEvent.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_m1$1$1.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$1$1.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$1$1),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,e,_scale$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),f=s(e.skeletons),p=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$2=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3,_v40=new Vector4,_v41=new Vector4,_v42=new Vector4;class Triangle{constructor(e=new Vector3,n=new Vector3,i=new Vector3){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),_v0$1.subVectors(e,n),r.cross(_v0$1);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){_v0$1.subVectors(r,n),_v1$3.subVectors(i,n),_v2$2.subVectors(e,n);const s=_v0$1.dot(_v0$1),o=_v0$1.dot(_v1$3),l=_v0$1.dot(_v2$2),c=_v1$3.dot(_v1$3),h=_v1$3.dot(_v2$2),u=s*c-o*o;if(u===0)return a.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,_=(s*h-o*l)*f;return a.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_v3$2)===null?!1:_v3$2.x>=0&&_v3$2.y>=0&&_v3$2.x+_v3$2.y<=1}static getInterpolation(e,n,i,r,a,s,o,l){return this.getBarycoord(e,n,i,r,_v3$2)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,_v3$2.x),l.addScaledVector(s,_v3$2.y),l.addScaledVector(o,_v3$2.z),l)}static getInterpolatedAttribute(e,n,i,r,a,s){return _v40.setScalar(0),_v41.setScalar(0),_v42.setScalar(0),_v40.fromBufferAttribute(e,n),_v41.fromBufferAttribute(e,i),_v42.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(_v40,a.x),s.addScaledVector(_v41,a.y),s.addScaledVector(_v42,a.z),s}static isFrontFacing(e,n,i,r){return _v0$1.subVectors(i,n),_v1$3.subVectors(e,n),_v0$1.cross(_v1$3).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Triangle.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,a){return Triangle.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let s,o;_vab.subVectors(r,i),_vac.subVectors(a,i),_vap.subVectors(e,i);const l=_vab.dot(_vap),c=_vac.dot(_vap);if(l<=0&&c<=0)return n.copy(i);_vbp.subVectors(e,r);const h=_vab.dot(_vbp),u=_vac.dot(_vbp);if(h>=0&&u<=h)return n.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),n.copy(i).addScaledVector(_vab,s);_vcp.subVectors(e,a);const p=_vab.dot(_vcp),_=_vac.dot(_vcp);if(_>=0&&p<=_)return n.copy(a);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(_vac,o);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return _vbc.subVectors(a,r),o=(u-h)/(u-h+(p-_)),n.copy(r).addScaledVector(_vbc,o);const d=1/(m+v+f);return s=v*d,o=f*d,n.copy(i).addScaledVector(_vab,s).addScaledVector(_vac,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Color{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ColorManagement.workingColorSpace){return this.r=e,this.g=n,this.b=i,ColorManagement.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ColorManagement.workingColorSpace){if(e=euclideanModulo(e,1),n=clamp(n,0,1),i=clamp(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,s=2*i-a;this.r=hue2rgb(s,a,e+1/3),this.g=hue2rgb(s,a,e),this.b=hue2rgb(s,a,e-1/3)}return ColorManagement.colorSpaceToWorking(this,r),this}setStyle(e,n=SRGBColorSpace){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=SRGBColorSpace){const i=_colorKeywords[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.workingToColorSpace(_color.copy(this),e),Math.round(clamp(_color.r*255,0,255))*65536+Math.round(clamp(_color.g*255,0,255))*256+Math.round(clamp(_color.b*255,0,255))}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ColorManagement.workingColorSpace){ColorManagement.workingToColorSpace(_color.copy(this),n);const i=_color.r,r=_color.g,a=_color.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const u=s-o;switch(c=h<=.5?u/(s+o):u/(2-s-o),s){case i:l=(r-a)/u+(r<a?6:0);break;case r:l=(a-i)/u+2;break;case a:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=ColorManagement.workingColorSpace){return ColorManagement.workingToColorSpace(_color.copy(this),n),e.r=_color.r,e.g=_color.g,e.b=_color.b,e}getStyle(e=SRGBColorSpace){ColorManagement.workingToColorSpace(_color.copy(this),e);const n=_color.r,i=_color.g,r=_color.b;return e!==SRGBColorSpace?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(_hslA),this.setHSL(_hslA.h+e,_hslA.s+n,_hslA.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(_hslA),e.getHSL(_hslB);const i=lerp(_hslA.h,_hslB.h,n),r=lerp(_hslA.s,_hslB.s,n),a=lerp(_hslA.l,_hslB.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _color=new Color;Color.NAMES=_colorKeywords;let _materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Color(0,0,0),this.blendAlpha=0,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(i.blending=this.blending),this.side!==FrontSide&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==SrcAlphaFactor&&(i.blendSrc=this.blendSrc),this.blendDst!==OneMinusSrcAlphaFactor&&(i.blendDst=this.blendDst),this.blendEquation!==AddEquation&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==LessEqualDepth&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==AlwaysStencilFunc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==KeepStencilOp&&(i.stencilFail=this.stencilFail),this.stencilZFail!==KeepStencilOp&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==KeepStencilOp&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(n){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _vector$9=new Vector3,_vector2$1=new Vector2;let _id$2=0;class BufferAttribute{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_id$2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=StaticDrawUsage,this.updateRanges=[],this.gpuType=FloatType,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_vector2$1.fromBufferAttribute(this,n),_vector2$1.applyMatrix3(e),this.setXY(n,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_vector$9.fromBufferAttribute(this,n),_vector$9.applyMatrix3(e),this.setXYZ(n,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_vector$9.fromBufferAttribute(this,n),_vector$9.applyMatrix4(e),this.setXYZ(n,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_vector$9.fromBufferAttribute(this,n),_vector$9.applyNormalMatrix(e),this.setXYZ(n,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_vector$9.fromBufferAttribute(this,n),_vector$9.transformDirection(e),this.setXYZ(n,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=denormalize(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=normalize(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=denormalize(n,this.array)),n}setX(e,n){return this.normalized&&(n=normalize(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=denormalize(n,this.array)),n}setY(e,n){return this.normalized&&(n=normalize(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=denormalize(n,this.array)),n}setZ(e,n){return this.normalized&&(n=normalize(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=denormalize(n,this.array)),n}setW(e,n){return this.normalized&&(n=normalize(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=normalize(n,this.array),i=normalize(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=normalize(n,this.array),i=normalize(i,this.array),r=normalize(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=normalize(n,this.array),i=normalize(i,this.array),r=normalize(r,this.array),a=normalize(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),e}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,n,i){super(new Float32Array(e),n,i)}}let _id$1=0;const _m1$3=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$2=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$1++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Matrix3().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1$3.makeRotationFromQuaternion(e),this.applyMatrix4(_m1$3),this}rotateX(e){return _m1$3.makeRotationX(e),this.applyMatrix4(_m1$3),this}rotateY(e){return _m1$3.makeRotationY(e),this.applyMatrix4(_m1$3),this}rotateZ(e){return _m1$3.makeRotationZ(e),this.applyMatrix4(_m1$3),this}translate(e,n,i){return _m1$3.makeTranslation(e,n,i),this.applyMatrix4(_m1$3),this}scale(e,n,i){return _m1$3.makeScale(e,n,i),this.applyMatrix4(_m1$3),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Float32BufferAttribute(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const a=e[r];n.setXYZ(r,a.x,a.y,a.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];_box$2.setFromBufferAttribute(a),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$2.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$2.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$2.min),this.boundingBox.expandByPoint(_box$2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const i=this.boundingSphere.center;if(_box$2.setFromBufferAttribute(e),n)for(let a=0,s=n.length;a<s;a++){const o=n[a];_boxMorphTargets.setFromBufferAttribute(o),this.morphTargetsRelative?(_vector$8.addVectors(_box$2.min,_boxMorphTargets.min),_box$2.expandByPoint(_vector$8),_vector$8.addVectors(_box$2.max,_boxMorphTargets.max),_box$2.expandByPoint(_vector$8)):(_box$2.expandByPoint(_boxMorphTargets.min),_box$2.expandByPoint(_boxMorphTargets.max))}_box$2.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)_vector$8.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(_vector$8));if(n)for(let a=0,s=n.length;a<s;a++){const o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_vector$8.fromBufferAttribute(o,c),l&&(_offset.fromBufferAttribute(e,c),_vector$8.add(_offset)),r=Math.max(r,i.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new Vector3,l[F]=new Vector3;const c=new Vector3,h=new Vector3,u=new Vector3,f=new Vector2,p=new Vector2,_=new Vector2,v=new Vector3,m=new Vector3;function d(F,E,x){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,x),f.fromBufferAttribute(a,F),p.fromBufferAttribute(a,E),_.fromBufferAttribute(a,x),h.sub(c),u.sub(c),p.sub(f),_.sub(f);const w=1/(p.x*_.y-_.x*p.y);isFinite(w)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(w),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(w),o[F].add(v),o[E].add(v),o[x].add(v),l[F].add(m),l[E].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let F=0,E=y.length;F<E;++F){const x=y[F],w=x.start,z=x.count;for(let O=w,X=w+z;O<X;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const b=new Vector3,M=new Vector3,N=new Vector3,L=new Vector3;function C(F){N.fromBufferAttribute(r,F),L.copy(N);const E=o[F];b.copy(E),b.sub(N.multiplyScalar(N.dot(E))).normalize(),M.crossVectors(L,E);const w=M.dot(l[F])<0?-1:1;s.setXYZW(F,b.x,b.y,b.z,w)}for(let F=0,E=y.length;F<E;++F){const x=y[F],w=x.start,z=x.count;for(let O=w,X=w+z;O<X;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new BufferAttribute(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new Vector3,a=new Vector3,s=new Vector3,o=new Vector3,l=new Vector3,c=new Vector3,h=new Vector3,u=new Vector3;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,_),a.fromBufferAttribute(n,v),s.fromBufferAttribute(n,m),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)_vector$8.fromBufferAttribute(e,n),_vector$8.normalize(),e.setXYZ(n,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let d=0;d<h;d++)f[_++]=c[p++]}return new BufferAttribute(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new BufferGeometry,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$3=new Matrix4,_ray$3=new Ray,_sphere$6=new Sphere,_sphereHitAt=new Vector3,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,n=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){_morphA.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(_tempA.fromBufferAttribute(u,e),s?_morphA.addScaledVector(_tempA,h):_morphA.addScaledVector(_tempA.sub(n),h))}n.add(_morphA)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_sphere$6.copy(i.boundingSphere),_sphere$6.applyMatrix4(a),_ray$3.copy(e.ray).recast(e.near),!(_sphere$6.containsPoint(_ray$3.origin)===!1&&(_ray$3.intersectSphere(_sphere$6,_sphereHitAt)===null||_ray$3.origin.distanceToSquared(_sphereHitAt)>(e.far-e.near)**2))&&(_inverseMatrix$3.copy(a).invert(),_ray$3.copy(e.ray).applyMatrix4(_inverseMatrix$3),!(i.boundingBox!==null&&_ray$3.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_ray$3)))}_computeIntersections(e,n,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const m=f[_],d=s[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,N=b;M<N;M+=3){const L=o.getX(M),C=o.getX(M+1),F=o.getX(M+2);r=checkGeometryIntersection(this,d,e,i,c,h,u,L,C,F),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const y=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);r=checkGeometryIntersection(this,s,e,i,c,h,u,y,b,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,v=f.length;_<v;_++){const m=f[_],d=s[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,N=b;M<N;M+=3){const L=M,C=M+1,F=M+2;r=checkGeometryIntersection(this,d,e,i,c,h,u,L,C,F),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const y=m,b=m+1,M=m+2;r=checkGeometryIntersection(this,s,e,i,c,h,u,y,b,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function checkIntersection$1(t,e,n,i,r,a,s,o){let l;if(e.side===BackSide?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===FrontSide,o),l===null)return null;_intersectionPointWorld.copy(o),_intersectionPointWorld.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(_intersectionPointWorld);return c<n.near||c>n.far?null:{distance:c,point:_intersectionPointWorld.clone(),object:t}}function checkGeometryIntersection(t,e,n,i,r,a,s,o,l,c){t.getVertexPosition(o,_vA$1),t.getVertexPosition(l,_vB$1),t.getVertexPosition(c,_vC$1);const h=checkIntersection$1(t,e,n,i,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(h){const u=new Vector3;Triangle.getBarycoord(_intersectionPoint,_vA$1,_vB$1,_vC$1,u),r&&(h.uv=Triangle.getInterpolatedAttribute(r,o,l,c,u,new Vector2)),a&&(h.uv1=Triangle.getInterpolatedAttribute(a,o,l,c,u,new Vector2)),s&&(h.normal=Triangle.getInterpolatedAttribute(s,o,l,c,u,new Vector3),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,f.normal),h.face=f,h.barycoord=u}return h}class BoxGeometry extends BufferGeometry{constructor(e=1,n=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],u=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,s,a,0),_("z","y","x",1,-1,i,n,-e,s,a,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,a,4),_("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Float32BufferAttribute(c,3)),this.setAttribute("normal",new Float32BufferAttribute(h,3)),this.setAttribute("uv",new Float32BufferAttribute(u,2));function _(v,m,d,y,b,M,N,L,C,F,E){const x=M/C,w=N/F,z=M/2,O=N/2,X=L/2,J=C+1,W=F+1;let Z=0,V=0;const ae=new Vector3;for(let ce=0;ce<W;ce++){const Se=ce*w-O;for(let Pe=0;Pe<J;Pe++){const Ge=Pe*x-z;ae[v]=Ge*y,ae[m]=Se*b,ae[d]=X,c.push(ae.x,ae.y,ae.z),ae[v]=0,ae[m]=0,ae[d]=L>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(Pe/C),u.push(1-ce/F),Z+=1}}for(let ce=0;ce<F;ce++)for(let Se=0;Se<C;Se++){const Pe=f+Se+J*ce,Ge=f+Se+J*(ce+1),H=f+(Se+1)+J*(ce+1),ee=f+(Se+1)+J*ce;l.push(Pe,Ge,ee),l.push(Ge,H,ee),V+=6}o.addGroup(p,V,E),p+=V,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cloneUniforms(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function mergeUniforms(t){const e={};for(let n=0;n<t.length;n++){const i=cloneUniforms(t[n]);for(const r in i)e[r]=i[r]}return e}function cloneUniformsGroups(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function getUnlitUniformColorSpace(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ColorManagement.workingColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4,this.coordinateSystem=WebGLCoordinateSystem}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _v3$1=new Vector3,_minTarget=new Vector2,_maxTarget=new Vector2;class PerspectiveCamera extends Camera{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){_v3$1.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z),_v3$1.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z)}getViewSize(e,n){return this.getViewBounds(e,_minTarget,_maxTarget),n.subVectors(_maxTarget,_minTarget)}setViewOffset(e,n,i,r,a,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new PerspectiveCamera(fov,aspect,e,n);r.layers=this.layers,this.add(r);const a=new PerspectiveCamera(fov,aspect,e,n);a.layers=this.layers,this.add(a);const s=new PerspectiveCamera(fov,aspect,e,n);s.layers=this.layers,this.add(s);const o=new PerspectiveCamera(fov,aspect,e,n);o.layers=this.layers,this.add(o);const l=new PerspectiveCamera(fov,aspect,e,n);l.layers=this.layers,this.add(l);const c=new PerspectiveCamera(fov,aspect,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,s,o,l]=n;for(const c of n)this.remove(c);if(e===WebGLCoordinateSystem)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===WebGPUCoordinateSystem)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,a),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(u,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(e=[],n=CubeReflectionMapping,i,r,a,s,o,l,c,h){super(e,n,i,r,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new CubeTexture(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new BoxGeometry(5,5,5),a=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:BackSide,blending:NoBlending});a.uniforms.tEquirect.value=n;const s=new Mesh(r,a),o=n.minFilter;return n.minFilter===LinearMipmapLinearFilter&&(n.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(a)}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Group;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Euler,this.environmentIntensity=1,this.environmentRotation=new Euler,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=_vector1.subVectors(i,n).cross(_vector2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(_vector1),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_normalMatrix.getNormalMatrix(e),r=this.coplanarPoint(_vector1).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$3=new Sphere,_defaultSpriteCenter=new Vector2(.5,.5),_vector$6=new Vector3;class Frustum{constructor(e=new Plane,n=new Plane,i=new Plane,r=new Plane,a=new Plane,s=new Plane){this.planes=[e,n,i,r,a,s]}set(e,n,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=WebGLCoordinateSystem){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],p=r[8],_=r[9],v=r[10],m=r[11],d=r[12],y=r[13],b=r[14],M=r[15];if(i[0].setComponents(l-a,f-c,m-p,M-d).normalize(),i[1].setComponents(l+a,f+c,m+p,M+d).normalize(),i[2].setComponents(l+s,f+h,m+_,M+y).normalize(),i[3].setComponents(l-s,f-h,m-_,M-y).normalize(),i[4].setComponents(l-o,f-u,m-v,M-b).normalize(),n===WebGLCoordinateSystem)i[5].setComponents(l+o,f+u,m+v,M+b).normalize();else if(n===WebGPUCoordinateSystem)i[5].setComponents(o,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_sphere$3.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_sphere$3.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_sphere$3)}intersectsSprite(e){_sphere$3.center.set(0,0,0);const n=_defaultSpriteCenter.distanceTo(e.center);return _sphere$3.radius=.7071067811865476+n,_sphere$3.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$3)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(_vector$6.x=r.normal.x>0?e.max.x:e.min.x,_vector$6.y=r.normal.y>0?e.max.y:e.min.y,_vector$6.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_vector$6)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class DepthTexture extends Texture{constructor(e,n,i=UnsignedIntType,r,a,s,o=NearestFilter,l=NearestFilter,c,h=DepthFormat,u=1){if(h!==DepthFormat&&h!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:u};super(f,r,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Source(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class PlaneGeometry extends BufferGeometry{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,s=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,f=n/l,p=[],_=[],v=[],m=[];for(let d=0;d<h;d++){const y=d*f-s;for(let b=0;b<c;b++){const M=b*u-a;_.push(M,-y,0),v.push(0,0,1),m.push(b/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const b=y+c*d,M=y+c*(d+1),N=y+1+c*(d+1),L=y+1+c*d;p.push(b,M,L),p.push(M,N,L)}this.setIndex(p),this.setAttribute("position",new Float32BufferAttribute(_,3)),this.setAttribute("normal",new Float32BufferAttribute(v,3)),this.setAttribute("uv",new Float32BufferAttribute(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}class SphereGeometry extends BufferGeometry{constructor(e=1,n=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const h=[],u=new Vector3,f=new Vector3,p=[],_=[],v=[],m=[];for(let d=0;d<=i;d++){const y=[],b=d/i;let M=0;d===0&&s===0?M=.5/n:d===i&&l===Math.PI&&(M=-.5/n);for(let N=0;N<=n;N++){const L=N/n;u.x=-e*Math.cos(r+L*a)*Math.sin(s+b*o),u.y=e*Math.cos(s+b*o),u.z=e*Math.sin(r+L*a)*Math.sin(s+b*o),_.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(L+M,1-b),y.push(c++)}h.push(y)}for(let d=0;d<i;d++)for(let y=0;y<n;y++){const b=h[d][y+1],M=h[d][y],N=h[d+1][y],L=h[d+1][y+1];(d!==0||s>0)&&p.push(b,M,L),(d!==i-1||l<Math.PI)&&p.push(M,N,L)}this.setIndex(p),this.setAttribute("position",new Float32BufferAttribute(_,3)),this.setAttribute("normal",new Float32BufferAttribute(v,3)),this.setAttribute("uv",new Float32BufferAttribute(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new SphereGeometry(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class MeshStandardMaterial extends Material{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Color(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class MeshPhongMaterial extends Material{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Color(16777215),this.specular=new Color(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cache={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class LoadingManager{constructor(e,n,i){const r=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){o++,a===!1&&r.onStart!==void 0&&r.onStart(h,s,o),a=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const DefaultLoadingManager=new LoadingManager;class Loader{constructor(e){this.manager=e!==void 0?e:DefaultLoadingManager,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,a){i.load(e,r,n,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Loader.DEFAULT_MATERIAL_NAME="__DEFAULT";const _loading=new WeakMap;class ImageLoader extends Loader{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Cache.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)a.manager.itemStart(e),setTimeout(function(){n&&n(s),a.manager.itemEnd(e)},0);else{let u=_loading.get(s);u===void 0&&(u=[],_loading.set(s,u)),u.push({onLoad:n,onError:r})}return s}const o=createElementNS("img");function l(){h(),n&&n(this);const u=_loading.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onLoad&&p.onLoad(this)}_loading.delete(this),a.manager.itemEnd(e)}function c(u){h(),r&&r(u),Cache.remove(`image:${e}`);const f=_loading.get(this)||[];for(let p=0;p<f.length;p++){const _=f[p];_.onError&&_.onError(u)}_loading.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Cache.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}}class TextureLoader extends Loader{constructor(e){super(e)}load(e,n,i,r){const a=new Texture,s=new ImageLoader(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,n!==void 0&&n(a)},i,r),a}}class Light extends Object3D{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Color(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const _projScreenMatrix$1=new Matrix4,_lightPositionWorld$1=new Vector3,_lookTarget$1=new Vector3;class LightShadow{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vector2(512,512),this.mapType=UnsignedByteType,this.map=null,this.mapPass=null,this.matrix=new Matrix4,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Frustum,this._frameExtents=new Vector2(1,1),this._viewportCount=1,this._viewports=[new Vector4(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;_lightPositionWorld$1.setFromMatrixPosition(e.matrixWorld),n.position.copy(_lightPositionWorld$1),_lookTarget$1.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(_lookTarget$1),n.updateMatrixWorld(),_projScreenMatrix$1.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix$1),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_projScreenMatrix$1)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _projScreenMatrix=new Matrix4,_lightPositionWorld=new Vector3,_lookTarget=new Vector3;class PointLightShadow extends LightShadow{constructor(){super(new PerspectiveCamera(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Vector2(4,2),this._viewportCount=6,this._viewports=[new Vector4(2,1,1,1),new Vector4(0,1,1,1),new Vector4(3,1,1,1),new Vector4(1,1,1,1),new Vector4(3,0,1,1),new Vector4(1,0,1,1)],this._cubeDirections=[new Vector3(1,0,0),new Vector3(-1,0,0),new Vector3(0,0,1),new Vector3(0,0,-1),new Vector3(0,1,0),new Vector3(0,-1,0)],this._cubeUps=[new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,0,1),new Vector3(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),_lightPositionWorld.setFromMatrixPosition(e.matrixWorld),i.position.copy(_lightPositionWorld),_lookTarget.copy(i.position),_lookTarget.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(_lookTarget),i.updateMatrixWorld(),r.makeTranslation(-_lightPositionWorld.x,-_lightPositionWorld.y,-_lightPositionWorld.z),_projScreenMatrix.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix)}}class PointLight extends Light{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new PointLightShadow}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class OrthographicCamera extends Camera{constructor(e=-1,n=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class AmbientLight extends Light{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const _matrix=new Matrix4;class Raycaster{constructor(e,n,i=0,r=1/0){this.ray=new Ray(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Layers,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return _matrix.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_matrix),this}intersectObject(e,n=!0,i=[]){return intersect(e,this,i,n),i.sort(ascSort),i}intersectObjects(e,n=!0,i=[]){for(let r=0,a=e.length;r<a;r++)intersect(e[r],this,i,n);return i.sort(ascSort),i}}function ascSort(t,e){return t.distance-e.distance}function intersect(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const a=t.children;for(let s=0,o=a.length;s<o;s++)intersect(a[s],e,n,!0)}}function getByteLength(t,e,n,i){const r=getTextureTypeByteLength(i);switch(n){case AlphaFormat:return t*e;case RedFormat:return t*e/r.components*r.byteLength;case RedIntegerFormat:return t*e/r.components*r.byteLength;case RGFormat:return t*e*2/r.components*r.byteLength;case RGIntegerFormat:return t*e*2/r.components*r.byteLength;case RGBFormat:return t*e*3/r.components*r.byteLength;case RGBAFormat:return t*e*4/r.components*r.byteLength;case RGBAIntegerFormat:return t*e*4/r.components*r.byteLength;case RGB_S3TC_DXT1_Format:case RGBA_S3TC_DXT1_Format:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case RGBA_S3TC_DXT3_Format:case RGBA_S3TC_DXT5_Format:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case RGB_PVRTC_2BPPV1_Format:case RGBA_PVRTC_2BPPV1_Format:return Math.max(t,16)*Math.max(e,8)/4;case RGB_PVRTC_4BPPV1_Format:case RGBA_PVRTC_4BPPV1_Format:return Math.max(t,8)*Math.max(e,8)/2;case RGB_ETC1_Format:case RGB_ETC2_Format:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case RGBA_ETC2_EAC_Format:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case RGBA_ASTC_4x4_Format:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case RGBA_ASTC_5x4_Format:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case RGBA_ASTC_5x5_Format:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case RGBA_ASTC_6x5_Format:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case RGBA_ASTC_6x6_Format:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case RGBA_ASTC_8x5_Format:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case RGBA_ASTC_8x6_Format:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case RGBA_ASTC_8x8_Format:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case RGBA_ASTC_10x5_Format:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case RGBA_ASTC_10x6_Format:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case RGBA_ASTC_10x8_Format:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case RGBA_ASTC_10x10_Format:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case RGBA_ASTC_12x10_Format:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case RGBA_ASTC_12x12_Format:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case RGBA_BPTC_Format:case RGB_BPTC_SIGNED_Format:case RGB_BPTC_UNSIGNED_Format:return Math.ceil(t/4)*Math.ceil(e/4)*16;case RED_RGTC1_Format:case SIGNED_RED_RGTC1_Format:return Math.ceil(t/4)*Math.ceil(e/4)*8;case RED_GREEN_RGTC2_Format:case SIGNED_RED_GREEN_RGTC2_Format:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function getTextureTypeByteLength(t){switch(t){case UnsignedByteType:case ByteType:return{byteLength:1,components:1};case UnsignedShortType:case ShortType:case HalfFloatType:return{byteLength:2,components:1};case UnsignedShort4444Type:case UnsignedShort5551Type:return{byteLength:2,components:4};case UnsignedIntType:case IntType:case FloatType:return{byteLength:4,components:1};case UnsignedInt5999Type:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function WebGLAnimation(){let t=null,e=!1,n=null,i=null;function r(a,s){n(a,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function WebGLAttributes(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(t.bindBuffer(c,o),u.length===0)t.bufferSubData(c,0,h);else{u.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<u.length;p++){const _=u[f],v=u[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,_=u.length;p<_;p++){const v=u[p];t.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var alphahash_fragment=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,envmap_physical_pars_fragment=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$e=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fragment$e=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vertex$d=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fragment$d=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$b=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$b=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$a=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fragment$a=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$9=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$9=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$8=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fragment$8=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$7=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fragment$7=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vertex$6=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$6=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fragment$5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fragment$3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vertex$1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ShaderChunk={alphahash_fragment,alphahash_pars_fragment,alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,batching_pars_vertex,batching_vertex,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,colorspace_fragment,colorspace_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphinstance_vertex,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,opaque_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},envMapRotation:{value:new Matrix3},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Matrix3}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3},anisotropyVector:{value:new Vector2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0},_e1$1=new Euler,_m1$1=new Matrix4;function WebGLBackground(t,e,n,i,r,a,s){const o=new Color(0);let l=a===!0?0:1,c,h,u=null,f=0,p=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?n:e).get(M)),M}function v(b){let M=!1;const N=_(b);N===null?d(o,l):N&&N.isColor&&(d(N,1),M=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(b,M){const N=_(M);N&&(N.isCubeTexture||N.mapping===CubeUVReflectionMapping)?(h===void 0&&(h=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),_e1$1.copy(M.backgroundRotation),_e1$1.x*=-1,_e1$1.y*=-1,_e1$1.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(_e1$1.y*=-1,_e1$1.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_m1$1.makeRotationFromEuler(_e1$1)),h.material.toneMapped=ColorManagement.getTransfer(N.colorSpace)!==SRGBTransfer,(u!==N||f!==N.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,u=N,f=N.version,p=t.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ColorManagement.getTransfer(N.colorSpace)!==SRGBTransfer,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(u!==N||f!==N.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,u=N,f=N.version,p=t.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,M){b.getRGB(_rgb,getUnlitUniformColorSpace(t)),i.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,M,s)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(o,l)},render:v,addToRenderList:m,dispose:y}}function WebGLBindingStates(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let a=r,s=!1;function o(x,w,z,O,X){let J=!1;const W=u(O,z,w);a!==W&&(a=W,c(a.object)),J=p(x,O,z,X),J&&_(x,O,z,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(J||s)&&(s=!1,M(x,w,z,O),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function h(x){return t.deleteVertexArray(x)}function u(x,w,z){const O=z.wireframe===!0;let X=i[x.id];X===void 0&&(X={},i[x.id]=X);let J=X[w.id];J===void 0&&(J={},X[w.id]=J);let W=J[O];return W===void 0&&(W=f(l()),J[O]=W),W}function f(x){const w=[],z=[],O=[];for(let X=0;X<n;X++)w[X]=0,z[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:z,attributeDivisors:O,object:x,attributes:{},index:null}}function p(x,w,z,O){const X=a.attributes,J=w.attributes;let W=0;const Z=z.getAttributes();for(const V in Z)if(Z[V].location>=0){const ce=X[V];let Se=J[V];if(Se===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(Se=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(Se=x.instanceColor)),ce===void 0||ce.attribute!==Se||Se&&ce.data!==Se.data)return!0;W++}return a.attributesNum!==W||a.index!==O}function _(x,w,z,O){const X={},J=w.attributes;let W=0;const Z=z.getAttributes();for(const V in Z)if(Z[V].location>=0){let ce=J[V];ce===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor));const Se={};Se.attribute=ce,ce&&ce.data&&(Se.data=ce.data),X[V]=Se,W++}a.attributes=X,a.attributesNum=W,a.index=O}function v(){const x=a.newAttributes;for(let w=0,z=x.length;w<z;w++)x[w]=0}function m(x){d(x,0)}function d(x,w){const z=a.newAttributes,O=a.enabledAttributes,X=a.attributeDivisors;z[x]=1,O[x]===0&&(t.enableVertexAttribArray(x),O[x]=1),X[x]!==w&&(t.vertexAttribDivisor(x,w),X[x]=w)}function y(){const x=a.newAttributes,w=a.enabledAttributes;for(let z=0,O=w.length;z<O;z++)w[z]!==x[z]&&(t.disableVertexAttribArray(z),w[z]=0)}function b(x,w,z,O,X,J,W){W===!0?t.vertexAttribIPointer(x,w,z,X,J):t.vertexAttribPointer(x,w,z,O,X,J)}function M(x,w,z,O){v();const X=O.attributes,J=z.getAttributes(),W=w.defaultAttributeValues;for(const Z in J){const V=J[Z];if(V.location>=0){let ae=X[Z];if(ae===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),ae!==void 0){const ce=ae.normalized,Se=ae.itemSize,Pe=e.get(ae);if(Pe===void 0)continue;const Ge=Pe.buffer,H=Pe.type,ee=Pe.bytesPerElement,ge=H===t.INT||H===t.UNSIGNED_INT||ae.gpuType===IntType;if(ae.isInterleavedBufferAttribute){const se=ae.data,ve=se.stride,Ue=ae.offset;if(se.isInstancedInterleavedBuffer){for(let be=0;be<V.locationSize;be++)d(V.location+be,se.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let be=0;be<V.locationSize;be++)m(V.location+be);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let be=0;be<V.locationSize;be++)b(V.location+be,Se/V.locationSize,H,ce,ve*ee,(Ue+Se/V.locationSize*be)*ee,ge)}else{if(ae.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)d(V.location+se,ae.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let se=0;se<V.locationSize;se++)m(V.location+se);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let se=0;se<V.locationSize;se++)b(V.location+se,Se/V.locationSize,H,ce,Se*ee,Se/V.locationSize*se*ee,ge)}}else if(W!==void 0){const ce=W[Z];if(ce!==void 0)switch(ce.length){case 2:t.vertexAttrib2fv(V.location,ce);break;case 3:t.vertexAttrib3fv(V.location,ce);break;case 4:t.vertexAttrib4fv(V.location,ce);break;default:t.vertexAttrib1fv(V.location,ce)}}}}y()}function N(){F();for(const x in i){const w=i[x];for(const z in w){const O=w[z];for(const X in O)h(O[X].object),delete O[X];delete w[z]}delete i[x]}}function L(x){if(i[x.id]===void 0)return;const w=i[x.id];for(const z in w){const O=w[z];for(const X in O)h(O[X].object),delete O[X];delete w[z]}delete i[x.id]}function C(x){for(const w in i){const z=i[w];if(z[x.id]===void 0)continue;const O=z[x.id];for(const X in O)h(O[X].object),delete O[X];delete z[x.id]}}function F(){E(),s=!0,a!==r&&(a=r,c(a.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:E,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function WebGLBufferRenderer(t,e,n){let i;function r(c){i=c}function a(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function s(c,h,u){u!==0&&(t.drawArraysInstanced(i,c,h,u),n.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];n.update(p,i,1)}function l(c,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)s(c[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v]*f[v];n.update(_,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function WebGLCapabilities(t,e,n,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==RGBAFormat&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const F=C===HalfFloatType&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==UnsignedByteType&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==FloatType&&!F)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:N,maxSamples:L}}function WebGLClipping(t){const e=this;let n=null,i=0,r=!1,a=!1;const s=new Plane,o=new Matrix3,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||r;return r=f,i=u.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,f){n=h(u,f,0)},this.setState=function(u,f,p){const _=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=t.get(u);if(!r||_===null||_.length===0||a&&!m)a?h(null):c();else{const y=a?0:i,b=y*4;let M=d.clippingState||null;l.value=M,M=h(_,f,b,p);for(let N=0;N!==b;++N)M[N]=n[N];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,_){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const d=p+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,M=p;b!==v;++b,M+=4)s.copy(u[b]).applyMatrix4(y,o),s.normal.toArray(m,M),m[M+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function WebGLCubeMaps(t){let e=new WeakMap;function n(s,o){return o===EquirectangularReflectionMapping?s.mapping=CubeReflectionMapping:o===EquirectangularRefractionMapping&&(s.mapping=CubeRefractionMapping),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===EquirectangularReflectionMapping||o===EquirectangularRefractionMapping)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new WebGLCubeRenderTarget(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null,_oldActiveCubeFace=0,_oldActiveMipmapLevel=0,_oldXrEnabled=!1;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(-PHI,INV_PHI,0),new Vector3(PHI,INV_PHI,0),new Vector3(-INV_PHI,0,PHI),new Vector3(INV_PHI,0,PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(0,PHI,INV_PHI),new Vector3(-1,1,-1),new Vector3(1,1,-1),new Vector3(-1,1,1),new Vector3(1,1,1)],_origin=new Vector3;class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,a={}){const{size:s=256,position:o=_origin}=a;_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget,_oldActiveCubeFace,_oldActiveMipmapLevel),this._renderer.xr.enabled=_oldXrEnabled,e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,colorSpace:LinearSRGBColorSpace,depthBuffer:!1},r=_createRenderTarget(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(a)),this._blurMaterial=_getBlurShader(a,e,n)}return r}_compileMaterial(e){const n=new Mesh(this._lodPlanes[0],e);this._renderer.compile(n,_flatCamera)}_sceneToCubeUV(e,n,i,r,a){const l=new PerspectiveCamera(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(_clearColor),u.toneMapping=NoToneMapping,u.autoClear=!1;const _=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),v=new Mesh(new BoxGeometry,_);let m=!1;const d=e.background;d?d.isColor&&(_.color.copy(d),e.background=null,m=!0):(_.color.copy(_clearColor),m=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[y],a.y,a.z)):b===1?(l.up.set(0,0,c[y]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[y],a.z)):(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[y]));const M=this._cubeSize;_setViewport(r,b*M,y>2?M:0,M,M),u.setRenderTarget(r),m&&u.render(v,l),u.render(e,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=d}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Mesh(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;_setViewport(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,_flatCamera)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=_axisDirections[(r-a-1)%_axisDirections.length];this._blur(e,a-1,a,s,o)}n.autoClear=i}_blur(e,n,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Mesh(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*MAX_SAMPLES-1),v=a/_,m=isFinite(a)?1+Math.floor(h*v):MAX_SAMPLES;m>MAX_SAMPLES&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${MAX_SAMPLES}`);const d=[];let y=0;for(let C=0;C<MAX_SAMPLES;++C){const F=C/v,E=Math.exp(-F*F/2);d.push(E),C===0?y+=E:C<m&&(y+=2*E)}for(let C=0;C<d.length;C++)d[C]=d[C]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;const M=this._sizeLods[r],N=3*M*(r>b-LOD_MIN?r-b+LOD_MIN:0),L=4*(this._cubeSize-M);_setViewport(n,N,L,3*M,2*M),l.setRenderTarget(n),l.render(u,_flatCamera)}}function _createPlanes(t){const e=[],n=[],i=[];let r=t;const a=t-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);n.push(o);let l=1/o;s>t-LOD_MIN?l=EXTRA_LOD_SIGMA[s-t+LOD_MIN-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,v=3,m=2,d=1,y=new Float32Array(v*_*p),b=new Float32Array(m*_*p),M=new Float32Array(d*_*p);for(let L=0;L<p;L++){const C=L%3*2/3-1,F=L>2?0:-1,E=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];y.set(E,v*_*L),b.set(f,m*_*L);const x=[L,L,L,L,L,L];M.set(x,d*_*L)}const N=new BufferGeometry;N.setAttribute("position",new BufferAttribute(y,v)),N.setAttribute("uv",new BufferAttribute(b,m)),N.setAttribute("faceIndex",new BufferAttribute(M,d)),e.push(N),r>LOD_MIN&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _createRenderTarget(t,e,n){const i=new WebGLRenderTarget(t,e,n);return i.texture.mapping=CubeUVReflectionMapping,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _setViewport(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function _getBlurShader(t,e,n){const i=new Float32Array(MAX_SAMPLES),r=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WebGLCubeUVMaps(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===EquirectangularReflectionMapping||l===EquirectangularRefractionMapping,h=l===CubeReflectionMapping||l===CubeRefractionMapping;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new PMREMGenerator(t)),u=c?n.fromEquirectangular(o,u):n.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new PMREMGenerator(t)),u=c?n.fromEquirectangular(o):n.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function WebGLExtensions(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&warnOnce("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function WebGLGeometries(t,e,n,i){const r={},a=new WeakMap;function s(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",s),delete r[f.id];const p=a.get(f);p&&(e.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,_=u.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let b=0,M=y.length;b<M;b+=3){const N=y[b+0],L=y[b+1],C=y[b+2];f.push(N,L,L,C,C,N)}}else if(_!==void 0){const y=_.array;v=_.version;for(let b=0,M=y.length/3-1;b<M;b+=3){const N=b+0,L=b+1,C=b+2;f.push(N,L,L,C,C,N)}}else return;const m=new(arrayNeedsUint32(f)?Uint32BufferAttribute:Uint16BufferAttribute)(f,1);m.version=v;const d=a.get(u);d&&e.remove(d),a.set(u,m)}function h(u){const f=a.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function WebGLIndexedBufferRenderer(t,e,n){let i;function r(f){i=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function l(f,p){t.drawElements(i,p,a,f*s),n.update(p,i,1)}function c(f,p,_){_!==0&&(t.drawElementsInstanced(i,p,a,f*s,_),n.update(p,i,_))}function h(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];n.update(m,i,1)}function u(f,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/s,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,f,0,v,0,_);let d=0;for(let y=0;y<_;y++)d+=p[y]*v[y];n.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function WebGLInfo(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(a/3);break;case t.LINES:n.lines+=o*(a/2);break;case t.LINE_STRIP:n.lines+=o*(a-1);break;case t.LINE_LOOP:n.lines+=o*a;break;case t.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function WebGLMorphtargets(t,e,n){const i=new WeakMap,r=new Vector4;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let x=function(){F.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let N=o.attributes.position.count*M,L=1;N>e.maxTextureSize&&(L=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const C=new Float32Array(N*L*4*u),F=new DataArrayTexture(C,N,L,u);F.type=FloatType,F.needsUpdate=!0;const E=M*4;for(let w=0;w<u;w++){const z=d[w],O=y[w],X=b[w],J=N*L*4*w;for(let W=0;W<z.count;W++){const Z=W*E;_===!0&&(r.fromBufferAttribute(z,W),C[J+Z+0]=r.x,C[J+Z+1]=r.y,C[J+Z+2]=r.z,C[J+Z+3]=0),v===!0&&(r.fromBufferAttribute(O,W),C[J+Z+4]=r.x,C[J+Z+5]=r.y,C[J+Z+6]=r.z,C[J+Z+7]=0),m===!0&&(r.fromBufferAttribute(X,W),C[J+Z+8]=r.x,C[J+Z+9]=r.y,C[J+Z+10]=r.z,C[J+Z+11]=X.itemSize===4?r.w:1)}}f={count:u,texture:F,size:new Vector2(N,L)},i.set(o,f),o.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:a}}function WebGLObjects(t,e,n,i){let r=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:s}}const emptyTexture=new Texture,emptyShadowTexture=new DepthTexture(1,1),emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=arrayCacheF32[r];if(a===void 0&&(a=new Float32Array(r),arrayCacheF32[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(a,o)}return a}function arraysEqual(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function copyArray(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function allocTexUnits(t,e){let n=arrayCacheI32[e];n===void 0&&(n=new Int32Array(e),arrayCacheI32[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function setValueV1f(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function setValueV2f(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(arraysEqual(n,e))return;t.uniform2fv(this.addr,e),copyArray(n,e)}}function setValueV3f(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(arraysEqual(n,e))return;t.uniform3fv(this.addr,e),copyArray(n,e)}}function setValueV4f(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(arraysEqual(n,e))return;t.uniform4fv(this.addr,e),copyArray(n,e)}}function setValueM2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),copyArray(n,e)}else{if(arraysEqual(n,i))return;mat2array.set(i),t.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(n,i)}}function setValueM3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),copyArray(n,e)}else{if(arraysEqual(n,i))return;mat3array.set(i),t.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(n,i)}}function setValueM4(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),copyArray(n,e)}else{if(arraysEqual(n,i))return;mat4array.set(i),t.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(n,i)}}function setValueV1i(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function setValueV2i(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(arraysEqual(n,e))return;t.uniform2iv(this.addr,e),copyArray(n,e)}}function setValueV3i(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(arraysEqual(n,e))return;t.uniform3iv(this.addr,e),copyArray(n,e)}}function setValueV4i(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(arraysEqual(n,e))return;t.uniform4iv(this.addr,e),copyArray(n,e)}}function setValueV1ui(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function setValueV2ui(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(arraysEqual(n,e))return;t.uniform2uiv(this.addr,e),copyArray(n,e)}}function setValueV3ui(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(arraysEqual(n,e))return;t.uniform3uiv(this.addr,e),copyArray(n,e)}}function setValueV4ui(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(arraysEqual(n,e))return;t.uniform4uiv(this.addr,e),copyArray(n,e)}}function setValueT1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let a;this.type===t.SAMPLER_2D_SHADOW?(emptyShadowTexture.compareFunction=LessEqualCompare,a=emptyShadowTexture):a=emptyTexture,n.setTexture2D(e||a,r)}function setValueT3D1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||empty3dTexture,r)}function setValueT6(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||emptyCubeTexture,r)}function setValueT2DArray1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||emptyArrayTexture,r)}function getSingularSetter(t){switch(t){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(t,e){t.uniform1fv(this.addr,e)}function setValueV2fArray(t,e){const n=flatten(e,this.size,2);t.uniform2fv(this.addr,n)}function setValueV3fArray(t,e){const n=flatten(e,this.size,3);t.uniform3fv(this.addr,n)}function setValueV4fArray(t,e){const n=flatten(e,this.size,4);t.uniform4fv(this.addr,n)}function setValueM2Array(t,e){const n=flatten(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function setValueM3Array(t,e){const n=flatten(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function setValueM4Array(t,e){const n=flatten(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function setValueV1iArray(t,e){t.uniform1iv(this.addr,e)}function setValueV2iArray(t,e){t.uniform2iv(this.addr,e)}function setValueV3iArray(t,e){t.uniform3iv(this.addr,e)}function setValueV4iArray(t,e){t.uniform4iv(this.addr,e)}function setValueV1uiArray(t,e){t.uniform1uiv(this.addr,e)}function setValueV2uiArray(t,e){t.uniform2uiv(this.addr,e)}function setValueV3uiArray(t,e){t.uniform3uiv(this.addr,e)}function setValueV4uiArray(t,e){t.uniform4uiv(this.addr,e)}function setValueT1Array(t,e,n){const i=this.cache,r=e.length,a=allocTexUnits(n,r);arraysEqual(i,a)||(t.uniform1iv(this.addr,a),copyArray(i,a));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||emptyTexture,a[s])}function setValueT3DArray(t,e,n){const i=this.cache,r=e.length,a=allocTexUnits(n,r);arraysEqual(i,a)||(t.uniform1iv(this.addr,a),copyArray(i,a));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||empty3dTexture,a[s])}function setValueT6Array(t,e,n){const i=this.cache,r=e.length,a=allocTexUnits(n,r);arraysEqual(i,a)||(t.uniform1iv(this.addr,a),copyArray(i,a));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||emptyCubeTexture,a[s])}function setValueT2DArrayArray(t,e,n){const i=this.cache,r=e.length,a=allocTexUnits(n,r);arraysEqual(i,a)||(t.uniform1iv(this.addr,a),copyArray(i,a));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||emptyArrayTexture,a[s])}function getPureArraySetter(t){switch(t){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=getSingularSetter(n.type)}}class PureArrayUniform{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=getPureArraySetter(n.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,n[o.id],i)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(t,e){t.seq.push(e),t.map[e.id]=e}function parseUniform(t,e,n){const i=t.name,r=i.length;for(RePathPart.lastIndex=0;;){const a=RePathPart.exec(i),s=RePathPart.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){addUniform(n,c===void 0?new SingleUniform(o,t,e):new PureArrayUniform(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new StructuredUniform(o),addUniform(n,u)),n=u}}}class WebGLUniforms{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),s=e.getUniformLocation(n,a.name);parseUniform(a,s,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,s=n.length;a!==s;++a){const o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function WebGLShader(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const COMPLETION_STATUS_KHR=37297;let programIdCount=0;function handleSource(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const _m0$1=new Matrix3;function getEncodingComponents(t){ColorManagement._getMatrix(_m0$1,ColorManagement.workingColorSpace,t);const e=`mat3( ${_m0$1.elements.map(n=>n.toFixed(4))} )`;switch(ColorManagement.getTransfer(t)){case LinearTransfer:return[e,"LinearTransferOETF"];case SRGBTransfer:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function getShaderErrors(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+handleSource(t.getShaderSource(e),s)}else return r}function getTexelEncodingFunction(t,e){const n=getEncodingComponents(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function getToneMappingFunction(t,e){let n;switch(e){case LinearToneMapping:n="Linear";break;case ReinhardToneMapping:n="Reinhard";break;case CineonToneMapping:n="Cineon";break;case ACESFilmicToneMapping:n="ACESFilmic";break;case AgXToneMapping:n="AgX";break;case NeutralToneMapping:n="Neutral";break;case CustomToneMapping:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _v0=new Vector3;function getLuminanceFunction(){ColorManagement.getLuminanceCoefficients(_v0);const t=_v0.x.toFixed(4),e=_v0.y.toFixed(4),n=_v0.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function generateVertexExtensions(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(filterEmptyLine).join(`
`)}function generateDefines(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function fetchAttributeLocations(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),s=a.name;let o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),n[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function filterEmptyLine(t){return t!==""}function replaceLightNums(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(t){return t.replace(includePattern,includeReplacer)}const shaderChunkMap=new Map;function includeReplacer(t,e){let n=ShaderChunk[e];if(n===void 0){const i=shaderChunkMap.get(e);if(i!==void 0)n=ShaderChunk[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return resolveIncludes(n)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(t){return t.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function generatePrecision(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function generateShadowMapTypeDefine(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===PCFShadowMap?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===PCFSoftShadowMap?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===VSMShadowMap&&(e="SHADOWMAP_TYPE_VSM"),e}function generateEnvMapTypeDefine(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:e="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:e="ENVMAP_TYPE_CUBE_UV";break}return e}function generateEnvMapModeDefine(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case CubeRefractionMapping:e="ENVMAP_MODE_REFRACTION";break}return e}function generateEnvMapBlendingDefine(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case MultiplyOperation:e="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:e="ENVMAP_BLENDING_MIX";break;case AddOperation:e="ENVMAP_BLENDING_ADD";break}return e}function generateCubeUVSize(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function WebGLProgram(t,e,n,i){const r=t.getContext(),a=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=generateShadowMapTypeDefine(n),c=generateEnvMapTypeDefine(n),h=generateEnvMapModeDefine(n),u=generateEnvMapBlendingDefine(n),f=generateCubeUVSize(n),p=generateVertexExtensions(n),_=generateDefines(a),v=r.createProgram();let m,d,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(filterEmptyLine).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(filterEmptyLine).join(`
`),d.length>0&&(d+=`
`)):(m=[generatePrecision(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),d=[generatePrecision(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",n.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",n.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ShaderChunk.colorspace_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",n.outputColorSpace),getLuminanceFunction(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),s=resolveIncludes(s),s=replaceLightNums(s,n),s=replaceClippingPlaneNums(s,n),o=resolveIncludes(o),o=replaceLightNums(o,n),o=replaceClippingPlaneNums(o,n),s=unrollLoops(s),o=unrollLoops(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=y+m+s,M=y+d+o,N=WebGLShader(r,r.VERTEX_SHADER,b),L=WebGLShader(r,r.FRAGMENT_SHADER,M);r.attachShader(v,N),r.attachShader(v,L),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(w){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(v).trim(),O=r.getShaderInfoLog(N).trim(),X=r.getShaderInfoLog(L).trim();let J=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,N,L);else{const Z=getShaderErrors(r,N,"vertex"),V=getShaderErrors(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+Z+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||X==="")&&(W=!1);W&&(w.diagnostics={runnable:J,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:X,prefix:d}})}r.deleteShader(N),r.deleteShader(L),F=new WebGLUniforms(r,v),E=fetchAttributeLocations(r,v)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,COMPLETION_STATUS_KHR)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=L,this}let _id=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new WebGLShaderStage(e),n.set(e,i)),i}}class WebGLShaderStage{constructor(e){this.id=_id++,this.code=e,this.usedTimes=0}}function WebGLPrograms(t,e,n,i,r,a,s){const o=new Layers,l=new WebGLShaderCache,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,x,w,z,O){const X=z.fog,J=O.geometry,W=E.isMeshStandardMaterial?z.environment:null,Z=(E.isMeshStandardMaterial?n:e).get(E.envMap||W),V=Z&&Z.mapping===CubeUVReflectionMapping?Z.image.height:null,ae=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ce=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Se=ce!==void 0?ce.length:0;let Pe=0;J.morphAttributes.position!==void 0&&(Pe=1),J.morphAttributes.normal!==void 0&&(Pe=2),J.morphAttributes.color!==void 0&&(Pe=3);let Ge,H,ee,ge;if(ae){const Oe=ShaderLib[ae];Ge=Oe.vertexShader,H=Oe.fragmentShader}else Ge=E.vertexShader,H=E.fragmentShader,l.update(E),ee=l.getVertexShaderID(E),ge=l.getFragmentShaderID(E);const se=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),Ue=O.isInstancedMesh===!0,be=O.isBatchedMesh===!0,qe=!!E.map,Xe=!!E.matcap,De=!!Z,A=!!E.aoMap,Ke=!!E.lightMap,Be=!!E.bumpMap,ze=!!E.normalMap,pe=!!E.displacementMap,Ne=!!E.emissiveMap,Me=!!E.metalnessMap,Le=!!E.roughnessMap,Ze=E.anisotropy>0,T=E.clearcoat>0,g=E.dispersion>0,U=E.iridescence>0,k=E.sheen>0,q=E.transmission>0,G=Ze&&!!E.anisotropyMap,me=T&&!!E.clearcoatMap,ne=T&&!!E.clearcoatNormalMap,he=T&&!!E.clearcoatRoughnessMap,_e=U&&!!E.iridescenceMap,Y=U&&!!E.iridescenceThicknessMap,oe=k&&!!E.sheenColorMap,Te=k&&!!E.sheenRoughnessMap,ye=!!E.specularMap,te=!!E.specularColorMap,Ce=!!E.specularIntensityMap,R=q&&!!E.transmissionMap,ie=q&&!!E.thicknessMap,K=!!E.gradientMap,ue=!!E.alphaMap,Q=E.alphaTest>0,$=!!E.alphaHash,fe=!!E.extensions;let we=NoToneMapping;E.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(we=t.toneMapping);const He={shaderID:ae,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:H,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:be,batchingColor:be&&O._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,instancingMorph:Ue&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:LinearSRGBColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:qe,matcap:Xe,envMap:De,envMapMode:De&&Z.mapping,envMapCubeUVHeight:V,aoMap:A,lightMap:Ke,bumpMap:Be,normalMap:ze,displacementMap:f&&pe,emissiveMap:Ne,normalMapObjectSpace:ze&&E.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:ze&&E.normalMapType===TangentSpaceNormalMap,metalnessMap:Me,roughnessMap:Le,anisotropy:Ze,anisotropyMap:G,clearcoat:T,clearcoatMap:me,clearcoatNormalMap:ne,clearcoatRoughnessMap:he,dispersion:g,iridescence:U,iridescenceMap:_e,iridescenceThicknessMap:Y,sheen:k,sheenColorMap:oe,sheenRoughnessMap:Te,specularMap:ye,specularColorMap:te,specularIntensityMap:Ce,transmission:q,transmissionMap:R,thicknessMap:ie,gradientMap:K,opaque:E.transparent===!1&&E.blending===NormalBlending&&E.alphaToCoverage===!1,alphaMap:ue,alphaTest:Q,alphaHash:$,combine:E.combine,mapUv:qe&&v(E.map.channel),aoMapUv:A&&v(E.aoMap.channel),lightMapUv:Ke&&v(E.lightMap.channel),bumpMapUv:Be&&v(E.bumpMap.channel),normalMapUv:ze&&v(E.normalMap.channel),displacementMapUv:pe&&v(E.displacementMap.channel),emissiveMapUv:Ne&&v(E.emissiveMap.channel),metalnessMapUv:Me&&v(E.metalnessMap.channel),roughnessMapUv:Le&&v(E.roughnessMap.channel),anisotropyMapUv:G&&v(E.anisotropyMap.channel),clearcoatMapUv:me&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(E.sheenRoughnessMap.channel),specularMapUv:ye&&v(E.specularMap.channel),specularColorMapUv:te&&v(E.specularColorMap.channel),specularIntensityMapUv:Ce&&v(E.specularIntensityMap.channel),transmissionMapUv:R&&v(E.transmissionMap.channel),thicknessMapUv:ie&&v(E.thicknessMap.channel),alphaMapUv:ue&&v(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ze||Ze),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!J.attributes.uv&&(qe||ue),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ve,skinning:O.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Pe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&w.length>0,shadowMapType:t.shadowMap.type,toneMapping:we,decodeVideoTexture:qe&&E.map.isVideoTexture===!0&&ColorManagement.getTransfer(E.map.colorSpace)===SRGBTransfer,decodeVideoTextureEmissive:Ne&&E.emissiveMap.isVideoTexture===!0&&ColorManagement.getTransfer(E.emissiveMap.colorSpace)===SRGBTransfer,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===DoubleSide,flipSided:E.side===BackSide,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:fe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&E.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function d(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const w in E.defines)x.push(w),x.push(E.defines[w]);return E.isRawShaderMaterial===!1&&(y(x,E),b(x,E),x.push(t.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function y(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function b(E,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),E.push(o.mask)}function M(E){const x=_[E.type];let w;if(x){const z=ShaderLib[x];w=UniformsUtils.clone(z.uniforms)}else w=E.uniforms;return w}function N(E,x){let w;for(let z=0,O=h.length;z<O;z++){const X=h[z];if(X.cacheKey===x){w=X,++w.usedTimes;break}}return w===void 0&&(w=new WebGLProgram(t,x,E,a),h.push(w)),w}function L(E){if(--E.usedTimes===0){const x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:N,releaseProgram:L,releaseShaderCache:C,programs:h,dispose:F}}function WebGLProperties(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function r(s,o,l){t.get(s)[o]=l}function a(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:a}}function painterSortStable(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function reversePainterSortStable(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function WebGLRenderList(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function s(u,f,p,_,v,m){let d=t[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:v,group:m},t[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=v,d.group=m),e++,d}function o(u,f,p,_,v,m){const d=s(u,f,p,_,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(u,f,p,_,v,m){const d=s(u,f,p,_,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(u,f){n.length>1&&n.sort(u||painterSortStable),i.length>1&&i.sort(f||reversePainterSortStable),r.length>1&&r.sort(f||reversePainterSortStable)}function h(){for(let u=e,f=t.length;u<f;u++){const p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:h,sort:c}}function WebGLRenderLists(){let t=new WeakMap;function e(i,r){const a=t.get(i);let s;return a===void 0?(s=new WebGLRenderList,t.set(i,[s])):r>=a.length?(s=new WebGLRenderList,a.push(s)):s=a[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function UniformsCache(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Vector3,color:new Color};break;case"SpotLight":n={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":n={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return t[e.id]=n,n}}}function ShadowUniformsCache(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function WebGLLights(t){const e=new UniformsCache,n=ShadowUniformsCache(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Vector3);const r=new Vector3,a=new Matrix4,s=new Matrix4;function o(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,v=0,m=0,d=0,y=0,b=0,M=0,N=0,L=0,C=0;c.sort(shadowCastingAndTexturingLightsFirst);for(let E=0,x=c.length;E<x;E++){const w=c[E],z=w.color,O=w.intensity,X=w.distance,J=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=z.r*O,u+=z.g*O,f+=z.b*O;else if(w.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(w.sh.coefficients[W],O);C++}else if(w.isDirectionalLight){const W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Z=w.shadow,V=n.get(w);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=w.shadow.matrix,y++}i.directional[p]=W,p++}else if(w.isSpotLight){const W=e.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(z).multiplyScalar(O),W.distance=X,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,i.spot[v]=W;const Z=w.shadow;if(w.map&&(i.spotLightMap[N]=w.map,N++,Z.updateMatrices(w),w.castShadow&&L++),i.spotLightMatrix[v]=Z.matrix,w.castShadow){const V=n.get(w);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=J,M++}v++}else if(w.isRectAreaLight){const W=e.get(w);W.color.copy(z).multiplyScalar(O),W.halfWidth.set(w.width*.5,0,0),W.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=W,m++}else if(w.isPointLight){const W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),W.distance=w.distance,W.decay=w.decay,w.castShadow){const Z=w.shadow,V=n.get(w);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=J,i.pointShadowMatrix[_]=w.shadow.matrix,b++}i.point[_]=W,_++}else if(w.isHemisphereLight){const W=e.get(w);W.skyColor.copy(w.color).multiplyScalar(O),W.groundColor.copy(w.groundColor).multiplyScalar(O),i.hemi[d]=W,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,i.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):(i.rectAreaLTC1=UniformsLib.LTC_HALF_1,i.rectAreaLTC2=UniformsLib.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==d||F.numDirectionalShadows!==y||F.numPointShadows!==b||F.numSpotShadows!==M||F.numSpotMaps!==N||F.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+N-L,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=C,F.directionalLength=p,F.pointLength=_,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=d,F.numDirectionalShadows=y,F.numPointShadows=b,F.numSpotShadows=M,F.numSpotMaps=N,F.numLightProbes=C,i.version=nextVersion++)}function l(c,h){let u=0,f=0,p=0,_=0,v=0;const m=h.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const b=c[d];if(b.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),u++}else if(b.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),s.identity(),a.copy(b.matrixWorld),a.premultiply(m),s.extractRotation(a),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),_++}else if(b.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function WebGLRenderState(t){const e=new WebGLLights(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function a(h){n.push(h)}function s(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function WebGLRenderStates(t){let e=new WeakMap;function n(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new WebGLRenderState(t),e.set(r,[o])):a>=s.length?(o=new WebGLRenderState(t),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WebGLShadowMap(t,e,n){let i=new Frustum;const r=new Vector2,a=new Vector2,s=new Vector4,o=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),l=new MeshDistanceMaterial,c={},h=n.maxTextureSize,u={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},f=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new BufferGeometry;_.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Mesh(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap;let d=this.type;this.render=function(L,C,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const E=t.getRenderTarget(),x=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),z=t.state;z.setBlending(NoBlending),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=d!==VSMShadowMap&&this.type===VSMShadowMap,X=d===VSMShadowMap&&this.type!==VSMShadowMap;for(let J=0,W=L.length;J<W;J++){const Z=L[J],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ae=V.getFrameExtents();if(r.multiply(ae),a.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/ae.x),r.x=a.x*ae.x,V.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/ae.y),r.y=a.y*ae.y,V.mapSize.y=a.y)),V.map===null||O===!0||X===!0){const Se=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};V.map!==null&&V.map.dispose(),V.map=new WebGLRenderTarget(r.x,r.y,Se),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();const ce=V.getViewportCount();for(let Se=0;Se<ce;Se++){const Pe=V.getViewport(Se);s.set(a.x*Pe.x,a.y*Pe.y,a.x*Pe.z,a.y*Pe.w),z.viewport(s),V.updateMatrices(Z,Se),i=V.getFrustum(),M(C,F,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===VSMShadowMap&&y(V,F),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(E,x,w)};function y(L,C){const F=e.update(v);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new WebGLRenderTarget(r.x,r.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(C,null,F,f,v,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(C,null,F,p,v,null)}function b(L,C,F,E){let x=null;const w=F.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(w!==void 0)x=w;else if(x=F.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=x.uuid,O=C.uuid;let X=c[z];X===void 0&&(X={},c[z]=X);let J=X[O];J===void 0&&(J=x.clone(),X[O]=J,C.addEventListener("dispose",N)),x=J}if(x.visible=C.visible,x.wireframe=C.wireframe,E===VSMShadowMap?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:u[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=t.properties.get(x);z.light=F}return x}function M(L,C,F,E,x){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&x===VSMShadowMap)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,L.matrixWorld);const O=e.update(L),X=L.material;if(Array.isArray(X)){const J=O.groups;for(let W=0,Z=J.length;W<Z;W++){const V=J[W],ae=X[V.materialIndex];if(ae&&ae.visible){const ce=b(L,ae,E,x);L.onBeforeShadow(t,L,C,F,O,ce,V),t.renderBufferDirect(F,null,O,ce,L,V),L.onAfterShadow(t,L,C,F,O,ce,V)}}}else if(X.visible){const J=b(L,X,E,x);L.onBeforeShadow(t,L,C,F,O,J,null),t.renderBufferDirect(F,null,O,J,L,null),L.onAfterShadow(t,L,C,F,O,J,null)}}const z=L.children;for(let O=0,X=z.length;O<X;O++)M(z[O],C,F,E,x)}function N(L){L.target.removeEventListener("dispose",N);for(const F in c){const E=c[F],x=L.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const reversedFuncs={[NeverDepth]:AlwaysDepth,[LessDepth]:GreaterDepth,[EqualDepth]:NotEqualDepth,[LessEqualDepth]:GreaterEqualDepth,[AlwaysDepth]:NeverDepth,[GreaterDepth]:LessDepth,[NotEqualDepth]:EqualDepth,[GreaterEqualDepth]:LessEqualDepth};function WebGLState(t,e){function n(){let R=!1;const ie=new Vector4;let K=null;const ue=new Vector4(0,0,0,0);return{setMask:function(Q){K!==Q&&!R&&(t.colorMask(Q,Q,Q,Q),K=Q)},setLocked:function(Q){R=Q},setClear:function(Q,$,fe,we,He){He===!0&&(Q*=we,$*=we,fe*=we),ie.set(Q,$,fe,we),ue.equals(ie)===!1&&(t.clearColor(Q,$,fe,we),ue.copy(ie))},reset:function(){R=!1,K=null,ue.set(-1,0,0,0)}}}function i(){let R=!1,ie=!1,K=null,ue=null,Q=null;return{setReversed:function($){if(ie!==$){const fe=e.get("EXT_clip_control");$?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),ie=$;const we=Q;Q=null,this.setClear(we)}},getReversed:function(){return ie},setTest:function($){$?se(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function($){K!==$&&!R&&(t.depthMask($),K=$)},setFunc:function($){if(ie&&($=reversedFuncs[$]),ue!==$){switch($){case NeverDepth:t.depthFunc(t.NEVER);break;case AlwaysDepth:t.depthFunc(t.ALWAYS);break;case LessDepth:t.depthFunc(t.LESS);break;case LessEqualDepth:t.depthFunc(t.LEQUAL);break;case EqualDepth:t.depthFunc(t.EQUAL);break;case GreaterEqualDepth:t.depthFunc(t.GEQUAL);break;case GreaterDepth:t.depthFunc(t.GREATER);break;case NotEqualDepth:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=$}},setLocked:function($){R=$},setClear:function($){Q!==$&&(ie&&($=1-$),t.clearDepth($),Q=$)},reset:function(){R=!1,K=null,ue=null,Q=null,ie=!1}}}function r(){let R=!1,ie=null,K=null,ue=null,Q=null,$=null,fe=null,we=null,He=null;return{setTest:function(Oe){R||(Oe?se(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(Oe){ie!==Oe&&!R&&(t.stencilMask(Oe),ie=Oe)},setFunc:function(Oe,rt,at){(K!==Oe||ue!==rt||Q!==at)&&(t.stencilFunc(Oe,rt,at),K=Oe,ue=rt,Q=at)},setOp:function(Oe,rt,at){($!==Oe||fe!==rt||we!==at)&&(t.stencilOp(Oe,rt,at),$=Oe,fe=rt,we=at)},setLocked:function(Oe){R=Oe},setClear:function(Oe){He!==Oe&&(t.clearStencil(Oe),He=Oe)},reset:function(){R=!1,ie=null,K=null,ue=null,Q=null,$=null,fe=null,we=null,He=null}}}const a=new n,s=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],_=null,v=!1,m=null,d=null,y=null,b=null,M=null,N=null,L=null,C=new Color(0,0,0),F=0,E=!1,x=null,w=null,z=null,O=null,X=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=Z>=2);let ae=null,ce={};const Se=t.getParameter(t.SCISSOR_BOX),Pe=t.getParameter(t.VIEWPORT),Ge=new Vector4().fromArray(Se),H=new Vector4().fromArray(Pe);function ee(R,ie,K,ue){const Q=new Uint8Array(4),$=t.createTexture();t.bindTexture(R,$),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let fe=0;fe<K;fe++)R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,Q):t.texImage2D(ie+fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Q);return $}const ge={};ge[t.TEXTURE_2D]=ee(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[t.TEXTURE_2D_ARRAY]=ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),se(t.DEPTH_TEST),s.setFunc(LessEqualDepth),Be(!1),ze(CullFaceBack),se(t.CULL_FACE),A(NoBlending);function se(R){h[R]!==!0&&(t.enable(R),h[R]=!0)}function ve(R){h[R]!==!1&&(t.disable(R),h[R]=!1)}function Ue(R,ie){return u[R]!==ie?(t.bindFramebuffer(R,ie),u[R]=ie,R===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ie),R===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function be(R,ie){let K=p,ue=!1;if(R){K=f.get(ie),K===void 0&&(K=[],f.set(ie,K));const Q=R.textures;if(K.length!==Q.length||K[0]!==t.COLOR_ATTACHMENT0){for(let $=0,fe=Q.length;$<fe;$++)K[$]=t.COLOR_ATTACHMENT0+$;K.length=Q.length,ue=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,ue=!0);ue&&t.drawBuffers(K)}function qe(R){return _!==R?(t.useProgram(R),_=R,!0):!1}const Xe={[AddEquation]:t.FUNC_ADD,[SubtractEquation]:t.FUNC_SUBTRACT,[ReverseSubtractEquation]:t.FUNC_REVERSE_SUBTRACT};Xe[MinEquation]=t.MIN,Xe[MaxEquation]=t.MAX;const De={[ZeroFactor]:t.ZERO,[OneFactor]:t.ONE,[SrcColorFactor]:t.SRC_COLOR,[SrcAlphaFactor]:t.SRC_ALPHA,[SrcAlphaSaturateFactor]:t.SRC_ALPHA_SATURATE,[DstColorFactor]:t.DST_COLOR,[DstAlphaFactor]:t.DST_ALPHA,[OneMinusSrcColorFactor]:t.ONE_MINUS_SRC_COLOR,[OneMinusSrcAlphaFactor]:t.ONE_MINUS_SRC_ALPHA,[OneMinusDstColorFactor]:t.ONE_MINUS_DST_COLOR,[OneMinusDstAlphaFactor]:t.ONE_MINUS_DST_ALPHA,[ConstantColorFactor]:t.CONSTANT_COLOR,[OneMinusConstantColorFactor]:t.ONE_MINUS_CONSTANT_COLOR,[ConstantAlphaFactor]:t.CONSTANT_ALPHA,[OneMinusConstantAlphaFactor]:t.ONE_MINUS_CONSTANT_ALPHA};function A(R,ie,K,ue,Q,$,fe,we,He,Oe){if(R===NoBlending){v===!0&&(ve(t.BLEND),v=!1);return}if(v===!1&&(se(t.BLEND),v=!0),R!==CustomBlending){if(R!==m||Oe!==E){if((d!==AddEquation||M!==AddEquation)&&(t.blendEquation(t.FUNC_ADD),d=AddEquation,M=AddEquation),Oe)switch(R){case NormalBlending:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:t.blendFunc(t.ONE,t.ONE);break;case SubtractiveBlending:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case MultiplyBlending:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case NormalBlending:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case SubtractiveBlending:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case MultiplyBlending:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}y=null,b=null,N=null,L=null,C.set(0,0,0),F=0,m=R,E=Oe}return}Q=Q||ie,$=$||K,fe=fe||ue,(ie!==d||Q!==M)&&(t.blendEquationSeparate(Xe[ie],Xe[Q]),d=ie,M=Q),(K!==y||ue!==b||$!==N||fe!==L)&&(t.blendFuncSeparate(De[K],De[ue],De[$],De[fe]),y=K,b=ue,N=$,L=fe),(we.equals(C)===!1||He!==F)&&(t.blendColor(we.r,we.g,we.b,He),C.copy(we),F=He),m=R,E=!1}function Ke(R,ie){R.side===DoubleSide?ve(t.CULL_FACE):se(t.CULL_FACE);let K=R.side===BackSide;ie&&(K=!K),Be(K),R.blending===NormalBlending&&R.transparent===!1?A(NoBlending):A(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),s.setFunc(R.depthFunc),s.setTest(R.depthTest),s.setMask(R.depthWrite),a.setMask(R.colorWrite);const ue=R.stencilWrite;o.setTest(ue),ue&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ne(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(R){x!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),x=R)}function ze(R){R!==CullFaceNone?(se(t.CULL_FACE),R!==w&&(R===CullFaceBack?t.cullFace(t.BACK):R===CullFaceFront?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),w=R}function pe(R){R!==z&&(W&&t.lineWidth(R),z=R)}function Ne(R,ie,K){R?(se(t.POLYGON_OFFSET_FILL),(O!==ie||X!==K)&&(t.polygonOffset(ie,K),O=ie,X=K)):ve(t.POLYGON_OFFSET_FILL)}function Me(R){R?se(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function Le(R){R===void 0&&(R=t.TEXTURE0+J-1),ae!==R&&(t.activeTexture(R),ae=R)}function Ze(R,ie,K){K===void 0&&(ae===null?K=t.TEXTURE0+J-1:K=ae);let ue=ce[K];ue===void 0&&(ue={type:void 0,texture:void 0},ce[K]=ue),(ue.type!==R||ue.texture!==ie)&&(ae!==K&&(t.activeTexture(K),ae=K),t.bindTexture(R,ie||ge[R]),ue.type=R,ue.texture=ie)}function T(){const R=ce[ae];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function U(){try{t.compressedTexImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function k(){try{t.texSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function q(){try{t.texSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{t.compressedTexSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{t.texStorage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{t.texStorage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{t.texImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Y(){try{t.texImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(R){Ge.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),Ge.copy(R))}function Te(R){H.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),H.copy(R))}function ye(R,ie){let K=c.get(ie);K===void 0&&(K=new WeakMap,c.set(ie,K));let ue=K.get(R);ue===void 0&&(ue=t.getUniformBlockIndex(ie,R.name),K.set(R,ue))}function te(R,ie){const ue=c.get(ie).get(R);l.get(ie)!==ue&&(t.uniformBlockBinding(ie,ue,R.__bindingPointIndex),l.set(ie,ue))}function Ce(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ae=null,ce={},u={},f=new WeakMap,p=[],_=null,v=!1,m=null,d=null,y=null,b=null,M=null,N=null,L=null,C=new Color(0,0,0),F=0,E=!1,x=null,w=null,z=null,O=null,X=null,Ge.set(0,0,t.canvas.width,t.canvas.height),H.set(0,0,t.canvas.width,t.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:se,disable:ve,bindFramebuffer:Ue,drawBuffers:be,useProgram:qe,setBlending:A,setMaterial:Ke,setFlipSided:Be,setCullFace:ze,setLineWidth:pe,setPolygonOffset:Ne,setScissorTest:Me,activeTexture:Le,bindTexture:Ze,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:U,texImage2D:_e,texImage3D:Y,updateUBOMapping:ye,uniformBlockBinding:te,texStorage2D:ne,texStorage3D:he,texSubImage2D:k,texSubImage3D:q,compressedTexSubImage2D:G,compressedTexSubImage3D:me,scissor:oe,viewport:Te,reset:Ce}}function WebGLTextures(t,e,n,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vector2,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return p?new OffscreenCanvas(T,g):createElementNS("canvas")}function v(T,g,U){let k=1;const q=Ze(T);if((q.width>U||q.height>U)&&(k=U/Math.max(q.width,q.height)),k<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const G=Math.floor(k*q.width),me=Math.floor(k*q.height);u===void 0&&(u=_(G,me));const ne=g?_(G,me):u;return ne.width=G,ne.height=me,ne.getContext("2d").drawImage(T,0,0,G,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+G+"x"+me+")."),ne}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){t.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(T,g,U,k,q=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let G=g;if(g===t.RED&&(U===t.FLOAT&&(G=t.R32F),U===t.HALF_FLOAT&&(G=t.R16F),U===t.UNSIGNED_BYTE&&(G=t.R8)),g===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(G=t.R8UI),U===t.UNSIGNED_SHORT&&(G=t.R16UI),U===t.UNSIGNED_INT&&(G=t.R32UI),U===t.BYTE&&(G=t.R8I),U===t.SHORT&&(G=t.R16I),U===t.INT&&(G=t.R32I)),g===t.RG&&(U===t.FLOAT&&(G=t.RG32F),U===t.HALF_FLOAT&&(G=t.RG16F),U===t.UNSIGNED_BYTE&&(G=t.RG8)),g===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(G=t.RG8UI),U===t.UNSIGNED_SHORT&&(G=t.RG16UI),U===t.UNSIGNED_INT&&(G=t.RG32UI),U===t.BYTE&&(G=t.RG8I),U===t.SHORT&&(G=t.RG16I),U===t.INT&&(G=t.RG32I)),g===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(G=t.RGB8UI),U===t.UNSIGNED_SHORT&&(G=t.RGB16UI),U===t.UNSIGNED_INT&&(G=t.RGB32UI),U===t.BYTE&&(G=t.RGB8I),U===t.SHORT&&(G=t.RGB16I),U===t.INT&&(G=t.RGB32I)),g===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(G=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(G=t.RGBA16UI),U===t.UNSIGNED_INT&&(G=t.RGBA32UI),U===t.BYTE&&(G=t.RGBA8I),U===t.SHORT&&(G=t.RGBA16I),U===t.INT&&(G=t.RGBA32I)),g===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(G=t.RGB9_E5),g===t.RGBA){const me=q?LinearTransfer:ColorManagement.getTransfer(k);U===t.FLOAT&&(G=t.RGBA32F),U===t.HALF_FLOAT&&(G=t.RGBA16F),U===t.UNSIGNED_BYTE&&(G=me===SRGBTransfer?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function M(T,g){let U;return T?g===null||g===UnsignedIntType||g===UnsignedInt248Type?U=t.DEPTH24_STENCIL8:g===FloatType?U=t.DEPTH32F_STENCIL8:g===UnsignedShortType&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===UnsignedIntType||g===UnsignedInt248Type?U=t.DEPTH_COMPONENT24:g===FloatType?U=t.DEPTH_COMPONENT32F:g===UnsignedShortType&&(U=t.DEPTH_COMPONENT16),U}function N(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==NearestFilter&&T.minFilter!==LinearFilter?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function L(T){const g=T.target;g.removeEventListener("dispose",L),F(g),g.isVideoTexture&&h.delete(g)}function C(T){const g=T.target;g.removeEventListener("dispose",C),x(g)}function F(T){const g=i.get(T);if(g.__webglInit===void 0)return;const U=T.source,k=f.get(U);if(k){const q=k[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&E(T),Object.keys(k).length===0&&f.delete(U)}i.remove(T)}function E(T){const g=i.get(T);t.deleteTexture(g.__webglTexture);const U=T.source,k=f.get(U);delete k[g.__cacheKey],s.memory.textures--}function x(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let q=0;q<g.__webglFramebuffer[k].length;q++)t.deleteFramebuffer(g.__webglFramebuffer[k][q]);else t.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)t.deleteFramebuffer(g.__webglFramebuffer[k]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=T.textures;for(let k=0,q=U.length;k<q;k++){const G=i.get(U[k]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),s.memory.textures--),i.remove(U[k])}i.remove(T)}let w=0;function z(){w=0}function O(){const T=w;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),w+=1,T}function X(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function J(T,g){const U=i.get(T);if(T.isVideoTexture&&Me(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){const k=T.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(U,T,g);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+g)}function W(T,g){const U=i.get(T);if(T.version>0&&U.__version!==T.version){ge(U,T,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+g)}function Z(T,g){const U=i.get(T);if(T.version>0&&U.__version!==T.version){ge(U,T,g);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+g)}function V(T,g){const U=i.get(T);if(T.version>0&&U.__version!==T.version){se(U,T,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+g)}const ae={[RepeatWrapping]:t.REPEAT,[ClampToEdgeWrapping]:t.CLAMP_TO_EDGE,[MirroredRepeatWrapping]:t.MIRRORED_REPEAT},ce={[NearestFilter]:t.NEAREST,[NearestMipmapNearestFilter]:t.NEAREST_MIPMAP_NEAREST,[NearestMipmapLinearFilter]:t.NEAREST_MIPMAP_LINEAR,[LinearFilter]:t.LINEAR,[LinearMipmapNearestFilter]:t.LINEAR_MIPMAP_NEAREST,[LinearMipmapLinearFilter]:t.LINEAR_MIPMAP_LINEAR},Se={[NeverCompare]:t.NEVER,[AlwaysCompare]:t.ALWAYS,[LessCompare]:t.LESS,[LessEqualCompare]:t.LEQUAL,[EqualCompare]:t.EQUAL,[GreaterEqualCompare]:t.GEQUAL,[GreaterCompare]:t.GREATER,[NotEqualCompare]:t.NOTEQUAL};function Pe(T,g){if(g.type===FloatType&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===LinearFilter||g.magFilter===LinearMipmapNearestFilter||g.magFilter===NearestMipmapLinearFilter||g.magFilter===LinearMipmapLinearFilter||g.minFilter===LinearFilter||g.minFilter===LinearMipmapNearestFilter||g.minFilter===NearestMipmapLinearFilter||g.minFilter===LinearMipmapLinearFilter)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,ae[g.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,ae[g.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,ae[g.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ce[g.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ce[g.minFilter]),g.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,Se[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===NearestFilter||g.minFilter!==NearestMipmapLinearFilter&&g.minFilter!==LinearMipmapLinearFilter||g.type===FloatType&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ge(T,g){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",L));const k=g.source;let q=f.get(k);q===void 0&&(q={},f.set(k,q));const G=X(g);if(G!==T.__cacheKey){q[G]===void 0&&(q[G]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,U=!0),q[G].usedTimes++;const me=q[T.__cacheKey];me!==void 0&&(q[T.__cacheKey].usedTimes--,me.usedTimes===0&&E(g)),T.__cacheKey=G,T.__webglTexture=q[G].texture}return U}function H(T,g,U){return Math.floor(Math.floor(T/U)/g)}function ee(T,g,U,k){const G=T.updateRanges;if(G.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,U,k,g.data);else{G.sort((Y,oe)=>Y.start-oe.start);let me=0;for(let Y=1;Y<G.length;Y++){const oe=G[me],Te=G[Y],ye=oe.start+oe.count,te=H(Te.start,g.width,4),Ce=H(oe.start,g.width,4);Te.start<=ye+1&&te===Ce&&H(Te.start+Te.count-1,g.width,4)===te?oe.count=Math.max(oe.count,Te.start+Te.count-oe.start):(++me,G[me]=Te)}G.length=me+1;const ne=t.getParameter(t.UNPACK_ROW_LENGTH),he=t.getParameter(t.UNPACK_SKIP_PIXELS),_e=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let Y=0,oe=G.length;Y<oe;Y++){const Te=G[Y],ye=Math.floor(Te.start/4),te=Math.ceil(Te.count/4),Ce=ye%g.width,R=Math.floor(ye/g.width),ie=te,K=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(t.UNPACK_SKIP_ROWS,R),n.texSubImage2D(t.TEXTURE_2D,0,Ce,R,ie,K,U,k,g.data)}T.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ne),t.pixelStorei(t.UNPACK_SKIP_PIXELS,he),t.pixelStorei(t.UNPACK_SKIP_ROWS,_e)}}function ge(T,g,U){let k=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=t.TEXTURE_3D);const q=Ge(T,g),G=g.source;n.bindTexture(k,T.__webglTexture,t.TEXTURE0+U);const me=i.get(G);if(G.version!==me.__version||q===!0){n.activeTexture(t.TEXTURE0+U);const ne=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),he=g.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(g.colorSpace),_e=g.colorSpace===NoColorSpace||ne===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Y=v(g.image,!1,r.maxTextureSize);Y=Le(g,Y);const oe=a.convert(g.format,g.colorSpace),Te=a.convert(g.type);let ye=b(g.internalFormat,oe,Te,g.colorSpace,g.isVideoTexture);Pe(k,g);let te;const Ce=g.mipmaps,R=g.isVideoTexture!==!0,ie=me.__version===void 0||q===!0,K=G.dataReady,ue=N(g,Y);if(g.isDepthTexture)ye=M(g.format===DepthStencilFormat,g.type),ie&&(R?n.texStorage2D(t.TEXTURE_2D,1,ye,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,ye,Y.width,Y.height,0,oe,Te,null));else if(g.isDataTexture)if(Ce.length>0){R&&ie&&n.texStorage2D(t.TEXTURE_2D,ue,ye,Ce[0].width,Ce[0].height);for(let Q=0,$=Ce.length;Q<$;Q++)te=Ce[Q],R?K&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,te.width,te.height,oe,Te,te.data):n.texImage2D(t.TEXTURE_2D,Q,ye,te.width,te.height,0,oe,Te,te.data);g.generateMipmaps=!1}else R?(ie&&n.texStorage2D(t.TEXTURE_2D,ue,ye,Y.width,Y.height),K&&ee(g,Y,oe,Te)):n.texImage2D(t.TEXTURE_2D,0,ye,Y.width,Y.height,0,oe,Te,Y.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){R&&ie&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,ye,Ce[0].width,Ce[0].height,Y.depth);for(let Q=0,$=Ce.length;Q<$;Q++)if(te=Ce[Q],g.format!==RGBAFormat)if(oe!==null)if(R){if(K)if(g.layerUpdates.size>0){const fe=getByteLength(te.width,te.height,g.format,g.type);for(const we of g.layerUpdates){const He=te.data.subarray(we*fe/te.data.BYTES_PER_ELEMENT,(we+1)*fe/te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,we,te.width,te.height,1,oe,He)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,te.width,te.height,Y.depth,oe,te.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,ye,te.width,te.height,Y.depth,0,te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?K&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,te.width,te.height,Y.depth,oe,Te,te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,ye,te.width,te.height,Y.depth,0,oe,Te,te.data)}else{R&&ie&&n.texStorage2D(t.TEXTURE_2D,ue,ye,Ce[0].width,Ce[0].height);for(let Q=0,$=Ce.length;Q<$;Q++)te=Ce[Q],g.format!==RGBAFormat?oe!==null?R?K&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,te.width,te.height,oe,te.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,ye,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?K&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,te.width,te.height,oe,Te,te.data):n.texImage2D(t.TEXTURE_2D,Q,ye,te.width,te.height,0,oe,Te,te.data)}else if(g.isDataArrayTexture)if(R){if(ie&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,ye,Y.width,Y.height,Y.depth),K)if(g.layerUpdates.size>0){const Q=getByteLength(Y.width,Y.height,g.format,g.type);for(const $ of g.layerUpdates){const fe=Y.data.subarray($*Q/Y.data.BYTES_PER_ELEMENT,($+1)*Q/Y.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,$,Y.width,Y.height,1,oe,Te,fe)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,oe,Te,Y.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,Y.width,Y.height,Y.depth,0,oe,Te,Y.data);else if(g.isData3DTexture)R?(ie&&n.texStorage3D(t.TEXTURE_3D,ue,ye,Y.width,Y.height,Y.depth),K&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,oe,Te,Y.data)):n.texImage3D(t.TEXTURE_3D,0,ye,Y.width,Y.height,Y.depth,0,oe,Te,Y.data);else if(g.isFramebufferTexture){if(ie)if(R)n.texStorage2D(t.TEXTURE_2D,ue,ye,Y.width,Y.height);else{let Q=Y.width,$=Y.height;for(let fe=0;fe<ue;fe++)n.texImage2D(t.TEXTURE_2D,fe,ye,Q,$,0,oe,Te,null),Q>>=1,$>>=1}}else if(Ce.length>0){if(R&&ie){const Q=Ze(Ce[0]);n.texStorage2D(t.TEXTURE_2D,ue,ye,Q.width,Q.height)}for(let Q=0,$=Ce.length;Q<$;Q++)te=Ce[Q],R?K&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,oe,Te,te):n.texImage2D(t.TEXTURE_2D,Q,ye,oe,Te,te);g.generateMipmaps=!1}else if(R){if(ie){const Q=Ze(Y);n.texStorage2D(t.TEXTURE_2D,ue,ye,Q.width,Q.height)}K&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe,Te,Y)}else n.texImage2D(t.TEXTURE_2D,0,ye,oe,Te,Y);m(g)&&d(k),me.__version=G.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function se(T,g,U){if(g.image.length!==6)return;const k=Ge(T,g),q=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+U);const G=i.get(q);if(q.version!==G.__version||k===!0){n.activeTexture(t.TEXTURE0+U);const me=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),ne=g.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(g.colorSpace),he=g.colorSpace===NoColorSpace||me===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const _e=g.isCompressedTexture||g.image[0].isCompressedTexture,Y=g.image[0]&&g.image[0].isDataTexture,oe=[];for(let $=0;$<6;$++)!_e&&!Y?oe[$]=v(g.image[$],!0,r.maxCubemapSize):oe[$]=Y?g.image[$].image:g.image[$],oe[$]=Le(g,oe[$]);const Te=oe[0],ye=a.convert(g.format,g.colorSpace),te=a.convert(g.type),Ce=b(g.internalFormat,ye,te,g.colorSpace),R=g.isVideoTexture!==!0,ie=G.__version===void 0||k===!0,K=q.dataReady;let ue=N(g,Te);Pe(t.TEXTURE_CUBE_MAP,g);let Q;if(_e){R&&ie&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Ce,Te.width,Te.height);for(let $=0;$<6;$++){Q=oe[$].mipmaps;for(let fe=0;fe<Q.length;fe++){const we=Q[fe];g.format!==RGBAFormat?ye!==null?R?K&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,0,0,we.width,we.height,ye,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,Ce,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,0,0,we.width,we.height,ye,te,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,Ce,we.width,we.height,0,ye,te,we.data)}}}else{if(Q=g.mipmaps,R&&ie){Q.length>0&&ue++;const $=Ze(oe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Ce,$.width,$.height)}for(let $=0;$<6;$++)if(Y){R?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,oe[$].width,oe[$].height,ye,te,oe[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ce,oe[$].width,oe[$].height,0,ye,te,oe[$].data);for(let fe=0;fe<Q.length;fe++){const He=Q[fe].image[$].image;R?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,0,0,He.width,He.height,ye,te,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,Ce,He.width,He.height,0,ye,te,He.data)}}else{R?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ye,te,oe[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ce,ye,te,oe[$]);for(let fe=0;fe<Q.length;fe++){const we=Q[fe];R?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,0,0,ye,te,we.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,Ce,ye,te,we.image[$])}}}m(g)&&d(t.TEXTURE_CUBE_MAP),G.__version=q.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ve(T,g,U,k,q,G){const me=a.convert(U.format,U.colorSpace),ne=a.convert(U.type),he=b(U.internalFormat,me,ne,U.colorSpace),_e=i.get(g),Y=i.get(U);if(Y.__renderTarget=g,!_e.__hasExternalTextures){const oe=Math.max(1,g.width>>G),Te=Math.max(1,g.height>>G);q===t.TEXTURE_3D||q===t.TEXTURE_2D_ARRAY?n.texImage3D(q,G,he,oe,Te,g.depth,0,me,ne,null):n.texImage2D(q,G,he,oe,Te,0,me,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),Ne(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,k,q,Y.__webglTexture,0,pe(g)):(q===t.TEXTURE_2D||q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,k,q,Y.__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(T,g,U){if(t.bindRenderbuffer(t.RENDERBUFFER,T),g.depthBuffer){const k=g.depthTexture,q=k&&k.isDepthTexture?k.type:null,G=M(g.stencilBuffer,q),me=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=pe(g);Ne(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,G,g.width,g.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,G,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,G,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,T)}else{const k=g.textures;for(let q=0;q<k.length;q++){const G=k[q],me=a.convert(G.format,G.colorSpace),ne=a.convert(G.type),he=b(G.internalFormat,me,ne,G.colorSpace),_e=pe(g);U&&Ne(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,he,g.width,g.height):Ne(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,he,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,he,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(g.depthTexture);k.__renderTarget=g,(!k.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),J(g.depthTexture,0);const q=k.__webglTexture,G=pe(g);if(g.depthTexture.format===DepthFormat)Ne(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(g.depthTexture.format===DepthStencilFormat)Ne(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function qe(T){const g=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const k=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){const q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",q)};k.addEventListener("dispose",q),g.__depthDisposeCallback=q}g.__boundDepthTexture=k}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const k=T.texture.mipmaps;k&&k.length>0?be(g.__webglFramebuffer[0],T):be(g.__webglFramebuffer,T)}else if(U){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=t.createRenderbuffer(),Ue(g.__webglDepthbuffer[k],T,!1);else{const q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[k];t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,G)}}else{const k=T.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),Ue(g.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,G)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Xe(T,g,U){const k=i.get(T);g!==void 0&&ve(k.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&qe(T)}function De(T){const g=T.texture,U=i.get(T),k=i.get(g);T.addEventListener("dispose",C);const q=T.textures,G=T.isWebGLCubeRenderTarget===!0,me=q.length>1;if(me||(k.__webglTexture===void 0&&(k.__webglTexture=t.createTexture()),k.__version=g.version,s.memory.textures++),G){U.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[ne]=[];for(let he=0;he<g.mipmaps.length;he++)U.__webglFramebuffer[ne][he]=t.createFramebuffer()}else U.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)U.__webglFramebuffer[ne]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(me)for(let ne=0,he=q.length;ne<he;ne++){const _e=i.get(q[ne]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),s.memory.textures++)}if(T.samples>0&&Ne(T)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ne=0;ne<q.length;ne++){const he=q[ne];U.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[ne]);const _e=a.convert(he.format,he.colorSpace),Y=a.convert(he.type),oe=b(he.internalFormat,_e,Y,he.colorSpace,T.isXRRenderTarget===!0),Te=pe(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,oe,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,U.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(U.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(G){n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture),Pe(t.TEXTURE_CUBE_MAP,g);for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0)for(let he=0;he<g.mipmaps.length;he++)ve(U.__webglFramebuffer[ne][he],T,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he);else ve(U.__webglFramebuffer[ne],T,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(g)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){for(let ne=0,he=q.length;ne<he;ne++){const _e=q[ne],Y=i.get(_e);n.bindTexture(t.TEXTURE_2D,Y.__webglTexture),Pe(t.TEXTURE_2D,_e),ve(U.__webglFramebuffer,T,_e,t.COLOR_ATTACHMENT0+ne,t.TEXTURE_2D,0),m(_e)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ne=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,k.__webglTexture),Pe(ne,g),g.mipmaps&&g.mipmaps.length>0)for(let he=0;he<g.mipmaps.length;he++)ve(U.__webglFramebuffer[he],T,g,t.COLOR_ATTACHMENT0,ne,he);else ve(U.__webglFramebuffer,T,g,t.COLOR_ATTACHMENT0,ne,0);m(g)&&d(ne),n.unbindTexture()}T.depthBuffer&&qe(T)}function A(T){const g=T.textures;for(let U=0,k=g.length;U<k;U++){const q=g[U];if(m(q)){const G=y(T),me=i.get(q).__webglTexture;n.bindTexture(G,me),d(G),n.unbindTexture()}}}const Ke=[],Be=[];function ze(T){if(T.samples>0){if(Ne(T)===!1){const g=T.textures,U=T.width,k=T.height;let q=t.COLOR_BUFFER_BIT;const G=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(T),ne=g.length>1;if(ne)for(let _e=0;_e<g.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const he=T.texture.mipmaps;he&&he.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let _e=0;_e<g.length;_e++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(q|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(q|=t.STENCIL_BUFFER_BIT)),ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const Y=i.get(g[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Y,0)}t.blitFramebuffer(0,0,U,k,0,0,U,k,q,t.NEAREST),l===!0&&(Ke.length=0,Be.length=0,Ke.push(t.COLOR_ATTACHMENT0+_e),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ke.push(G),Be.push(G),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Be)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ke))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ne)for(let _e=0;_e<g.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const Y=i.get(g[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Y,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function pe(T){return Math.min(r.maxSamples,T.samples)}function Ne(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Me(T){const g=s.render.frame;h.get(T)!==g&&(h.set(T,g),T.update())}function Le(T,g){const U=T.colorSpace,k=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==LinearSRGBColorSpace&&U!==NoColorSpace&&(ColorManagement.getTransfer(U)===SRGBTransfer?(k!==RGBAFormat||q!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),g}function Ze(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=Xe,this.setupRenderTarget=De,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Ne}function WebGLUtils(t,e){function n(i,r=NoColorSpace){let a;const s=ColorManagement.getTransfer(r);if(i===UnsignedByteType)return t.UNSIGNED_BYTE;if(i===UnsignedShort4444Type)return t.UNSIGNED_SHORT_4_4_4_4;if(i===UnsignedShort5551Type)return t.UNSIGNED_SHORT_5_5_5_1;if(i===UnsignedInt5999Type)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ByteType)return t.BYTE;if(i===ShortType)return t.SHORT;if(i===UnsignedShortType)return t.UNSIGNED_SHORT;if(i===IntType)return t.INT;if(i===UnsignedIntType)return t.UNSIGNED_INT;if(i===FloatType)return t.FLOAT;if(i===HalfFloatType)return t.HALF_FLOAT;if(i===AlphaFormat)return t.ALPHA;if(i===RGBFormat)return t.RGB;if(i===RGBAFormat)return t.RGBA;if(i===DepthFormat)return t.DEPTH_COMPONENT;if(i===DepthStencilFormat)return t.DEPTH_STENCIL;if(i===RedFormat)return t.RED;if(i===RedIntegerFormat)return t.RED_INTEGER;if(i===RGFormat)return t.RG;if(i===RGIntegerFormat)return t.RG_INTEGER;if(i===RGBAIntegerFormat)return t.RGBA_INTEGER;if(i===RGB_S3TC_DXT1_Format||i===RGBA_S3TC_DXT1_Format||i===RGBA_S3TC_DXT3_Format||i===RGBA_S3TC_DXT5_Format)if(s===SRGBTransfer)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===RGB_S3TC_DXT1_Format)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT1_Format)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT3_Format)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===RGBA_S3TC_DXT5_Format)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===RGB_S3TC_DXT1_Format)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT1_Format)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT3_Format)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===RGBA_S3TC_DXT5_Format)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===RGB_PVRTC_4BPPV1_Format||i===RGB_PVRTC_2BPPV1_Format||i===RGBA_PVRTC_4BPPV1_Format||i===RGBA_PVRTC_2BPPV1_Format)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===RGB_PVRTC_4BPPV1_Format)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===RGB_PVRTC_2BPPV1_Format)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===RGBA_PVRTC_4BPPV1_Format)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===RGBA_PVRTC_2BPPV1_Format)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===RGB_ETC1_Format||i===RGB_ETC2_Format||i===RGBA_ETC2_EAC_Format)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===RGB_ETC1_Format||i===RGB_ETC2_Format)return s===SRGBTransfer?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===RGBA_ETC2_EAC_Format)return s===SRGBTransfer?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===RGBA_ASTC_4x4_Format||i===RGBA_ASTC_5x4_Format||i===RGBA_ASTC_5x5_Format||i===RGBA_ASTC_6x5_Format||i===RGBA_ASTC_6x6_Format||i===RGBA_ASTC_8x5_Format||i===RGBA_ASTC_8x6_Format||i===RGBA_ASTC_8x8_Format||i===RGBA_ASTC_10x5_Format||i===RGBA_ASTC_10x6_Format||i===RGBA_ASTC_10x8_Format||i===RGBA_ASTC_10x10_Format||i===RGBA_ASTC_12x10_Format||i===RGBA_ASTC_12x12_Format)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===RGBA_ASTC_4x4_Format)return s===SRGBTransfer?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===RGBA_ASTC_5x4_Format)return s===SRGBTransfer?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===RGBA_ASTC_5x5_Format)return s===SRGBTransfer?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===RGBA_ASTC_6x5_Format)return s===SRGBTransfer?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===RGBA_ASTC_6x6_Format)return s===SRGBTransfer?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===RGBA_ASTC_8x5_Format)return s===SRGBTransfer?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===RGBA_ASTC_8x6_Format)return s===SRGBTransfer?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===RGBA_ASTC_8x8_Format)return s===SRGBTransfer?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===RGBA_ASTC_10x5_Format)return s===SRGBTransfer?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===RGBA_ASTC_10x6_Format)return s===SRGBTransfer?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===RGBA_ASTC_10x8_Format)return s===SRGBTransfer?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===RGBA_ASTC_10x10_Format)return s===SRGBTransfer?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===RGBA_ASTC_12x10_Format)return s===SRGBTransfer?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===RGBA_ASTC_12x12_Format)return s===SRGBTransfer?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===RGBA_BPTC_Format||i===RGB_BPTC_SIGNED_Format||i===RGB_BPTC_UNSIGNED_Format)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===RGBA_BPTC_Format)return s===SRGBTransfer?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===RGB_BPTC_SIGNED_Format)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===RGB_BPTC_UNSIGNED_Format)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===RED_RGTC1_Format||i===SIGNED_RED_RGTC1_Format||i===RED_GREEN_RGTC2_Format||i===SIGNED_RED_GREEN_RGTC2_Format)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===RGBA_BPTC_Format)return a.COMPRESSED_RED_RGTC1_EXT;if(i===SIGNED_RED_RGTC1_Format)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===RED_GREEN_RGTC2_Format)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===SIGNED_RED_GREEN_RGTC2_Format)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===UnsignedInt248Type?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const _occlusion_vertex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_occlusion_fragment=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WebXRDepthSensing{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Texture,a=e.properties.get(r);a.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ShaderMaterial({vertexShader:_occlusion_vertex,fragmentShader:_occlusion_fragment,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mesh(new PlaneGeometry(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WebXRManager extends EventDispatcher{constructor(e,n){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,_=null;const v=new WebXRDepthSensing,m=n.getContextAttributes();let d=null,y=null;const b=[],M=[],N=new Vector2;let L=null;const C=new PerspectiveCamera;C.viewport=new Vector4;const F=new PerspectiveCamera;F.viewport=new Vector4;const E=[C,F],x=new ArrayCamera;let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ee=b[H];return ee===void 0&&(ee=new WebXRController,b[H]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(H){let ee=b[H];return ee===void 0&&(ee=new WebXRController,b[H]=ee),ee.getGripSpace()},this.getHand=function(H){let ee=b[H];return ee===void 0&&(ee=new WebXRController,b[H]=ee),ee.getHandSpace()};function O(H){const ee=M.indexOf(H.inputSource);if(ee===-1)return;const ge=b[ee];ge!==void 0&&(ge.update(H.inputSource,H.frame,c||s),ge.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",J);for(let H=0;H<b.length;H++){const ee=M[H];ee!==null&&(M[H]=null,b[H].disconnect(ee))}w=null,z=null,v.reset(),e.setRenderTarget(d),p=null,f=null,u=null,r=null,y=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",X),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,se=null,ve=null;m.depth&&(ve=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=m.stencil?DepthStencilFormat:DepthFormat,se=m.stencil?UnsignedInt248Type:UnsignedIntType);const Ue={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:a};u=new XRWebGLBinding(r,n),f=u.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new WebGLRenderTarget(f.textureWidth,f.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,n,ge),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new WebGLRenderTarget(p.framebufferWidth,p.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(H){for(let ee=0;ee<H.removed.length;ee++){const ge=H.removed[ee],se=M.indexOf(ge);se>=0&&(M[se]=null,b[se].disconnect(ge))}for(let ee=0;ee<H.added.length;ee++){const ge=H.added[ee];let se=M.indexOf(ge);if(se===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=M.length){M.push(ge),se=Ue;break}else if(M[Ue]===null){M[Ue]=ge,se=Ue;break}if(se===-1)break}const ve=b[se];ve&&ve.connect(ge)}}const W=new Vector3,Z=new Vector3;function V(H,ee,ge){W.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(ge.matrixWorld);const se=W.distanceTo(Z),ve=ee.projectionMatrix.elements,Ue=ge.projectionMatrix.elements,be=ve[14]/(ve[10]-1),qe=ve[14]/(ve[10]+1),Xe=(ve[9]+1)/ve[5],De=(ve[9]-1)/ve[5],A=(ve[8]-1)/ve[0],Ke=(Ue[8]+1)/Ue[0],Be=be*A,ze=be*Ke,pe=se/(-A+Ke),Ne=pe*-A;if(ee.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ne),H.translateZ(pe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ve[10]===-1)H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Me=be+pe,Le=qe+pe,Ze=Be-Ne,T=ze+(se-Ne),g=Xe*qe/Le*Me,U=De*qe/Le*Me;H.projectionMatrix.makePerspective(Ze,T,g,U,Me,Le),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function ae(H,ee){ee===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ee.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let ee=H.near,ge=H.far;v.texture!==null&&(v.depthNear>0&&(ee=v.depthNear),v.depthFar>0&&(ge=v.depthFar)),x.near=F.near=C.near=ee,x.far=F.far=C.far=ge,(w!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,z=x.far),C.layers.mask=H.layers.mask|2,F.layers.mask=H.layers.mask|4,x.layers.mask=C.layers.mask|F.layers.mask;const se=H.parent,ve=x.cameras;ae(x,se);for(let Ue=0;Ue<ve.length;Ue++)ae(ve[Ue],se);ve.length===2?V(x,C,F):x.projectionMatrix.copy(C.projectionMatrix),ce(H,x,se)};function ce(H,ee,ge){ge===null?H.matrix.copy(ee.matrixWorld):(H.matrix.copy(ge.matrixWorld),H.matrix.invert(),H.matrix.multiply(ee.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=RAD2DEG*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let Se=null;function Pe(H,ee){if(h=ee.getViewerPose(c||s),_=ee,h!==null){const ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let se=!1;ge.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let be=0;be<ge.length;be++){const qe=ge[be];let Xe=null;if(p!==null)Xe=p.getViewport(qe);else{const A=u.getViewSubImage(f,qe);Xe=A.viewport,be===0&&(e.setRenderTargetTextures(y,A.colorTexture,A.depthStencilTexture),e.setRenderTarget(y))}let De=E[be];De===void 0&&(De=new PerspectiveCamera,De.layers.enable(be),De.viewport=new Vector4,E[be]=De),De.matrix.fromArray(qe.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(qe.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),be===0&&(x.matrix.copy(De.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(De)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const be=u.getDepthInformation(ge[0]);be&&be.isValid&&be.texture&&v.init(e,be,r.renderState)}}for(let ge=0;ge<b.length;ge++){const se=M[ge],ve=b[ge];se!==null&&ve!==void 0&&ve.update(se,ee,c||s)}Se&&Se(H,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const Ge=new WebGLAnimation;Ge.setAnimationLoop(Pe),this.setAnimationLoop=function(H){Se=H},this.dispose=function(){}}}const _e1=new Euler,_m1=new Matrix4;function WebGLMaterials(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,getUnlitUniformColorSpace(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,y,b,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(m,d):d.isMeshToonMaterial?(a(m,d),u(m,d)):d.isMeshPhongMaterial?(a(m,d),h(m,d)):d.isMeshStandardMaterial?(a(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(a(m,d),_(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),v(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===BackSide&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===BackSide&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d),b=y.envMap,M=y.envMapRotation;b&&(m.envMap.value=b,_e1.copy(M),_e1.x*=-1,_e1.y*=-1,_e1.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(_e1.y*=-1,_e1.z*=-1),m.envMapRotation.value.setFromMatrix4(_m1.makeRotationFromEuler(_e1)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=b*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===BackSide&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WebGLUniformsGroups(t,e,n,i){let r={},a={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const M=b.program;i.uniformBlockBinding(y,M)}function c(y,b){let M=r[y.id];M===void 0&&(_(y),M=h(y),r[y.id]=M,y.addEventListener("dispose",m));const N=b.program;i.updateUBOMapping(y,N);const L=e.render.frame;a[y.id]!==L&&(f(y),a[y.id]=L)}function h(y){const b=u();y.__bindingPointIndex=b;const M=t.createBuffer(),N=y.__size,L=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,N,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,M),M}function u(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const b=r[y.id],M=y.uniforms,N=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let L=0,C=M.length;L<C;L++){const F=Array.isArray(M[L])?M[L]:[M[L]];for(let E=0,x=F.length;E<x;E++){const w=F[E];if(p(w,L,E,N)===!0){const z=w.__offset,O=Array.isArray(w.value)?w.value:[w.value];let X=0;for(let J=0;J<O.length;J++){const W=O[J],Z=v(W);typeof W=="number"||typeof W=="boolean"?(w.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,z+X,w.__data)):W.isMatrix3?(w.__data[0]=W.elements[0],w.__data[1]=W.elements[1],w.__data[2]=W.elements[2],w.__data[3]=0,w.__data[4]=W.elements[3],w.__data[5]=W.elements[4],w.__data[6]=W.elements[5],w.__data[7]=0,w.__data[8]=W.elements[6],w.__data[9]=W.elements[7],w.__data[10]=W.elements[8],w.__data[11]=0):(W.toArray(w.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,b,M,N){const L=y.value,C=b+"_"+M;if(N[C]===void 0)return typeof L=="number"||typeof L=="boolean"?N[C]=L:N[C]=L.clone(),!0;{const F=N[C];if(typeof L=="number"||typeof L=="boolean"){if(F!==L)return N[C]=L,!0}else if(F.equals(L)===!1)return F.copy(L),!0}return!1}function _(y){const b=y.uniforms;let M=0;const N=16;for(let C=0,F=b.length;C<F;C++){const E=Array.isArray(b[C])?b[C]:[b[C]];for(let x=0,w=E.length;x<w;x++){const z=E[x],O=Array.isArray(z.value)?z.value:[z.value];for(let X=0,J=O.length;X<J;X++){const W=O[X],Z=v(W),V=M%N,ae=V%Z.boundary,ce=V+ae;M+=ae,ce!==0&&N-ce<Z.storage&&(M+=N-ce),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=Z.storage}}}const L=M%N;return L>0&&(M+=N-L),y.__size=M,y.__cache={},this}function v(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const M=s.indexOf(b.__bindingPointIndex);s.splice(M,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function d(){for(const y in r)t.deleteBuffer(r[y]);s=[],r={},a={}}return{bind:l,update:c,dispose:d}}class WebGLRenderer{constructor(e={}){const{canvas:n=createCanvasElement(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const y=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=NoToneMapping,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let N=!1;this._outputColorSpace=SRGBColorSpace;let L=0,C=0,F=null,E=-1,x=null;const w=new Vector4,z=new Vector4;let O=null;const X=new Color(0);let J=0,W=n.width,Z=n.height,V=1,ae=null,ce=null;const Se=new Vector4(0,0,W,Z),Pe=new Vector4(0,0,W,Z);let Ge=!1;const H=new Frustum;let ee=!1,ge=!1;const se=new Matrix4,ve=new Matrix4,Ue=new Vector3,be=new Vector4,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function De(){return F===null?V:1}let A=i;function Ke(S,P){return n.getContext(S,P)}try{const S={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${REVISION}`),n.addEventListener("webglcontextlost",ue,!1),n.addEventListener("webglcontextrestored",Q,!1),n.addEventListener("webglcontextcreationerror",$,!1),A===null){const P="webgl2";if(A=Ke(P,S),A===null)throw Ke(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Be,ze,pe,Ne,Me,Le,Ze,T,g,U,k,q,G,me,ne,he,_e,Y,oe,Te,ye,te,Ce,R;function ie(){Be=new WebGLExtensions(A),Be.init(),te=new WebGLUtils(A,Be),ze=new WebGLCapabilities(A,Be,e,te),pe=new WebGLState(A,Be),ze.reverseDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),Ne=new WebGLInfo(A),Me=new WebGLProperties,Le=new WebGLTextures(A,Be,pe,Me,ze,te,Ne),Ze=new WebGLCubeMaps(M),T=new WebGLCubeUVMaps(M),g=new WebGLAttributes(A),Ce=new WebGLBindingStates(A,g),U=new WebGLGeometries(A,g,Ne,Ce),k=new WebGLObjects(A,U,g,Ne),oe=new WebGLMorphtargets(A,ze,Le),he=new WebGLClipping(Me),q=new WebGLPrograms(M,Ze,T,Be,ze,Ce,he),G=new WebGLMaterials(M,Me),me=new WebGLRenderLists,ne=new WebGLRenderStates(Be),Y=new WebGLBackground(M,Ze,T,pe,k,p,l),_e=new WebGLShadowMap(M,k,ze),R=new WebGLUniformsGroups(A,Ne,ze,pe),Te=new WebGLBufferRenderer(A,Be,Ne),ye=new WebGLIndexedBufferRenderer(A,Be,Ne),Ne.programs=q.programs,M.capabilities=ze,M.extensions=Be,M.properties=Me,M.renderLists=me,M.shadowMap=_e,M.state=pe,M.info=Ne}ie();const K=new WebXRManager(M,A);this.xr=K,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const S=Be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(W,Z,!1))},this.getSize=function(S){return S.set(W,Z)},this.setSize=function(S,P,D=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,Z=P,n.width=Math.floor(S*V),n.height=Math.floor(P*V),D===!0&&(n.style.width=S+"px",n.style.height=P+"px"),this.setViewport(0,0,S,P)},this.getDrawingBufferSize=function(S){return S.set(W*V,Z*V).floor()},this.setDrawingBufferSize=function(S,P,D){W=S,Z=P,V=D,n.width=Math.floor(S*D),n.height=Math.floor(P*D),this.setViewport(0,0,S,P)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(Se)},this.setViewport=function(S,P,D,B){S.isVector4?Se.set(S.x,S.y,S.z,S.w):Se.set(S,P,D,B),pe.viewport(w.copy(Se).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(Pe)},this.setScissor=function(S,P,D,B){S.isVector4?Pe.set(S.x,S.y,S.z,S.w):Pe.set(S,P,D,B),pe.scissor(z.copy(Pe).multiplyScalar(V).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(S){pe.setScissorTest(Ge=S)},this.setOpaqueSort=function(S){ae=S},this.setTransparentSort=function(S){ce=S},this.getClearColor=function(S){return S.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor(...arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha(...arguments)},this.clear=function(S=!0,P=!0,D=!0){let B=0;if(S){let I=!1;if(F!==null){const j=F.texture.format;I=j===RGBAIntegerFormat||j===RGIntegerFormat||j===RedIntegerFormat}if(I){const j=F.texture.type,re=j===UnsignedByteType||j===UnsignedIntType||j===UnsignedShortType||j===UnsignedInt248Type||j===UnsignedShort4444Type||j===UnsignedShort5551Type,de=Y.getClearColor(),le=Y.getClearAlpha(),Ae=de.r,Re=de.g,xe=de.b;re?(_[0]=Ae,_[1]=Re,_[2]=xe,_[3]=le,A.clearBufferuiv(A.COLOR,0,_)):(v[0]=Ae,v[1]=Re,v[2]=xe,v[3]=le,A.clearBufferiv(A.COLOR,0,v))}else B|=A.COLOR_BUFFER_BIT}P&&(B|=A.DEPTH_BUFFER_BIT),D&&(B|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ue,!1),n.removeEventListener("webglcontextrestored",Q,!1),n.removeEventListener("webglcontextcreationerror",$,!1),Y.dispose(),me.dispose(),ne.dispose(),Me.dispose(),Ze.dispose(),T.dispose(),k.dispose(),Ce.dispose(),R.dispose(),q.dispose(),K.dispose(),K.removeEventListener("sessionstart",pt),K.removeEventListener("sessionend",mt),st.stop()};function ue(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const S=Ne.autoReset,P=_e.enabled,D=_e.autoUpdate,B=_e.needsUpdate,I=_e.type;ie(),Ne.autoReset=S,_e.enabled=P,_e.autoUpdate=D,_e.needsUpdate=B,_e.type=I}function $(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function fe(S){const P=S.target;P.removeEventListener("dispose",fe),we(P)}function we(S){He(S),Me.remove(S)}function He(S){const P=Me.get(S).programs;P!==void 0&&(P.forEach(function(D){q.releaseProgram(D)}),S.isShaderMaterial&&q.releaseShaderCache(S))}this.renderBufferDirect=function(S,P,D,B,I,j){P===null&&(P=qe);const re=I.isMesh&&I.matrixWorld.determinant()<0,de=Mt(S,P,D,B,I);pe.setMaterial(B,re);let le=D.index,Ae=1;if(B.wireframe===!0){if(le=U.getWireframeAttribute(D),le===void 0)return;Ae=2}const Re=D.drawRange,xe=D.attributes.position;let Ie=Re.start*Ae,Ve=(Re.start+Re.count)*Ae;j!==null&&(Ie=Math.max(Ie,j.start*Ae),Ve=Math.min(Ve,(j.start+j.count)*Ae)),le!==null?(Ie=Math.max(Ie,0),Ve=Math.min(Ve,le.count)):xe!=null&&(Ie=Math.max(Ie,0),Ve=Math.min(Ve,xe.count));const Ye=Ve-Ie;if(Ye<0||Ye===1/0)return;Ce.setup(I,B,de,D,le);let We,ke=Te;if(le!==null&&(We=g.get(le),ke=ye,ke.setIndex(We)),I.isMesh)B.wireframe===!0?(pe.setLineWidth(B.wireframeLinewidth*De()),ke.setMode(A.LINES)):ke.setMode(A.TRIANGLES);else if(I.isLine){let Ee=B.linewidth;Ee===void 0&&(Ee=1),pe.setLineWidth(Ee*De()),I.isLineSegments?ke.setMode(A.LINES):I.isLineLoop?ke.setMode(A.LINE_LOOP):ke.setMode(A.LINE_STRIP)}else I.isPoints?ke.setMode(A.POINTS):I.isSprite&&ke.setMode(A.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)warnOnce("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ke.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))ke.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Ee=I._multiDrawStarts,Je=I._multiDrawCounts,Fe=I._multiDrawCount,et=le?g.get(le).bytesPerElement:1,lt=Me.get(B).currentProgram.getUniforms();for(let tt=0;tt<Fe;tt++)lt.setValue(A,"_gl_DrawID",tt),ke.render(Ee[tt]/et,Je[tt])}else if(I.isInstancedMesh)ke.renderInstances(Ie,Ye,I.count);else if(D.isInstancedBufferGeometry){const Ee=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,Je=Math.min(D.instanceCount,Ee);ke.renderInstances(Ie,Ye,Je)}else ke.render(Ie,Ye)};function Oe(S,P,D){S.transparent===!0&&S.side===DoubleSide&&S.forceSinglePass===!1?(S.side=BackSide,S.needsUpdate=!0,ft(S,P,D),S.side=FrontSide,S.needsUpdate=!0,ft(S,P,D),S.side=DoubleSide):ft(S,P,D)}this.compile=function(S,P,D=null){D===null&&(D=S),d=ne.get(D),d.init(P),b.push(d),D.traverseVisible(function(I){I.isLight&&I.layers.test(P.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),S!==D&&S.traverseVisible(function(I){I.isLight&&I.layers.test(P.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights();const B=new Set;return S.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const j=I.material;if(j)if(Array.isArray(j))for(let re=0;re<j.length;re++){const de=j[re];Oe(de,D,I),B.add(de)}else Oe(j,D,I),B.add(j)}),d=b.pop(),B},this.compileAsync=function(S,P,D=null){const B=this.compile(S,P,D);return new Promise(I=>{function j(){if(B.forEach(function(re){Me.get(re).currentProgram.isReady()&&B.delete(re)}),B.size===0){I(S);return}setTimeout(j,10)}Be.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let rt=null;function at(S){rt&&rt(S)}function pt(){st.stop()}function mt(){st.start()}const st=new WebGLAnimation;st.setAnimationLoop(at),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(S){rt=S,K.setAnimationLoop(S),S===null?st.stop():st.start()},K.addEventListener("sessionstart",pt),K.addEventListener("sessionend",mt),this.render=function(S,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(P),P=K.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,P,F),d=ne.get(S,b.length),d.init(P),b.push(d),ve.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),H.setFromProjectionMatrix(ve),ge=this.localClippingEnabled,ee=he.init(this.clippingPlanes,ge),m=me.get(S,y.length),m.init(),y.push(m),K.enabled===!0&&K.isPresenting===!0){const j=M.xr.getDepthSensingMesh();j!==null&&dt(j,P,-1/0,M.sortObjects)}dt(S,P,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ae,ce),Xe=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Xe&&Y.addToRenderList(m,S),this.info.render.frame++,ee===!0&&he.beginShadows();const D=d.state.shadowsArray;_e.render(D,S,P),ee===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,I=m.transmissive;if(d.setupLights(),P.isArrayCamera){const j=P.cameras;if(I.length>0)for(let re=0,de=j.length;re<de;re++){const le=j[re];gt(B,I,S,le)}Xe&&Y.render(S);for(let re=0,de=j.length;re<de;re++){const le=j[re];_t(m,S,le,le.viewport)}}else I.length>0&&gt(B,I,S,P),Xe&&Y.render(S),_t(m,S,P);F!==null&&C===0&&(Le.updateMultisampleRenderTarget(F),Le.updateRenderTargetMipmap(F)),S.isScene===!0&&S.onAfterRender(M,S,P),Ce.resetDefaultState(),E=-1,x=null,b.pop(),b.length>0?(d=b[b.length-1],ee===!0&&he.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function dt(S,P,D,B){if(S.visible===!1)return;if(S.layers.test(P.layers)){if(S.isGroup)D=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(P);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||H.intersectsSprite(S)){B&&be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);const re=k.update(S),de=S.material;de.visible&&m.push(S,re,de,D,be.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||H.intersectsObject(S))){const re=k.update(S),de=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),be.copy(S.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),be.copy(re.boundingSphere.center)),be.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(de)){const le=re.groups;for(let Ae=0,Re=le.length;Ae<Re;Ae++){const xe=le[Ae],Ie=de[xe.materialIndex];Ie&&Ie.visible&&m.push(S,re,Ie,D,be.z,xe)}}else de.visible&&m.push(S,re,de,D,be.z,null)}}const j=S.children;for(let re=0,de=j.length;re<de;re++)dt(j[re],P,D,B)}function _t(S,P,D,B){const I=S.opaque,j=S.transmissive,re=S.transparent;d.setupLightsView(D),ee===!0&&he.setGlobalState(M.clippingPlanes,D),B&&pe.viewport(w.copy(B)),I.length>0&&ut(I,P,D),j.length>0&&ut(j,P,D),re.length>0&&ut(re,P,D),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function gt(S,P,D,B){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[B.id]===void 0&&(d.state.transmissionRenderTarget[B.id]=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ColorManagement.workingColorSpace}));const j=d.state.transmissionRenderTarget[B.id],re=B.viewport||w;j.setSize(re.z*M.transmissionResolutionScale,re.w*M.transmissionResolutionScale);const de=M.getRenderTarget(),le=M.getActiveCubeFace(),Ae=M.getActiveMipmapLevel();M.setRenderTarget(j),M.getClearColor(X),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),Xe&&Y.render(D);const Re=M.toneMapping;M.toneMapping=NoToneMapping;const xe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),d.setupLightsView(B),ee===!0&&he.setGlobalState(M.clippingPlanes,B),ut(S,D,B),Le.updateMultisampleRenderTarget(j),Le.updateRenderTargetMipmap(j),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Ve=0,Ye=P.length;Ve<Ye;Ve++){const We=P[Ve],ke=We.object,Ee=We.geometry,Je=We.material,Fe=We.group;if(Je.side===DoubleSide&&ke.layers.test(B.layers)){const et=Je.side;Je.side=BackSide,Je.needsUpdate=!0,vt(ke,D,B,Ee,Je,Fe),Je.side=et,Je.needsUpdate=!0,Ie=!0}}Ie===!0&&(Le.updateMultisampleRenderTarget(j),Le.updateRenderTargetMipmap(j))}M.setRenderTarget(de,le,Ae),M.setClearColor(X,J),xe!==void 0&&(B.viewport=xe),M.toneMapping=Re}function ut(S,P,D){const B=P.isScene===!0?P.overrideMaterial:null;for(let I=0,j=S.length;I<j;I++){const re=S[I],de=re.object,le=re.geometry,Ae=re.group;let Re=re.material;Re.allowOverride===!0&&B!==null&&(Re=B),de.layers.test(D.layers)&&vt(de,P,D,le,Re,Ae)}}function vt(S,P,D,B,I,j){S.onBeforeRender(M,P,D,B,I,j),S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),I.onBeforeRender(M,P,D,B,S,j),I.transparent===!0&&I.side===DoubleSide&&I.forceSinglePass===!1?(I.side=BackSide,I.needsUpdate=!0,M.renderBufferDirect(D,P,B,I,S,j),I.side=FrontSide,I.needsUpdate=!0,M.renderBufferDirect(D,P,B,I,S,j),I.side=DoubleSide):M.renderBufferDirect(D,P,B,I,S,j),S.onAfterRender(M,P,D,B,I,j)}function ft(S,P,D){P.isScene!==!0&&(P=qe);const B=Me.get(S),I=d.state.lights,j=d.state.shadowsArray,re=I.state.version,de=q.getParameters(S,I.state,j,P,D),le=q.getProgramCacheKey(de);let Ae=B.programs;B.environment=S.isMeshStandardMaterial?P.environment:null,B.fog=P.fog,B.envMap=(S.isMeshStandardMaterial?T:Ze).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?P.environmentRotation:S.envMapRotation,Ae===void 0&&(S.addEventListener("dispose",fe),Ae=new Map,B.programs=Ae);let Re=Ae.get(le);if(Re!==void 0){if(B.currentProgram===Re&&B.lightsStateVersion===re)return xt(S,de),Re}else de.uniforms=q.getUniforms(S),S.onBeforeCompile(de,M),Re=q.acquireProgram(de,le),Ae.set(le,Re),B.uniforms=de.uniforms;const xe=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(xe.clippingPlanes=he.uniform),xt(S,de),B.needsLights=yt(S),B.lightsStateVersion=re,B.needsLights&&(xe.ambientLightColor.value=I.state.ambient,xe.lightProbe.value=I.state.probe,xe.directionalLights.value=I.state.directional,xe.directionalLightShadows.value=I.state.directionalShadow,xe.spotLights.value=I.state.spot,xe.spotLightShadows.value=I.state.spotShadow,xe.rectAreaLights.value=I.state.rectArea,xe.ltc_1.value=I.state.rectAreaLTC1,xe.ltc_2.value=I.state.rectAreaLTC2,xe.pointLights.value=I.state.point,xe.pointLightShadows.value=I.state.pointShadow,xe.hemisphereLights.value=I.state.hemi,xe.directionalShadowMap.value=I.state.directionalShadowMap,xe.directionalShadowMatrix.value=I.state.directionalShadowMatrix,xe.spotShadowMap.value=I.state.spotShadowMap,xe.spotLightMatrix.value=I.state.spotLightMatrix,xe.spotLightMap.value=I.state.spotLightMap,xe.pointShadowMap.value=I.state.pointShadowMap,xe.pointShadowMatrix.value=I.state.pointShadowMatrix),B.currentProgram=Re,B.uniformsList=null,Re}function St(S){if(S.uniformsList===null){const P=S.currentProgram.getUniforms();S.uniformsList=WebGLUniforms.seqWithValue(P.seq,S.uniforms)}return S.uniformsList}function xt(S,P){const D=Me.get(S);D.outputColorSpace=P.outputColorSpace,D.batching=P.batching,D.batchingColor=P.batchingColor,D.instancing=P.instancing,D.instancingColor=P.instancingColor,D.instancingMorph=P.instancingMorph,D.skinning=P.skinning,D.morphTargets=P.morphTargets,D.morphNormals=P.morphNormals,D.morphColors=P.morphColors,D.morphTargetsCount=P.morphTargetsCount,D.numClippingPlanes=P.numClippingPlanes,D.numIntersection=P.numClipIntersection,D.vertexAlphas=P.vertexAlphas,D.vertexTangents=P.vertexTangents,D.toneMapping=P.toneMapping}function Mt(S,P,D,B,I){P.isScene!==!0&&(P=qe),Le.resetTextureUnits();const j=P.fog,re=B.isMeshStandardMaterial?P.environment:null,de=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:LinearSRGBColorSpace,le=(B.isMeshStandardMaterial?T:Ze).get(B.envMap||re),Ae=B.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Re=!!D.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),xe=!!D.morphAttributes.position,Ie=!!D.morphAttributes.normal,Ve=!!D.morphAttributes.color;let Ye=NoToneMapping;B.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ye=M.toneMapping);const We=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ke=We!==void 0?We.length:0,Ee=Me.get(B),Je=d.state.lights;if(ee===!0&&(ge===!0||S!==x)){const Qe=S===x&&B.id===E;he.setState(B,S,Qe)}let Fe=!1;B.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Je.state.version||Ee.outputColorSpace!==de||I.isBatchedMesh&&Ee.batching===!1||!I.isBatchedMesh&&Ee.batching===!0||I.isBatchedMesh&&Ee.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ee.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ee.instancing===!1||!I.isInstancedMesh&&Ee.instancing===!0||I.isSkinnedMesh&&Ee.skinning===!1||!I.isSkinnedMesh&&Ee.skinning===!0||I.isInstancedMesh&&Ee.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ee.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ee.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ee.instancingMorph===!1&&I.morphTexture!==null||Ee.envMap!==le||B.fog===!0&&Ee.fog!==j||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==he.numPlanes||Ee.numIntersection!==he.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==Re||Ee.morphTargets!==xe||Ee.morphNormals!==Ie||Ee.morphColors!==Ve||Ee.toneMapping!==Ye||Ee.morphTargetsCount!==ke)&&(Fe=!0):(Fe=!0,Ee.__version=B.version);let et=Ee.currentProgram;Fe===!0&&(et=ft(B,P,I));let lt=!1,tt=!1,ct=!1;const $e=et.getUniforms(),nt=Ee.uniforms;if(pe.useProgram(et.program)&&(lt=!0,tt=!0,ct=!0),B.id!==E&&(E=B.id,tt=!0),lt||x!==S){pe.buffers.depth.getReversed()?(se.copy(S.projectionMatrix),toNormalizedProjectionMatrix(se),toReversedProjectionMatrix(se),$e.setValue(A,"projectionMatrix",se)):$e.setValue(A,"projectionMatrix",S.projectionMatrix),$e.setValue(A,"viewMatrix",S.matrixWorldInverse);const je=$e.map.cameraPosition;je!==void 0&&je.setValue(A,Ue.setFromMatrixPosition(S.matrixWorld)),ze.logarithmicDepthBuffer&&$e.setValue(A,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&$e.setValue(A,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,tt=!0,ct=!0)}if(I.isSkinnedMesh){$e.setOptional(A,I,"bindMatrix"),$e.setOptional(A,I,"bindMatrixInverse");const Qe=I.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),$e.setValue(A,"boneTexture",Qe.boneTexture,Le))}I.isBatchedMesh&&($e.setOptional(A,I,"batchingTexture"),$e.setValue(A,"batchingTexture",I._matricesTexture,Le),$e.setOptional(A,I,"batchingIdTexture"),$e.setValue(A,"batchingIdTexture",I._indirectTexture,Le),$e.setOptional(A,I,"batchingColorTexture"),I._colorsTexture!==null&&$e.setValue(A,"batchingColorTexture",I._colorsTexture,Le));const it=D.morphAttributes;if((it.position!==void 0||it.normal!==void 0||it.color!==void 0)&&oe.update(I,D,et),(tt||Ee.receiveShadow!==I.receiveShadow)&&(Ee.receiveShadow=I.receiveShadow,$e.setValue(A,"receiveShadow",I.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(nt.envMap.value=le,nt.flipEnvMap.value=le.isCubeTexture&&le.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&P.environment!==null&&(nt.envMapIntensity.value=P.environmentIntensity),tt&&($e.setValue(A,"toneMappingExposure",M.toneMappingExposure),Ee.needsLights&&Et(nt,ct),j&&B.fog===!0&&G.refreshFogUniforms(nt,j),G.refreshMaterialUniforms(nt,B,V,Z,d.state.transmissionRenderTarget[S.id]),WebGLUniforms.upload(A,St(Ee),nt,Le)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(A,St(Ee),nt,Le),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&$e.setValue(A,"center",I.center),$e.setValue(A,"modelViewMatrix",I.modelViewMatrix),$e.setValue(A,"normalMatrix",I.normalMatrix),$e.setValue(A,"modelMatrix",I.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Qe=B.uniformsGroups;for(let je=0,ht=Qe.length;je<ht;je++){const ot=Qe[je];R.update(ot,et),R.bind(ot,et)}}return et}function Et(S,P){S.ambientLightColor.needsUpdate=P,S.lightProbe.needsUpdate=P,S.directionalLights.needsUpdate=P,S.directionalLightShadows.needsUpdate=P,S.pointLights.needsUpdate=P,S.pointLightShadows.needsUpdate=P,S.spotLights.needsUpdate=P,S.spotLightShadows.needsUpdate=P,S.rectAreaLights.needsUpdate=P,S.hemisphereLights.needsUpdate=P}function yt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(S,P,D){const B=Me.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Me.get(S.texture).__webglTexture=P,Me.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:D,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,P){const D=Me.get(S);D.__webglFramebuffer=P,D.__useDefaultFramebuffer=P===void 0};const Tt=A.createFramebuffer();this.setRenderTarget=function(S,P=0,D=0){F=S,L=P,C=D;let B=!0,I=null,j=!1,re=!1;if(S){const le=Me.get(S);if(le.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(A.FRAMEBUFFER,null),B=!1;else if(le.__webglFramebuffer===void 0)Le.setupRenderTarget(S);else if(le.__hasExternalTextures)Le.rebindTextures(S,Me.get(S.texture).__webglTexture,Me.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const xe=S.depthTexture;if(le.__boundDepthTexture!==xe){if(xe!==null&&Me.has(xe)&&(S.width!==xe.image.width||S.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(S)}}const Ae=S.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(re=!0);const Re=Me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Re[P])?I=Re[P][D]:I=Re[P],j=!0):S.samples>0&&Le.useMultisampledRTT(S)===!1?I=Me.get(S).__webglMultisampledFramebuffer:Array.isArray(Re)?I=Re[D]:I=Re,w.copy(S.viewport),z.copy(S.scissor),O=S.scissorTest}else w.copy(Se).multiplyScalar(V).floor(),z.copy(Pe).multiplyScalar(V).floor(),O=Ge;if(D!==0&&(I=Tt),pe.bindFramebuffer(A.FRAMEBUFFER,I)&&B&&pe.drawBuffers(S,I),pe.viewport(w),pe.scissor(z),pe.setScissorTest(O),j){const le=Me.get(S.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+P,le.__webglTexture,D)}else if(re){const le=Me.get(S.texture),Ae=P;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,le.__webglTexture,D,Ae)}else if(S!==null&&D!==0){const le=Me.get(S.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,le.__webglTexture,D)}E=-1},this.readRenderTargetPixels=function(S,P,D,B,I,j,re,de=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let le=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&re!==void 0&&(le=le[re]),le){pe.bindFramebuffer(A.FRAMEBUFFER,le);try{const Ae=S.textures[de],Re=Ae.format,xe=Ae.type;if(!ze.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=S.width-B&&D>=0&&D<=S.height-I&&(S.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+de),A.readPixels(P,D,B,I,te.convert(Re),te.convert(xe),j))}finally{const Ae=F!==null?Me.get(F).__webglFramebuffer:null;pe.bindFramebuffer(A.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(S,P,D,B,I,j,re,de=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let le=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&re!==void 0&&(le=le[re]),le)if(P>=0&&P<=S.width-B&&D>=0&&D<=S.height-I){pe.bindFramebuffer(A.FRAMEBUFFER,le);const Ae=S.textures[de],Re=Ae.format,xe=Ae.type;if(!ze.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ie),A.bufferData(A.PIXEL_PACK_BUFFER,j.byteLength,A.STREAM_READ),S.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+de),A.readPixels(P,D,B,I,te.convert(Re),te.convert(xe),0);const Ve=F!==null?Me.get(F).__webglFramebuffer:null;pe.bindFramebuffer(A.FRAMEBUFFER,Ve);const Ye=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await probeAsync(A,Ye,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ie),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,j),A.deleteBuffer(Ie),A.deleteSync(Ye),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,P=null,D=0){const B=Math.pow(2,-D),I=Math.floor(S.image.width*B),j=Math.floor(S.image.height*B),re=P!==null?P.x:0,de=P!==null?P.y:0;Le.setTexture2D(S,0),A.copyTexSubImage2D(A.TEXTURE_2D,D,0,0,re,de,I,j),pe.unbindTexture()};const bt=A.createFramebuffer(),At=A.createFramebuffer();this.copyTextureToTexture=function(S,P,D=null,B=null,I=0,j=null){j===null&&(I!==0?(warnOnce("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),j=I,I=0):j=0);let re,de,le,Ae,Re,xe,Ie,Ve,Ye;const We=S.isCompressedTexture?S.mipmaps[j]:S.image;if(D!==null)re=D.max.x-D.min.x,de=D.max.y-D.min.y,le=D.isBox3?D.max.z-D.min.z:1,Ae=D.min.x,Re=D.min.y,xe=D.isBox3?D.min.z:0;else{const it=Math.pow(2,-I);re=Math.floor(We.width*it),de=Math.floor(We.height*it),S.isDataArrayTexture?le=We.depth:S.isData3DTexture?le=Math.floor(We.depth*it):le=1,Ae=0,Re=0,xe=0}B!==null?(Ie=B.x,Ve=B.y,Ye=B.z):(Ie=0,Ve=0,Ye=0);const ke=te.convert(P.format),Ee=te.convert(P.type);let Je;P.isData3DTexture?(Le.setTexture3D(P,0),Je=A.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Le.setTexture2DArray(P,0),Je=A.TEXTURE_2D_ARRAY):(Le.setTexture2D(P,0),Je=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,P.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,P.unpackAlignment);const Fe=A.getParameter(A.UNPACK_ROW_LENGTH),et=A.getParameter(A.UNPACK_IMAGE_HEIGHT),lt=A.getParameter(A.UNPACK_SKIP_PIXELS),tt=A.getParameter(A.UNPACK_SKIP_ROWS),ct=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,We.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,We.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ae),A.pixelStorei(A.UNPACK_SKIP_ROWS,Re),A.pixelStorei(A.UNPACK_SKIP_IMAGES,xe);const $e=S.isDataArrayTexture||S.isData3DTexture,nt=P.isDataArrayTexture||P.isData3DTexture;if(S.isDepthTexture){const it=Me.get(S),Qe=Me.get(P),je=Me.get(it.__renderTarget),ht=Me.get(Qe.__renderTarget);pe.bindFramebuffer(A.READ_FRAMEBUFFER,je.__webglFramebuffer),pe.bindFramebuffer(A.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ot=0;ot<le;ot++)$e&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Me.get(S).__webglTexture,I,xe+ot),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Me.get(P).__webglTexture,j,Ye+ot)),A.blitFramebuffer(Ae,Re,re,de,Ie,Ve,re,de,A.DEPTH_BUFFER_BIT,A.NEAREST);pe.bindFramebuffer(A.READ_FRAMEBUFFER,null),pe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(I!==0||S.isRenderTargetTexture||Me.has(S)){const it=Me.get(S),Qe=Me.get(P);pe.bindFramebuffer(A.READ_FRAMEBUFFER,bt),pe.bindFramebuffer(A.DRAW_FRAMEBUFFER,At);for(let je=0;je<le;je++)$e?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,it.__webglTexture,I,xe+je):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,it.__webglTexture,I),nt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Qe.__webglTexture,j,Ye+je):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Qe.__webglTexture,j),I!==0?A.blitFramebuffer(Ae,Re,re,de,Ie,Ve,re,de,A.COLOR_BUFFER_BIT,A.NEAREST):nt?A.copyTexSubImage3D(Je,j,Ie,Ve,Ye+je,Ae,Re,re,de):A.copyTexSubImage2D(Je,j,Ie,Ve,Ae,Re,re,de);pe.bindFramebuffer(A.READ_FRAMEBUFFER,null),pe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else nt?S.isDataTexture||S.isData3DTexture?A.texSubImage3D(Je,j,Ie,Ve,Ye,re,de,le,ke,Ee,We.data):P.isCompressedArrayTexture?A.compressedTexSubImage3D(Je,j,Ie,Ve,Ye,re,de,le,ke,We.data):A.texSubImage3D(Je,j,Ie,Ve,Ye,re,de,le,ke,Ee,We):S.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,j,Ie,Ve,re,de,ke,Ee,We.data):S.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,j,Ie,Ve,We.width,We.height,ke,We.data):A.texSubImage2D(A.TEXTURE_2D,j,Ie,Ve,re,de,ke,Ee,We);A.pixelStorei(A.UNPACK_ROW_LENGTH,Fe),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,et),A.pixelStorei(A.UNPACK_SKIP_PIXELS,lt),A.pixelStorei(A.UNPACK_SKIP_ROWS,tt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ct),j===0&&P.generateMipmaps&&A.generateMipmap(Je),pe.unbindTexture()},this.copyTextureToTexture3D=function(S,P,D=null,B=null,I=0){return warnOnce('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,P,D,B,I)},this.initRenderTarget=function(S){Me.get(S).__webglFramebuffer===void 0&&Le.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Le.setTextureCube(S,0):S.isData3DTexture?Le.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Le.setTexture2DArray(S,0):Le.setTexture2D(S,0),pe.unbindTexture()},this.resetState=function(){L=0,C=0,F=null,pe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WebGLCoordinateSystem}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ColorManagement._getDrawingBufferColorSpace(e),n.unpackColorSpace=ColorManagement._getUnpackColorSpace()}}function assert(t,e){if(!t)throw Error(e)}var T_PREFIX;(function(t){t.COMMENT="t1_",t.ACCOUNT="t2_",t.LINK="t3_",t.MESSAGE="t4_",t.SUBREDDIT="t5_",t.AWARD="t6_"})(T_PREFIX||(T_PREFIX={}));function isT2(t){return t.startsWith(T_PREFIX.ACCOUNT)}function isT3(t){return t.startsWith(T_PREFIX.LINK)}function isT5(t){return t.startsWith(T_PREFIX.SUBREDDIT)}function assertT2(t){assert(isT2(t),`Expected account id to start with ${T_PREFIX.ACCOUNT}, got ${t}}`)}function assertT3(t){assert(isT3(t),`Expected link id to start with ${T_PREFIX.LINK}, got ${t}}`)}function assertT5(t){assert(isT5(t),`Expected subreddit id to start with ${T_PREFIX.SUBREDDIT}, got ${t}}`)}function T2(t){return assertT2(t),t}function T3(t){return assertT3(t),t}function T5(t){return assertT5(t),t}const noWebbitToken="0.0.0";class InvalidTokenError extends Error{}InvalidTokenError.prototype.name="InvalidTokenError";function b64DecodeUnicode(t){return decodeURIComponent(atob(t).replace(/(.)/g,(e,n)=>{let i=n.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i}))}function base64UrlDecode(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return b64DecodeUnicode(e)}catch{return atob(e)}}function jwtDecode(t,e){if(typeof t!="string")throw new InvalidTokenError("Invalid token specified: must be a string");e||(e={});const n=e.header===!0?0:1,i=t.split(".")[n];if(typeof i!="string")throw new InvalidTokenError(`Invalid token specified: missing part #${n+1}`);let r;try{r=base64UrlDecode(i)}catch(a){throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${n+1} (${a.message})`)}try{return JSON.parse(r)}catch(a){throw new InvalidTokenError(`Invalid token specified: invalid json for part #${n+1} (${a.message})`)}}const _initContext=({search:t,hash:e})=>{const n=new URLSearchParams(t).get("context");if(n){const i=decodeURIComponent(n),r=JSON.parse(i),a=getBridgeContextFromHash(e),s=(a==null?void 0:a.webbitToken)??new URLSearchParams(t).get("webbit_token"),o=s?getPostDataFromWebbitToken(s):void 0,l={subredditId:T5(r.subredditId),userId:r.userId?T2(r.userId):void 0,subredditName:r.subredditName,appName:r.appName,appVersion:r.appVersion,postId:T3(r.postId),postData:o==null?void 0:o.developerData};globalThis.devvit={context:l,share:a!=null&&a.shareParam?{userData:a==null?void 0:a.shareParam.userData}:void 0}}};globalThis.location&&_initContext(globalThis.location);function getBridgeContextFromHash(t){const e=t==null?void 0:t.slice(1);if(e)try{return JSON.parse(decodeURIComponent(e))}catch(n){console.error("Error parsing bridge context from hash",n);return}}function getPostDataFromWebbitToken(t){if(t===noWebbitToken)return;let e;try{e=jwtDecode(t)}catch(i){console.error("Failed to parse jwt:",i);return}const n=e["devvit-post-data"];if(!(!n||Object.keys(n).length===0))return n}new Proxy({},{get:(t,e)=>globalThis.devvit.context[e],ownKeys(){return Object.keys(globalThis.devvit.context)},getOwnPropertyDescriptor(t,e){return{enumerable:!0,configurable:!0,value:globalThis.devvit.context[e]}}});var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var indexMinimal={},minimal$1={},aspromise,hasRequiredAspromise;function requireAspromise(){if(hasRequiredAspromise)return aspromise;hasRequiredAspromise=1,aspromise=t;function t(e,n){for(var i=new Array(arguments.length-1),r=0,a=2,s=!0;a<arguments.length;)i[r++]=arguments[a++];return new Promise(function(l,c){i[r]=function(u){if(s)if(s=!1,u)c(u);else{for(var f=new Array(arguments.length-1),p=0;p<f.length;)f[p++]=arguments[p];l.apply(null,f)}};try{e.apply(n||null,i)}catch(h){s&&(s=!1,c(h))}})}return aspromise}var base64={},hasRequiredBase64;function requireBase64(){return hasRequiredBase64||(hasRequiredBase64=1,function(t){var e=t;e.length=function(o){var l=o.length;if(!l)return 0;for(var c=0;--l%4>1&&o.charAt(l)==="=";)++c;return Math.ceil(o.length*3)/4-c};for(var n=new Array(64),i=new Array(123),r=0;r<64;)i[n[r]=r<26?r+65:r<52?r+71:r<62?r-4:r-59|43]=r++;e.encode=function(o,l,c){for(var h=null,u=[],f=0,p=0,_;l<c;){var v=o[l++];switch(p){case 0:u[f++]=n[v>>2],_=(v&3)<<4,p=1;break;case 1:u[f++]=n[_|v>>4],_=(v&15)<<2,p=2;break;case 2:u[f++]=n[_|v>>6],u[f++]=n[v&63],p=0;break}f>8191&&((h||(h=[])).push(String.fromCharCode.apply(String,u)),f=0)}return p&&(u[f++]=n[_],u[f++]=61,p===1&&(u[f++]=61)),h?(f&&h.push(String.fromCharCode.apply(String,u.slice(0,f))),h.join("")):String.fromCharCode.apply(String,u.slice(0,f))};var a="invalid encoding";e.decode=function(o,l,c){for(var h=c,u=0,f,p=0;p<o.length;){var _=o.charCodeAt(p++);if(_===61&&u>1)break;if((_=i[_])===void 0)throw Error(a);switch(u){case 0:f=_,u=1;break;case 1:l[c++]=f<<2|(_&48)>>4,f=_,u=2;break;case 2:l[c++]=(f&15)<<4|(_&60)>>2,f=_,u=3;break;case 3:l[c++]=(f&3)<<6|_,u=0;break}}if(u===1)throw Error(a);return c-h},e.test=function(o){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(o)}}(base64)),base64}var eventemitter,hasRequiredEventemitter;function requireEventemitter(){if(hasRequiredEventemitter)return eventemitter;hasRequiredEventemitter=1,eventemitter=t;function t(){this._listeners={}}return t.prototype.on=function(n,i,r){return(this._listeners[n]||(this._listeners[n]=[])).push({fn:i,ctx:r||this}),this},t.prototype.off=function(n,i){if(n===void 0)this._listeners={};else if(i===void 0)this._listeners[n]=[];else for(var r=this._listeners[n],a=0;a<r.length;)r[a].fn===i?r.splice(a,1):++a;return this},t.prototype.emit=function(n){var i=this._listeners[n];if(i){for(var r=[],a=1;a<arguments.length;)r.push(arguments[a++]);for(a=0;a<i.length;)i[a].fn.apply(i[a++].ctx,r)}return this},eventemitter}var float,hasRequiredFloat;function requireFloat(){if(hasRequiredFloat)return float;hasRequiredFloat=1,float=t(t);function t(a){return typeof Float32Array<"u"?function(){var s=new Float32Array([-0]),o=new Uint8Array(s.buffer),l=o[3]===128;function c(p,_,v){s[0]=p,_[v]=o[0],_[v+1]=o[1],_[v+2]=o[2],_[v+3]=o[3]}function h(p,_,v){s[0]=p,_[v]=o[3],_[v+1]=o[2],_[v+2]=o[1],_[v+3]=o[0]}a.writeFloatLE=l?c:h,a.writeFloatBE=l?h:c;function u(p,_){return o[0]=p[_],o[1]=p[_+1],o[2]=p[_+2],o[3]=p[_+3],s[0]}function f(p,_){return o[3]=p[_],o[2]=p[_+1],o[1]=p[_+2],o[0]=p[_+3],s[0]}a.readFloatLE=l?u:f,a.readFloatBE=l?f:u}():function(){function s(l,c,h,u){var f=c<0?1:0;if(f&&(c=-c),c===0)l(1/c>0?0:2147483648,h,u);else if(isNaN(c))l(2143289344,h,u);else if(c>34028234663852886e22)l((f<<31|2139095040)>>>0,h,u);else if(c<11754943508222875e-54)l((f<<31|Math.round(c/1401298464324817e-60))>>>0,h,u);else{var p=Math.floor(Math.log(c)/Math.LN2),_=Math.round(c*Math.pow(2,-p)*8388608)&8388607;l((f<<31|p+127<<23|_)>>>0,h,u)}}a.writeFloatLE=s.bind(null,e),a.writeFloatBE=s.bind(null,n);function o(l,c,h){var u=l(c,h),f=(u>>31)*2+1,p=u>>>23&255,_=u&8388607;return p===255?_?NaN:f*(1/0):p===0?f*1401298464324817e-60*_:f*Math.pow(2,p-150)*(_+8388608)}a.readFloatLE=o.bind(null,i),a.readFloatBE=o.bind(null,r)}(),typeof Float64Array<"u"?function(){var s=new Float64Array([-0]),o=new Uint8Array(s.buffer),l=o[7]===128;function c(p,_,v){s[0]=p,_[v]=o[0],_[v+1]=o[1],_[v+2]=o[2],_[v+3]=o[3],_[v+4]=o[4],_[v+5]=o[5],_[v+6]=o[6],_[v+7]=o[7]}function h(p,_,v){s[0]=p,_[v]=o[7],_[v+1]=o[6],_[v+2]=o[5],_[v+3]=o[4],_[v+4]=o[3],_[v+5]=o[2],_[v+6]=o[1],_[v+7]=o[0]}a.writeDoubleLE=l?c:h,a.writeDoubleBE=l?h:c;function u(p,_){return o[0]=p[_],o[1]=p[_+1],o[2]=p[_+2],o[3]=p[_+3],o[4]=p[_+4],o[5]=p[_+5],o[6]=p[_+6],o[7]=p[_+7],s[0]}function f(p,_){return o[7]=p[_],o[6]=p[_+1],o[5]=p[_+2],o[4]=p[_+3],o[3]=p[_+4],o[2]=p[_+5],o[1]=p[_+6],o[0]=p[_+7],s[0]}a.readDoubleLE=l?u:f,a.readDoubleBE=l?f:u}():function(){function s(l,c,h,u,f,p){var _=u<0?1:0;if(_&&(u=-u),u===0)l(0,f,p+c),l(1/u>0?0:2147483648,f,p+h);else if(isNaN(u))l(0,f,p+c),l(2146959360,f,p+h);else if(u>17976931348623157e292)l(0,f,p+c),l((_<<31|2146435072)>>>0,f,p+h);else{var v;if(u<22250738585072014e-324)v=u/5e-324,l(v>>>0,f,p+c),l((_<<31|v/4294967296)>>>0,f,p+h);else{var m=Math.floor(Math.log(u)/Math.LN2);m===1024&&(m=1023),v=u*Math.pow(2,-m),l(v*4503599627370496>>>0,f,p+c),l((_<<31|m+1023<<20|v*1048576&1048575)>>>0,f,p+h)}}}a.writeDoubleLE=s.bind(null,e,0,4),a.writeDoubleBE=s.bind(null,n,4,0);function o(l,c,h,u,f){var p=l(u,f+c),_=l(u,f+h),v=(_>>31)*2+1,m=_>>>20&2047,d=4294967296*(_&1048575)+p;return m===2047?d?NaN:v*(1/0):m===0?v*5e-324*d:v*Math.pow(2,m-1075)*(d+4503599627370496)}a.readDoubleLE=o.bind(null,i,0,4),a.readDoubleBE=o.bind(null,r,4,0)}(),a}function e(a,s,o){s[o]=a&255,s[o+1]=a>>>8&255,s[o+2]=a>>>16&255,s[o+3]=a>>>24}function n(a,s,o){s[o]=a>>>24,s[o+1]=a>>>16&255,s[o+2]=a>>>8&255,s[o+3]=a&255}function i(a,s){return(a[s]|a[s+1]<<8|a[s+2]<<16|a[s+3]<<24)>>>0}function r(a,s){return(a[s]<<24|a[s+1]<<16|a[s+2]<<8|a[s+3])>>>0}return float}var inquire_1,hasRequiredInquire;function requireInquire(){if(hasRequiredInquire)return inquire_1;hasRequiredInquire=1,inquire_1=inquire;function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(t){}return null}return inquire_1}var utf8={},hasRequiredUtf8;function requireUtf8(){return hasRequiredUtf8||(hasRequiredUtf8=1,function(t){var e=t;e.length=function(i){for(var r=0,a=0,s=0;s<i.length;++s)a=i.charCodeAt(s),a<128?r+=1:a<2048?r+=2:(a&64512)===55296&&(i.charCodeAt(s+1)&64512)===56320?(++s,r+=4):r+=3;return r},e.read=function(i,r,a){var s=a-r;if(s<1)return"";for(var o=null,l=[],c=0,h;r<a;)h=i[r++],h<128?l[c++]=h:h>191&&h<224?l[c++]=(h&31)<<6|i[r++]&63:h>239&&h<365?(h=((h&7)<<18|(i[r++]&63)<<12|(i[r++]&63)<<6|i[r++]&63)-65536,l[c++]=55296+(h>>10),l[c++]=56320+(h&1023)):l[c++]=(h&15)<<12|(i[r++]&63)<<6|i[r++]&63,c>8191&&((o||(o=[])).push(String.fromCharCode.apply(String,l)),c=0);return o?(c&&o.push(String.fromCharCode.apply(String,l.slice(0,c))),o.join("")):String.fromCharCode.apply(String,l.slice(0,c))},e.write=function(i,r,a){for(var s=a,o,l,c=0;c<i.length;++c)o=i.charCodeAt(c),o<128?r[a++]=o:o<2048?(r[a++]=o>>6|192,r[a++]=o&63|128):(o&64512)===55296&&((l=i.charCodeAt(c+1))&64512)===56320?(o=65536+((o&1023)<<10)+(l&1023),++c,r[a++]=o>>18|240,r[a++]=o>>12&63|128,r[a++]=o>>6&63|128,r[a++]=o&63|128):(r[a++]=o>>12|224,r[a++]=o>>6&63|128,r[a++]=o&63|128);return a-s}}(utf8)),utf8}var pool_1,hasRequiredPool;function requirePool(){if(hasRequiredPool)return pool_1;hasRequiredPool=1,pool_1=t;function t(e,n,i){var r=i||8192,a=r>>>1,s=null,o=r;return function(c){if(c<1||c>a)return e(c);o+c>r&&(s=e(r),o=0);var h=n.call(s,o,o+=c);return o&7&&(o=(o|7)+1),h}}return pool_1}var longbits,hasRequiredLongbits;function requireLongbits(){if(hasRequiredLongbits)return longbits;hasRequiredLongbits=1,longbits=e;var t=requireMinimal$1();function e(a,s){this.lo=a>>>0,this.hi=s>>>0}var n=e.zero=new e(0,0);n.toNumber=function(){return 0},n.zzEncode=n.zzDecode=function(){return this},n.length=function(){return 1};var i=e.zeroHash="\0\0\0\0\0\0\0\0";e.fromNumber=function(s){if(s===0)return n;var o=s<0;o&&(s=-s);var l=s>>>0,c=(s-l)/4294967296>>>0;return o&&(c=~c>>>0,l=~l>>>0,++l>4294967295&&(l=0,++c>4294967295&&(c=0))),new e(l,c)},e.from=function(s){if(typeof s=="number")return e.fromNumber(s);if(t.isString(s))if(t.Long)s=t.Long.fromString(s);else return e.fromNumber(parseInt(s,10));return s.low||s.high?new e(s.low>>>0,s.high>>>0):n},e.prototype.toNumber=function(s){if(!s&&this.hi>>>31){var o=~this.lo+1>>>0,l=~this.hi>>>0;return o||(l=l+1>>>0),-(o+l*4294967296)}return this.lo+this.hi*4294967296},e.prototype.toLong=function(s){return t.Long?new t.Long(this.lo|0,this.hi|0,!!s):{low:this.lo|0,high:this.hi|0,unsigned:!!s}};var r=String.prototype.charCodeAt;return e.fromHash=function(s){return s===i?n:new e((r.call(s,0)|r.call(s,1)<<8|r.call(s,2)<<16|r.call(s,3)<<24)>>>0,(r.call(s,4)|r.call(s,5)<<8|r.call(s,6)<<16|r.call(s,7)<<24)>>>0)},e.prototype.toHash=function(){return String.fromCharCode(this.lo&255,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,this.hi&255,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},e.prototype.zzEncode=function(){var s=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^s)>>>0,this.lo=(this.lo<<1^s)>>>0,this},e.prototype.zzDecode=function(){var s=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^s)>>>0,this.hi=(this.hi>>>1^s)>>>0,this},e.prototype.length=function(){var s=this.lo,o=(this.lo>>>28|this.hi<<4)>>>0,l=this.hi>>>24;return l===0?o===0?s<16384?s<128?1:2:s<2097152?3:4:o<16384?o<128?5:6:o<2097152?7:8:l<128?9:10},longbits}var hasRequiredMinimal$1;function requireMinimal$1(){return hasRequiredMinimal$1||(hasRequiredMinimal$1=1,function(t){var e=t;e.asPromise=requireAspromise(),e.base64=requireBase64(),e.EventEmitter=requireEventemitter(),e.float=requireFloat(),e.inquire=requireInquire(),e.utf8=requireUtf8(),e.pool=requirePool(),e.LongBits=requireLongbits(),e.isNode=!!(typeof commonjsGlobal<"u"&&commonjsGlobal&&commonjsGlobal.process&&commonjsGlobal.process.versions&&commonjsGlobal.process.versions.node),e.global=e.isNode&&commonjsGlobal||typeof window<"u"&&window||typeof self<"u"&&self||minimal$1,e.emptyArray=Object.freeze?Object.freeze([]):[],e.emptyObject=Object.freeze?Object.freeze({}):{},e.isInteger=Number.isInteger||function(a){return typeof a=="number"&&isFinite(a)&&Math.floor(a)===a},e.isString=function(a){return typeof a=="string"||a instanceof String},e.isObject=function(a){return a&&typeof a=="object"},e.isset=e.isSet=function(a,s){var o=a[s];return o!=null&&a.hasOwnProperty(s)?typeof o!="object"||(Array.isArray(o)?o.length:Object.keys(o).length)>0:!1},e.Buffer=function(){try{var r=e.inquire("buffer").Buffer;return r.prototype.utf8Write?r:null}catch{return null}}(),e._Buffer_from=null,e._Buffer_allocUnsafe=null,e.newBuffer=function(a){return typeof a=="number"?e.Buffer?e._Buffer_allocUnsafe(a):new e.Array(a):e.Buffer?e._Buffer_from(a):typeof Uint8Array>"u"?a:new Uint8Array(a)},e.Array=typeof Uint8Array<"u"?Uint8Array:Array,e.Long=e.global.dcodeIO&&e.global.dcodeIO.Long||e.global.Long||e.inquire("long"),e.key2Re=/^true|false|0|1$/,e.key32Re=/^-?(?:0|[1-9][0-9]*)$/,e.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,e.longToHash=function(a){return a?e.LongBits.from(a).toHash():e.LongBits.zeroHash},e.longFromHash=function(a,s){var o=e.LongBits.fromHash(a);return e.Long?e.Long.fromBits(o.lo,o.hi,s):o.toNumber(!!s)};function n(r,a,s){for(var o=Object.keys(a),l=0;l<o.length;++l)(r[o[l]]===void 0||!s)&&(r[o[l]]=a[o[l]]);return r}e.merge=n,e.lcFirst=function(a){return a.charAt(0).toLowerCase()+a.substring(1)};function i(r){function a(s,o){if(!(this instanceof a))return new a(s,o);Object.defineProperty(this,"message",{get:function(){return s}}),Error.captureStackTrace?Error.captureStackTrace(this,a):Object.defineProperty(this,"stack",{value:new Error().stack||""}),o&&n(this,o)}return a.prototype=Object.create(Error.prototype,{constructor:{value:a,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return r},set:void 0,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),a}e.newError=i,e.ProtocolError=i("ProtocolError"),e.oneOfGetter=function(a){for(var s={},o=0;o<a.length;++o)s[a[o]]=1;return function(){for(var l=Object.keys(this),c=l.length-1;c>-1;--c)if(s[l[c]]===1&&this[l[c]]!==void 0&&this[l[c]]!==null)return l[c]}},e.oneOfSetter=function(a){return function(s){for(var o=0;o<a.length;++o)a[o]!==s&&delete this[a[o]]}},e.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},e._configure=function(){var r=e.Buffer;if(!r){e._Buffer_from=e._Buffer_allocUnsafe=null;return}e._Buffer_from=r.from!==Uint8Array.from&&r.from||function(s,o){return new r(s,o)},e._Buffer_allocUnsafe=r.allocUnsafe||function(s){return new r(s)}}}(minimal$1)),minimal$1}var writer,hasRequiredWriter;function requireWriter(){if(hasRequiredWriter)return writer;hasRequiredWriter=1,writer=l;var t=requireMinimal$1(),e,n=t.LongBits,i=t.base64,r=t.utf8;function a(m,d,y){this.fn=m,this.len=d,this.next=void 0,this.val=y}function s(){}function o(m){this.head=m.head,this.tail=m.tail,this.len=m.len,this.next=m.states}function l(){this.len=0,this.head=new a(s,0,0),this.tail=this.head,this.states=null}var c=function(){return t.Buffer?function(){return(l.create=function(){return new e})()}:function(){return new l}};l.create=c(),l.alloc=function(d){return new t.Array(d)},t.Array!==Array&&(l.alloc=t.pool(l.alloc,t.Array.prototype.subarray)),l.prototype._push=function(d,y,b){return this.tail=this.tail.next=new a(d,y,b),this.len+=y,this};function h(m,d,y){d[y]=m&255}function u(m,d,y){for(;m>127;)d[y++]=m&127|128,m>>>=7;d[y]=m}function f(m,d){this.len=m,this.next=void 0,this.val=d}f.prototype=Object.create(a.prototype),f.prototype.fn=u,l.prototype.uint32=function(d){return this.len+=(this.tail=this.tail.next=new f((d=d>>>0)<128?1:d<16384?2:d<2097152?3:d<268435456?4:5,d)).len,this},l.prototype.int32=function(d){return d<0?this._push(p,10,n.fromNumber(d)):this.uint32(d)},l.prototype.sint32=function(d){return this.uint32((d<<1^d>>31)>>>0)};function p(m,d,y){for(;m.hi;)d[y++]=m.lo&127|128,m.lo=(m.lo>>>7|m.hi<<25)>>>0,m.hi>>>=7;for(;m.lo>127;)d[y++]=m.lo&127|128,m.lo=m.lo>>>7;d[y++]=m.lo}l.prototype.uint64=function(d){var y=n.from(d);return this._push(p,y.length(),y)},l.prototype.int64=l.prototype.uint64,l.prototype.sint64=function(d){var y=n.from(d).zzEncode();return this._push(p,y.length(),y)},l.prototype.bool=function(d){return this._push(h,1,d?1:0)};function _(m,d,y){d[y]=m&255,d[y+1]=m>>>8&255,d[y+2]=m>>>16&255,d[y+3]=m>>>24}l.prototype.fixed32=function(d){return this._push(_,4,d>>>0)},l.prototype.sfixed32=l.prototype.fixed32,l.prototype.fixed64=function(d){var y=n.from(d);return this._push(_,4,y.lo)._push(_,4,y.hi)},l.prototype.sfixed64=l.prototype.fixed64,l.prototype.float=function(d){return this._push(t.float.writeFloatLE,4,d)},l.prototype.double=function(d){return this._push(t.float.writeDoubleLE,8,d)};var v=t.Array.prototype.set?function(d,y,b){y.set(d,b)}:function(d,y,b){for(var M=0;M<d.length;++M)y[b+M]=d[M]};return l.prototype.bytes=function(d){var y=d.length>>>0;if(!y)return this._push(h,1,0);if(t.isString(d)){var b=l.alloc(y=i.length(d));i.decode(d,b,0),d=b}return this.uint32(y)._push(v,y,d)},l.prototype.string=function(d){var y=r.length(d);return y?this.uint32(y)._push(r.write,y,d):this._push(h,1,0)},l.prototype.fork=function(){return this.states=new o(this),this.head=this.tail=new a(s,0,0),this.len=0,this},l.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new a(s,0,0),this.len=0),this},l.prototype.ldelim=function(){var d=this.head,y=this.tail,b=this.len;return this.reset().uint32(b),b&&(this.tail.next=d.next,this.tail=y,this.len+=b),this},l.prototype.finish=function(){for(var d=this.head.next,y=this.constructor.alloc(this.len),b=0;d;)d.fn(d.val,y,b),b+=d.len,d=d.next;return y},l._configure=function(m){e=m,l.create=c(),e._configure()},writer}var writer_buffer,hasRequiredWriter_buffer;function requireWriter_buffer(){if(hasRequiredWriter_buffer)return writer_buffer;hasRequiredWriter_buffer=1,writer_buffer=n;var t=requireWriter();(n.prototype=Object.create(t.prototype)).constructor=n;var e=requireMinimal$1();function n(){t.call(this)}n._configure=function(){n.alloc=e._Buffer_allocUnsafe,n.writeBytesBuffer=e.Buffer&&e.Buffer.prototype instanceof Uint8Array&&e.Buffer.prototype.set.name==="set"?function(a,s,o){s.set(a,o)}:function(a,s,o){if(a.copy)a.copy(s,o,0,a.length);else for(var l=0;l<a.length;)s[o++]=a[l++]}},n.prototype.bytes=function(a){e.isString(a)&&(a=e._Buffer_from(a,"base64"));var s=a.length>>>0;return this.uint32(s),s&&this._push(n.writeBytesBuffer,s,a),this};function i(r,a,s){r.length<40?e.utf8.write(r,a,s):a.utf8Write?a.utf8Write(r,s):a.write(r,s)}return n.prototype.string=function(a){var s=e.Buffer.byteLength(a);return this.uint32(s),s&&this._push(i,s,a),this},n._configure(),writer_buffer}var reader,hasRequiredReader;function requireReader(){if(hasRequiredReader)return reader;hasRequiredReader=1,reader=a;var t=requireMinimal$1(),e,n=t.LongBits,i=t.utf8;function r(u,f){return RangeError("index out of range: "+u.pos+" + "+(f||1)+" > "+u.len)}function a(u){this.buf=u,this.pos=0,this.len=u.length}var s=typeof Uint8Array<"u"?function(f){if(f instanceof Uint8Array||Array.isArray(f))return new a(f);throw Error("illegal buffer")}:function(f){if(Array.isArray(f))return new a(f);throw Error("illegal buffer")},o=function(){return t.Buffer?function(p){return(a.create=function(v){return t.Buffer.isBuffer(v)?new e(v):s(v)})(p)}:s};a.create=o(),a.prototype._slice=t.Array.prototype.subarray||t.Array.prototype.slice,a.prototype.uint32=function(){var f=4294967295;return function(){if(f=(this.buf[this.pos]&127)>>>0,this.buf[this.pos++]<128||(f=(f|(this.buf[this.pos]&127)<<7)>>>0,this.buf[this.pos++]<128)||(f=(f|(this.buf[this.pos]&127)<<14)>>>0,this.buf[this.pos++]<128)||(f=(f|(this.buf[this.pos]&127)<<21)>>>0,this.buf[this.pos++]<128)||(f=(f|(this.buf[this.pos]&15)<<28)>>>0,this.buf[this.pos++]<128))return f;if((this.pos+=5)>this.len)throw this.pos=this.len,r(this,10);return f}}(),a.prototype.int32=function(){return this.uint32()|0},a.prototype.sint32=function(){var f=this.uint32();return f>>>1^-(f&1)|0};function l(){var u=new n(0,0),f=0;if(this.len-this.pos>4){for(;f<4;++f)if(u.lo=(u.lo|(this.buf[this.pos]&127)<<f*7)>>>0,this.buf[this.pos++]<128)return u;if(u.lo=(u.lo|(this.buf[this.pos]&127)<<28)>>>0,u.hi=(u.hi|(this.buf[this.pos]&127)>>4)>>>0,this.buf[this.pos++]<128)return u;f=0}else{for(;f<3;++f){if(this.pos>=this.len)throw r(this);if(u.lo=(u.lo|(this.buf[this.pos]&127)<<f*7)>>>0,this.buf[this.pos++]<128)return u}return u.lo=(u.lo|(this.buf[this.pos++]&127)<<f*7)>>>0,u}if(this.len-this.pos>4){for(;f<5;++f)if(u.hi=(u.hi|(this.buf[this.pos]&127)<<f*7+3)>>>0,this.buf[this.pos++]<128)return u}else for(;f<5;++f){if(this.pos>=this.len)throw r(this);if(u.hi=(u.hi|(this.buf[this.pos]&127)<<f*7+3)>>>0,this.buf[this.pos++]<128)return u}throw Error("invalid varint encoding")}a.prototype.bool=function(){return this.uint32()!==0};function c(u,f){return(u[f-4]|u[f-3]<<8|u[f-2]<<16|u[f-1]<<24)>>>0}a.prototype.fixed32=function(){if(this.pos+4>this.len)throw r(this,4);return c(this.buf,this.pos+=4)},a.prototype.sfixed32=function(){if(this.pos+4>this.len)throw r(this,4);return c(this.buf,this.pos+=4)|0};function h(){if(this.pos+8>this.len)throw r(this,8);return new n(c(this.buf,this.pos+=4),c(this.buf,this.pos+=4))}return a.prototype.float=function(){if(this.pos+4>this.len)throw r(this,4);var f=t.float.readFloatLE(this.buf,this.pos);return this.pos+=4,f},a.prototype.double=function(){if(this.pos+8>this.len)throw r(this,4);var f=t.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,f},a.prototype.bytes=function(){var f=this.uint32(),p=this.pos,_=this.pos+f;if(_>this.len)throw r(this,f);if(this.pos+=f,Array.isArray(this.buf))return this.buf.slice(p,_);if(p===_){var v=t.Buffer;return v?v.alloc(0):new this.buf.constructor(0)}return this._slice.call(this.buf,p,_)},a.prototype.string=function(){var f=this.bytes();return i.read(f,0,f.length)},a.prototype.skip=function(f){if(typeof f=="number"){if(this.pos+f>this.len)throw r(this,f);this.pos+=f}else do if(this.pos>=this.len)throw r(this);while(this.buf[this.pos++]&128);return this},a.prototype.skipType=function(u){switch(u){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;(u=this.uint32()&7)!==4;)this.skipType(u);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+u+" at offset "+this.pos)}return this},a._configure=function(u){e=u,a.create=o(),e._configure();var f=t.Long?"toLong":"toNumber";t.merge(a.prototype,{int64:function(){return l.call(this)[f](!1)},uint64:function(){return l.call(this)[f](!0)},sint64:function(){return l.call(this).zzDecode()[f](!1)},fixed64:function(){return h.call(this)[f](!0)},sfixed64:function(){return h.call(this)[f](!1)}})},reader}var reader_buffer,hasRequiredReader_buffer;function requireReader_buffer(){if(hasRequiredReader_buffer)return reader_buffer;hasRequiredReader_buffer=1,reader_buffer=n;var t=requireReader();(n.prototype=Object.create(t.prototype)).constructor=n;var e=requireMinimal$1();function n(i){t.call(this,i)}return n._configure=function(){e.Buffer&&(n.prototype._slice=e.Buffer.prototype.slice)},n.prototype.string=function(){var r=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+r,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+r,this.len))},n._configure(),reader_buffer}var rpc={},service,hasRequiredService;function requireService(){if(hasRequiredService)return service;hasRequiredService=1,service=e;var t=requireMinimal$1();(e.prototype=Object.create(t.EventEmitter.prototype)).constructor=e;function e(n,i,r){if(typeof n!="function")throw TypeError("rpcImpl must be a function");t.EventEmitter.call(this),this.rpcImpl=n,this.requestDelimited=!!i,this.responseDelimited=!!r}return e.prototype.rpcCall=function n(i,r,a,s,o){if(!s)throw TypeError("request must be specified");var l=this;if(!o)return t.asPromise(n,l,i,r,a,s);if(!l.rpcImpl){setTimeout(function(){o(Error("already ended"))},0);return}try{return l.rpcImpl(i,r[l.requestDelimited?"encodeDelimited":"encode"](s).finish(),function(h,u){if(h)return l.emit("error",h,i),o(h);if(u===null){l.end(!0);return}if(!(u instanceof a))try{u=a[l.responseDelimited?"decodeDelimited":"decode"](u)}catch(f){return l.emit("error",f,i),o(f)}return l.emit("data",u,i),o(null,u)})}catch(c){l.emit("error",c,i),setTimeout(function(){o(c)},0);return}},e.prototype.end=function(i){return this.rpcImpl&&(i||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this},service}var hasRequiredRpc;function requireRpc(){return hasRequiredRpc||(hasRequiredRpc=1,function(t){var e=t;e.Service=requireService()}(rpc)),rpc}var roots,hasRequiredRoots;function requireRoots(){return hasRequiredRoots||(hasRequiredRoots=1,roots={}),roots}var hasRequiredIndexMinimal;function requireIndexMinimal(){return hasRequiredIndexMinimal||(hasRequiredIndexMinimal=1,function(t){var e=t;e.build="minimal",e.Writer=requireWriter(),e.BufferWriter=requireWriter_buffer(),e.Reader=requireReader(),e.BufferReader=requireReader_buffer(),e.util=requireMinimal$1(),e.rpc=requireRpc(),e.roots=requireRoots(),e.configure=n;function n(){e.util._configure(),e.Writer._configure(e.BufferWriter),e.Reader._configure(e.BufferReader)}n()}(indexMinimal)),indexMinimal}var minimal,hasRequiredMinimal;function requireMinimal(){return hasRequiredMinimal||(hasRequiredMinimal=1,minimal=requireIndexMinimal()),minimal}var minimalExports=requireMinimal();const _m0=getDefaultExportFromCjs(minimalExports),messageTypeRegistry=new Map;var WebViewImmersiveMode;(function(t){t[t.UNSPECIFIED=0]="UNSPECIFIED",t[t.INLINE_MODE=1]="INLINE_MODE",t[t.IMMERSIVE_MODE=2]="IMMERSIVE_MODE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED"})(WebViewImmersiveMode||(WebViewImmersiveMode={}));function webViewImmersiveModeFromJSON(t){switch(t){case 0:case"UNSPECIFIED":return WebViewImmersiveMode.UNSPECIFIED;case 1:case"INLINE_MODE":return WebViewImmersiveMode.INLINE_MODE;case 2:case"IMMERSIVE_MODE":return WebViewImmersiveMode.IMMERSIVE_MODE;case-1:case"UNRECOGNIZED":default:return WebViewImmersiveMode.UNRECOGNIZED}}function webViewImmersiveModeToJSON(t){switch(t){case WebViewImmersiveMode.UNSPECIFIED:return 0;case WebViewImmersiveMode.INLINE_MODE:return 1;case WebViewImmersiveMode.IMMERSIVE_MODE:return 2;case WebViewImmersiveMode.UNRECOGNIZED:default:return-1}}function createBaseWebViewImmersiveModeEffect(){return{immersiveMode:0}}const WebViewImmersiveModeEffect={$type:"devvit.ui.effects.web_view.v1alpha.WebViewImmersiveModeEffect",encode(t,e=_m0.Writer.create()){return t.immersiveMode!==0&&e.uint32(8).int32(t.immersiveMode),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseWebViewImmersiveModeEffect();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==8)break;r.immersiveMode=n.int32();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{immersiveMode:isSet$b(t.immersiveMode)?webViewImmersiveModeFromJSON(t.immersiveMode):0}},toJSON(t){const e={};return t.immersiveMode!==0&&(e.immersiveMode=webViewImmersiveModeToJSON(t.immersiveMode)),e},create(t){return WebViewImmersiveModeEffect.fromPartial(t??{})},fromPartial(t){const e=createBaseWebViewImmersiveModeEffect();return e.immersiveMode=t.immersiveMode??0,e}};messageTypeRegistry.set(WebViewImmersiveModeEffect.$type,WebViewImmersiveModeEffect);function isSet$b(t){return t!=null}var NullValue;(function(t){t[t.NULL_VALUE=0]="NULL_VALUE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED"})(NullValue||(NullValue={}));function nullValueFromJSON(t){switch(t){case 0:case"NULL_VALUE":return NullValue.NULL_VALUE;case-1:case"UNRECOGNIZED":default:return NullValue.UNRECOGNIZED}}function nullValueToJSON(t){switch(t){case NullValue.NULL_VALUE:return 0;case NullValue.UNRECOGNIZED:default:return-1}}function createBaseStruct(){return{fields:{}}}const Struct={$type:"google.protobuf.Struct",encode(t,e=_m0.Writer.create()){return Object.entries(t.fields).forEach(([n,i])=>{i!==void 0&&Struct_FieldsEntry.encode({key:n,value:i},e.uint32(10).fork()).ldelim()}),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseStruct();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;const s=Struct_FieldsEntry.decode(n,n.uint32());s.value!==void 0&&(r.fields[s.key]=s.value);continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{fields:isObject$2(t.fields)?Object.entries(t.fields).reduce((e,[n,i])=>(e[n]=i,e),{}):{}}},toJSON(t){const e={};if(t.fields){const n=Object.entries(t.fields);n.length>0&&(e.fields={},n.forEach(([i,r])=>{e.fields[i]=r}))}return e},create(t){return Struct.fromPartial(t??{})},fromPartial(t){const e=createBaseStruct();return e.fields=Object.entries(t.fields??{}).reduce((n,[i,r])=>(r!==void 0&&(n[i]=r),n),{}),e},wrap(t){const e=createBaseStruct();if(t!==void 0)for(const n of Object.keys(t))e.fields[n]=t[n];return e},unwrap(t){const e={};if(t.fields)for(const n of Object.keys(t.fields))e[n]=t.fields[n];return e}};messageTypeRegistry.set(Struct.$type,Struct);function createBaseStruct_FieldsEntry(){return{key:"",value:void 0}}const Struct_FieldsEntry={$type:"google.protobuf.Struct.FieldsEntry",encode(t,e=_m0.Writer.create()){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&Value.encode(Value.wrap(t.value),e.uint32(18).fork()).ldelim(),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseStruct_FieldsEntry();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.key=n.string();continue;case 2:if(a!==18)break;r.value=Value.unwrap(Value.decode(n,n.uint32()));continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{key:isSet$a(t.key)?globalThis.String(t.key):"",value:isSet$a(t==null?void 0:t.value)?t.value:void 0}},toJSON(t){const e={};return t.key!==""&&(e.key=t.key),t.value!==void 0&&(e.value=t.value),e},create(t){return Struct_FieldsEntry.fromPartial(t??{})},fromPartial(t){const e=createBaseStruct_FieldsEntry();return e.key=t.key??"",e.value=t.value??void 0,e}};messageTypeRegistry.set(Struct_FieldsEntry.$type,Struct_FieldsEntry);function createBaseValue(){return{nullValue:void 0,numberValue:void 0,stringValue:void 0,boolValue:void 0,structValue:void 0,listValue:void 0}}const Value={$type:"google.protobuf.Value",encode(t,e=_m0.Writer.create()){return t.nullValue!==void 0&&e.uint32(8).int32(t.nullValue),t.numberValue!==void 0&&e.uint32(17).double(t.numberValue),t.stringValue!==void 0&&e.uint32(26).string(t.stringValue),t.boolValue!==void 0&&e.uint32(32).bool(t.boolValue),t.structValue!==void 0&&Struct.encode(Struct.wrap(t.structValue),e.uint32(42).fork()).ldelim(),t.listValue!==void 0&&ListValue.encode(ListValue.wrap(t.listValue),e.uint32(50).fork()).ldelim(),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseValue();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==8)break;r.nullValue=n.int32();continue;case 2:if(a!==17)break;r.numberValue=n.double();continue;case 3:if(a!==26)break;r.stringValue=n.string();continue;case 4:if(a!==32)break;r.boolValue=n.bool();continue;case 5:if(a!==42)break;r.structValue=Struct.unwrap(Struct.decode(n,n.uint32()));continue;case 6:if(a!==50)break;r.listValue=ListValue.unwrap(ListValue.decode(n,n.uint32()));continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{nullValue:isSet$a(t.nullValue)?nullValueFromJSON(t.nullValue):void 0,numberValue:isSet$a(t.numberValue)?globalThis.Number(t.numberValue):void 0,stringValue:isSet$a(t.stringValue)?globalThis.String(t.stringValue):void 0,boolValue:isSet$a(t.boolValue)?globalThis.Boolean(t.boolValue):void 0,structValue:isObject$2(t.structValue)?t.structValue:void 0,listValue:globalThis.Array.isArray(t.listValue)?[...t.listValue]:void 0}},toJSON(t){const e={};return t.nullValue!==void 0&&(e.nullValue=nullValueToJSON(t.nullValue)),t.numberValue!==void 0&&(e.numberValue=t.numberValue),t.stringValue!==void 0&&(e.stringValue=t.stringValue),t.boolValue!==void 0&&(e.boolValue=t.boolValue),t.structValue!==void 0&&(e.structValue=t.structValue),t.listValue!==void 0&&(e.listValue=t.listValue),e},create(t){return Value.fromPartial(t??{})},fromPartial(t){const e=createBaseValue();return e.nullValue=t.nullValue??void 0,e.numberValue=t.numberValue??void 0,e.stringValue=t.stringValue??void 0,e.boolValue=t.boolValue??void 0,e.structValue=t.structValue??void 0,e.listValue=t.listValue??void 0,e},wrap(t){const e=createBaseValue();if(t===null)e.nullValue=NullValue.NULL_VALUE;else if(typeof t=="boolean")e.boolValue=t;else if(typeof t=="number")e.numberValue=t;else if(typeof t=="string")e.stringValue=t;else if(globalThis.Array.isArray(t))e.listValue=t;else if(typeof t=="object")e.structValue=t;else if(typeof t<"u")throw new globalThis.Error("Unsupported any value type: "+typeof t);return e},unwrap(t){if(t.stringValue!==void 0)return t.stringValue;if((t==null?void 0:t.numberValue)!==void 0)return t.numberValue;if((t==null?void 0:t.boolValue)!==void 0)return t.boolValue;if((t==null?void 0:t.structValue)!==void 0)return t.structValue;if((t==null?void 0:t.listValue)!==void 0)return t.listValue;if((t==null?void 0:t.nullValue)!==void 0)return null}};messageTypeRegistry.set(Value.$type,Value);function createBaseListValue(){return{values:[]}}const ListValue={$type:"google.protobuf.ListValue",encode(t,e=_m0.Writer.create()){for(const n of t.values)Value.encode(Value.wrap(n),e.uint32(10).fork()).ldelim();return e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseListValue();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.values.push(Value.unwrap(Value.decode(n,n.uint32())));continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{values:globalThis.Array.isArray(t==null?void 0:t.values)?[...t.values]:[]}},toJSON(t){var n;const e={};return(n=t.values)!=null&&n.length&&(e.values=t.values),e},create(t){return ListValue.fromPartial(t??{})},fromPartial(t){var n;const e=createBaseListValue();return e.values=((n=t.values)==null?void 0:n.map(i=>i))||[],e},wrap(t){const e=createBaseListValue();return e.values=t??[],e},unwrap(t){return t!=null&&t.hasOwnProperty("values")&&globalThis.Array.isArray(t.values)?t.values:t}};messageTypeRegistry.set(ListValue.$type,ListValue);function isObject$2(t){return typeof t=="object"&&t!==null}function isSet$a(t){return t!=null}/**
 * @license
 * Copyright 2009 The Closure Library Authors
 * Copyright 2020 Daniel Wirtz / The long.js Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */var wasm=null;try{wasm=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function Long(t,e,n){this.low=t|0,this.high=e|0,this.unsigned=!!n}Long.prototype.__isLong__;Object.defineProperty(Long.prototype,"__isLong__",{value:!0});function isLong(t){return(t&&t.__isLong__)===!0}function ctz32(t){var e=Math.clz32(t&-t);return t?31-e:e}Long.isLong=isLong;var INT_CACHE={},UINT_CACHE={};function fromInt(t,e){var n,i,r;return e?(t>>>=0,(r=0<=t&&t<256)&&(i=UINT_CACHE[t],i)?i:(n=fromBits(t,0,!0),r&&(UINT_CACHE[t]=n),n)):(t|=0,(r=-128<=t&&t<128)&&(i=INT_CACHE[t],i)?i:(n=fromBits(t,t<0?-1:0,!1),r&&(INT_CACHE[t]=n),n))}Long.fromInt=fromInt;function fromNumber(t,e){if(isNaN(t))return e?UZERO:ZERO;if(e){if(t<0)return UZERO;if(t>=TWO_PWR_64_DBL)return MAX_UNSIGNED_VALUE}else{if(t<=-9223372036854776e3)return MIN_VALUE;if(t+1>=TWO_PWR_63_DBL)return MAX_VALUE}return t<0?fromNumber(-t,e).neg():fromBits(t%TWO_PWR_32_DBL|0,t/TWO_PWR_32_DBL|0,e)}Long.fromNumber=fromNumber;function fromBits(t,e,n){return new Long(t,e,n)}Long.fromBits=fromBits;var pow_dbl=Math.pow;function fromString(t,e,n){if(t.length===0)throw Error("empty string");if(typeof e=="number"?(n=e,e=!1):e=!!e,t==="NaN"||t==="Infinity"||t==="+Infinity"||t==="-Infinity")return e?UZERO:ZERO;if(n=n||10,n<2||36<n)throw RangeError("radix");var i;if((i=t.indexOf("-"))>0)throw Error("interior hyphen");if(i===0)return fromString(t.substring(1),e,n).neg();for(var r=fromNumber(pow_dbl(n,8)),a=ZERO,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),l=parseInt(t.substring(s,s+o),n);if(o<8){var c=fromNumber(pow_dbl(n,o));a=a.mul(c).add(fromNumber(l))}else a=a.mul(r),a=a.add(fromNumber(l))}return a.unsigned=e,a}Long.fromString=fromString;function fromValue(t,e){return typeof t=="number"?fromNumber(t,e):typeof t=="string"?fromString(t,e):fromBits(t.low,t.high,typeof e=="boolean"?e:t.unsigned)}Long.fromValue=fromValue;var TWO_PWR_16_DBL=65536,TWO_PWR_24_DBL=1<<24,TWO_PWR_32_DBL=TWO_PWR_16_DBL*TWO_PWR_16_DBL,TWO_PWR_64_DBL=TWO_PWR_32_DBL*TWO_PWR_32_DBL,TWO_PWR_63_DBL=TWO_PWR_64_DBL/2,TWO_PWR_24=fromInt(TWO_PWR_24_DBL),ZERO=fromInt(0);Long.ZERO=ZERO;var UZERO=fromInt(0,!0);Long.UZERO=UZERO;var ONE=fromInt(1);Long.ONE=ONE;var UONE=fromInt(1,!0);Long.UONE=UONE;var NEG_ONE=fromInt(-1);Long.NEG_ONE=NEG_ONE;var MAX_VALUE=fromBits(-1,2147483647,!1);Long.MAX_VALUE=MAX_VALUE;var MAX_UNSIGNED_VALUE=fromBits(-1,-1,!0);Long.MAX_UNSIGNED_VALUE=MAX_UNSIGNED_VALUE;var MIN_VALUE=fromBits(0,-2147483648,!1);Long.MIN_VALUE=MIN_VALUE;var LongPrototype=Long.prototype;LongPrototype.toInt=function t(){return this.unsigned?this.low>>>0:this.low};LongPrototype.toNumber=function t(){return this.unsigned?(this.high>>>0)*TWO_PWR_32_DBL+(this.low>>>0):this.high*TWO_PWR_32_DBL+(this.low>>>0)};LongPrototype.toString=function t(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(MIN_VALUE)){var n=fromNumber(e),i=this.div(n),r=i.mul(n).sub(this);return i.toString(e)+r.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var a=fromNumber(pow_dbl(e,6),this.unsigned),s=this,o="";;){var l=s.div(a),c=s.sub(l.mul(a)).toInt()>>>0,h=c.toString(e);if(s=l,s.isZero())return h+o;for(;h.length<6;)h="0"+h;o=""+h+o}};LongPrototype.getHighBits=function t(){return this.high};LongPrototype.getHighBitsUnsigned=function t(){return this.high>>>0};LongPrototype.getLowBits=function t(){return this.low};LongPrototype.getLowBitsUnsigned=function t(){return this.low>>>0};LongPrototype.getNumBitsAbs=function t(){if(this.isNegative())return this.eq(MIN_VALUE)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,n=31;n>0&&(e&1<<n)==0;n--);return this.high!=0?n+33:n+1};LongPrototype.isSafeInteger=function t(){var e=this.high>>21;return e?this.unsigned?!1:e===-1&&!(this.low===0&&this.high===-2097152):!0};LongPrototype.isZero=function t(){return this.high===0&&this.low===0};LongPrototype.eqz=LongPrototype.isZero;LongPrototype.isNegative=function t(){return!this.unsigned&&this.high<0};LongPrototype.isPositive=function t(){return this.unsigned||this.high>=0};LongPrototype.isOdd=function t(){return(this.low&1)===1};LongPrototype.isEven=function t(){return(this.low&1)===0};LongPrototype.equals=function t(e){return isLong(e)||(e=fromValue(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low};LongPrototype.eq=LongPrototype.equals;LongPrototype.notEquals=function t(e){return!this.eq(e)};LongPrototype.neq=LongPrototype.notEquals;LongPrototype.ne=LongPrototype.notEquals;LongPrototype.lessThan=function t(e){return this.comp(e)<0};LongPrototype.lt=LongPrototype.lessThan;LongPrototype.lessThanOrEqual=function t(e){return this.comp(e)<=0};LongPrototype.lte=LongPrototype.lessThanOrEqual;LongPrototype.le=LongPrototype.lessThanOrEqual;LongPrototype.greaterThan=function t(e){return this.comp(e)>0};LongPrototype.gt=LongPrototype.greaterThan;LongPrototype.greaterThanOrEqual=function t(e){return this.comp(e)>=0};LongPrototype.gte=LongPrototype.greaterThanOrEqual;LongPrototype.ge=LongPrototype.greaterThanOrEqual;LongPrototype.compare=function t(e){if(isLong(e)||(e=fromValue(e)),this.eq(e))return 0;var n=this.isNegative(),i=e.isNegative();return n&&!i?-1:!n&&i?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1};LongPrototype.comp=LongPrototype.compare;LongPrototype.negate=function t(){return!this.unsigned&&this.eq(MIN_VALUE)?MIN_VALUE:this.not().add(ONE)};LongPrototype.neg=LongPrototype.negate;LongPrototype.add=function t(e){isLong(e)||(e=fromValue(e));var n=this.high>>>16,i=this.high&65535,r=this.low>>>16,a=this.low&65535,s=e.high>>>16,o=e.high&65535,l=e.low>>>16,c=e.low&65535,h=0,u=0,f=0,p=0;return p+=a+c,f+=p>>>16,p&=65535,f+=r+l,u+=f>>>16,f&=65535,u+=i+o,h+=u>>>16,u&=65535,h+=n+s,h&=65535,fromBits(f<<16|p,h<<16|u,this.unsigned)};LongPrototype.subtract=function t(e){return isLong(e)||(e=fromValue(e)),this.add(e.neg())};LongPrototype.sub=LongPrototype.subtract;LongPrototype.multiply=function t(e){if(this.isZero())return this;if(isLong(e)||(e=fromValue(e)),wasm){var n=wasm.mul(this.low,this.high,e.low,e.high);return fromBits(n,wasm.get_high(),this.unsigned)}if(e.isZero())return this.unsigned?UZERO:ZERO;if(this.eq(MIN_VALUE))return e.isOdd()?MIN_VALUE:ZERO;if(e.eq(MIN_VALUE))return this.isOdd()?MIN_VALUE:ZERO;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(TWO_PWR_24)&&e.lt(TWO_PWR_24))return fromNumber(this.toNumber()*e.toNumber(),this.unsigned);var i=this.high>>>16,r=this.high&65535,a=this.low>>>16,s=this.low&65535,o=e.high>>>16,l=e.high&65535,c=e.low>>>16,h=e.low&65535,u=0,f=0,p=0,_=0;return _+=s*h,p+=_>>>16,_&=65535,p+=a*h,f+=p>>>16,p&=65535,p+=s*c,f+=p>>>16,p&=65535,f+=r*h,u+=f>>>16,f&=65535,f+=a*c,u+=f>>>16,f&=65535,f+=s*l,u+=f>>>16,f&=65535,u+=i*h+r*c+a*l+s*o,u&=65535,fromBits(p<<16|_,u<<16|f,this.unsigned)};LongPrototype.mul=LongPrototype.multiply;LongPrototype.divide=function t(e){if(isLong(e)||(e=fromValue(e)),e.isZero())throw Error("division by zero");if(wasm){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var n=(this.unsigned?wasm.div_u:wasm.div_s)(this.low,this.high,e.low,e.high);return fromBits(n,wasm.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?UZERO:ZERO;var i,r,a;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return UZERO;if(e.gt(this.shru(1)))return UONE;a=UZERO}else{if(this.eq(MIN_VALUE)){if(e.eq(ONE)||e.eq(NEG_ONE))return MIN_VALUE;if(e.eq(MIN_VALUE))return ONE;var s=this.shr(1);return i=s.div(e).shl(1),i.eq(ZERO)?e.isNegative()?ONE:NEG_ONE:(r=this.sub(e.mul(i)),a=i.add(r.div(e)),a)}else if(e.eq(MIN_VALUE))return this.unsigned?UZERO:ZERO;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();a=ZERO}for(r=this;r.gte(e);){i=Math.max(1,Math.floor(r.toNumber()/e.toNumber()));for(var o=Math.ceil(Math.log(i)/Math.LN2),l=o<=48?1:pow_dbl(2,o-48),c=fromNumber(i),h=c.mul(e);h.isNegative()||h.gt(r);)i-=l,c=fromNumber(i,this.unsigned),h=c.mul(e);c.isZero()&&(c=ONE),a=a.add(c),r=r.sub(h)}return a};LongPrototype.div=LongPrototype.divide;LongPrototype.modulo=function t(e){if(isLong(e)||(e=fromValue(e)),wasm){var n=(this.unsigned?wasm.rem_u:wasm.rem_s)(this.low,this.high,e.low,e.high);return fromBits(n,wasm.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))};LongPrototype.mod=LongPrototype.modulo;LongPrototype.rem=LongPrototype.modulo;LongPrototype.not=function t(){return fromBits(~this.low,~this.high,this.unsigned)};LongPrototype.countLeadingZeros=function t(){return this.high?Math.clz32(this.high):Math.clz32(this.low)+32};LongPrototype.clz=LongPrototype.countLeadingZeros;LongPrototype.countTrailingZeros=function t(){return this.low?ctz32(this.low):ctz32(this.high)+32};LongPrototype.ctz=LongPrototype.countTrailingZeros;LongPrototype.and=function t(e){return isLong(e)||(e=fromValue(e)),fromBits(this.low&e.low,this.high&e.high,this.unsigned)};LongPrototype.or=function t(e){return isLong(e)||(e=fromValue(e)),fromBits(this.low|e.low,this.high|e.high,this.unsigned)};LongPrototype.xor=function t(e){return isLong(e)||(e=fromValue(e)),fromBits(this.low^e.low,this.high^e.high,this.unsigned)};LongPrototype.shiftLeft=function t(e){return isLong(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?fromBits(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):fromBits(0,this.low<<e-32,this.unsigned)};LongPrototype.shl=LongPrototype.shiftLeft;LongPrototype.shiftRight=function t(e){return isLong(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?fromBits(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):fromBits(this.high>>e-32,this.high>=0?0:-1,this.unsigned)};LongPrototype.shr=LongPrototype.shiftRight;LongPrototype.shiftRightUnsigned=function t(e){return isLong(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?fromBits(this.low>>>e|this.high<<32-e,this.high>>>e,this.unsigned):e===32?fromBits(this.high,0,this.unsigned):fromBits(this.high>>>e-32,0,this.unsigned)};LongPrototype.shru=LongPrototype.shiftRightUnsigned;LongPrototype.shr_u=LongPrototype.shiftRightUnsigned;LongPrototype.rotateLeft=function t(e){var n;return isLong(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?fromBits(this.high,this.low,this.unsigned):e<32?(n=32-e,fromBits(this.low<<e|this.high>>>n,this.high<<e|this.low>>>n,this.unsigned)):(e-=32,n=32-e,fromBits(this.high<<e|this.low>>>n,this.low<<e|this.high>>>n,this.unsigned))};LongPrototype.rotl=LongPrototype.rotateLeft;LongPrototype.rotateRight=function t(e){var n;return isLong(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?fromBits(this.high,this.low,this.unsigned):e<32?(n=32-e,fromBits(this.high<<n|this.low>>>e,this.low<<n|this.high>>>e,this.unsigned)):(e-=32,n=32-e,fromBits(this.low<<n|this.high>>>e,this.high<<n|this.low>>>e,this.unsigned))};LongPrototype.rotr=LongPrototype.rotateRight;LongPrototype.toSigned=function t(){return this.unsigned?fromBits(this.low,this.high,!1):this};LongPrototype.toUnsigned=function t(){return this.unsigned?this:fromBits(this.low,this.high,!0)};LongPrototype.toBytes=function t(e){return e?this.toBytesLE():this.toBytesBE()};LongPrototype.toBytesLE=function t(){var e=this.high,n=this.low;return[n&255,n>>>8&255,n>>>16&255,n>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]};LongPrototype.toBytesBE=function t(){var e=this.high,n=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,n>>>24,n>>>16&255,n>>>8&255,n&255]};Long.fromBytes=function t(e,n,i){return i?Long.fromBytesLE(e,n):Long.fromBytesBE(e,n)};Long.fromBytesLE=function t(e,n){return new Long(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,n)};Long.fromBytesBE=function t(e,n){return new Long(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],n)};typeof BigInt=="function"&&(Long.fromBigInt=function(e,n){var i=Number(BigInt.asIntN(32,e)),r=Number(BigInt.asIntN(32,e>>BigInt(32)));return fromBits(i,r,n)},Long.fromValue=function(e,n){return typeof e=="bigint"?Long.fromBigInt(e,n):fromValue(e,n)},LongPrototype.toBigInt=function(){var e=BigInt(this.low>>>0),n=BigInt(this.unsigned?this.high>>>0:this.high);return n<<BigInt(32)|e});function createBaseTimestamp(){return{seconds:0,nanos:0}}const Timestamp={$type:"google.protobuf.Timestamp",encode(t,e=_m0.Writer.create()){return t.seconds!==0&&e.uint32(8).int64(t.seconds),t.nanos!==0&&e.uint32(16).int32(t.nanos),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseTimestamp();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==8)break;r.seconds=longToNumber(n.int64());continue;case 2:if(a!==16)break;r.nanos=n.int32();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{seconds:isSet$9(t.seconds)?globalThis.Number(t.seconds):0,nanos:isSet$9(t.nanos)?globalThis.Number(t.nanos):0}},toJSON(t){const e={};return t.seconds!==0&&(e.seconds=Math.round(t.seconds)),t.nanos!==0&&(e.nanos=Math.round(t.nanos)),e},create(t){return Timestamp.fromPartial(t??{})},fromPartial(t){const e=createBaseTimestamp();return e.seconds=t.seconds??0,e.nanos=t.nanos??0,e}};messageTypeRegistry.set(Timestamp.$type,Timestamp);function longToNumber(t){if(t.gt(globalThis.Number.MAX_SAFE_INTEGER))throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");return t.toNumber()}_m0.util.Long!==Long&&(_m0.util.Long=Long,_m0.configure());function isSet$9(t){return t!=null}var ConsentStatus;(function(t){t[t.CONSENT_STATUS_UNKNOWN=0]="CONSENT_STATUS_UNKNOWN",t[t.REVOKED=1]="REVOKED",t[t.GRANTED=2]="GRANTED",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED"})(ConsentStatus||(ConsentStatus={}));function consentStatusFromJSON(t){switch(t){case 0:case"CONSENT_STATUS_UNKNOWN":return ConsentStatus.CONSENT_STATUS_UNKNOWN;case 1:case"REVOKED":return ConsentStatus.REVOKED;case 2:case"GRANTED":return ConsentStatus.GRANTED;case-1:case"UNRECOGNIZED":default:return ConsentStatus.UNRECOGNIZED}}function consentStatusToJSON(t){switch(t){case ConsentStatus.CONSENT_STATUS_UNKNOWN:return 0;case ConsentStatus.REVOKED:return 1;case ConsentStatus.GRANTED:return 2;case ConsentStatus.UNRECOGNIZED:default:return-1}}var Scope;(function(t){t[t.SCOPE_UNKNOWN=0]="SCOPE_UNKNOWN",t[t.SUBMIT_POST=1]="SUBMIT_POST",t[t.SUBMIT_COMMENT=2]="SUBMIT_COMMENT",t[t.SUBSCRIBE_TO_SUBREDDIT=3]="SUBSCRIBE_TO_SUBREDDIT",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED"})(Scope||(Scope={}));function scopeFromJSON(t){switch(t){case 0:case"SCOPE_UNKNOWN":return Scope.SCOPE_UNKNOWN;case 1:case"SUBMIT_POST":return Scope.SUBMIT_POST;case 2:case"SUBMIT_COMMENT":return Scope.SUBMIT_COMMENT;case 3:case"SUBSCRIBE_TO_SUBREDDIT":return Scope.SUBSCRIBE_TO_SUBREDDIT;case-1:case"UNRECOGNIZED":default:return Scope.UNRECOGNIZED}}function scopeToJSON(t){switch(t){case Scope.SCOPE_UNKNOWN:return 0;case Scope.SUBMIT_POST:return 1;case Scope.SUBMIT_COMMENT:return 2;case Scope.SUBSCRIBE_TO_SUBREDDIT:return 3;case Scope.UNRECOGNIZED:default:return-1}}function createBaseAppPermission(){return{appSlug:"",subredditId:"",scopes:[],consentStatus:0,updatedAt:void 0}}const AppPermission={$type:"reddit.devvit.app_permission.v1.AppPermission",encode(t,e=_m0.Writer.create()){t.appSlug!==""&&e.uint32(10).string(t.appSlug),t.subredditId!==""&&e.uint32(18).string(t.subredditId),e.uint32(26).fork();for(const n of t.scopes)e.int32(n);return e.ldelim(),t.consentStatus!==0&&e.uint32(32).int32(t.consentStatus),t.updatedAt!==void 0&&Timestamp.encode(toTimestamp(t.updatedAt),e.uint32(42).fork()).ldelim(),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseAppPermission();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.appSlug=n.string();continue;case 2:if(a!==18)break;r.subredditId=n.string();continue;case 3:if(a===24){r.scopes.push(n.int32());continue}if(a===26){const s=n.uint32()+n.pos;for(;n.pos<s;)r.scopes.push(n.int32());continue}break;case 4:if(a!==32)break;r.consentStatus=n.int32();continue;case 5:if(a!==42)break;r.updatedAt=fromTimestamp(Timestamp.decode(n,n.uint32()));continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{appSlug:isSet$8(t.appSlug)?globalThis.String(t.appSlug):"",subredditId:isSet$8(t.subredditId)?globalThis.String(t.subredditId):"",scopes:globalThis.Array.isArray(t==null?void 0:t.scopes)?t.scopes.map(e=>scopeFromJSON(e)):[],consentStatus:isSet$8(t.consentStatus)?consentStatusFromJSON(t.consentStatus):0,updatedAt:isSet$8(t.updatedAt)?fromJsonTimestamp(t.updatedAt):void 0}},toJSON(t){var n;const e={};return t.appSlug!==""&&(e.appSlug=t.appSlug),t.subredditId!==""&&(e.subredditId=t.subredditId),(n=t.scopes)!=null&&n.length&&(e.scopes=t.scopes.map(i=>scopeToJSON(i))),t.consentStatus!==0&&(e.consentStatus=consentStatusToJSON(t.consentStatus)),t.updatedAt!==void 0&&(e.updatedAt=t.updatedAt.toISOString()),e},create(t){return AppPermission.fromPartial(t??{})},fromPartial(t){var n;const e=createBaseAppPermission();return e.appSlug=t.appSlug??"",e.subredditId=t.subredditId??"",e.scopes=((n=t.scopes)==null?void 0:n.map(i=>i))||[],e.consentStatus=t.consentStatus??0,e.updatedAt=t.updatedAt??void 0,e}};messageTypeRegistry.set(AppPermission.$type,AppPermission);function createBaseDevvitApp(){return{appSlug:"",appName:""}}const DevvitApp={$type:"reddit.devvit.app_permission.v1.DevvitApp",encode(t,e=_m0.Writer.create()){return t.appSlug!==""&&e.uint32(10).string(t.appSlug),t.appName!==""&&e.uint32(18).string(t.appName),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseDevvitApp();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.appSlug=n.string();continue;case 2:if(a!==18)break;r.appName=n.string();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{appSlug:isSet$8(t.appSlug)?globalThis.String(t.appSlug):"",appName:isSet$8(t.appName)?globalThis.String(t.appName):""}},toJSON(t){const e={};return t.appSlug!==""&&(e.appSlug=t.appSlug),t.appName!==""&&(e.appName=t.appName),e},create(t){return DevvitApp.fromPartial(t??{})},fromPartial(t){const e=createBaseDevvitApp();return e.appSlug=t.appSlug??"",e.appName=t.appName??"",e}};messageTypeRegistry.set(DevvitApp.$type,DevvitApp);function createBaseGetAppPermissionsByUserIdRequest(){return{userId:""}}const GetAppPermissionsByUserIdRequest={$type:"reddit.devvit.app_permission.v1.GetAppPermissionsByUserIdRequest",encode(t,e=_m0.Writer.create()){return t.userId!==""&&e.uint32(10).string(t.userId),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseGetAppPermissionsByUserIdRequest();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.userId=n.string();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{userId:isSet$8(t.userId)?globalThis.String(t.userId):""}},toJSON(t){const e={};return t.userId!==""&&(e.userId=t.userId),e},create(t){return GetAppPermissionsByUserIdRequest.fromPartial(t??{})},fromPartial(t){const e=createBaseGetAppPermissionsByUserIdRequest();return e.userId=t.userId??"",e}};messageTypeRegistry.set(GetAppPermissionsByUserIdRequest.$type,GetAppPermissionsByUserIdRequest);function createBaseGetAppPermissionsByUserIdResponse(){return{appPermissions:[],devvitApps:[]}}const GetAppPermissionsByUserIdResponse={$type:"reddit.devvit.app_permission.v1.GetAppPermissionsByUserIdResponse",encode(t,e=_m0.Writer.create()){for(const n of t.appPermissions)AppPermission.encode(n,e.uint32(10).fork()).ldelim();for(const n of t.devvitApps)DevvitApp.encode(n,e.uint32(18).fork()).ldelim();return e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseGetAppPermissionsByUserIdResponse();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.appPermissions.push(AppPermission.decode(n,n.uint32()));continue;case 2:if(a!==18)break;r.devvitApps.push(DevvitApp.decode(n,n.uint32()));continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{appPermissions:globalThis.Array.isArray(t==null?void 0:t.appPermissions)?t.appPermissions.map(e=>AppPermission.fromJSON(e)):[],devvitApps:globalThis.Array.isArray(t==null?void 0:t.devvitApps)?t.devvitApps.map(e=>DevvitApp.fromJSON(e)):[]}},toJSON(t){var n,i;const e={};return(n=t.appPermissions)!=null&&n.length&&(e.appPermissions=t.appPermissions.map(r=>AppPermission.toJSON(r))),(i=t.devvitApps)!=null&&i.length&&(e.devvitApps=t.devvitApps.map(r=>DevvitApp.toJSON(r))),e},create(t){return GetAppPermissionsByUserIdResponse.fromPartial(t??{})},fromPartial(t){var n,i;const e=createBaseGetAppPermissionsByUserIdResponse();return e.appPermissions=((n=t.appPermissions)==null?void 0:n.map(r=>AppPermission.fromPartial(r)))||[],e.devvitApps=((i=t.devvitApps)==null?void 0:i.map(r=>DevvitApp.fromPartial(r)))||[],e}};messageTypeRegistry.set(GetAppPermissionsByUserIdResponse.$type,GetAppPermissionsByUserIdResponse);function createBaseGrantAppPermissionRequest(){return{userId:"",appSlug:"",subredditId:"",scopes:[]}}const GrantAppPermissionRequest={$type:"reddit.devvit.app_permission.v1.GrantAppPermissionRequest",encode(t,e=_m0.Writer.create()){t.userId!==""&&e.uint32(10).string(t.userId),t.appSlug!==""&&e.uint32(18).string(t.appSlug),t.subredditId!==""&&e.uint32(26).string(t.subredditId),e.uint32(34).fork();for(const n of t.scopes)e.int32(n);return e.ldelim(),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseGrantAppPermissionRequest();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.userId=n.string();continue;case 2:if(a!==18)break;r.appSlug=n.string();continue;case 3:if(a!==26)break;r.subredditId=n.string();continue;case 4:if(a===32){r.scopes.push(n.int32());continue}if(a===34){const s=n.uint32()+n.pos;for(;n.pos<s;)r.scopes.push(n.int32());continue}break}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{userId:isSet$8(t.userId)?globalThis.String(t.userId):"",appSlug:isSet$8(t.appSlug)?globalThis.String(t.appSlug):"",subredditId:isSet$8(t.subredditId)?globalThis.String(t.subredditId):"",scopes:globalThis.Array.isArray(t==null?void 0:t.scopes)?t.scopes.map(e=>scopeFromJSON(e)):[]}},toJSON(t){var n;const e={};return t.userId!==""&&(e.userId=t.userId),t.appSlug!==""&&(e.appSlug=t.appSlug),t.subredditId!==""&&(e.subredditId=t.subredditId),(n=t.scopes)!=null&&n.length&&(e.scopes=t.scopes.map(i=>scopeToJSON(i))),e},create(t){return GrantAppPermissionRequest.fromPartial(t??{})},fromPartial(t){var n;const e=createBaseGrantAppPermissionRequest();return e.userId=t.userId??"",e.appSlug=t.appSlug??"",e.subredditId=t.subredditId??"",e.scopes=((n=t.scopes)==null?void 0:n.map(i=>i))||[],e}};messageTypeRegistry.set(GrantAppPermissionRequest.$type,GrantAppPermissionRequest);function createBaseGrantAppPermissionResponse(){return{error:void 0}}const GrantAppPermissionResponse={$type:"reddit.devvit.app_permission.v1.GrantAppPermissionResponse",encode(t,e=_m0.Writer.create()){return t.error!==void 0&&ErrorMessage.encode(t.error,e.uint32(10).fork()).ldelim(),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseGrantAppPermissionResponse();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.error=ErrorMessage.decode(n,n.uint32());continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{error:isSet$8(t.error)?ErrorMessage.fromJSON(t.error):void 0}},toJSON(t){const e={};return t.error!==void 0&&(e.error=ErrorMessage.toJSON(t.error)),e},create(t){return GrantAppPermissionResponse.fromPartial(t??{})},fromPartial(t){const e=createBaseGrantAppPermissionResponse();return e.error=t.error!==void 0&&t.error!==null?ErrorMessage.fromPartial(t.error):void 0,e}};messageTypeRegistry.set(GrantAppPermissionResponse.$type,GrantAppPermissionResponse);function createBaseRevokeAppPermissionRequest(){return{appSlug:"",userId:"",subredditId:""}}const RevokeAppPermissionRequest={$type:"reddit.devvit.app_permission.v1.RevokeAppPermissionRequest",encode(t,e=_m0.Writer.create()){return t.appSlug!==""&&e.uint32(10).string(t.appSlug),t.userId!==""&&e.uint32(18).string(t.userId),t.subredditId!==""&&e.uint32(26).string(t.subredditId),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseRevokeAppPermissionRequest();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.appSlug=n.string();continue;case 2:if(a!==18)break;r.userId=n.string();continue;case 3:if(a!==26)break;r.subredditId=n.string();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{appSlug:isSet$8(t.appSlug)?globalThis.String(t.appSlug):"",userId:isSet$8(t.userId)?globalThis.String(t.userId):"",subredditId:isSet$8(t.subredditId)?globalThis.String(t.subredditId):""}},toJSON(t){const e={};return t.appSlug!==""&&(e.appSlug=t.appSlug),t.userId!==""&&(e.userId=t.userId),t.subredditId!==""&&(e.subredditId=t.subredditId),e},create(t){return RevokeAppPermissionRequest.fromPartial(t??{})},fromPartial(t){const e=createBaseRevokeAppPermissionRequest();return e.appSlug=t.appSlug??"",e.userId=t.userId??"",e.subredditId=t.subredditId??"",e}};messageTypeRegistry.set(RevokeAppPermissionRequest.$type,RevokeAppPermissionRequest);function createBaseRevokeAppPermissionResponse(){return{error:void 0}}const RevokeAppPermissionResponse={$type:"reddit.devvit.app_permission.v1.RevokeAppPermissionResponse",encode(t,e=_m0.Writer.create()){return t.error!==void 0&&ErrorMessage.encode(t.error,e.uint32(10).fork()).ldelim(),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseRevokeAppPermissionResponse();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.error=ErrorMessage.decode(n,n.uint32());continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{error:isSet$8(t.error)?ErrorMessage.fromJSON(t.error):void 0}},toJSON(t){const e={};return t.error!==void 0&&(e.error=ErrorMessage.toJSON(t.error)),e},create(t){return RevokeAppPermissionResponse.fromPartial(t??{})},fromPartial(t){const e=createBaseRevokeAppPermissionResponse();return e.error=t.error!==void 0&&t.error!==null?ErrorMessage.fromPartial(t.error):void 0,e}};messageTypeRegistry.set(RevokeAppPermissionResponse.$type,RevokeAppPermissionResponse);function createBaseErrorMessage(){return{message:""}}const ErrorMessage={$type:"reddit.devvit.app_permission.v1.ErrorMessage",encode(t,e=_m0.Writer.create()){return t.message!==""&&e.uint32(10).string(t.message),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseErrorMessage();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.message=n.string();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{message:isSet$8(t.message)?globalThis.String(t.message):""}},toJSON(t){const e={};return t.message!==""&&(e.message=t.message),e},create(t){return ErrorMessage.fromPartial(t??{})},fromPartial(t){const e=createBaseErrorMessage();return e.message=t.message??"",e}};messageTypeRegistry.set(ErrorMessage.$type,ErrorMessage);function toTimestamp(t){const e=Math.trunc(t.getTime()/1e3),n=t.getTime()%1e3*1e6;return{seconds:e,nanos:n}}function fromTimestamp(t){let e=(t.seconds||0)*1e3;return e+=(t.nanos||0)/1e6,new globalThis.Date(e)}function fromJsonTimestamp(t){return t instanceof globalThis.Date?t:typeof t=="string"?new globalThis.Date(t):fromTimestamp(Timestamp.fromJSON(t))}function isSet$8(t){return t!=null}function createBaseCanRunAsUserEffect(){return{}}const CanRunAsUserEffect={$type:"devvit.ui.effects.v1alpha.CanRunAsUserEffect",encode(t,e=_m0.Writer.create()){return e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseCanRunAsUserEffect();for(;n.pos<i;){const a=n.uint32();if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{}},toJSON(t){return{}},create(t){return CanRunAsUserEffect.fromPartial(t??{})},fromPartial(t){return createBaseCanRunAsUserEffect()}};messageTypeRegistry.set(CanRunAsUserEffect.$type,CanRunAsUserEffect);function createBaseConsentStatusEvent(){return{consentStatus:0}}const ConsentStatusEvent={$type:"devvit.ui.effects.v1alpha.ConsentStatusEvent",encode(t,e=_m0.Writer.create()){return t.consentStatus!==0&&e.uint32(8).int32(t.consentStatus),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseConsentStatusEvent();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==8)break;r.consentStatus=n.int32();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{consentStatus:isSet$7(t.consentStatus)?consentStatusFromJSON(t.consentStatus):0}},toJSON(t){const e={};return t.consentStatus!==0&&(e.consentStatus=consentStatusToJSON(t.consentStatus)),e},create(t){return ConsentStatusEvent.fromPartial(t??{})},fromPartial(t){const e=createBaseConsentStatusEvent();return e.consentStatus=t.consentStatus??0,e}};messageTypeRegistry.set(ConsentStatusEvent.$type,ConsentStatusEvent);function isSet$7(t){return t!=null}function createBaseEmpty(){return{}}const Empty={$type:"google.protobuf.Empty",encode(t,e=_m0.Writer.create()){return e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseEmpty();for(;n.pos<i;){const a=n.uint32();if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{}},toJSON(t){return{}},create(t){return Empty.fromPartial(t??{})},fromPartial(t){return createBaseEmpty()}};messageTypeRegistry.set(Empty.$type,Empty);function createBaseRealtimeRequest(){return{channels:[]}}const RealtimeRequest={$type:"devvit.events.v1alpha.RealtimeRequest",encode(t,e=_m0.Writer.create()){for(const n of t.channels)e.uint32(10).string(n);return e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseRealtimeRequest();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.channels.push(n.string());continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{channels:globalThis.Array.isArray(t==null?void 0:t.channels)?t.channels.map(e=>globalThis.String(e)):[]}},toJSON(t){var n;const e={};return(n=t.channels)!=null&&n.length&&(e.channels=t.channels),e},create(t){return RealtimeRequest.fromPartial(t??{})},fromPartial(t){var n;const e=createBaseRealtimeRequest();return e.channels=((n=t.channels)==null?void 0:n.map(i=>i))||[],e}};messageTypeRegistry.set(RealtimeRequest.$type,RealtimeRequest);function createBaseRealtimeEvent(){return{channel:"",data:void 0}}const RealtimeEvent={$type:"devvit.events.v1alpha.RealtimeEvent",encode(t,e=_m0.Writer.create()){return t.channel!==""&&e.uint32(10).string(t.channel),t.data!==void 0&&Struct.encode(Struct.wrap(t.data),e.uint32(18).fork()).ldelim(),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseRealtimeEvent();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.channel=n.string();continue;case 2:if(a!==18)break;r.data=Struct.unwrap(Struct.decode(n,n.uint32()));continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{channel:isSet$6(t.channel)?globalThis.String(t.channel):"",data:isObject$1(t.data)?t.data:void 0}},toJSON(t){const e={};return t.channel!==""&&(e.channel=t.channel),t.data!==void 0&&(e.data=t.data),e},create(t){return RealtimeEvent.fromPartial(t??{})},fromPartial(t){const e=createBaseRealtimeEvent();return e.channel=t.channel??"",e.data=t.data??void 0,e}};messageTypeRegistry.set(RealtimeEvent.$type,RealtimeEvent);function isObject$1(t){return typeof t=="object"&&t!==null}function isSet$6(t){return t!=null}var RealtimeSubscriptionStatus;(function(t){t[t.REALTIME_SUBSCRIBED=0]="REALTIME_SUBSCRIBED",t[t.REALTIME_UNSUBSCRIBED=1]="REALTIME_UNSUBSCRIBED",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED"})(RealtimeSubscriptionStatus||(RealtimeSubscriptionStatus={}));function realtimeSubscriptionStatusFromJSON(t){switch(t){case 0:case"REALTIME_SUBSCRIBED":return RealtimeSubscriptionStatus.REALTIME_SUBSCRIBED;case 1:case"REALTIME_UNSUBSCRIBED":return RealtimeSubscriptionStatus.REALTIME_UNSUBSCRIBED;case-1:case"UNRECOGNIZED":default:return RealtimeSubscriptionStatus.UNRECOGNIZED}}function realtimeSubscriptionStatusToJSON(t){switch(t){case RealtimeSubscriptionStatus.REALTIME_SUBSCRIBED:return 0;case RealtimeSubscriptionStatus.REALTIME_UNSUBSCRIBED:return 1;case RealtimeSubscriptionStatus.UNRECOGNIZED:default:return-1}}function createBaseRealtimeSubscriptionsEffect(){return{subscriptionIds:[]}}const RealtimeSubscriptionsEffect={$type:"devvit.ui.effects.v1alpha.RealtimeSubscriptionsEffect",encode(t,e=_m0.Writer.create()){for(const n of t.subscriptionIds)e.uint32(10).string(n);return e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseRealtimeSubscriptionsEffect();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.subscriptionIds.push(n.string());continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{subscriptionIds:globalThis.Array.isArray(t==null?void 0:t.subscriptionIds)?t.subscriptionIds.map(e=>globalThis.String(e)):[]}},toJSON(t){var n;const e={};return(n=t.subscriptionIds)!=null&&n.length&&(e.subscriptionIds=t.subscriptionIds),e},create(t){return RealtimeSubscriptionsEffect.fromPartial(t??{})},fromPartial(t){var n;const e=createBaseRealtimeSubscriptionsEffect();return e.subscriptionIds=((n=t.subscriptionIds)==null?void 0:n.map(i=>i))||[],e}};messageTypeRegistry.set(RealtimeSubscriptionsEffect.$type,RealtimeSubscriptionsEffect);function createBaseRealtimeSubscriptionEvent(){return{event:void 0,status:void 0}}const RealtimeSubscriptionEvent={$type:"devvit.ui.effects.v1alpha.RealtimeSubscriptionEvent",encode(t,e=_m0.Writer.create()){return t.event!==void 0&&RealtimeEvent.encode(t.event,e.uint32(10).fork()).ldelim(),t.status!==void 0&&e.uint32(16).int32(t.status),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseRealtimeSubscriptionEvent();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.event=RealtimeEvent.decode(n,n.uint32());continue;case 2:if(a!==16)break;r.status=n.int32();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{event:isSet$5(t.event)?RealtimeEvent.fromJSON(t.event):void 0,status:isSet$5(t.status)?realtimeSubscriptionStatusFromJSON(t.status):void 0}},toJSON(t){const e={};return t.event!==void 0&&(e.event=RealtimeEvent.toJSON(t.event)),t.status!==void 0&&(e.status=realtimeSubscriptionStatusToJSON(t.status)),e},create(t){return RealtimeSubscriptionEvent.fromPartial(t??{})},fromPartial(t){const e=createBaseRealtimeSubscriptionEvent();return e.event=t.event!==void 0&&t.event!==null?RealtimeEvent.fromPartial(t.event):void 0,e.status=t.status??void 0,e}};messageTypeRegistry.set(RealtimeSubscriptionEvent.$type,RealtimeSubscriptionEvent);function isSet$5(t){return t!=null}var FormFieldType;(function(t){t[t.STRING=0]="STRING",t[t.PARAGRAPH=1]="PARAGRAPH",t[t.NUMBER=2]="NUMBER",t[t.BOOLEAN=3]="BOOLEAN",t[t.LIST=4]="LIST",t[t.SELECTION=5]="SELECTION",t[t.GROUP=6]="GROUP",t[t.IMAGE=7]="IMAGE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED"})(FormFieldType||(FormFieldType={}));function formFieldTypeFromJSON(t){switch(t){case 0:case"STRING":return FormFieldType.STRING;case 1:case"PARAGRAPH":return FormFieldType.PARAGRAPH;case 2:case"NUMBER":return FormFieldType.NUMBER;case 3:case"BOOLEAN":return FormFieldType.BOOLEAN;case 4:case"LIST":return FormFieldType.LIST;case 5:case"SELECTION":return FormFieldType.SELECTION;case 6:case"GROUP":return FormFieldType.GROUP;case 7:case"IMAGE":return FormFieldType.IMAGE;case-1:case"UNRECOGNIZED":default:return FormFieldType.UNRECOGNIZED}}function formFieldTypeToJSON(t){switch(t){case FormFieldType.STRING:return 0;case FormFieldType.PARAGRAPH:return 1;case FormFieldType.NUMBER:return 2;case FormFieldType.BOOLEAN:return 3;case FormFieldType.LIST:return 4;case FormFieldType.SELECTION:return 5;case FormFieldType.GROUP:return 6;case FormFieldType.IMAGE:return 7;case FormFieldType.UNRECOGNIZED:default:return-1}}function createBaseFormFieldValue(){return{fieldType:0,isSecret:void 0,stringValue:void 0,numberValue:void 0,boolValue:void 0,listValue:void 0,selectionValue:void 0,groupValue:void 0}}const FormFieldValue={$type:"devvit.ui.form_builder.v1alpha.FormFieldValue",encode(t,e=_m0.Writer.create()){return t.fieldType!==0&&e.uint32(8).int32(t.fieldType),t.isSecret!==void 0&&e.uint32(800).bool(t.isSecret),t.stringValue!==void 0&&e.uint32(18).string(t.stringValue),t.numberValue!==void 0&&e.uint32(25).double(t.numberValue),t.boolValue!==void 0&&e.uint32(32).bool(t.boolValue),t.listValue!==void 0&&FormFieldValue_ListValue.encode(t.listValue,e.uint32(42).fork()).ldelim(),t.selectionValue!==void 0&&FormFieldValue_SelectionValue.encode(t.selectionValue,e.uint32(50).fork()).ldelim(),t.groupValue!==void 0&&FormFieldValue_GroupValue.encode(t.groupValue,e.uint32(58).fork()).ldelim(),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseFormFieldValue();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==8)break;r.fieldType=n.int32();continue;case 100:if(a!==800)break;r.isSecret=n.bool();continue;case 2:if(a!==18)break;r.stringValue=n.string();continue;case 3:if(a!==25)break;r.numberValue=n.double();continue;case 4:if(a!==32)break;r.boolValue=n.bool();continue;case 5:if(a!==42)break;r.listValue=FormFieldValue_ListValue.decode(n,n.uint32());continue;case 6:if(a!==50)break;r.selectionValue=FormFieldValue_SelectionValue.decode(n,n.uint32());continue;case 7:if(a!==58)break;r.groupValue=FormFieldValue_GroupValue.decode(n,n.uint32());continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{fieldType:isSet$4(t.fieldType)?formFieldTypeFromJSON(t.fieldType):0,isSecret:isSet$4(t.isSecret)?globalThis.Boolean(t.isSecret):void 0,stringValue:isSet$4(t.stringValue)?globalThis.String(t.stringValue):void 0,numberValue:isSet$4(t.numberValue)?globalThis.Number(t.numberValue):void 0,boolValue:isSet$4(t.boolValue)?globalThis.Boolean(t.boolValue):void 0,listValue:isSet$4(t.listValue)?FormFieldValue_ListValue.fromJSON(t.listValue):void 0,selectionValue:isSet$4(t.selectionValue)?FormFieldValue_SelectionValue.fromJSON(t.selectionValue):void 0,groupValue:isSet$4(t.groupValue)?FormFieldValue_GroupValue.fromJSON(t.groupValue):void 0}},toJSON(t){const e={};return t.fieldType!==0&&(e.fieldType=formFieldTypeToJSON(t.fieldType)),t.isSecret!==void 0&&(e.isSecret=t.isSecret),t.stringValue!==void 0&&(e.stringValue=t.stringValue),t.numberValue!==void 0&&(e.numberValue=t.numberValue),t.boolValue!==void 0&&(e.boolValue=t.boolValue),t.listValue!==void 0&&(e.listValue=FormFieldValue_ListValue.toJSON(t.listValue)),t.selectionValue!==void 0&&(e.selectionValue=FormFieldValue_SelectionValue.toJSON(t.selectionValue)),t.groupValue!==void 0&&(e.groupValue=FormFieldValue_GroupValue.toJSON(t.groupValue)),e},create(t){return FormFieldValue.fromPartial(t??{})},fromPartial(t){const e=createBaseFormFieldValue();return e.fieldType=t.fieldType??0,e.isSecret=t.isSecret??void 0,e.stringValue=t.stringValue??void 0,e.numberValue=t.numberValue??void 0,e.boolValue=t.boolValue??void 0,e.listValue=t.listValue!==void 0&&t.listValue!==null?FormFieldValue_ListValue.fromPartial(t.listValue):void 0,e.selectionValue=t.selectionValue!==void 0&&t.selectionValue!==null?FormFieldValue_SelectionValue.fromPartial(t.selectionValue):void 0,e.groupValue=t.groupValue!==void 0&&t.groupValue!==null?FormFieldValue_GroupValue.fromPartial(t.groupValue):void 0,e}};messageTypeRegistry.set(FormFieldValue.$type,FormFieldValue);function createBaseFormFieldValue_ListValue(){return{itemType:0,items:[]}}const FormFieldValue_ListValue={$type:"devvit.ui.form_builder.v1alpha.FormFieldValue.ListValue",encode(t,e=_m0.Writer.create()){t.itemType!==0&&e.uint32(8).int32(t.itemType);for(const n of t.items)FormFieldValue.encode(n,e.uint32(18).fork()).ldelim();return e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseFormFieldValue_ListValue();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==8)break;r.itemType=n.int32();continue;case 2:if(a!==18)break;r.items.push(FormFieldValue.decode(n,n.uint32()));continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{itemType:isSet$4(t.itemType)?formFieldTypeFromJSON(t.itemType):0,items:globalThis.Array.isArray(t==null?void 0:t.items)?t.items.map(e=>FormFieldValue.fromJSON(e)):[]}},toJSON(t){var n;const e={};return t.itemType!==0&&(e.itemType=formFieldTypeToJSON(t.itemType)),(n=t.items)!=null&&n.length&&(e.items=t.items.map(i=>FormFieldValue.toJSON(i))),e},create(t){return FormFieldValue_ListValue.fromPartial(t??{})},fromPartial(t){var n;const e=createBaseFormFieldValue_ListValue();return e.itemType=t.itemType??0,e.items=((n=t.items)==null?void 0:n.map(i=>FormFieldValue.fromPartial(i)))||[],e}};messageTypeRegistry.set(FormFieldValue_ListValue.$type,FormFieldValue_ListValue);function createBaseFormFieldValue_SelectionValue(){return{values:[]}}const FormFieldValue_SelectionValue={$type:"devvit.ui.form_builder.v1alpha.FormFieldValue.SelectionValue",encode(t,e=_m0.Writer.create()){for(const n of t.values)e.uint32(10).string(n);return e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseFormFieldValue_SelectionValue();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.values.push(n.string());continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{values:globalThis.Array.isArray(t==null?void 0:t.values)?t.values.map(e=>globalThis.String(e)):[]}},toJSON(t){var n;const e={};return(n=t.values)!=null&&n.length&&(e.values=t.values),e},create(t){return FormFieldValue_SelectionValue.fromPartial(t??{})},fromPartial(t){var n;const e=createBaseFormFieldValue_SelectionValue();return e.values=((n=t.values)==null?void 0:n.map(i=>i))||[],e}};messageTypeRegistry.set(FormFieldValue_SelectionValue.$type,FormFieldValue_SelectionValue);function createBaseFormFieldValue_GroupValue(){return{}}const FormFieldValue_GroupValue={$type:"devvit.ui.form_builder.v1alpha.FormFieldValue.GroupValue",encode(t,e=_m0.Writer.create()){return e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseFormFieldValue_GroupValue();for(;n.pos<i;){const a=n.uint32();if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{}},toJSON(t){return{}},create(t){return FormFieldValue_GroupValue.fromPartial(t??{})},fromPartial(t){return createBaseFormFieldValue_GroupValue()}};messageTypeRegistry.set(FormFieldValue_GroupValue.$type,FormFieldValue_GroupValue);function isSet$4(t){return t!=null}function createBaseFormField(){return{fieldId:"",fieldType:0,label:"",helpText:void 0,defaultValue:void 0,required:void 0,disabled:void 0,fieldConfig:void 0,isSecret:void 0}}const FormField={$type:"devvit.ui.form_builder.v1alpha.FormField",encode(t,e=_m0.Writer.create()){return t.fieldId!==""&&e.uint32(10).string(t.fieldId),t.fieldType!==0&&e.uint32(16).int32(t.fieldType),t.label!==""&&e.uint32(26).string(t.label),t.helpText!==void 0&&e.uint32(34).string(t.helpText),t.defaultValue!==void 0&&FormFieldValue.encode(t.defaultValue,e.uint32(42).fork()).ldelim(),t.required!==void 0&&e.uint32(48).bool(t.required),t.disabled!==void 0&&e.uint32(56).bool(t.disabled),t.fieldConfig!==void 0&&FieldConfig.encode(t.fieldConfig,e.uint32(66).fork()).ldelim(),t.isSecret!==void 0&&e.uint32(72).bool(t.isSecret),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseFormField();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.fieldId=n.string();continue;case 2:if(a!==16)break;r.fieldType=n.int32();continue;case 3:if(a!==26)break;r.label=n.string();continue;case 4:if(a!==34)break;r.helpText=n.string();continue;case 5:if(a!==42)break;r.defaultValue=FormFieldValue.decode(n,n.uint32());continue;case 6:if(a!==48)break;r.required=n.bool();continue;case 7:if(a!==56)break;r.disabled=n.bool();continue;case 8:if(a!==66)break;r.fieldConfig=FieldConfig.decode(n,n.uint32());continue;case 9:if(a!==72)break;r.isSecret=n.bool();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{fieldId:isSet$3(t.fieldId)?globalThis.String(t.fieldId):"",fieldType:isSet$3(t.fieldType)?formFieldTypeFromJSON(t.fieldType):0,label:isSet$3(t.label)?globalThis.String(t.label):"",helpText:isSet$3(t.helpText)?globalThis.String(t.helpText):void 0,defaultValue:isSet$3(t.defaultValue)?FormFieldValue.fromJSON(t.defaultValue):void 0,required:isSet$3(t.required)?globalThis.Boolean(t.required):void 0,disabled:isSet$3(t.disabled)?globalThis.Boolean(t.disabled):void 0,fieldConfig:isSet$3(t.fieldConfig)?FieldConfig.fromJSON(t.fieldConfig):void 0,isSecret:isSet$3(t.isSecret)?globalThis.Boolean(t.isSecret):void 0}},toJSON(t){const e={};return t.fieldId!==""&&(e.fieldId=t.fieldId),t.fieldType!==0&&(e.fieldType=formFieldTypeToJSON(t.fieldType)),t.label!==""&&(e.label=t.label),t.helpText!==void 0&&(e.helpText=t.helpText),t.defaultValue!==void 0&&(e.defaultValue=FormFieldValue.toJSON(t.defaultValue)),t.required!==void 0&&(e.required=t.required),t.disabled!==void 0&&(e.disabled=t.disabled),t.fieldConfig!==void 0&&(e.fieldConfig=FieldConfig.toJSON(t.fieldConfig)),t.isSecret!==void 0&&(e.isSecret=t.isSecret),e},create(t){return FormField.fromPartial(t??{})},fromPartial(t){const e=createBaseFormField();return e.fieldId=t.fieldId??"",e.fieldType=t.fieldType??0,e.label=t.label??"",e.helpText=t.helpText??void 0,e.defaultValue=t.defaultValue!==void 0&&t.defaultValue!==null?FormFieldValue.fromPartial(t.defaultValue):void 0,e.required=t.required??void 0,e.disabled=t.disabled??void 0,e.fieldConfig=t.fieldConfig!==void 0&&t.fieldConfig!==null?FieldConfig.fromPartial(t.fieldConfig):void 0,e.isSecret=t.isSecret??void 0,e}};messageTypeRegistry.set(FormField.$type,FormField);function createBaseFieldConfig(){return{stringConfig:void 0,paragraphConfig:void 0,numberConfig:void 0,booleanConfig:void 0,listConfig:void 0,selectionConfig:void 0,groupConfig:void 0}}const FieldConfig={$type:"devvit.ui.form_builder.v1alpha.FieldConfig",encode(t,e=_m0.Writer.create()){return t.stringConfig!==void 0&&FieldConfig_String.encode(t.stringConfig,e.uint32(10).fork()).ldelim(),t.paragraphConfig!==void 0&&FieldConfig_Paragraph.encode(t.paragraphConfig,e.uint32(18).fork()).ldelim(),t.numberConfig!==void 0&&FieldConfig_Number.encode(t.numberConfig,e.uint32(26).fork()).ldelim(),t.booleanConfig!==void 0&&FieldConfig_Boolean.encode(t.booleanConfig,e.uint32(34).fork()).ldelim(),t.listConfig!==void 0&&FieldConfig_List.encode(t.listConfig,e.uint32(42).fork()).ldelim(),t.selectionConfig!==void 0&&FieldConfig_Selection.encode(t.selectionConfig,e.uint32(50).fork()).ldelim(),t.groupConfig!==void 0&&FieldConfig_Group.encode(t.groupConfig,e.uint32(58).fork()).ldelim(),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseFieldConfig();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.stringConfig=FieldConfig_String.decode(n,n.uint32());continue;case 2:if(a!==18)break;r.paragraphConfig=FieldConfig_Paragraph.decode(n,n.uint32());continue;case 3:if(a!==26)break;r.numberConfig=FieldConfig_Number.decode(n,n.uint32());continue;case 4:if(a!==34)break;r.booleanConfig=FieldConfig_Boolean.decode(n,n.uint32());continue;case 5:if(a!==42)break;r.listConfig=FieldConfig_List.decode(n,n.uint32());continue;case 6:if(a!==50)break;r.selectionConfig=FieldConfig_Selection.decode(n,n.uint32());continue;case 7:if(a!==58)break;r.groupConfig=FieldConfig_Group.decode(n,n.uint32());continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{stringConfig:isSet$3(t.stringConfig)?FieldConfig_String.fromJSON(t.stringConfig):void 0,paragraphConfig:isSet$3(t.paragraphConfig)?FieldConfig_Paragraph.fromJSON(t.paragraphConfig):void 0,numberConfig:isSet$3(t.numberConfig)?FieldConfig_Number.fromJSON(t.numberConfig):void 0,booleanConfig:isSet$3(t.booleanConfig)?FieldConfig_Boolean.fromJSON(t.booleanConfig):void 0,listConfig:isSet$3(t.listConfig)?FieldConfig_List.fromJSON(t.listConfig):void 0,selectionConfig:isSet$3(t.selectionConfig)?FieldConfig_Selection.fromJSON(t.selectionConfig):void 0,groupConfig:isSet$3(t.groupConfig)?FieldConfig_Group.fromJSON(t.groupConfig):void 0}},toJSON(t){const e={};return t.stringConfig!==void 0&&(e.stringConfig=FieldConfig_String.toJSON(t.stringConfig)),t.paragraphConfig!==void 0&&(e.paragraphConfig=FieldConfig_Paragraph.toJSON(t.paragraphConfig)),t.numberConfig!==void 0&&(e.numberConfig=FieldConfig_Number.toJSON(t.numberConfig)),t.booleanConfig!==void 0&&(e.booleanConfig=FieldConfig_Boolean.toJSON(t.booleanConfig)),t.listConfig!==void 0&&(e.listConfig=FieldConfig_List.toJSON(t.listConfig)),t.selectionConfig!==void 0&&(e.selectionConfig=FieldConfig_Selection.toJSON(t.selectionConfig)),t.groupConfig!==void 0&&(e.groupConfig=FieldConfig_Group.toJSON(t.groupConfig)),e},create(t){return FieldConfig.fromPartial(t??{})},fromPartial(t){const e=createBaseFieldConfig();return e.stringConfig=t.stringConfig!==void 0&&t.stringConfig!==null?FieldConfig_String.fromPartial(t.stringConfig):void 0,e.paragraphConfig=t.paragraphConfig!==void 0&&t.paragraphConfig!==null?FieldConfig_Paragraph.fromPartial(t.paragraphConfig):void 0,e.numberConfig=t.numberConfig!==void 0&&t.numberConfig!==null?FieldConfig_Number.fromPartial(t.numberConfig):void 0,e.booleanConfig=t.booleanConfig!==void 0&&t.booleanConfig!==null?FieldConfig_Boolean.fromPartial(t.booleanConfig):void 0,e.listConfig=t.listConfig!==void 0&&t.listConfig!==null?FieldConfig_List.fromPartial(t.listConfig):void 0,e.selectionConfig=t.selectionConfig!==void 0&&t.selectionConfig!==null?FieldConfig_Selection.fromPartial(t.selectionConfig):void 0,e.groupConfig=t.groupConfig!==void 0&&t.groupConfig!==null?FieldConfig_Group.fromPartial(t.groupConfig):void 0,e}};messageTypeRegistry.set(FieldConfig.$type,FieldConfig);function createBaseFieldConfig_String(){return{minLength:void 0,maxLength:void 0,placeholder:void 0}}const FieldConfig_String={$type:"devvit.ui.form_builder.v1alpha.FieldConfig.String",encode(t,e=_m0.Writer.create()){return t.minLength!==void 0&&e.uint32(8).int32(t.minLength),t.maxLength!==void 0&&e.uint32(16).int32(t.maxLength),t.placeholder!==void 0&&e.uint32(26).string(t.placeholder),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseFieldConfig_String();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==8)break;r.minLength=n.int32();continue;case 2:if(a!==16)break;r.maxLength=n.int32();continue;case 3:if(a!==26)break;r.placeholder=n.string();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{minLength:isSet$3(t.minLength)?globalThis.Number(t.minLength):void 0,maxLength:isSet$3(t.maxLength)?globalThis.Number(t.maxLength):void 0,placeholder:isSet$3(t.placeholder)?globalThis.String(t.placeholder):void 0}},toJSON(t){const e={};return t.minLength!==void 0&&(e.minLength=Math.round(t.minLength)),t.maxLength!==void 0&&(e.maxLength=Math.round(t.maxLength)),t.placeholder!==void 0&&(e.placeholder=t.placeholder),e},create(t){return FieldConfig_String.fromPartial(t??{})},fromPartial(t){const e=createBaseFieldConfig_String();return e.minLength=t.minLength??void 0,e.maxLength=t.maxLength??void 0,e.placeholder=t.placeholder??void 0,e}};messageTypeRegistry.set(FieldConfig_String.$type,FieldConfig_String);function createBaseFieldConfig_Paragraph(){return{maxCharacters:void 0,lineHeight:void 0,placeholder:void 0}}const FieldConfig_Paragraph={$type:"devvit.ui.form_builder.v1alpha.FieldConfig.Paragraph",encode(t,e=_m0.Writer.create()){return t.maxCharacters!==void 0&&e.uint32(8).int32(t.maxCharacters),t.lineHeight!==void 0&&e.uint32(16).int32(t.lineHeight),t.placeholder!==void 0&&e.uint32(26).string(t.placeholder),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseFieldConfig_Paragraph();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==8)break;r.maxCharacters=n.int32();continue;case 2:if(a!==16)break;r.lineHeight=n.int32();continue;case 3:if(a!==26)break;r.placeholder=n.string();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{maxCharacters:isSet$3(t.maxCharacters)?globalThis.Number(t.maxCharacters):void 0,lineHeight:isSet$3(t.lineHeight)?globalThis.Number(t.lineHeight):void 0,placeholder:isSet$3(t.placeholder)?globalThis.String(t.placeholder):void 0}},toJSON(t){const e={};return t.maxCharacters!==void 0&&(e.maxCharacters=Math.round(t.maxCharacters)),t.lineHeight!==void 0&&(e.lineHeight=Math.round(t.lineHeight)),t.placeholder!==void 0&&(e.placeholder=t.placeholder),e},create(t){return FieldConfig_Paragraph.fromPartial(t??{})},fromPartial(t){const e=createBaseFieldConfig_Paragraph();return e.maxCharacters=t.maxCharacters??void 0,e.lineHeight=t.lineHeight??void 0,e.placeholder=t.placeholder??void 0,e}};messageTypeRegistry.set(FieldConfig_Paragraph.$type,FieldConfig_Paragraph);function createBaseFieldConfig_Number(){return{step:void 0,min:void 0,max:void 0}}const FieldConfig_Number={$type:"devvit.ui.form_builder.v1alpha.FieldConfig.Number",encode(t,e=_m0.Writer.create()){return t.step!==void 0&&e.uint32(9).double(t.step),t.min!==void 0&&e.uint32(17).double(t.min),t.max!==void 0&&e.uint32(25).double(t.max),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseFieldConfig_Number();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==9)break;r.step=n.double();continue;case 2:if(a!==17)break;r.min=n.double();continue;case 3:if(a!==25)break;r.max=n.double();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{step:isSet$3(t.step)?globalThis.Number(t.step):void 0,min:isSet$3(t.min)?globalThis.Number(t.min):void 0,max:isSet$3(t.max)?globalThis.Number(t.max):void 0}},toJSON(t){const e={};return t.step!==void 0&&(e.step=t.step),t.min!==void 0&&(e.min=t.min),t.max!==void 0&&(e.max=t.max),e},create(t){return FieldConfig_Number.fromPartial(t??{})},fromPartial(t){const e=createBaseFieldConfig_Number();return e.step=t.step??void 0,e.min=t.min??void 0,e.max=t.max??void 0,e}};messageTypeRegistry.set(FieldConfig_Number.$type,FieldConfig_Number);function createBaseFieldConfig_Boolean(){return{}}const FieldConfig_Boolean={$type:"devvit.ui.form_builder.v1alpha.FieldConfig.Boolean",encode(t,e=_m0.Writer.create()){return e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseFieldConfig_Boolean();for(;n.pos<i;){const a=n.uint32();if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{}},toJSON(t){return{}},create(t){return FieldConfig_Boolean.fromPartial(t??{})},fromPartial(t){return createBaseFieldConfig_Boolean()}};messageTypeRegistry.set(FieldConfig_Boolean.$type,FieldConfig_Boolean);function createBaseFieldConfig_List(){return{itemType:0,itemConfig:void 0,minEntries:void 0,maxEntries:void 0,entryLabel:void 0}}const FieldConfig_List={$type:"devvit.ui.form_builder.v1alpha.FieldConfig.List",encode(t,e=_m0.Writer.create()){return t.itemType!==0&&e.uint32(8).int32(t.itemType),t.itemConfig!==void 0&&FieldConfig.encode(t.itemConfig,e.uint32(18).fork()).ldelim(),t.minEntries!==void 0&&e.uint32(24).int32(t.minEntries),t.maxEntries!==void 0&&e.uint32(32).int32(t.maxEntries),t.entryLabel!==void 0&&e.uint32(42).string(t.entryLabel),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseFieldConfig_List();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==8)break;r.itemType=n.int32();continue;case 2:if(a!==18)break;r.itemConfig=FieldConfig.decode(n,n.uint32());continue;case 3:if(a!==24)break;r.minEntries=n.int32();continue;case 4:if(a!==32)break;r.maxEntries=n.int32();continue;case 5:if(a!==42)break;r.entryLabel=n.string();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{itemType:isSet$3(t.itemType)?formFieldTypeFromJSON(t.itemType):0,itemConfig:isSet$3(t.itemConfig)?FieldConfig.fromJSON(t.itemConfig):void 0,minEntries:isSet$3(t.minEntries)?globalThis.Number(t.minEntries):void 0,maxEntries:isSet$3(t.maxEntries)?globalThis.Number(t.maxEntries):void 0,entryLabel:isSet$3(t.entryLabel)?globalThis.String(t.entryLabel):void 0}},toJSON(t){const e={};return t.itemType!==0&&(e.itemType=formFieldTypeToJSON(t.itemType)),t.itemConfig!==void 0&&(e.itemConfig=FieldConfig.toJSON(t.itemConfig)),t.minEntries!==void 0&&(e.minEntries=Math.round(t.minEntries)),t.maxEntries!==void 0&&(e.maxEntries=Math.round(t.maxEntries)),t.entryLabel!==void 0&&(e.entryLabel=t.entryLabel),e},create(t){return FieldConfig_List.fromPartial(t??{})},fromPartial(t){const e=createBaseFieldConfig_List();return e.itemType=t.itemType??0,e.itemConfig=t.itemConfig!==void 0&&t.itemConfig!==null?FieldConfig.fromPartial(t.itemConfig):void 0,e.minEntries=t.minEntries??void 0,e.maxEntries=t.maxEntries??void 0,e.entryLabel=t.entryLabel??void 0,e}};messageTypeRegistry.set(FieldConfig_List.$type,FieldConfig_List);function createBaseFieldConfig_Selection(){return{choices:[],multiSelect:void 0,minSelections:void 0,maxSelections:void 0,renderAsList:void 0}}const FieldConfig_Selection={$type:"devvit.ui.form_builder.v1alpha.FieldConfig.Selection",encode(t,e=_m0.Writer.create()){for(const n of t.choices)FieldConfig_Selection_Item.encode(n,e.uint32(10).fork()).ldelim();return t.multiSelect!==void 0&&e.uint32(16).bool(t.multiSelect),t.minSelections!==void 0&&e.uint32(24).int32(t.minSelections),t.maxSelections!==void 0&&e.uint32(32).int32(t.maxSelections),t.renderAsList!==void 0&&e.uint32(40).bool(t.renderAsList),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseFieldConfig_Selection();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.choices.push(FieldConfig_Selection_Item.decode(n,n.uint32()));continue;case 2:if(a!==16)break;r.multiSelect=n.bool();continue;case 3:if(a!==24)break;r.minSelections=n.int32();continue;case 4:if(a!==32)break;r.maxSelections=n.int32();continue;case 5:if(a!==40)break;r.renderAsList=n.bool();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{choices:globalThis.Array.isArray(t==null?void 0:t.choices)?t.choices.map(e=>FieldConfig_Selection_Item.fromJSON(e)):[],multiSelect:isSet$3(t.multiSelect)?globalThis.Boolean(t.multiSelect):void 0,minSelections:isSet$3(t.minSelections)?globalThis.Number(t.minSelections):void 0,maxSelections:isSet$3(t.maxSelections)?globalThis.Number(t.maxSelections):void 0,renderAsList:isSet$3(t.renderAsList)?globalThis.Boolean(t.renderAsList):void 0}},toJSON(t){var n;const e={};return(n=t.choices)!=null&&n.length&&(e.choices=t.choices.map(i=>FieldConfig_Selection_Item.toJSON(i))),t.multiSelect!==void 0&&(e.multiSelect=t.multiSelect),t.minSelections!==void 0&&(e.minSelections=Math.round(t.minSelections)),t.maxSelections!==void 0&&(e.maxSelections=Math.round(t.maxSelections)),t.renderAsList!==void 0&&(e.renderAsList=t.renderAsList),e},create(t){return FieldConfig_Selection.fromPartial(t??{})},fromPartial(t){var n;const e=createBaseFieldConfig_Selection();return e.choices=((n=t.choices)==null?void 0:n.map(i=>FieldConfig_Selection_Item.fromPartial(i)))||[],e.multiSelect=t.multiSelect??void 0,e.minSelections=t.minSelections??void 0,e.maxSelections=t.maxSelections??void 0,e.renderAsList=t.renderAsList??void 0,e}};messageTypeRegistry.set(FieldConfig_Selection.$type,FieldConfig_Selection);function createBaseFieldConfig_Selection_Item(){return{label:"",value:""}}const FieldConfig_Selection_Item={$type:"devvit.ui.form_builder.v1alpha.FieldConfig.Selection.Item",encode(t,e=_m0.Writer.create()){return t.label!==""&&e.uint32(10).string(t.label),t.value!==""&&e.uint32(18).string(t.value),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseFieldConfig_Selection_Item();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.label=n.string();continue;case 2:if(a!==18)break;r.value=n.string();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{label:isSet$3(t.label)?globalThis.String(t.label):"",value:isSet$3(t.value)?globalThis.String(t.value):""}},toJSON(t){const e={};return t.label!==""&&(e.label=t.label),t.value!==""&&(e.value=t.value),e},create(t){return FieldConfig_Selection_Item.fromPartial(t??{})},fromPartial(t){const e=createBaseFieldConfig_Selection_Item();return e.label=t.label??"",e.value=t.value??"",e}};messageTypeRegistry.set(FieldConfig_Selection_Item.$type,FieldConfig_Selection_Item);function createBaseFieldConfig_Group(){return{fields:[]}}const FieldConfig_Group={$type:"devvit.ui.form_builder.v1alpha.FieldConfig.Group",encode(t,e=_m0.Writer.create()){for(const n of t.fields)FormField.encode(n,e.uint32(10).fork()).ldelim();return e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseFieldConfig_Group();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.fields.push(FormField.decode(n,n.uint32()));continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{fields:globalThis.Array.isArray(t==null?void 0:t.fields)?t.fields.map(e=>FormField.fromJSON(e)):[]}},toJSON(t){var n;const e={};return(n=t.fields)!=null&&n.length&&(e.fields=t.fields.map(i=>FormField.toJSON(i))),e},create(t){return FieldConfig_Group.fromPartial(t??{})},fromPartial(t){var n;const e=createBaseFieldConfig_Group();return e.fields=((n=t.fields)==null?void 0:n.map(i=>FormField.fromPartial(i)))||[],e}};messageTypeRegistry.set(FieldConfig_Group.$type,FieldConfig_Group);function isSet$3(t){return t!=null}function createBaseForm(){return{fields:[],title:void 0,shortDescription:void 0,acceptLabel:void 0,cancelLabel:void 0,id:void 0}}const Form={$type:"devvit.ui.form_builder.v1alpha.Form",encode(t,e=_m0.Writer.create()){for(const n of t.fields)FormField.encode(n,e.uint32(10).fork()).ldelim();return t.title!==void 0&&e.uint32(18).string(t.title),t.shortDescription!==void 0&&e.uint32(26).string(t.shortDescription),t.acceptLabel!==void 0&&e.uint32(34).string(t.acceptLabel),t.cancelLabel!==void 0&&e.uint32(42).string(t.cancelLabel),t.id!==void 0&&e.uint32(50).string(t.id),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseForm();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.fields.push(FormField.decode(n,n.uint32()));continue;case 2:if(a!==18)break;r.title=n.string();continue;case 3:if(a!==26)break;r.shortDescription=n.string();continue;case 4:if(a!==34)break;r.acceptLabel=n.string();continue;case 5:if(a!==42)break;r.cancelLabel=n.string();continue;case 6:if(a!==50)break;r.id=n.string();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{fields:globalThis.Array.isArray(t==null?void 0:t.fields)?t.fields.map(e=>FormField.fromJSON(e)):[],title:isSet$2(t.title)?globalThis.String(t.title):void 0,shortDescription:isSet$2(t.shortDescription)?globalThis.String(t.shortDescription):void 0,acceptLabel:isSet$2(t.acceptLabel)?globalThis.String(t.acceptLabel):void 0,cancelLabel:isSet$2(t.cancelLabel)?globalThis.String(t.cancelLabel):void 0,id:isSet$2(t.id)?globalThis.String(t.id):void 0}},toJSON(t){var n;const e={};return(n=t.fields)!=null&&n.length&&(e.fields=t.fields.map(i=>FormField.toJSON(i))),t.title!==void 0&&(e.title=t.title),t.shortDescription!==void 0&&(e.shortDescription=t.shortDescription),t.acceptLabel!==void 0&&(e.acceptLabel=t.acceptLabel),t.cancelLabel!==void 0&&(e.cancelLabel=t.cancelLabel),t.id!==void 0&&(e.id=t.id),e},create(t){return Form.fromPartial(t??{})},fromPartial(t){var n;const e=createBaseForm();return e.fields=((n=t.fields)==null?void 0:n.map(i=>FormField.fromPartial(i)))||[],e.title=t.title??void 0,e.shortDescription=t.shortDescription??void 0,e.acceptLabel=t.acceptLabel??void 0,e.cancelLabel=t.cancelLabel??void 0,e.id=t.id??void 0,e}};messageTypeRegistry.set(Form.$type,Form);function isSet$2(t){return t!=null}function createBaseShowFormEffect(){return{form:void 0}}const ShowFormEffect={$type:"devvit.ui.effects.v1alpha.ShowFormEffect",encode(t,e=_m0.Writer.create()){return t.form!==void 0&&Form.encode(t.form,e.uint32(10).fork()).ldelim(),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseShowFormEffect();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.form=Form.decode(n,n.uint32());continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{form:isSet$1(t.form)?Form.fromJSON(t.form):void 0}},toJSON(t){const e={};return t.form!==void 0&&(e.form=Form.toJSON(t.form)),e},create(t){return ShowFormEffect.fromPartial(t??{})},fromPartial(t){const e=createBaseShowFormEffect();return e.form=t.form!==void 0&&t.form!==null?Form.fromPartial(t.form):void 0,e}};messageTypeRegistry.set(ShowFormEffect.$type,ShowFormEffect);function createBaseFormSubmittedEvent(){return{results:{},formId:void 0}}const FormSubmittedEvent={$type:"devvit.ui.effects.v1alpha.FormSubmittedEvent",encode(t,e=_m0.Writer.create()){return Object.entries(t.results).forEach(([n,i])=>{FormSubmittedEvent_ResultsEntry.encode({key:n,value:i},e.uint32(10).fork()).ldelim()}),t.formId!==void 0&&e.uint32(18).string(t.formId),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseFormSubmittedEvent();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;const s=FormSubmittedEvent_ResultsEntry.decode(n,n.uint32());s.value!==void 0&&(r.results[s.key]=s.value);continue;case 2:if(a!==18)break;r.formId=n.string();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{results:isObject(t.results)?Object.entries(t.results).reduce((e,[n,i])=>(e[n]=FormFieldValue.fromJSON(i),e),{}):{},formId:isSet$1(t.formId)?globalThis.String(t.formId):void 0}},toJSON(t){const e={};if(t.results){const n=Object.entries(t.results);n.length>0&&(e.results={},n.forEach(([i,r])=>{e.results[i]=FormFieldValue.toJSON(r)}))}return t.formId!==void 0&&(e.formId=t.formId),e},create(t){return FormSubmittedEvent.fromPartial(t??{})},fromPartial(t){const e=createBaseFormSubmittedEvent();return e.results=Object.entries(t.results??{}).reduce((n,[i,r])=>(r!==void 0&&(n[i]=FormFieldValue.fromPartial(r)),n),{}),e.formId=t.formId??void 0,e}};messageTypeRegistry.set(FormSubmittedEvent.$type,FormSubmittedEvent);function createBaseFormSubmittedEvent_ResultsEntry(){return{key:"",value:void 0}}const FormSubmittedEvent_ResultsEntry={$type:"devvit.ui.effects.v1alpha.FormSubmittedEvent.ResultsEntry",encode(t,e=_m0.Writer.create()){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&FormFieldValue.encode(t.value,e.uint32(18).fork()).ldelim(),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseFormSubmittedEvent_ResultsEntry();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.key=n.string();continue;case 2:if(a!==18)break;r.value=FormFieldValue.decode(n,n.uint32());continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{key:isSet$1(t.key)?globalThis.String(t.key):"",value:isSet$1(t.value)?FormFieldValue.fromJSON(t.value):void 0}},toJSON(t){const e={};return t.key!==""&&(e.key=t.key),t.value!==void 0&&(e.value=FormFieldValue.toJSON(t.value)),e},create(t){return FormSubmittedEvent_ResultsEntry.fromPartial(t??{})},fromPartial(t){const e=createBaseFormSubmittedEvent_ResultsEntry();return e.key=t.key??"",e.value=t.value!==void 0&&t.value!==null?FormFieldValue.fromPartial(t.value):void 0,e}};messageTypeRegistry.set(FormSubmittedEvent_ResultsEntry.$type,FormSubmittedEvent_ResultsEntry);function createBaseFormCanceledEvent(){return{formId:void 0}}const FormCanceledEvent={$type:"devvit.ui.effects.v1alpha.FormCanceledEvent",encode(t,e=_m0.Writer.create()){return t.formId!==void 0&&e.uint32(10).string(t.formId),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseFormCanceledEvent();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.formId=n.string();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{formId:isSet$1(t.formId)?globalThis.String(t.formId):void 0}},toJSON(t){const e={};return t.formId!==void 0&&(e.formId=t.formId),e},create(t){return FormCanceledEvent.fromPartial(t??{})},fromPartial(t){const e=createBaseFormCanceledEvent();return e.formId=t.formId??void 0,e}};messageTypeRegistry.set(FormCanceledEvent.$type,FormCanceledEvent);function isObject(t){return typeof t=="object"&&t!==null}function isSet$1(t){return t!=null}var WebViewVisibility;(function(t){t[t.WEBVIEW_VISIBLE=0]="WEBVIEW_VISIBLE",t[t.WEBVIEW_HIDDEN=1]="WEBVIEW_HIDDEN",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED"})(WebViewVisibility||(WebViewVisibility={}));function webViewVisibilityFromJSON(t){switch(t){case 0:case"WEBVIEW_VISIBLE":return WebViewVisibility.WEBVIEW_VISIBLE;case 1:case"WEBVIEW_HIDDEN":return WebViewVisibility.WEBVIEW_HIDDEN;case-1:case"UNRECOGNIZED":default:return WebViewVisibility.UNRECOGNIZED}}function webViewVisibilityToJSON(t){switch(t){case WebViewVisibility.WEBVIEW_VISIBLE:return 0;case WebViewVisibility.WEBVIEW_HIDDEN:return 1;case WebViewVisibility.UNRECOGNIZED:default:return-1}}function createBaseWebViewPostMessageEvent(){return{message:void 0,jsonString:""}}const WebViewPostMessageEvent={$type:"devvit.ui.events.v1alpha.WebViewPostMessageEvent",encode(t,e=_m0.Writer.create()){return t.message!==void 0&&Value.encode(Value.wrap(t.message),e.uint32(10).fork()).ldelim(),t.jsonString!==""&&e.uint32(18).string(t.jsonString),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseWebViewPostMessageEvent();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.message=Value.unwrap(Value.decode(n,n.uint32()));continue;case 2:if(a!==18)break;r.jsonString=n.string();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{message:isSet(t==null?void 0:t.message)?t.message:void 0,jsonString:isSet(t.jsonString)?globalThis.String(t.jsonString):""}},toJSON(t){const e={};return t.message!==void 0&&(e.message=t.message),t.jsonString!==""&&(e.jsonString=t.jsonString),e},create(t){return WebViewPostMessageEvent.fromPartial(t??{})},fromPartial(t){const e=createBaseWebViewPostMessageEvent();return e.message=t.message??void 0,e.jsonString=t.jsonString??"",e}};messageTypeRegistry.set(WebViewPostMessageEvent.$type,WebViewPostMessageEvent);function createBaseWebViewFullScreenEvent(){return{visibility:0}}const WebViewFullScreenEvent={$type:"devvit.ui.events.v1alpha.WebViewFullScreenEvent",encode(t,e=_m0.Writer.create()){return t.visibility!==0&&e.uint32(8).int32(t.visibility),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseWebViewFullScreenEvent();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==8)break;r.visibility=n.int32();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{visibility:isSet(t.visibility)?webViewVisibilityFromJSON(t.visibility):0}},toJSON(t){const e={};return t.visibility!==0&&(e.visibility=webViewVisibilityToJSON(t.visibility)),e},create(t){return WebViewFullScreenEvent.fromPartial(t??{})},fromPartial(t){const e=createBaseWebViewFullScreenEvent();return e.visibility=t.visibility??0,e}};messageTypeRegistry.set(WebViewFullScreenEvent.$type,WebViewFullScreenEvent);function createBaseWebViewEvent(){return{postMessage:void 0,fullScreen:void 0}}const WebViewEvent={$type:"devvit.ui.events.v1alpha.WebViewEvent",encode(t,e=_m0.Writer.create()){return t.postMessage!==void 0&&WebViewPostMessageEvent.encode(t.postMessage,e.uint32(10).fork()).ldelim(),t.fullScreen!==void 0&&WebViewFullScreenEvent.encode(t.fullScreen,e.uint32(18).fork()).ldelim(),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseWebViewEvent();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.postMessage=WebViewPostMessageEvent.decode(n,n.uint32());continue;case 2:if(a!==18)break;r.fullScreen=WebViewFullScreenEvent.decode(n,n.uint32());continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{postMessage:isSet(t.postMessage)?WebViewPostMessageEvent.fromJSON(t.postMessage):void 0,fullScreen:isSet(t.fullScreen)?WebViewFullScreenEvent.fromJSON(t.fullScreen):void 0}},toJSON(t){const e={};return t.postMessage!==void 0&&(e.postMessage=WebViewPostMessageEvent.toJSON(t.postMessage)),t.fullScreen!==void 0&&(e.fullScreen=WebViewFullScreenEvent.toJSON(t.fullScreen)),e},create(t){return WebViewEvent.fromPartial(t??{})},fromPartial(t){const e=createBaseWebViewEvent();return e.postMessage=t.postMessage!==void 0&&t.postMessage!==null?WebViewPostMessageEvent.fromPartial(t.postMessage):void 0,e.fullScreen=t.fullScreen!==void 0&&t.fullScreen!==null?WebViewFullScreenEvent.fromPartial(t.fullScreen):void 0,e}};messageTypeRegistry.set(WebViewEvent.$type,WebViewEvent);function createBaseWebViewImmersiveModeChangedEvent(){return{immersiveMode:0}}const WebViewImmersiveModeChangedEvent={$type:"devvit.ui.events.v1alpha.WebViewImmersiveModeChangedEvent",encode(t,e=_m0.Writer.create()){return t.immersiveMode!==0&&e.uint32(8).int32(t.immersiveMode),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseWebViewImmersiveModeChangedEvent();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==8)break;r.immersiveMode=n.int32();continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{immersiveMode:isSet(t.immersiveMode)?webViewImmersiveModeFromJSON(t.immersiveMode):0}},toJSON(t){const e={};return t.immersiveMode!==0&&(e.immersiveMode=webViewImmersiveModeToJSON(t.immersiveMode)),e},create(t){return WebViewImmersiveModeChangedEvent.fromPartial(t??{})},fromPartial(t){const e=createBaseWebViewImmersiveModeChangedEvent();return e.immersiveMode=t.immersiveMode??0,e}};messageTypeRegistry.set(WebViewImmersiveModeChangedEvent.$type,WebViewImmersiveModeChangedEvent);function createBaseWebViewInternalEventMessage(){return{id:"",formCanceled:void 0,formSubmitted:void 0,realtimeEvent:void 0,immersiveModeEvent:void 0,consentStatus:void 0}}const WebViewInternalEventMessage={$type:"devvit.ui.events.v1alpha.WebViewInternalEventMessage",encode(t,e=_m0.Writer.create()){return t.id!==""&&e.uint32(10).string(t.id),t.formCanceled!==void 0&&FormCanceledEvent.encode(t.formCanceled,e.uint32(18).fork()).ldelim(),t.formSubmitted!==void 0&&FormSubmittedEvent.encode(t.formSubmitted,e.uint32(26).fork()).ldelim(),t.realtimeEvent!==void 0&&RealtimeSubscriptionEvent.encode(t.realtimeEvent,e.uint32(34).fork()).ldelim(),t.immersiveModeEvent!==void 0&&WebViewImmersiveModeChangedEvent.encode(t.immersiveModeEvent,e.uint32(42).fork()).ldelim(),t.consentStatus!==void 0&&ConsentStatusEvent.encode(t.consentStatus,e.uint32(58).fork()).ldelim(),e},decode(t,e){const n=t instanceof _m0.Reader?t:_m0.Reader.create(t);let i=e===void 0?n.len:n.pos+e;const r=createBaseWebViewInternalEventMessage();for(;n.pos<i;){const a=n.uint32();switch(a>>>3){case 1:if(a!==10)break;r.id=n.string();continue;case 2:if(a!==18)break;r.formCanceled=FormCanceledEvent.decode(n,n.uint32());continue;case 3:if(a!==26)break;r.formSubmitted=FormSubmittedEvent.decode(n,n.uint32());continue;case 4:if(a!==34)break;r.realtimeEvent=RealtimeSubscriptionEvent.decode(n,n.uint32());continue;case 5:if(a!==42)break;r.immersiveModeEvent=WebViewImmersiveModeChangedEvent.decode(n,n.uint32());continue;case 7:if(a!==58)break;r.consentStatus=ConsentStatusEvent.decode(n,n.uint32());continue}if((a&7)===4||a===0)break;n.skipType(a&7)}return r},fromJSON(t){return{id:isSet(t.id)?globalThis.String(t.id):"",formCanceled:isSet(t.formCanceled)?FormCanceledEvent.fromJSON(t.formCanceled):void 0,formSubmitted:isSet(t.formSubmitted)?FormSubmittedEvent.fromJSON(t.formSubmitted):void 0,realtimeEvent:isSet(t.realtimeEvent)?RealtimeSubscriptionEvent.fromJSON(t.realtimeEvent):void 0,immersiveModeEvent:isSet(t.immersiveModeEvent)?WebViewImmersiveModeChangedEvent.fromJSON(t.immersiveModeEvent):void 0,consentStatus:isSet(t.consentStatus)?ConsentStatusEvent.fromJSON(t.consentStatus):void 0}},toJSON(t){const e={};return t.id!==""&&(e.id=t.id),t.formCanceled!==void 0&&(e.formCanceled=FormCanceledEvent.toJSON(t.formCanceled)),t.formSubmitted!==void 0&&(e.formSubmitted=FormSubmittedEvent.toJSON(t.formSubmitted)),t.realtimeEvent!==void 0&&(e.realtimeEvent=RealtimeSubscriptionEvent.toJSON(t.realtimeEvent)),t.immersiveModeEvent!==void 0&&(e.immersiveModeEvent=WebViewImmersiveModeChangedEvent.toJSON(t.immersiveModeEvent)),t.consentStatus!==void 0&&(e.consentStatus=ConsentStatusEvent.toJSON(t.consentStatus)),e},create(t){return WebViewInternalEventMessage.fromPartial(t??{})},fromPartial(t){const e=createBaseWebViewInternalEventMessage();return e.id=t.id??"",e.formCanceled=t.formCanceled!==void 0&&t.formCanceled!==null?FormCanceledEvent.fromPartial(t.formCanceled):void 0,e.formSubmitted=t.formSubmitted!==void 0&&t.formSubmitted!==null?FormSubmittedEvent.fromPartial(t.formSubmitted):void 0,e.realtimeEvent=t.realtimeEvent!==void 0&&t.realtimeEvent!==null?RealtimeSubscriptionEvent.fromPartial(t.realtimeEvent):void 0,e.immersiveModeEvent=t.immersiveModeEvent!==void 0&&t.immersiveModeEvent!==null?WebViewImmersiveModeChangedEvent.fromPartial(t.immersiveModeEvent):void 0,e.consentStatus=t.consentStatus!==void 0&&t.consentStatus!==null?ConsentStatusEvent.fromPartial(t.consentStatus):void 0,e}};messageTypeRegistry.set(WebViewInternalEventMessage.$type,WebViewInternalEventMessage);function isSet(t){return t!=null}const EFFECTS_WITH_RESPONSE=[3],emitEffect=t=>new Promise(e=>{const n={scope:0,type:"devvit-internal"};if(t.realtimeSubscriptions?n.realtimeEffect=t.realtimeSubscriptions:t.immersiveMode?n.immersiveMode=t.immersiveMode:t.share?n.share=t.share:n.effect=t,EFFECTS_WITH_RESPONSE.includes(t.type)){const i=self.crypto.randomUUID();n.id=i;const r=a=>{var s,o,l;if(((s=a.data)==null?void 0:s.type)==="devvit-message"&&((l=(o=a.data)==null?void 0:o.data)==null?void 0:l.id)===i){const c=WebViewInternalEventMessage.fromJSON(a.data.data);e(c),window.removeEventListener("message",r)}};window.addEventListener("message",r),window.parent.postMessage(n,"*")}else window.parent.postMessage(n,"*"),e(void 0)}),immersiveListeners=new Set;typeof addEventListener=="function"&&addEventListener("message",t=>{var a,s;const{type:e,data:n}=t.data;if(e!=="devvit-message"||!n.immersiveModeEvent)return;const r=((s=(a=t.data.data)==null?void 0:a.immersiveModeEvent)==null?void 0:s.immersiveMode)===2?"immersive":"inline";immersiveListeners.forEach(o=>o(r))});function navigateTo(t){const e=typeof t=="string"?t:t.url;if(!URL.canParse(e))throw new TypeError(`Invalid URL: ${e}`);const n=new URL(e).toString();emitEffect({navigateToUrl:{url:n},type:5})}const titleElement=document.getElementById("title"),counterValueElement=document.getElementById("counter-value"),docsLink=document.getElementById("docs-link"),playtestLink=document.getElementById("playtest-link"),discordLink=document.getElementById("discord-link");docsLink==null||docsLink.addEventListener("click",()=>navigateTo("https://developers.reddit.com/docs"));playtestLink==null||playtestLink.addEventListener("click",()=>navigateTo("https://www.reddit.com/r/Devvit"));discordLink==null||discordLink.addEventListener("click",()=>navigateTo("https://discord.com/invite/R7yu2wh9Qz"));let currentPostId=null;async function fetchInitialCount(){try{const t=await fetch("/api/init");if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const e=await t.json();e.type==="init"?(counterValueElement.textContent=e.count.toString(),currentPostId=e.postId,titleElement.textContent=`Hey ${e.username} 👋`):counterValueElement.textContent="Error"}catch(t){console.error("Error fetching initial count:",t),counterValueElement.textContent="Error"}}async function updateCounter(t){if(currentPostId)try{const e=await fetch(`/api/${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const n=await e.json();counterValueElement.textContent=n.count.toString()}catch(e){console.error(`Error ${t}ing count:`,e)}}const canvas=document.getElementById("bg"),scene=new Scene;scene.background=new Color(0);const camera=new PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3);camera.position.z=30;const renderer=new WebGLRenderer({antialias:!0,canvas});renderer.setPixelRatio(window.devicePixelRatio??1);renderer.setSize(window.innerWidth,window.innerHeight);renderer.setClearColor(0,1);camera.lookAt(0,0,0);renderer.render(scene,camera);window.addEventListener("resize",()=>{const{innerWidth:t,innerHeight:e}=window;camera.aspect=t/e,camera.updateProjectionMatrix(),renderer.setSize(t,e)});const ambientLight=new AmbientLight(16777215,.4);scene.add(ambientLight);const pointLight=new PointLight(16777215,1);pointLight.position.set(10,10,10);scene.add(pointLight);const textureLoader=new TextureLoader;textureLoader.crossOrigin="";const earthTexture=textureLoader.load("/earth_atmos_2048.jpg"),earthNormalMap=textureLoader.load("/earth_normal_2048.jpg"),earthSpecularMap=textureLoader.load("/earth_specular_2048.jpg");earthTexture.encoding=void 0;earthNormalMap.encoding=void 0;earthSpecularMap.encoding=void 0;const earthGeo=new SphereGeometry(10,64,64),earthMat=new MeshPhongMaterial({map:earthTexture,normalMap:earthNormalMap,specularMap:earthSpecularMap,shininess:5}),earthSphere=new Mesh(earthGeo,earthMat),planetGroup=new Group;planetGroup.add(earthSphere);scene.add(planetGroup);function addStar(){const t=new SphereGeometry(.25,24,24),e=new MeshStandardMaterial({color:16777215}),n=new Mesh(t,e),i=MathUtils.randFloatSpread(200),r=MathUtils.randFloatSpread(200),a=MathUtils.randFloatSpread(200);n.position.set(i,r,a),scene.add(n)}Array.from({length:200}).forEach(addStar);const raycaster=new Raycaster,mouse=new Vector2;let scaleVelocity=0;function handleClick(t){mouse.x=t.clientX/window.innerWidth*2-1,mouse.y=-(t.clientY/window.innerHeight)*2+1,raycaster.setFromCamera(mouse,camera),raycaster.intersectObject(earthSphere).length>0&&(scaleVelocity=.05,updateCounter("increment"))}window.addEventListener("pointerdown",handleClick);function animate(){if(requestAnimationFrame(animate),planetGroup.rotation.y+=.0025,planetGroup.rotation.x+=.001,scaleVelocity!==0){const t=planetGroup.scale.x+scaleVelocity;planetGroup.scale.set(t,t,t),t>=1.2&&(scaleVelocity=-.04),t<=1&&(planetGroup.scale.set(1,1,1),scaleVelocity=0)}renderer.render(scene,camera)}fetchInitialCount();animate();
//# sourceMappingURL=index-DFoMLV59.js.map
