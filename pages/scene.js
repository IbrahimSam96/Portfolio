import { Edges, useCursor, Image, Environment, MeshReflectorMaterial, MeshRefractionMaterial, OrbitControls, PerspectiveCamera, Stats, Text, Trail, useTexture, Stars } from "@react-three/drei";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import React from "react";
import { useRef, useEffect, useState } from "react";
import * as THREE from 'three'
import { Color, Vector3, RepeatWrapping, TextureLoader } from 'three';

import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'
import { SCIFI } from "../SCIFI";
import { SPACE } from "../SPACE";
const Home = () => {

    const GOLDENRATIO = 1.61803398875

    const projects = [
        // Front
        { position: [1.5, 0, 2.5], rotation: [0, -Math.PI / 3.5, 0], url: '/Paylock.jpg', name: "Paylock" },
        { position: [-1.5, 0, 0], rotation: [0, Math.PI / 3.5, 0], url: "/MarketsSnap.png", name: "MarketsSnap" },

        { position: [1.5, 0, -2.5], rotation: [0, -Math.PI / 3.5, 0], url: "/DashX.png", name: "DashX" },
        { position: [-1.5, 0, -5.0], rotation: [0, Math.PI / 3.5, 0], url: "/GraphX.png", name: "GrpahX" },
        { position: [1.5, 0, -7.5], rotation: [0, -Math.PI / 3.5, 0], url: '/RaffleMania.png', name: "Rafflemania" },

        // { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(358574) },
        // // Right
        // { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(227675) },
        // { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(911738) },
        // { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986) }
    ]


    const Ground = () => {

        const terrainTextures = useTexture({
            map: "Textures/Snow_Diff.jpg",
            displacementMap: "Textures/Snow_Disp.jpg",
            aoMap: "Textures/Snow_AO.jpg",
            roughnessMap: "Textures/Snow_Rough.jpg",
            metalnessMap: "Textures/Snow_Metal.jpg",
            normalMap: "Textures/Snow_Normal.jpg"
        });

        return (
            <React.Fragment>
                <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
                    <planeGeometry args={[30, 30]} />
                    <MeshReflectorMaterial
                        {...terrainTextures}
                        envMapIntensity={0}
                        normalScale={[0.15, 0.15]}
                        dithering={true}
                        color={[0.015, 0.015, 0.015]}
                        roughness={0.5}
                        blur={[1000, 400]} // Blur ground reflections (width, heigt), 0 skips blur
                        mixBlur={30} // How much blur mixes with surface roughness (default = 1)
                        mixStrength={80} // Strength of the reflections
                        mixContrast={1} // Contrast of the reflections
                        resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
                        mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
                        depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
                        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
                        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
                        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
                        debug={0}
                        reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
                    />
                </mesh>
            </React.Fragment>
        )
    }
    const FloatingGrid = ({ position }) => {

        const diffuse = useLoader(TextureLoader, "Textures/grid-texture.png");

        useEffect(() => {
            diffuse.wrapS = RepeatWrapping;
            diffuse.wrapT = RepeatWrapping;
            // diffuse.anisotropy = 4;
            diffuse.repeat.set(30, 30);
            diffuse.offset.set(0, 0)
        }, [diffuse]);

        //       useFrame((state, delta) => {
        //     let t = -state.clock.getElapsedTime() * 0.68;
        //     diffuse.offset.set(0, t);
        //   });


        return (
            <React.Fragment>
                <mesh rotation-x={-Math.PI * 0.5} position={position}>
                    <planeGeometry args={[35, 35]} />
                    <meshBasicMaterial
                        color={[1, 1, 1]}
                        opacity={0.15}
                        map={diffuse}
                        alphaMap={diffuse}
                        transparent={true}
                    />
                </mesh>
            </React.Fragment>
        )
    }
    const Frame = ({ url, name, c = new THREE.Color(), ...props }) => {

        const project = useRef()
        const frame = useRef()
        const [, params] = useRoute('/scene/:id')
        const [hovered, hover] = useState(false)
        const [rnd] = useState(() => Math.random())
        // const name = getUuid(url)
        const isActive = params?.id === name
        useCursor(hovered)

        // 
        useFrame((state, dt) => {
            // image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) *9
            easing.damp3(project.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
            easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt)
        })
        return (
            <group {...props}>
                <mesh
                    name={name}
                    onPointerOver={(e) => (e.stopPropagation(), hover(true))}
                    onPointerOut={() => hover(false)}
                    scale={[1, GOLDENRATIO, 0.05]}
                    position={[0, GOLDENRATIO / 2, 0]}>
                    <boxGeometry />
                    <meshStandardMaterial color="black" metalness={0.5} roughness={0.5} envMapIntensity={2} />
                    <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
                        <boxGeometry />
                        <meshBasicMaterial toneMapped={false} fog={false} />
                        <Edges
                            scale={1.1}
                            threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                            color="hotpink"
                        />
                    </mesh>

                    <Image raycast={() => null} ref={project} position={[0, 0, 0.7]} url={url} />
                </mesh>
                <Text maxWidth={0.1} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.025}>
                    {name}
                </Text>
            </group>
        )
    }

    const Frames = ({ projects, q = new THREE.Quaternion(), p = new THREE.Vector3() }) => {
        const ref = useRef()
        const clicked = useRef()
        const [, params] = useRoute('/scene/:id')
        const [, setLocation] = useLocation()

        useFrame((state, delta) => {

            clicked.current = ref.current.getObjectByName(params?.id);
            if (clicked.current) {
                clicked.current.parent.updateWorldMatrix(true, true)
                clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
                clicked.current.parent.getWorldQuaternion(q)
            }
            else {
                p.set(0, 0, 5.5)
                q.identity()
            }
        })

        // Selects object to ease, 
        // How fast camera moves after each project is selected
        // 
        useFrame((state, dt) => {
            easing.damp3(state.camera.position, p, 0.3, dt)
            easing.dampQ(state.camera.quaternion, q, 0.3, dt)
            // easing.damp3(state.camera.position, [0, 0, 10 - window.scrollY / 500.0], 0.8, dt)
        })

        return (
            <React.Fragment>
                <group
                    ref={ref}
                    onClick={(e) => {
                        e.stopPropagation(),
                            setLocation(clicked.current == e.object ? '/scene' : '/scene/' + e.object.name)
                    }}
                    onPointerMissed={() => setLocation('/scene')}>
                    {projects.map((props) => <Frame key={props.url} {...props} /> /* prettier-ignore */)}

                </group>
            </React.Fragment>
        )
    }

    const Cube = ({ color, Index }) => {

        const boxRef = useRef();
        // Math.random returns 0-1 Math.pow(X,Y) 0-1^2 
        const [scale] = useState(() => Math.pow(Math.random(), 2) * 0.25 + 0.05);
        const [xRotSpeed] = useState(() => Math.random());
        const [yRotSpeed] = useState(() => Math.random());

        useFrame((state, delta) => {
            boxRef.current.rotation.x += delta * xRotSpeed
            boxRef.current.rotation.y += delta * yRotSpeed

        }, [xRotSpeed, yRotSpeed]);

        useEffect(() => {
            const resetPosition = () => {
                // X returns number between -3 to +3; Y returns numbers 0.1 to 2.6; Z returns numbers 15 to -15
                let v = new Vector3((Math.random() * 2 - 1) * 3, Math.random() * 2.5 + 0.1, (Math.random() * 2 - 1) * 15);
                // if v.x position is less than 0 (meaning in the center of screen blocking car add 1.75 to disperce it) 
                if (v.x < 0) {
                    v.x -= 1.95
                }
                if (v.x > 0) {
                    v.x += 1.95
                }
                return v
            }
            const position = resetPosition()

            // delta means how long since last frame was rendered
            boxRef.current.position.set(position.x, position.y, position.z);

        }, [])

        return (
            <React.Fragment>
                return (
                <mesh ref={boxRef} scale={scale} castShadow  >
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={color} envMapIntensity={0.15} />
                </mesh>
                )
            </React.Fragment>
        )
    }

    const Rings = () => {

        const ringsRef = useRef([]);

        useEffect(() => {
            for (let i = 0; i < ringsRef.current.length; i++) {
                let mesh = ringsRef.current[i];

                if (i % 2 == 1) {
                    mesh.material.emissive = new Color(100, 41.2, 70.6)
                }
                else {
                    mesh.material.emissive = new Color(0.1, 0.7, 3)
                }
            }
        }, [])

        useFrame((state) => {
            for (let i = 0; i < ringsRef.current.length; i++) {
                let mesh = ringsRef.current[i];
                let z = (i - 7) * 3.5;
                let x = (i - 7) * .5;

                mesh.position.set(0, 0, -z)
                let dist = Math.abs(z)

                mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04)

                // if (i % 2 == 1) {
                //     mesh.material.emissive = new Color(6, 0.15, 0.7)
                // }
                // else {
                //     mesh.material.emissive = new Color(0.1, 0.7, 3)
                // }
            }
        })

        return (
            <React.Fragment>
                {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((ring, index) => (
                    <mesh castShadow receiveShadow position={[0, 0, 0]} key={index} ref={(el) => (ringsRef.current[index] = el)} >
                        <torusGeometry args={[3.35, 0.05, 16, 100]} />
                        <meshStandardMaterial color={[0, 0, 0]} />
                    </mesh>
                )
                )}
            </React.Fragment>
        )
    }
    return (
        <div className={`h-full min-h-screen w-full grid grid-cols-[repeat(7,1fr)] grid-rows-[80px,350px] bg-[black]`}>

            <Canvas className={`row-start-2 col-start-1 col-span-7`} shadows camera={{ fov: 70, position: [0, 2, 15] }}>
                <Stats />
                <ambientLight intensity={1} />

                {[
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((obj, i) => {
                        return (
                            <Cube
                                key={i}
                                Index={i}
                                color={i % 2 == 0 ? "hotpink" : [0.1, 0.7, 3]}
                            />
                        )
                    })}

                <Rings />
                <fog attach="fog" args={['#191920', 0, 30]} />
                <group position={[0, -.75, 0]}>
                    <Frames projects={projects} />
                    <FloatingGrid position={[0, 0.2, 0]} />

                    <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow>
                        <planeGeometry args={[50, 50]} />
                        <MeshReflectorMaterial
                            blur={[300, 100]}
                            resolution={2048}
                            mixBlur={1}
                            mixStrength={50}
                            roughness={1}
                            depthScale={1.2}
                            minDepthThreshold={0.4}
                            maxDepthThreshold={1.4}
                            color="#050505"
                            metalness={0.5}
                        />
                    </mesh>
                </group>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    

                {/* <EffectComposer>
                    <DepthOfField focusDistance={0.0036} focalLength={0.01} bokehScale={6} height={480} />
                    <Bloom
                        blendFunction={BlendFunction.ADD}
                        intensity={1.3}
                        width={300}
                        height={300}
                        kernelSize={5}
                        luminanceThreshold={0.65}
                        luminanceSmoothing={0.25}
                    />
                    <ChromaticAberration
                        blendFunction={BlendFunction.NORMAL}
                        offset={[0.0005, 0.0012]} />
                </EffectComposer> */}


            </Canvas>
        </div>
    )
}
export default Home;
