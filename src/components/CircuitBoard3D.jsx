import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
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
    <group ref={groupRef} scale={[1.5, 1.5, 1.5]}>
      {/* Main PCB Board */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 0.1, 3]} />
        <meshStandardMaterial color="#0b3d91" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Circuit Traces */}
      {[...Array(12)].map((_, i) => (
        <Line
          key={`trace-${i}`}
          points={[
            [Math.random() * 3 - 1.5, 0.06, Math.random() * 2 - 1],
            [Math.random() * 3 - 1.5, 0.06, Math.random() * 2 - 1],
            [Math.random() * 3 - 1.5, 0.06, Math.random() * 2 - 1],
          ]}
          color="#10b981"
          lineWidth={2}
        />
      ))}

      {/* IC Chips */}
      {[...Array(4)].map((_, i) => (
        <mesh
          key={`ic-${i}`}
          position={[Math.random() * 2 - 1, 0.05, Math.random() * 1.5 - 0.75]}
        >
          <boxGeometry args={[0.6, 0.1, 0.4]} />
          <meshStandardMaterial color="#111111" roughness={0.4} metalness={0.6} />
        </mesh>
      ))}

      {/* Resistors */}
      {[...Array(6)].map((_, i) => (
        <mesh
          key={`resistor-${i}`}
          position={[Math.random() * 2 - 1, 0.06, Math.random() * 1.5 - 0.75]}
        >
          <cylinderGeometry args={[0.05, 0.05, 0.2, 16]} />
          <meshStandardMaterial color="#facc15" roughness={0.3} metalness={0.5} />
        </mesh>
      ))}

      {/* Capacitors */}
      {[...Array(6)].map((_, i) => (
        <mesh
          key={`capacitor-${i}`}
          position={[Math.random() * 2 - 1, 0.08, Math.random() * 1.5 - 0.75]}
        >
          <cylinderGeometry args={[0.05, 0.05, 0.25, 16]} />
          <meshStandardMaterial color="#6b7280" roughness={0.4} metalness={0.6} />
        </mesh>
      ))}

      {/* LEDs */}
      {[...Array(6)].map((_, i) => (
        <mesh
          key={`led-${i}`}
          position={[Math.random() * 2 - 1, 0.08, Math.random() * 1.5 - 0.75]}
        >
          <cylinderGeometry args={[0.07, 0.07, 0.15, 16]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#ef4444' : '#10b981'}
            emissive={i % 2 === 0 ? '#ef4444' : '#10b981'}
            emissiveIntensity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
};

const CircuitBoard3D = () => {
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700">
      <Canvas camera={{ position: [5, 3, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
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
