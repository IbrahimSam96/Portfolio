import React, { useEffect, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three'

import { useAnimations, useGLTF, useScroll } from "@react-three/drei";


export const SCIFI = () => {


    const url = "Model/SCIFI/SCIFI.gltf"
    const gltf = useLoader(GLTFLoader, url);

    const { animations } = useGLTF(url)
    const { actions, clips } = useAnimations(animations)

    const scroll = useScroll();

    useEffect(() => {
        gltf.scene.scale.set(10, 10, 10);

        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        })
    }, [gltf])

    let mixer
    if (gltf.animations.length) {
        mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            action.play();
        });
    }
    useFrame((state, delta) => {
        mixer?.update(delta)

        let x = state.mouse.x * 0.25
        let y = state.mouse.y * 0.25 + 2
        gltf.scene.position.set(x, y, scroll.scroll.current * -25 )
    })

    return <primitive object={gltf.scene} />
}