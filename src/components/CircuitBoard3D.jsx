import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

const CircuitBoard = () => {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main PCB Board */}
      <Box args={[4, 0.1, 3]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1e3a8a" roughness={0.1} metalness={0.8} />
      </Box>

      {/* Circuit Traces */}
      {Array.from({ length: 20 }, (_, i) => (
        <Box
          key={`trace-${i}`}
          args={[0.05, 0.02, Math.random() * 2 + 0.5]}
          position={[
            (Math.random() - 0.5) * 3.5,
            0.06,
            (Math.random() - 0.5) * 2.5
          ]}
          rotation={[0, Math.random() * Math.PI * 2, 0]}
        >
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.2} />
        </Box>
      ))}

      {/* Components */}
      {Array.from({ length: 8 }, (_, i) => (
        <Box
          key={`component-${i}`}
          args={[0.3 + Math.random() * 0.2, 0.2, 0.3 + Math.random() * 0.2]}
          position={[
            (Math.random() - 0.5) * 3,
            0.15,
            (Math.random() - 0.5) * 2
          ]}
        >
          <meshStandardMaterial color="#374151" roughness={0.3} metalness={0.7} />
        </Box>
      ))}

      {/* LEDs */}
      {Array.from({ length: 6 }, (_, i) => (
        <Cylinder
          key={`led-${i}`}
          args={[0.08, 0.08, 0.15]}
          position={[
            (Math.random() - 0.5) * 3,
            0.15,
            (Math.random() - 0.5) * 2
          ]}
        >
          <meshStandardMaterial
            color={i % 2 === 0 ? "#ef4444" : "#10b981"}
            emissive={i % 2 === 0 ? "#ef4444" : "#10b981"}
            emissiveIntensity={0.5}
          />
        </Cylinder>
      ))}

      {/* Capacitors */}
      {Array.from({ length: 12 }, (_, i) => (
        <Cylinder
          key={`capacitor-${i}`}
          args={[0.05, 0.05, 0.2]}
          position={[
            (Math.random() - 0.5) * 3,
            0.15,
            (Math.random() - 0.5) * 2
          ]}
        >
          <meshStandardMaterial color="#6b7280" roughness={0.4} metalness={0.6} />
        </Cylinder>
      ))}
    </group>
  );
};

const CircuitBoard3D = () => {
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700">
      <Canvas camera={{ position: [5, 3, 5], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
        <pointLight position={[10, -10, 10]} intensity={0.5} color="#3b82f6" />
        
        <CircuitBoard />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default CircuitBoard3D;
