import { Edges, useCursor, Environment, MeshReflectorMaterial, Stats, Text, useTexture, Stars, CubeCamera, useVideoTexture, Float, useScroll, ScrollControls, Html } from "@react-three/drei";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import React from "react";
import { useRef, useEffect, useState } from "react";
import * as THREE from 'three'
import { Color, Vector3, RepeatWrapping, TextureLoader } from 'three';
import { EffectComposer, Bloom, DepthOfField, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'
import { Suspense } from "react";
import { FaGithub, FaReact } from "react-icons/fa";
import { SCIFI } from "../SCIFI"
import Image from "next/image";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaHardHat } from 'react-icons/fa';
import { SiSolidity } from 'react-icons/si';
import { SiChainlink } from 'react-icons/si';

const Home = () => {

    const GOLDENRATIO = 1.61803398875

    const projects = [
        // Front
        {
            position: [1.5, 0, 2.5],
            rotation: [0, -Math.PI / 3.5, 0],
            url: "https://paylock.vercel.app/",
            name: "Paylock",
            isProject: true,
            description: "EVM-based smart contract application for sending & receiving withdrawable ERC20 payments.This application uses Open Zeppelin Defender Relayer to relay transactions and Chainklink price feed oracles to determine transactions fees on chain.",
            isAward: true,
            tech: ["Solidity", "Next.js", "TailwindCSS", "Hardhat", "Chainlink"]
        },
        {
            position: [-1.5, 0, 0],
            rotation: [0, Math.PI / 3.5, 0],
            url: "https://rafflemania.vercel.app/",
            name: "Rafflemania",
            isProject: true,
            description: "Winner at Polygon BUIDL IT: Summer 22 hacakathon, bullet-proof smart contract lottery deployed across 4 EVM chains(Polygon Mumbai, Ethereum Goerli, Binance Testnet, Avalanche Fuji). This application uses Chainlink Keepers to trigger raffle draw and Chainlink VRF (Verifiable Random Function) to generate a random number.",
            isAward: true,
            tech: ["Solidity", "Next.js", "TailwindCSS", "Hardhat", "Chainlink"]

        },
        {
            position: [-1.5, 0, -10.0],
            rotation: [0, Math.PI / 3.5, 0],

            url: "https://easy-graphs.vercel.app/",
            name: "EasyGraphs",
            isProject: true,
            description: "Next.js SSR app deployed on vercel using Firebase microservices (Auth, Analytics, No-Sql firestore.) I tried to help creators share visuals and infographics in a dashboard.(Currently on the shelf, needs some motivation.)",
            isAward: false,
            tech: ["Next.js", "TailwindCSS", "Firebase"]

        },
        {
            position: [-1.5, 0, -5.0],
            rotation: [0, Math.PI / 3.5, 0],
            url: "https://dashx-portfolio.web.app/",
            name: "DashX",
            isProject: true,
            description: "React.js dashboard deployed on Firebase, aimed to aggregate transactional level data and display real-time performance and exposure of sub-managed accounts.(Currently on the shelf, needs some motivation.)",
            isAward: false,
            tech: ["React.js", "TailwindCSS", "Firebase"]

        },
        {
            position: [1.5, 0, -7.5],
            rotation: [0, -Math.PI / 3.5, 0],
            url: "https://marketssnap.web.app/",
            name: "MarketsSnap",
            isProject: true,
            description: "React.js client-side app deployed on Firebase consuming Trading View's I-Frames to display brief overview of financial markets.",
            isAward: false,
            tech: ["React.js", "TailwindCSS", "Firebase"]

        },
        {
            position: [1.5, 0, -2.5],
            rotation: [0, -Math.PI / 3.5, 0],
            url: "",
            name: "Teal",
            isProject: false,
            description: "",
            isAward: false,
            tech: []

        },
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

        // useFrame((state, delta) => {
        //     let t = state.clock.getElapsedTime() * 0.68;
        //     diffuse.offset.set(0, t);
        // });


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

    const Frame = ({ url, name, isAward, isProject, description, tech, index, ...props }) => {

        const project = useRef()
        const frame = useRef();
        const [, params] = useRoute('/3D/:id')
        const [hovered, hover] = useState(false)
        const [location, setLocation] = useLocation()

        const isActive = params?.id === name;
        useCursor(hovered)


        const VideoMaterial = () => {
            const texture = useVideoTexture(`\Textures/${name}.mp4`)
            return (
                <meshBasicMaterial ref={project} map={texture} toneMapped={false} />
            )

        }

        const ProjectDetails = () => {
            const { gl } = useThree();

            const Tech = () => {

                return (
                    <span className={`flex`}>
                        {tech.map((obj) => {
                            console.log(obj)
                            return (
                                <>

                                    {obj == "Next.js" &&
                                        <span className={`group `} >
                                            <IoLogoVercel className={` hover:scale-110 bg-black p-2 rounded-xl ml-1`} color="white" fontSize="1.7rem" />
                                            <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                                Next.js/ Vercel
                                            </span>
                                        </span>
                                    }

                                    {obj == "Solidity" && <span className={`group`} >
                                        <SiSolidity className={` hover:scale-110 ml-1`} color="GREY" fontSize="1.7rem" />
                                        <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                            Solidity
                                        </span>
                                    </span>
                                    }
                                    {obj == "TailwindCSS" && <span className={`group`} >
                                        <SiTailwindcss className={` hover:scale-110 ml-1`} color="#38bdf8" fontSize="1.7rem" />
                                        <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                            TailwindCSS
                                        </span>
                                    </span>
                                    }

                                    {obj == "Hardhat" && <span className={`group`} >
                                        <FaHardHat className={` hover:scale-110 ml-1`} color="yellow" fontSize="1.7rem" />
                                        <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                            HardHat / ethers.js
                                        </span>
                                    </span>
                                    }
                                    {obj == "Chainlink" && <span className={`group`} >
                                        <SiChainlink className={` hover:scale-110 ml-1`} color="darkblue" fontSize="1.7rem" />
                                        <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                            Chainlink
                                        </span>
                                    </span>
                                    }

                                    {obj == "Firebase" && <span className={`group`} >
                                        <IoLogoFirebase className={` hover:scale-110`} color="#FFCB2B" fontSize="1.7rem" />
                                        <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                            firebase
                                        </span>
                                    </span>
                                    }

                                    {obj == "React.js" &&
                                        <span className={`group`} >
                                            <FaReact className={`animate-spin `} color="#61dafb" fontSize="1.7rem" />
                                            <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                                react.js
                                            </span>
                                        </span>}

                                </>
                            )
                        })}
                    </span>
                )

            }

            return (
                <>
                    <meshStandardMaterial
                        color={"#181f32"} metalness={0.5} roughness={0.5} envMapIntensity={2} />
                    <Html
                        scale={0.09}
                        transform
                        portal={{ current: gl.domElement.parentNode }}
                        position={[-0.05, 0, 0]}
                    >
                        <span onMouseOver={() => {
                            hover(true)
                        }}
                            onMouseOut={() => {
                                hover(false)

                            }} onClick={() => {
                                setLocation(location == '/3D/' + name ? "/3D/" : '/3D/' + name)
                            }} className={`shadow-md dark:shadow-[#181f32] m-2 col-start-1 col-end-2 grid grid-rows-[40px,150px,20px,50px,30px,30px,100px] px-2 grid-cols-1 w-[400px]  `}>
                            <span>
                                <Image
                                    className={`align-middle self-center inline`}
                                    src={`/${name}.svg`}
                                    alt="vintage"
                                    width={60}
                                    height={60}
                                />
                                <p className={`inline ml-4 text-[whitesmoke] tracking-tighter font-bold text-sm justify-self-center col-start-1 col-end-2 self-center`}>
                                    {name}
                                </p>
                            </span>
                            <p className={`inline text-[whitesmoke] tracking-tighter font-bold text-sm col-start-1 col-end-2 justify-self-center self-center`}>
                                {description}
                            </p>
                            <a className={`self-center row-start-3 col-start-1 col-end-2 justify-self-start inline`} href={url} rel="noreferrer" target="_blank">
                                <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer inline text-white leading-3 bg-slate-700 rounded p-1 px-2 hover:bg-slate-400`}>
                                    View Webpage
                                </span>
                            </a>
                            <a className={`self-center row-start-3 col-start-1 col-end-2 justify-self-end `} href={`https://github.com/IbrahimSam96/${name}`} rel="noreferrer" target="_blank">
                                <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer text-white leading-3 bg-slate-700 rounded p-1 px-2 hover:bg-slate-400 flex items-center `}>
                                    View on Github
                                    <FaGithub color="#F43B5F" fontSize="0.7rem" className={`self-center align-middle ml-1 `} />
                                </span>
                            </a>

                            <p className={`text-[whitesmoke] tracking-tighter font-bold text-sm justify-self-start col-start-1 col-end-2 self-center`}>
                                Tech
                            </p>

                            <Tech />


                            {isAward &&
                                <>
                                    <p className={`text-[whitesmoke] tracking-tighter font-bold text-sm justify-self-start col-start-1 col-end-2 self-center`}>
                                        Award
                                    </p>
                                    <Image
                                        className={`align-middle self-start inline`}
                                        src={`/${name}Award.png`}
                                        alt="vintage"
                                        width={250}
                                        height={100}
                                    />
                                </>
                            }
                        </span>

                    </Html>
                </>
            )
        }


        return (
            <group {...props}>
                <mesh
                    ref={project}
                    name={name}
                    onPointerOver={(e) => (e.stopPropagation(), hover(true))}
                    onPointerOut={() => hover(false)}
                    scale={[1.1, GOLDENRATIO, 0.05]}
                    position={[0, GOLDENRATIO / 1.9, 0]}
                >
                    <boxGeometry />
                    <meshStandardMaterial color={"black"} metalness={0.5} roughness={0.5} envMapIntensity={2} />
                    <mesh ref={frame} raycast={() => null} scale={[0.95, 0.93, 0.9]} position={[0, 0, 0.2]}>
                        <boxGeometry />

                        {isProject ? <ProjectDetails /> : <VideoMaterial />}

                        <Edges
                            scale={1.1}
                            threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                            color={isActive || hovered ? "orange" : "turquoise"}
                        />
                    </mesh>

                    {/* <Image raycast={() => null} ref={project} position={[0, 0, 0.7]} url={url} /> */}
                </mesh>

                {isProject &&
                    <Text color={"White"} maxWidth={0.1} anchorX="left" anchorY="top" position={[0.65, GOLDENRATIO, 0]} fontSize={0.05}>
                        {name}
                    </Text>}


            </group>
        )
    }

    const Frames = ({ projects, q = new THREE.Quaternion(), p = new THREE.Vector3() }) => {
        const ref = useRef();
        const clicked = useRef();
        const [, params] = useRoute('/3D/:id')
        const [, setLocation] = useLocation()

        const scroll = useScroll()

        useFrame((state, delta) => {
            clicked.current = ref.current.getObjectByName(params?.id)
            // console.log(ref.current)
            if (clicked.current) {
                clicked.current.parent.updateWorldMatrix(true, true)
                clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 1.9, 1.4))
                clicked.current.parent.getWorldQuaternion(q)
            }
            else {
                let x = state.mouse.x * 0.25
                let y = state.mouse.y * 0.25
                p.set(x, y, 6.5 + scroll.scroll.current * -10)
                q.identity()
            }
        })

        // Selects object to ease, 
        // How fast camera moves after each project is selected
        useFrame((state, dt) => {
            easing.damp3(state.camera.position, p, 0.3, dt)
            easing.dampQ(state.camera.quaternion, q, 0.3, dt)

        })

        return (
            <React.Fragment>
                <group
                    ref={ref}
                    onClick={(e) => {
                        e.stopPropagation(),
                            setLocation(clicked.current == e.object ? '/3D' : '/3D/' + e.object.name)
                    }}
                    onPointerMissed={() => setLocation('/3D')}>
                    {projects.map((props, index) => <Frame key={props.url} {...props} index={index} /> /* prettier-ignore */)}

                </group>
            </React.Fragment>
        )
    }

    const Cube = ({ color, Index, edgeColor }) => {

        const boxRef = useRef();
        // Math.random returns 0-1 Math.pow(X,Y) 0-1^2 
        const [scale] = useState(() => Math.pow(Math.random(), 2) * 0.25 + 0.05);
        const [xRotSpeed] = useState(() => Math.random());
        const [yRotSpeed] = useState(() => Math.random());
        const [hovered, hover] = useState(false)

        useFrame((state, delta) => {
            boxRef.current.rotation.x += delta * xRotSpeed
            boxRef.current.rotation.y += delta * yRotSpeed

            // console.log(boxRef.current)

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
                <mesh
                    ref={boxRef}
                    scale={scale}
                    castShadow
                    // onPointerLeave={() => hover(false)}
                    // onPointerOver={(e) => (e.stopPropagation(), hover(true))}
                    onClick={(e) => hover(!hovered)}

                >
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial color={hovered ? "orange" : color} envMapIntensity={.15} />
                    <Edges
                        scale={1.1}
                        threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                        color={edgeColor}
                    />

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
                    mesh.material.emissive = new Color(6, 0.15, 0.7)
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


                let colorScale = 1;
                // if (dist > 2) {
                //   colorScale = 1 - (Math.min(dist, 12) - 2) / 6;
                // }
                colorScale *= 0.5;

                if (i % 2 == 1) {
                    mesh.material.emissive = new Color(6, 0.15, 0.7).multiplyScalar(colorScale);
                } else {
                    mesh.material.emissive = new Color(0.1, 0.7, 3).multiplyScalar(colorScale);
                }


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
        <div className={`h-full min-h-screen w-full grid grid-cols-[repeat(7,1fr)] grid-rows-[80px,1fr] bg-[black]`}>

            <Canvas className={`row-start-2 col-start-1 col-span-7`} shadows camera={{ fov: 70, position: [0, 2, 15] }}>
                <Stats />
                <ambientLight intensity={1} />
                <ScrollControls damping={4} pages={4} distance={1} infinite >
                    {[
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((obj, i) => {
                            return (
                                <Cube
                                    key={i}
                                    Index={i}
                                    color={i % 2 == 0 ? "hotpink" : [0.1, 0.7, 3]}
                                    edgeColor={i % 2 == 0 ? "red" : "DarkBlue"}
                                />
                            )
                        })}
                    <Rings />

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

                    <CubeCamera resolution={125} frames={Infinity}>
                        {(texture) => (
                            <React.Fragment>
                                <Environment map={texture} />
                                {/* Elements here wont reflect on car */}
                                <Suspense fallback={null}>
                                    <Float
                                        speed={1} // Animation speed, defaults to 1
                                        rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
                                        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                                        floatingRange={[1.2, 1.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                                    >
                                        <SCIFI />
                                    </Float >
                                </Suspense>
                                <Stars radius={100} depth={500} count={5000} factor={4} saturation={0} fade speed={2} />
                            </React.Fragment>
                        )}
                    </CubeCamera>
                    <EffectComposer>
                        {/* <DepthOfField focusDistance={0.0096} focalLength={0.3} bokehScale={6} height={480} /> */}
                        <Bloom
                            blendFunction={BlendFunction.ADD}
                            intensity={0.25}
                            width={300}
                            height={300}
                            kernelSize={5}
                            luminanceThreshold={0.65}
                            luminanceSmoothing={0.25}
                        />
                        <ChromaticAberration
                            blendFunction={BlendFunction.NORMAL}
                            offset={[0.0005, 0.0012]} />
                    </EffectComposer>

                </ScrollControls>
            </Canvas>
        </div>
    )
}
export default Home;
