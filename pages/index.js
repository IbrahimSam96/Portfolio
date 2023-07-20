/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link'

import React, { useState } from 'react';
import NavigationBar from "../components/navigationBar"
// import {FaHtml5} from 'react-icons/fa'; 
import { FaGithub } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';

import { DiNodejsSmall } from 'react-icons/di';
import { FaNpm } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import { IoLogoElectron } from 'react-icons/io5';
import { IoLogoFirebase } from 'react-icons/io5';
import { FaLayerGroup } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiAzuredevops } from 'react-icons/si';
import { SiNgrok } from 'react-icons/si';
import { SiThreedotjs } from 'react-icons/si';
import { FaHardHat } from 'react-icons/fa';
import { SiSolidity } from 'react-icons/si';
import { SiChainlink } from 'react-icons/si';

const Profile = ({ }) => {

    const [toggle, setToogle] = useState(true);

    return (

        <div className={`h-full min-h-screen w-full grid grid-cols-[repeat(7,1fr)] grid-rows-[80px,50px,350px,50px,auto,100px] bg-[#FFFFFF] dark:bg-[#10182c]`}>

            <Head>
                <title> Ibrahim - DevJdeed </title>
                <link rel="icon" href="/Textures/Me.jpg" />
                <meta name="description"
                    content="Exprerienced Frontend Developer, 
                specialized in building EVM based smart contract SPA's. "/>
            </Head>

            <NavigationBar toggle={toggle} setToogle={setToogle} />

            <div className={`rounded mx-4 px-2 row-start-3 row-end-4 col-start-1 col-end-8 sm:col-end-6 max-w-[500px] sm:justify-self-start grid grid-rows-[30px,80px,50px,120px,30px,40px] shadow-md shadow-[grey] dark:shadow-slate-800 dark:border-t-[#F43B5F] dark:border-t-2  bg-[#F8F8F8] dark:bg-[#1e293b] animate-fade `}>
                <React.Fragment>
                    <span className={`self-center justify-self-start `}>
                        <h2 className={`inline text-slate-800 dark:text-[whitesmoke] tracking-tighter font-black text-sm sm:text-lg `}>Hello World &#9996;</h2>
                    </span>


                    <span className={`self-center justify-self-start inline sm:max-w-[440px] max-w-full`}>

                        <span className={`flex`}>
                            <span className={`my-auto mx-2`}>
                                <Image
                                    className={`inline rounded-[50%]`}
                                    src="/Me.jpg"
                                    alt="vintage"
                                    width={75} height={75}
                                />
                            </span>
                            <span>
                                <p className={`inline text-slate-800 dark:text-[whitesmoke] tracking-tighter font-light text-xs sm:text-sm `}> I"m a self taught developer specialized
                                    in building responsive web-applications using
                                </p>
                                <a className={`group`} href='https://reactjs.org' rel="noreferrer" target="_blank">
                                    <FaReact className={` cursor-pointer inline animate-spin ml-2`} color="#61dafb" fontSize="1.0rem" />
                                    <p className={`inline text-[#61dafb] ml-1`} >React</p>
                                    <span className={`hidden sm:inline absolute ml-2 invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] text-xs text-white group-hover:visible group-hover:z-50`}>
                                        https://reactjs.org
                                    </span>
                                </a>
                                <p className={`inline text-slate-800 dark:text-[whitesmoke] tracking-tighter font-light text-lg ml-1`} >and</p>
                                <a className={`group align-middle ml-2 `}
                                    href='https://nextjs.org' rel="noreferrer" target="_blank">
                                    <Image
                                        className={`align-middle self-center inline`}
                                        src="/next_with_bg.svg"
                                        alt="vintage"
                                        width={40} height={40}
                                    />
                                    <span className={`hidden sm:inline sm:absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707]  text-xs text-white group-hover:visible group-hover:z-50`}>
                                        https://nextjs.org
                                    </span>
                                </a>
                            </span>

                        </span>

                    </span>


                    <span className={`self-center justify-self-start flex`}>
                        <FaLocationArrow color="#F43B5F" fontSize="1.0rem" className={`self-center `} />
                        <p className={`text-slate-900 dark:text-[whitesmoke] inline ml-2 text-sm sm:text-lg `}>Toronto, Ontario </p>
                    </span>
                    <span className={` self-start justify-self-start `}>
                        <p className={`text-slate-800  dark:text-[whitesmoke] mt-4 ml-2 min-w-fit sm:max-w-full text-xs sm:text-sm`}>I like creating JSX functional components and enjoy designing them from
                            scratch. Almost all of my projects are dark themed. I also like using developer friendly technologies to build my projects.</p>
                        <p className={`text-slate-800 inline ml-2 `}>  </p>
                    </span>
                    <span className={`self-start justify-self-start flex`}>
                        <FaLayerGroup color="#F43B5F" fontSize="1.0rem" className={`self-center `} />
                        <p className={`text-slate-900 dark:text-[whitesmoke]  inline ml-2 `}>Tech I like </p>
                    </span>
                    <span className={`self-center justify-self-start flex `}>
                        <span className={`group`} >
                            <FaReact className={`animate-spin text-xs sm:text-lg `} color="#61dafb" />
                            <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                react.js
                            </span>
                        </span>
                        <span className={`group`} >
                            <IoLogoElectron className={`text-xs sm:text-lg ml-1 hover:scale-110 `} color="#96DCE9" />
                            <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                electron.js
                            </span>
                        </span>

                        <span className={`group`} >
                            <DiNodejsSmall className={` hover:scale-110	 text-xs sm:text-lg ml-1`} color="#77b360" fontSize="0.7rem" />
                            <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                node.js/express
                            </span>
                        </span>
                        <span className={`group`} >
                            <FaNpm className={` hover:scale-110	 text-xs sm:text-lg ml-1`} color="red" fontSize="0.7rem" />
                            <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                npm
                            </span>
                        </span>
                        <span className={`group`} >
                            <FaAws className={` hover:scale-110	 text-xs sm:text-lg ml-1`} color="orange" fontSize="0.7rem" />
                            <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                aws
                            </span>
                        </span>
                        <span className={`group`} >
                            <IoLogoFirebase className={` hover:scale-110	text-xs sm:text-lg ml-1`} color="#FFCB2B" fontSize="0.7rem" />
                            <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                firebase
                            </span>
                        </span>

                        <span className={`group`} >
                            <IoLogoVercel className={` hover:scale-110 bg-black p-1 rounded-xl text-xs sm:text-lg ml-1`} color="white" fontSize="1.7rem" />
                            <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                next.js/ vercel
                            </span>
                        </span>
                        <span className={`group`} >
                            <SiTailwindcss className={` hover:scale-110  text-xs sm:text-lg ml-1`} color="#38bdf8" fontSize="0.7rem" />
                            <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                tailwindCSS
                            </span>
                        </span>
                        <span className={`group`}>

                            <SiAzuredevops className={` hover:scale-110  text-xs sm:text-lg ml-1`} color="#0074cd" fontSize="0.7rem" />
                            <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                azure-devOps
                            </span>
                        </span>
                        <span className={`group`}>
                            <SiNgrok className={` hover:scale-110 bg-[#031d8e] text-xs sm:text-lg ml-1`} color="white" fontSize="0.7rem" />
                            <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                ngrok
                            </span>
                        </span>
                        <span className={`group`}>
                            <FaStackOverflow className={` hover:scale-110  text-xs sm:text-lg ml-1`} color="orange" fontSize="0.7rem" />
                            <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                stackoverflow
                            </span>
                        </span>
                        <span className={`group`}>
                            <SiThreedotjs className={` hover:scale-110  text-xs sm:text-lg ml-1`} color="black" fontSize="0.7rem" />
                            <span className={`hidden group-hover:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                                three.js
                            </span>
                        </span>

                    </span>

                </React.Fragment>
            </div>

            <div className={` mx-1 sm:mx-4 px-2 row-start-5 row-end-6 col-start-1 col-end-8 grid `}>

                <h2 className={`m-2 inline text-slate-800 dark:text-[whitesmoke] tracking-tighter font-black text-lg self-start `}> Recent Projects</h2>

                <span className={`shadow-md shadow-slate-800 dark:border-t-[#F43B5F] dark:border-t-2 flex flex-wrap rounded justify-center`}>


                    <span className={`bg-[#F8F8F8] dark:bg-[#1e293b] shadow-md shadow-[grey] dark:shadow-[#181f32]  grid grid-rows-[auto,auto,auto,auto] px-2 sm:w-[450px]  m-4 rounded`}>

                        <p className={`m-2 text-slate-900 dark:text-[whitesmoke] tracking-tighter font-bold text-sm justify-self-start self-center`}>
                            Apes Gallery
                        </p>

                        <span className={`flex justify-self-center self-center text-center`}>
                            <p className={`text-slate-900 dark:text-[whitesmoke] tracking-tighter text-sm justify-self-start self-center`}>
                                Next.js • TailwindCSS • GraphQL • React-three/fiber • React-three/drei
                            </p>
                        </span>

                        <p className={`inline text-slate-700 dark:text-[whitesmoke] tracking-tighter font-light text-sm justify-self-center self-center m-2`}>
                            A 3D NFT gallery showcasing BAYC NFT holders. Featuring top holders of BAYC NFT's and
                            a simple way to view query any wallet address for BAYC NFT's.
                            Submission for Scaling Ethereum 2023 and received APE Coin Best Integration award.

                        </p>
                        <span className={`flex self-center m-2`} >
                            <a className={`mr-auto inline`} href='https://bayc-gallery.vercel.app/' rel="noreferrer" target="_blank">
                                <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer inline text-white bg-slate-700 rounded p-2 hover:bg-slate-400`}>
                                    View Webpage
                                </span>
                            </a>

                            <a className={`ml-auto inline`} href='https://github.com/IbrahimSam96/ApesGallery' rel="noreferrer" target="_blank">
                                <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer text-white  bg-slate-700 rounded p-2 hover:bg-slate-400 flex items-center `}>
                                    View on Github
                                    <FaGithub color="#F43B5F" className={`self-center align-middle ml-1 text-xs`} />
                                </span>
                            </a>
                        </span>

                    </span>

                    <span className={`bg-[#F8F8F8] dark:bg-[#1e293b] shadow-md shadow-[grey] dark:shadow-[#181f32]  grid grid-rows-[auto,auto,auto,auto] px-2 sm:w-[450px] m-4 rounded`}>

                        <p className={`m-2 text-slate-900 dark:text-[whitesmoke] tracking-tighter font-bold text-sm justify-self-start self-center`}>
                            Paylock
                        </p>

                        <span className={`flex justify-self-center self-center text-center`}>
                            <p className={`text-slate-900 dark:text-[whitesmoke] tracking-tighter text-sm justify-self-start self-center`}>
                                Next.js • TailwindCSS • Trello • Solidity • Hardhat • Chainlink
                            </p>
                        </span>

                        <p className={`inline text-slate-700 dark:text-[whitesmoke] tracking-tighter font-light text-sm justify-self-center self-start m-2`}>
                            Winner at Tron Hackathon Season 3, EVM-based smart contract application for sending & receiving withdrawable crypto payments,
                            this application uses Open Zeppelin Defender Relayer to relay transactions and Chainklink
                            price feed oracles to determine transactions fees.
                        </p>
                        <span className={`flex self-center m-2`} >
                            <a className={`mr-auto inline`} href='https://paylock.vercel.app/' rel="noreferrer" target="_blank">
                                <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer inline text-white bg-slate-700 rounded p-2 hover:bg-slate-400`}>
                                    View Webpage
                                </span>
                            </a>

                            <a className={`ml-auto inline`} href='https://github.com/IbrahimSam96/Paylock' rel="noreferrer" target="_blank">
                                <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer text-white  bg-slate-700 rounded p-2 hover:bg-slate-400 flex items-center `}>
                                    View on Github
                                    <FaGithub color="#F43B5F" className={`self-center align-middle ml-1 text-xs`} />
                                </span>
                            </a>
                        </span>
                    </span>

                    <span className={`bg-[#F8F8F8] dark:bg-[#1e293b] shadow-md shadow-[grey] dark:shadow-[#181f32]  grid grid-rows-[auto,auto,auto,auto] px-2 sm:w-[450px]  m-4 rounded`}>

                        <p className={`m-2 text-slate-900 dark:text-[whitesmoke] tracking-tighter font-bold text-sm justify-self-start self-center`}>
                            Raffle Mania

                        </p>

                        <span className={`flex justify-self-center self-center text-center`}>
                            <p className={`text-slate-900 dark:text-[whitesmoke] tracking-tighter text-sm justify-self-start self-start`}>
                                Next.js • TailwindCSS • Swiper.js • Solidity • Hardhat • Chainlink
                            </p>
                        </span>

                        <p className={`inline text-slate-700 dark:text-[whitesmoke] tracking-tighter font-light text-sm justify-self-center self-center m-2`}>
                            Winner at Polygon BUIDL IT: Summer 22' hacakathon, bullet-proof smart contract lottery deployed across 4 EVM chains
                            (Polygon Mumbai, Ethereum Goerli, Binance Testnet, Avalanche Fuji).
                            This application uses Chainlink Keepers to trigger raffle draw and
                            Chainlink VRF (Verifiable Random Function) to select a random winner.

                        </p>
                        <span className={`flex self-center m-2`} >
                            <a className={`mr-auto inline`} href='https://rafflemania.vercel.app/' rel="noreferrer" target="_blank">
                                <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer inline text-white bg-slate-700 rounded p-2 hover:bg-slate-400`}>
                                    View Webpage
                                </span>
                            </a>

                            <a className={`ml-auto inline`} href='https://github.com/IbrahimSam96/rafflemania' rel="noreferrer" target="_blank">
                                <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer text-white  bg-slate-700 rounded p-2 hover:bg-slate-400 flex items-center `}>
                                    View on Github
                                    <FaGithub color="#F43B5F" className={`self-center align-middle ml-1 text-xs`} />
                                </span>
                            </a>
                        </span>
                    </span>

                    <span className={`bg-[#F8F8F8] dark:bg-[#1e293b] shadow-md shadow-[grey] dark:shadow-[#181f32]  grid grid-rows-[auto,auto,auto,auto] px-2 sm:w-[450px]  m-4 rounded`}>

                        <p className={`m-2 text-slate-900 dark:text-[whitesmoke] tracking-tighter font-bold text-sm justify-self-start self-center`}>
                            Boxeh
                        </p>

                        <span className={`flex justify-self-center self-center text-center`}>
                            <p className={`text-slate-900 dark:text-[whitesmoke] tracking-tighter text-sm justify-self-start self-center`}>
                                Next.js • TailwindCSS • Stripe • Firebase (Auth & Firestore) • Swiper.js • React-Bootstrap
                            </p>
                        </span>

                        <p className={`inline text-slate-700 dark:text-[whitesmoke] tracking-tighter font-light text-sm justify-self-center self-center m-2`}>
                            Boxeh delivers packaged food recipes via a web-application interface. It utilizes firebase (web-9) both on the server and client-side to authenticate and recored user orders.
                            It also makes use of stripe elements SDK to render an inline checkout component. (Work in Progress).

                        </p>
                        <span className={`flex self-center m-2`} >
                            <a className={`mr-auto inline`} href='https://foodio.vercel.app/' rel="noreferrer" target="_blank">
                                <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer inline text-white bg-slate-700 rounded p-2 hover:bg-slate-400`}>
                                    View Webpage
                                </span>
                            </a>

                            <a className={`ml-auto inline`} href='https://github.com/IbrahimSam96/Foodio' rel="noreferrer" target="_blank">
                                <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer text-white  bg-slate-700 rounded p-2 hover:bg-slate-400 flex items-center `}>
                                    View on Github
                                    <FaGithub color="#F43B5F" className={`self-center align-middle ml-1 text-xs`} />
                                </span>
                            </a>
                        </span>
                    </span>

                    <span className={`bg-[#F8F8F8] dark:bg-[#1e293b] shadow-md shadow-[grey] dark:shadow-[#181f32]  grid grid-rows-[auto,auto,auto,auto] px-2 sm:w-[450px]  m-4 rounded`}>

                        <p className={`m-2 text-slate-900 dark:text-[whitesmoke] tracking-tighter font-bold text-sm justify-self-start self-center`}>
                            Risk Viz
                        </p>

                        <span className={`flex justify-self-center self-center text-center`}>
                            <p className={`text-slate-900 dark:text-[whitesmoke] tracking-tighter text-sm justify-self-start self-center`}>
                                Next.js • Leaflet.js •  Highcharts.js • MUI-Data-tables • React-Select
                            </p>
                        </span>

                        <p className={`inline text-slate-700 dark:text-[whitesmoke] tracking-tighter font-light text-sm justify-self-center self-start m-2`}>
                            This was an take home assesment, meant to showcase my ability to import a large dataset (5000 records)
                            from a google sheets page and map it out on a graph, map and a data-table.
                        </p>
                        <span className={`flex self-center m-2`} >
                            <a className={`mr-auto inline`} href='https://risk-viz-iota.vercel.app/' rel="noreferrer" target="_blank">
                                <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer inline text-white bg-slate-700 rounded p-2 hover:bg-slate-400`}>
                                    View Webpage
                                </span>
                            </a>

                            <a className={`ml-auto inline`} href='https://github.com/IbrahimSam96/Risk-Viz' rel="noreferrer" target="_blank">
                                <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer text-white  bg-slate-700 rounded p-2 hover:bg-slate-400 flex items-center `}>
                                    View on Github
                                    <FaGithub color="#F43B5F" className={`self-center align-middle ml-1 text-xs`} />
                                </span>
                            </a>
                        </span>
                    </span>

                    <span className={`bg-[#F8F8F8] dark:bg-[#1e293b] shadow-md shadow-[grey] dark:shadow-[#181f32]  grid grid-rows-[auto,auto,auto,auto] px-2 sm:w-[450px]  m-4 rounded`}>

                        <p className={`m-2 text-slate-900 dark:text-[whitesmoke] tracking-tighter font-bold text-sm justify-self-start self-center`}>
                            Easy Graphs
                        </p>

                        <span className={`flex justify-self-center self-center text-center`}>
                            <p className={`text-slate-900 dark:text-[whitesmoke] tracking-tighter text-sm justify-self-start self-center`}>
                                Next.js • TailwindCSS • Firebase (Auth & Firestore) • mui/material
                            </p>
                        </span>

                        <p className={`inline text-slate-700 dark:text-[whitesmoke] tracking-tighter font-light text-sm justify-self-center self-center m-2`}>
                            My first take with a NextJs SSR app deployed on vercel using
                            Firebase microservices (Auth, Analytics, No-Sql firestore.)
                            In This side-project I tried to build a platform where creators
                            can share visuals and infographics through a dashboard.
                            (Currently on the shelf, needs some motivation.)
                        </p>
                        <span className={`flex self-center m-2`} >
                            <a className={`mr-auto inline`} href='https://easy-graphs.vercel.app/' rel="noreferrer" target="_blank">
                                <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer inline text-white bg-slate-700 rounded p-2 hover:bg-slate-400`}>
                                    View Webpage
                                </span>
                            </a>

                            <a className={`ml-auto inline`} href='https://github.com/IbrahimSam96/EasyGraphs' rel="noreferrer" target="_blank">
                                <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer text-white  bg-slate-700 rounded p-2 hover:bg-slate-400 flex items-center `}>
                                    View on Github
                                    <FaGithub color="#F43B5F" className={`self-center align-middle ml-1 text-xs`} />
                                </span>
                            </a>
                        </span>

                    </span>

                    <span className={`bg-[#F8F8F8] dark:bg-[#1e293b] shadow-md shadow-[grey] dark:shadow-[#181f32]  grid grid-rows-[auto,auto,auto,auto] px-2 sm:w-[450px]  m-4 rounded`}>

                        <p className={`m-2 text-slate-900 dark:text-[whitesmoke] tracking-tighter font-bold text-sm justify-self-start self-center`}>
                            Markets Snap
                        </p>

                        <span className={`flex justify-self-center self-center text-center`}>
                            <p className={`text-slate-900 dark:text-[whitesmoke] tracking-tighter text-sm justify-self-start self-center`}>
                                React.js • TradingView-Iframes
                            </p>
                        </span>

                        <p className={`inline text-slate-700 dark:text-[whitesmoke] tracking-tighter font-light text-sm justify-self-center self-center m-2`}>
                            ReactJs client-side app deployed on Firebase consuming Trading View's I-Frames to display brief overview of financial markets.
                        </p>
                        <span className={`flex self-center m-2`} >
                            <a className={`mr-auto inline`} href='https://marketsSnap.web.app/' rel="noreferrer" target="_blank">
                                <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer inline text-white bg-slate-700 rounded p-2 hover:bg-slate-400`}>
                                    View Webpage
                                </span>
                            </a>

                            <a className={`ml-auto inline`} href='https://github.com/IbrahimSam96/MarketsSnap' rel="noreferrer" target="_blank">
                                <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer text-white  bg-slate-700 rounded p-2 hover:bg-slate-400 flex items-center `}>
                                    View on Github
                                    <FaGithub color="#F43B5F" className={`self-center align-middle ml-1 text-xs`} />
                                </span>
                            </a>
                        </span>

                    </span>

                </span>

            </div>

        </div>
    )
}

export default Profile;
