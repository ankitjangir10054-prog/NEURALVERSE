import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/* =========================================
   MOVING PARTICLES
========================================= */

function MovingParticles() {
  const pointsRef = useRef(null);

  const particleCount = 120;

  const positions = new Float32Array(
    particleCount * 3
  );

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] =
      (Math.random() - 0.5) * 14;

    positions[i * 3 + 1] =
      (Math.random() - 0.5) * 7;

    positions[i * 3 + 2] =
      (Math.random() - 0.5) * 4;
  }

  useFrame(() => {
    if (!pointsRef.current) return;

    const positionArray =
      pointsRef.current.geometry
        .attributes
        .position
        .array;

    for (let i = 0; i < particleCount; i++) {
      const index = i * 3;

      // Move particles from left to right
      positionArray[index] += 0.012;

      // Reset when particle reaches right edge
      if (positionArray[index] > 7) {
        positionArray[index] = -7;
      }
    }

    pointsRef.current.geometry
      .attributes
      .position
      .needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>

      <bufferGeometry>

        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />

      </bufferGeometry>

      <pointsMaterial
        color="#ffffff"
        size={0.035}
        transparent
        opacity={0.75}
        sizeAttenuation
      />

    </points>
  );
}


/* =========================================
   NEURAL CORE
========================================= */

function NeuralCore() {

  const group = useRef(null);

  useFrame((state) => {

    const time =
      state.clock.getElapsedTime();

    if (!group.current) return;

    /* Automatic rotation */

    group.current.rotation.y =
      time * 0.18;

    /* Gentle floating rotation */

    group.current.rotation.x =
      Math.sin(time * 0.35) * 0.12;


    /* Mouse interaction */

    const mouseX =
      state.pointer.x;

    const mouseY =
      state.pointer.y;

    group.current.rotation.y +=
      mouseX * 0.08;

    group.current.rotation.x +=
      mouseY * 0.05;
  });


  /* Neural node positions */

  const nodes = [
    [1.7, 0, 0],
    [-1.7, 0, 0],
    [0, 1.7, 0],
    [0, -1.7, 0],
    [0, 0, 1.7],
    [0, 0, -1.7],
  ];


  return (
    <Float
      speed={1.2}
      rotationIntensity={0.2}
      floatIntensity={0.3}
    >

      <group
        ref={group}
        position={[1.8, 0, 0]}
        scale={0.65}
      >

        {/* =================================
            MAIN AI CORE
        ================================= */}

        <mesh>

          <sphereGeometry
            args={[0.8, 48, 48]}
          />

          <meshStandardMaterial
            color="#7c3aed"
            emissive="#4c1d95"
            emissiveIntensity={2}
            metalness={0.8}
            roughness={0.2}
          />

        </mesh>


        {/* =================================
            ENERGY SHELL
        ================================= */}

        <mesh>

          <sphereGeometry
            args={[1.15, 24, 24]}
          />

          <meshBasicMaterial
            color="#8b5cf6"
            transparent
            opacity={0.18}
            wireframe
          />

        </mesh>


        {/* =================================
            NEURAL NODES
        ================================= */}

        {nodes.map(
          (position, index) => (

            <mesh
              key={`node-${index}`}
              position={position}
            >

              <sphereGeometry
                args={[0.13, 16, 16]}
              />

              <meshStandardMaterial
                color="#22d3ee"
                emissive="#0891b2"
                emissiveIntensity={2}
                metalness={0.5}
                roughness={0.2}
              />

            </mesh>

          )
        )}


        {/* =================================
            NEURAL CONNECTIONS
        ================================= */}

        {nodes.map(
          (position, index) => {

            const start =
              new THREE.Vector3(
                0,
                0,
                0
              );

            const end =
              new THREE.Vector3(
                ...position
              );

            const direction =
              end.clone().sub(start);

            const length =
              direction.length();

            const midpoint =
              start
                .clone()
                .add(end)
                .multiplyScalar(0.5);


            /* Rotate cylinder toward node */

            const quaternion =
              new THREE.Quaternion();

            quaternion.setFromUnitVectors(
              new THREE.Vector3(
                0,
                1,
                0
              ),
              direction
                .clone()
                .normalize()
            );


            return (
              <mesh
                key={`connection-${index}`}
                position={midpoint}
                quaternion={quaternion}
              >

                <cylinderGeometry
                  args={[
                    0.012,
                    0.012,
                    length,
                    8,
                  ]}
                />

                <meshBasicMaterial
                  color="#22d3ee"
                  transparent
                  opacity={0.45}
                />

              </mesh>
            );
          }
        )}

      </group>

    </Float>
  );
}


/* =========================================
   MAIN 3D SCENE
========================================= */

export default function Scene() {

  return (
    <Canvas

      camera={{
        position: [0, 0, 7],
        fov: 45,
      }}

      /* Performance */

      dpr={[1, 1.25]}

      gl={{
        antialias: true,
        powerPreference:
          "high-performance",
      }}

    >

      {/* =================================
          LIGHTING
      ================================= */}

      <ambientLight
        intensity={0.25}
      />


      <pointLight
        position={[3, 3, 3]}
        intensity={8}
      />


      <pointLight
        position={[-3, -3, 2]}
        intensity={5}
      />


      {/* =================================
          MOVING PARTICLES
      ================================= */}

      <MovingParticles />


      {/* =================================
          NEURAL CORE
      ================================= */}

      <NeuralCore />

    </Canvas>
  );
}