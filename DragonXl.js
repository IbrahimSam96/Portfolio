import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei"
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";


export const DragonXl = () => {


    const gltf = useGLTF('/Model/DragonXl/DragonXl.gltf');

    useEffect(() => {

        gltf.scene.scale.set(0.002, 0.002, 0.002);
        gltf.scene.position.set(-10, 35, -60);

        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }

        })
    }, [gltf])

    useFrame((state, delta) => {
        gltf.scene.rotation.y += delta * 0.4
        gltf.scene.rotation.x += delta * 0.2
    })

    
    return (
        <primitive object={gltf.scene} />
    )
}