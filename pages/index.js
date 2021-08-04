import Head from 'next/head'
import NavigationBar from "../components/navigationBar"
import Image from "next/image";
// import {FaHtml5} from 'react-icons/fa'; 
import {FaGithub} from 'react-icons/fa'; 
import {FaLocationArrow} from 'react-icons/fa'; 
import {FaReact} from 'react-icons/fa'; 
import {DiNodejsSmall} from 'react-icons/di'; 
import {FaNpm} from 'react-icons/fa'; 
import {FaAws} from 'react-icons/fa'; 
import {IoLogoVercel} from 'react-icons/io5'; 
import {IoLogoFirebase} from 'react-icons/io5'; 

const Profile = () => {

return (

<div className="ProfilePage">

      <Head>
        <title> {`Ibrahim's`} </title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar  />


      <div className="ProfilePageIntro" >

      <span>
      Hello World &#9996; 
      </span>

      <span>
        {`I'm a self taught web-developer specialized
         in building responsive web applications using React and Next framework.  `}
      </span>

      </div>
      <div className="Vintage">
      <Image
          src="/vintage.svg"
          alt="vintage"
          width={550} height={450} 
          
          />
</div>
      <span className="ProfilePageSecond">
     Recent Projects
      </span>
      
      
      <span className="ProfilePageSocials"> 
      
      <a href="https://github.com/Ibrahimsam96/" > 
        <Image
          src="/github.svg"
          alt="github"
          width={50} height={50} 
          />

       </a>

       <a href="https://stackoverflow.com/users/13622908/ibra"  > 

<Image
  src="/stackoverflow.svg"
  alt="stackoverflow"
  width={50} height={50} 
  />

</a>

       <a href="https://twitter.com/Ibrahimsamara7/"  > 

<Image
  src="/twittericon.svg"
  alt="twitter"
  width={50} height={50} 
  />

</a>

<a href="https://www.linkedin.com/in/ibrahim-samara-442b48126/"  > 

<Image
  src="/linkedin.svg"
  alt="LinkedIn"
  width={50} height={50} 
  />

</a>

      </span>

      <div className="ProfilePageThird">
      
      <div className="Third1" >

      <a href={"https://DashX-Portfolio.web.app"}> Dashx-Portfolio </a> 

      <a> ReactJs dashboard deployed on Firebase, aimed to aggregate transactional level data
         and display real-time performance and exposure of sub-managed accounts.     
      </a> 

      <a href="https://github.com/Ibrahimsam96/Dashx-Portfolio" > 

      <FaGithub className="HTML5Icon"  color="#F43B5F" fontSize="2.5rem"/>
        </a>

      </div>

      <div className="Third2" >

      <a href={"https://DashX-Portfolio.web.app"}> Markets Snap </a>

      <a> {`ReactJs client-side app deployed on Firebase consuming Trading View's I-Frames to display
         brief overview of financial markets.`}       
      </a> 

<a href="https://github.com/Ibrahimsam96/MarketsSnap" > 

<FaGithub className="HTML5Icon"  color="#F43B5F" fontSize="2.5rem"/>
  </a>

</div>

      <div className="Third3" >

<a href={"https://Easy-graphs.vercel.app"}> {`Easy Graphs`} </a> 

<a> {`NextJs SSR app deployed on vercel using
   Firebase's microservices (Auth, Analytics, No-Sql 
   database.) This project aims to help creators share visuals and infographics in a dashboard.` }      
 </a> 

<a href="https://github.com/Ibrahimsam96/EasyGraphs" > 

<FaGithub className="HTML5Icon"  color="#F43B5F" fontSize="2.5rem"/>
  </a>

</div>
  
      </div> 

      <span className="ProfilePageAboutMe">
      A little about me
      </span>

      <span className="ProfilePageAboutMeDescription">

       
      <a> <FaLocationArrow color="#F43B5F" fontSize="1.0rem"/>  Toronto, Ontario </a>
 
       <a>
         {`I like creating JSX functional components and enjoy designing them from 
         scratch. All of my projects are dark themed, as all websites should.`} 
       </a>

       <a>
    {` I also like using developer friendly technologies to build my projects. `}
       </a>
<span>
{/* <FaHtml5 className="HTML5Icon" color="#F43B5F" fontSize="2.5rem" />
<FaGithub className="HTML5Icon"  color="#F43B5F" fontSize="2.5rem"/> */}

<FaReact className="HTML5Icon"  color="#F43B5F" fontSize="2.5rem"/>
<DiNodejsSmall className="HTML5Icon"  color="#F43B5F" fontSize="2.5rem"/>
<FaNpm className="HTML5Icon"  color="#F43B5F" fontSize="2.5rem"/>
<FaAws className="HTML5Icon"  color="#F43B5F" fontSize="2.5rem"/>
<IoLogoVercel className="HTML5Icon"  color="#F43B5F" fontSize="2.5rem"/>
<IoLogoFirebase className="HTML5Icon"  color="#F43B5F" fontSize="2.5rem"/>




</span>

      </span>

      <span className="ProfileFooter"> &#128151; </span>

    </div>
  )
}

export default Profile
