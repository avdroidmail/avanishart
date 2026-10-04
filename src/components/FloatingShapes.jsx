import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

const Blobs = () => {
    const blobs = useMemo(() => {
        return Array.from({ length: 4 }).map(() => ({
            position: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 15, -15],
            scale: Math.random() * 5 + 5,
            color: ["#ff3333", "#333333", "#777777", "#bbbbbb"][Math.floor(Math.random() * 4)],
            speed: Math.random() * 1 + 1,
            distort: Math.random() * 0.4 + 0.2
        }));
    }, []);

    return (
        <group>
            {blobs.map((blob, i) => (
                <Float key={i} speed={blob.speed} rotationIntensity={2} floatIntensity={2}>
                    <mesh position={blob.position} scale={blob.scale}>
                        <sphereGeometry args={[1, 32, 32]} />
                        <MeshDistortMaterial
                            color={blob.color}
                            transparent
                            opacity={0.15}
                            distort={blob.distort}
                            speed={blob.speed}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
};

const GeometricShape = ({ type, position, scale, color, speed, rotationSpeed }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * rotationSpeed;
      meshRef.current.rotation.y = t * rotationSpeed * 1.2;
      meshRef.current.rotation.z = t * rotationSpeed * 0.5;
    }
  });

  const geometry = useMemo(() => {
    switch (type) {
      case "ring":
        return new THREE.TorusGeometry(1, 0.05, 16, 50);
      case "plus":
        return null; // Special handling
      default:
        return new THREE.CircleGeometry(1, 32);
    }
  }, [type]);

  if (type === "plus") {
    return (
      <Float speed={speed * 4} rotationIntensity={2} floatIntensity={1}>
        <group ref={meshRef} position={position} scale={scale}>
          <mesh>
            <boxGeometry args={[2, 0.15, 0.15]} />
            <meshBasicMaterial color={color} transparent opacity={0.4} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <boxGeometry args={[2, 0.15, 0.15]} />
            <meshBasicMaterial color={color} transparent opacity={0.4} />
          </mesh>
        </group>
      </Float>
    );
  }

  return (
    <Float speed={speed * 4} rotationIntensity={1} floatIntensity={1}>
      <mesh
        ref={meshRef}
        position={position}
        scale={scale}
        geometry={geometry}
      >
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
};

const FloatingShapes = () => {
  const shapes = useMemo(() => {
    const items = [];
    const types = ["circle", "ring", "plus"];
    const colors = ["#000000", "#ff0000", "#555555", "#888888"];

    for (let i = 0; i < 12; i++) {
        items.push({
            type: types[i % types.length],
            position: [
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 5 - 10
            ],
            scale: Math.random() * 0.4 + 0.1,
            color: colors[i % colors.length],
            speed: Math.random() * 0.8 + 0.4,
            rotationSpeed: Math.random() * 0.5 + 0.2
        });
    }
    return items;
  }, []);

  return (
    <group>
      <Blobs />
      {shapes.map((shape, index) => (
        <GeometricShape key={index} {...shape} />
      ))}
    </group>
  );
};

export default FloatingShapes;
