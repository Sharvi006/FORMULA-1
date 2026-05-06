import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

// ==========================================
// THE SMOKE ENGINE
// ==========================================
function createSmokeTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');
  
  if (context) {
    const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(0.5, 'rgba(255,255,255,0.2)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);
  }
  return new THREE.CanvasTexture(canvas);
}

function Smoke() {
  const texture = useMemo(() => createSmokeTexture(), []);
  
  const particlesData = useMemo(() => {
    return Array.from({ length: 50 }).map(() => ({
      x: (Math.random() - 0.5) * 15,
      y: (Math.random() - 0.5) * 5 - 1,
      z: (Math.random() - 0.5) * 10 - 2,
      rotZ: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() * 0.005) - 0.0025,
      floatSpeed: Math.random() * 0.005
    }));
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.children.forEach((particle, i) => {
        const data = particlesData[i];
        particle.rotation.z += data.rotationSpeed;
        particle.position.y += data.floatSpeed;
        
        if (particle.position.y > 5) {
          particle.position.y = -3;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {particlesData.map((data, i) => (
        <mesh key={i} position={[data.x, data.y, data.z]} rotation={[0, 0, data.rotZ]}>
          <planeGeometry args={[8, 8]} />
          <meshLambertMaterial 
            color={0x444444} 
            map={texture} 
            transparent={true} 
            opacity={0.4} 
            depthWrite={false} 
            blending={THREE.AdditiveBlending} 
          />
        </mesh>
      ))}
    </group>
  );
}

function CarModel() {
  const { scene } = useGLTF("/my-f1-car.glb");
  
  return (
    // Applied exact scale and position from the user's code
    <primitive object={scene} scale={1} position={[0, -0.5, 0]} />
  );
}

export function Visualisations() {
  return (
    <main className="relative w-full h-screen bg-[#050505] text-white overflow-hidden pt-20">
      {/* Showroom Content Overlay */}
      <div className="absolute top-[15%] left-0 w-full z-10 text-center pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-[2px] mb-6 font-headline">
          Aerodynamic Perfection
        </h2>
        <p className="text-[#888888] text-sm tracking-[2px] uppercase m-0 font-body">
          Scroll to inspect the chassis.
        </p>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [4, 1.5, 7], fov: 45 }}>
          {/* Lighting tuned to match the dark, red aesthetic */}
          <ambientLight intensity={0.3} color={0xffffff} />
          
          {/* Strong red rim lighting from the side/back */}
          <pointLight position={[5, 1, 5]} color={0xff0000} intensity={8} distance={20} />
          <pointLight position={[-5, 0, -5]} color={0xff0000} intensity={5} distance={20} />
          
          {/* Soft white light from above to reveal logos */}
          <directionalLight position={[0, 10, 2]} color={0xffffff} intensity={1.5} />
          
          <Suspense fallback={
            <Html center>
              <div className="text-white/50 tracking-widest uppercase animate-pulse text-sm font-headline">
                Loading model...
              </div>
            </Html>
          }>
            <CarModel />
            <Smoke />
          </Suspense>

          <OrbitControls 
            makeDefault 
            enableDamping={true}
            dampingFactor={0.05}
            enableZoom={true}
            autoRotate={true}
            autoRotateSpeed={1.0}
          />
        </Canvas>
      </div>
    </main>
  );
}
