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


// Material-UI
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@emotion/react';

const Profile = ({ }) => {

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const theme = useTheme();

  return (

    <div className={`h-full min-h-screen w-full grid grid-cols-[repeat(7,1fr)] grid-rows-[80px,50px,350px,50px,380px,100px,1fr] bg-[#e4eff8] dark:bg-[#10182c]`}>

      <Head>
        <title> {`Ibrahim - DevJdeed`} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar />

      <div className={` mx-4 px-2 row-start-3 row-end-4 col-start-1 col-end-8 sm:col-end-6 max-w-[500px] sm:justify-self-start grid grid-rows-[30px,80px,50px,120px,30px,40px] shadow-md dark:shadow-[#181f32] bg-[#DBE6F6] dark:bg-[#1e293b] animate-fade `}>
        <React.Fragment>
          <span className={`self-center justify-self-start `}>
            <h2 className={`inline text-slate-800 dark:text-[whitesmoke] tracking-tighter font-black text-sm sm:text-lg `}>Hello World &#9996;</h2>
          </span>

          <span className={`self-start justify-self-start inline min-w-fit sm:max-w-full `}>
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
                className={`align-middle self-center`}
                src="/next_with_bg.svg"
                alt="vintage"
                width={40} height={40}
              />
              <span className={`hidden sm:inline sm:absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707]  text-xs text-white group-hover:visible group-hover:z-50`}>
                https://nextjs.org
              </span>
            </a>
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
              <span className={`hidden sm:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                react.js
              </span>
            </span>
            <span className={`group`} >
              <IoLogoElectron className={`text-xs sm:text-lg ml-1 hover:scale-110 `} color="#96DCE9" />
              <span className={`hidden sm:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                electron.js
              </span>
            </span>

            <span className={`group`} >
              <DiNodejsSmall className={` hover:scale-110	 text-xs sm:text-lg ml-1`} color="#77b360" fontSize="0.7rem" />
              <span className={`hidden sm:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                node.js/express
              </span>
            </span>
            <span className={`group`} >
              <FaNpm className={` hover:scale-110	 text-xs sm:text-lg ml-1`} color="red" fontSize="0.7rem" />
              <span className={`hidden sm:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                npm
              </span>
            </span>
            <span className={`group`} >
              <FaAws className={` hover:scale-110	 text-xs sm:text-lg ml-1`} color="orange" fontSize="0.7rem" />
              <span className={`hidden sm:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                aws
              </span>
            </span>
            <span className={`group`} >
              <IoLogoFirebase className={` hover:scale-110	text-xs sm:text-lg ml-1`} color="#FFCB2B" fontSize="0.7rem" />
              <span className={`hidden sm:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                firebase
              </span>
            </span>

            <span className={`group`} >
              <IoLogoVercel className={` hover:scale-110 bg-black text-xs sm:text-lg ml-1`} color="white" fontSize="0.7rem" />
              <span className={`hidden sm:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                next.js/vercel
              </span>
            </span>
            <span className={`group`} >
              <SiTailwindcss className={` hover:scale-110  text-xs sm:text-lg ml-1`} color="#38bdf8" fontSize="0.7rem" />
              <span className={`hidden sm:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                tailwind
              </span>
            </span>
            <span className={`group`}>

              <SiAzuredevops className={` hover:scale-110  text-xs sm:text-lg ml-1`} color="#0074cd" fontSize="0.7rem" />
              <span className={`hidden sm:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                azure-devOps
              </span>
            </span>
            <span className={`group`}>
              <SiNgrok className={` hover:scale-110 bg-[#031d8e] text-xs sm:text-lg ml-1`} color="white" fontSize="0.7rem" />
              <span className={`hidden sm:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                ngrok
              </span>
            </span>
            <span className={`group`}>
              <FaStackOverflow className={` hover:scale-110  text-xs sm:text-lg ml-1`} color="orange" fontSize="0.7rem" />
              <span className={`hidden sm:inline absolute invisible p-1 rounded border  bg-[#172b42] shadow-md shadow-[#130707] ml-4 text-xs text-white group-hover:visible group-hover:z-50`}>
                stackoverflow
              </span>
            </span>

          </span>

        </React.Fragment>
      </div>

      <div className={` mx-4 px-2 row-start-5 row-end-6 col-start-1 col-end-8 grid grid-rows-[50px,300px] overflow-x-auto overflow-y-hidden justify-self-auto shadow-md dark:shadow-[#181f32] bg-[#DBE6F6] dark:bg-[#1e293b] animate-fade `}>

        <h2 className={` ml-2 col-start-1 col-end-2 inline text-slate-800 dark:text-[whitesmoke] tracking-tighter font-black text-lg self-center  `}> Recent Projects</h2>

        <span className={`shadow-md dark:shadow-[#181f32] m-2 col-start-1 col-end-2 grid grid-rows-[50px,160px,50px] px-2 grid-cols-1 w-[300px]  `}>
          <p className={`text-slate-900 dark:text-[whitesmoke] tracking-tighter font-bold text-sm justify-self-center col-start-1 col-end-2 self-center`}>
            Paylock
          </p>
          <p className={`inline text-slate-700 dark:text-[whitesmoke] tracking-tighter font-light text-sm col-start-1 col-end-2 justify-self-center self-center`}>
            EVM-based smart contract application for sending & receiving withdrawable crypto payments, 
            this application uses Open Zeppelin Defender Relayer to relay transactions and Chainklink
            price feed oracles to determine transactions fees.    
          </p>
          <a className={`self-end row-start-3 col-start-1 col-end-2 justify-self-start inline`} href='https://paylock.vercel.app/' rel="noreferrer" target="_blank">
            <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer inline text-white leading-3 bg-slate-700 rounded p-1 px-2 hover:bg-slate-400`}>
              View Webpage
            </span>
          </a>
          <a className={`self-end row-start-3 col-start-1 col-end-2 justify-self-end `} href='https://github.com/IbrahimSam96/Paylock' rel="noreferrer" target="_blank">
            <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer text-white leading-3 bg-slate-700 rounded p-1 px-2 hover:bg-slate-400 flex items-center `}>
              View on Github
              <FaGithub color="#F43B5F" fontSize="0.7rem" className={`self-center align-middle ml-1 `} />
            </span>
          </a>
        </span> 

        <span className={`shadow-md dark:shadow-[#181f32] m-2 col-start-2 col-end-3 grid grid-rows-[50px,160px,50px] px-2 grid-cols-1 w-[300px]  `}>
          <p className={`text-slate-900 dark:text-[whitesmoke] tracking-tighter font-bold text-sm justify-self-center col-start-1 col-end-2 self-center`}>
            Raffle Mania
          </p>
          <p className={`inline text-slate-700 dark:text-[whitesmoke] tracking-tighter font-light text-sm col-start-1 col-end-2 justify-self-center self-center`}>
             Winner at Polygon BUIDL IT: Summer 22 hacakathon, bullet-proof smart contract lottery deployed across 4 EVM chains
              (Polygon Mumbai, Ethereum Goerli, Binance Testnet, Avalanche Fuji).
             This application uses Chainlink Keepers to trigger raffle draw and
             Chainlink VRF (Verifiable Random Function) to generate a random number.    
          </p>
          <a className={`self-end row-start-3 col-start-1 col-end-2 justify-self-start inline`} href='https://rafflemania.vercel.app/' rel="noreferrer" target="_blank">
            <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer inline text-white leading-3 bg-slate-700 rounded p-1 px-2 hover:bg-slate-400`}>
              View Webpage
            </span>
          </a>
          <a className={`self-end row-start-3 col-start-1 col-end-2 justify-self-end `} href='https://github.com/IbrahimSam96/rafflemania' rel="noreferrer" target="_blank">
            <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer text-white leading-3 bg-slate-700 rounded p-1 px-2 hover:bg-slate-400 flex items-center `}>
              View on Github
              <FaGithub color="#F43B5F" fontSize="0.7rem" className={`self-center align-middle ml-1 `} />
            </span>
          </a>
        </span> 

        <span className={`shadow-md dark:shadow-[#181f32] m-2 col-start-3 col-end-4 grid grid-rows-[50px,160px,50px] px-2 grid-cols-1 w-[300px]  `}>
          <p className={`text-slate-900 dark:text-[whitesmoke] tracking-tighter font-bold text-sm justify-self-center col-start-1 col-end-2 self-center`}>
            Easy Graphs
          </p>
          <p className={`inline text-slate-700 dark:text-[whitesmoke] tracking-tighter font-light text-sm col-start-1 col-end-2 justify-self-center self-center`}>
            NextJs SSR app deployed on vercel using
            Firebase microservices (Auth, Analytics, No-Sql firestore.)
            In This side-project I tried to help creators
            share visuals and infographics in a dashboard.
            (Currently on the shelf, needs some motivation.)
          </p>
          <a className={`self-end row-start-3 col-start-1 col-end-2 justify-self-start inline`} href='https://easy-graphs.vercel.app/' rel="noreferrer" target="_blank">
            <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer inline text-white leading-3 bg-slate-700 rounded p-1 px-2 hover:bg-slate-400`}>
              View Webpage
            </span>
          </a>
          <a className={`self-end row-start-3 col-start-1 col-end-2 justify-self-end `} href='https://github.com/IbrahimSam96/EasyGraphs' rel="noreferrer" target="_blank">
            <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer text-white leading-3 bg-slate-700 rounded p-1 px-2 hover:bg-slate-400 flex items-center `}>
              View on Github
              <FaGithub color="#F43B5F" fontSize="0.7rem" className={`self-center align-middle ml-1 `} />
            </span>
          </a>
        </span>

        <span className={`shadow-md dark:shadow-[#181f32] m-2 col-start-4 col-end-5 grid grid-rows-[50px,160px,50px] px-2 grid-cols-1 w-[300px] `}>
          <p className={`text-slate-900 dark:text-[whitesmoke] tracking-tighter font-bold text-sm justify-self-center col-start-1 col-end-2 self-center`}>
            Markets Snap
          </p>
          <p className={`inline text-slate-700 dark:text-[whitesmoke] tracking-tighter font-light text-sm col-start-1 col-end-2 justify-self-center self-center`}>
            ReactJs client-side app deployed on Firebase consuming Trading View's I-Frames to display brief overview of financial markets.
          </p>
          <a className={`self-end row-start-3 col-start-1 col-end-2 justify-self-start inline`} href='https://marketsSnap.web.app' rel="noreferrer" target="_blank">
            <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer inline text-white leading-3 bg-slate-700 rounded p-1 px-2 hover:bg-slate-400`}>
              View Webpage
            </span>
          </a>
          <a className={`self-end row-start-3 col-start-1 col-end-2 justify-self-end `} href='https://github.com/IbrahimSam96/MarketsSnap' rel="noreferrer" target="_blank">
            <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer text-white leading-3 bg-slate-700 rounded p-1 px-2 hover:bg-slate-400 flex items-center `}>
              View on Github
              <FaGithub color="#F43B5F" fontSize="0.7rem" className={`self-center align-middle ml-1 `} />
            </span>
          </a>

        </span>

        <span className={`shadow-md dark:shadow-[#181f32] m-2 col-start-5 col-end-6 grid grid-rows-[50px,160px,50px] px-2 grid-cols-1 w-[300px]`}>
          <p className={`text-slate-900 dark:text-[whitesmoke] tracking-tighter font-bold text-sm justify-self-center col-start-1 col-end-2 self-center`}>
            Dashx-Portfolio
          </p>
          <p className={`inline text-slate-700 dark:text-[whitesmoke] tracking-tighter font-light text-sm col-start-1 col-end-2 justify-self-center self-center`}>
            ReactJs dashboard deployed on Firebase,
            aimed to aggregate transactional level data and display real-time performance and exposure of sub-managed accounts.

          </p>
          <a className={`self-end row-start-3 col-start-1 col-end-2 justify-self-start inline`} href='https://dashx-Portfolio.web.app' rel="noreferrer" target="_blank">
            <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer inline text-white leading-3 bg-slate-700 rounded p-1 px-2 hover:bg-slate-400`}>
              View Webpage
            </span>
          </a>
          <a className={`self-end row-start-3 col-start-1 col-end-2 justify-self-end `} href='https://github.com/IbrahimSam96/GraphX' rel="noreferrer" target="_blank">
            <span className={`shadow-md dark:shadow-[#181f32] text-xs cursor-pointer text-white leading-3 bg-slate-700 rounded p-1 px-2 hover:bg-slate-400 flex items-center `}>
              View on Github
              <FaGithub color="#F43B5F" fontSize="0.7rem" className={`self-center align-middle ml-1 `} />
            </span>
          </a>

        </span>

      </div>
    </div>
  )
}

export default Profile
