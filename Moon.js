import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { Mesh } from "three";

export const Moon = () => {

    const gltf = useGLTF('/Model/Moon/Moon.gltf');

    useEffect(() => {

        gltf.scene.traverse((object) => {


        gltf.scene.scale.set(1, 1, 1);
        gltf.scene.position.set(-15, 25, -35);


            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        })
    }, [gltf])

    useFrame((state, delta) => {
        gltf.scene.rotation.y += delta * 0.4;

        gltf.scene.rotation.x += delta * 0.2;
        
        
    })

    return (
        <primitive object={gltf.scene} />
    )
}