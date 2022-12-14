import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub, AiFillApi, AiFillCode, AiFillHtml5,} from 'react-icons/ai';
import Image from "next/image";
import deved from '../public/Theo-logo.png';
import ReactLogo from '../public/react.png';
import PassingThoughts from '../public/passingthoughtscanva.jpeg';
import WeatherAppBg from '../public/weatherapp.jpeg';
import {useState} from "react";
import WeatherAppi from '../public/Components/WeatherApp';
import SurfBackground from '../public/silvalde 4.jpeg';
import ThoughtPlanner from '../public/Components/ThoughtPlanner';
import Ecommerce from "../public/Components/Ecommerce";
import RoboPunksNFT from '../public/Components/RoboPunksNFT';



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    

    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title className="font-montserrat">Theo Scott Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-2  md:px-20 lg:px-40 dark:bg-gray-900" >
        <section className="min-h-screen ">
        <nav className="py-5 mb-12 flex justify-between">
          <h1 className="text-xl font-montserrat text-gray-600 dark:text-white">THEO SCOTT</h1>
          <ul className="flex items-center dark:text-white">
            <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
            </li>
            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 font-montserrat rounded-md ml-8 " href="https://github.com/PestoTrader" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
          </nav>
          <div className="text-center p-5">
            <h2 className="text-5xl py-2 text-teal-600 font-light md:text-6xl font-montserrat dark:text-white">Theo Scott</h2>
            <h3 className="py-2 font-medium text-sm text-gray-600 font-montserrat dark:text-white">FRONT END DEVELOPER, UI & UX DESIGNER</h3>
          
          </div>
          <div className="text-5xl flex justify-center py-3 text-gray-600 
        ">
            
            <a href="https://www.linkedin.com/in/theodore-scott-14a39326/" target="_blank" rel="noreferrer"><AiFillLinkedin /> </a>
            <a href="https://github.com/PestoTrader" target="_blank" rel="noreferrer"><AiFillGithub/></a> 
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-30 md:h-96 md:w-96">
            <Image src={deved} layout="fill" />
          </div>
        </section>

        <section>
          
          <div className="lg:flex lg:gap-10 flex mx-auto" >
            <div className="text-center shadow-lg p-5 md:p-10 rounded-xl my-10 mx-auto">
              <div className="text-8xl w-100 h-100 flex justify-center gap-16 py-3 text-gray-600 
        " >
              <AiFillCode />
              </div>
              <h3 className="text-small font-medium pt-8 pb-2 text-gray-600 font-montserrat dark:text-white">Front-End-Dev</h3>
              <p className="text-gray-600 py-1 dark:text-white font-montserrat text-lg ">HTML, CSS, Javascript, React, Next, Vue, Sanity</p>
              <p className=" py-2 text-gray-600 font-light text-lg md:max-w-3xl font-montserrat text-center dark:text-white" >Experience using React & Next JS framework, using state and effect hooks and APIs with Axios. I have experience with TailwindCSS/Bootstrap (library) for grid and flex for mobile first builds. I also have integrated Sanity into React for backend e-commerce projects.</p>
            </div>
          </div>
        </section>
        <section>
          <div> <h3 className="py-5 font-light text-5xl text-center font-montserrat text-gray-600 dark:text-white">Portfolio</h3></div>
        
      
        </section>
        <section>
          

              <div className="grid grid-cols-4 gap-3" >
                
                <div className="lg:col-start-1 lg:col-end-3 ... md:col-start-1 md:col-end-3 ... col-start-1 col-end-5 ... ">
                  <p className="p-5 md:p-10 text-gray-600 font-montserrat font-light text-lg md:max-w-3xl text-center dark:text-white">The Weather App shows API integration using Axios and sends GET requests to a free weather forecast service. Try entering a city name and clicking return.</p>
                  <div className="h-660 bg-gradient-to-b from-[#06B6D3] to-[#13B7A7] rounded-lg">
                  <p className="text-center">Weather App</p>
                  <WeatherAppi className="rounded-lg  " />
                  </div>
                </div>
                

                <div className="lg:col-start-3 lg:col-end-5 ... md:col-start-3 md:col-end-5 ... col-start-1 col-end-5 ...">
                  <p className=" p-5 md:p-10 font-montserrat text-gray-600 font-light text-lg md:max-w-3xl text-center dark:text-white" > The Forgetful Thoughts App shows the use of function components used with state and effect hooks to create thoughts that will be erased after 15 seconds.</p>
                  <div className=" h-660 bg-gradient-to-b from-[#C09FBA]
 to-[#F8BD86] rounded-lg">

                  <p className="text-center">Forgetful Thoughts App</p>   
                   <ThoughtPlanner className="rounded-lg " />
                </div>
                </div>
                

              </div>


              <div className="flex gap-10 mx-auto" >
            <div className="text-center shadow-lg md:p-10 rounded-xl my-10 mx-auto" >
              <div >
          <div >
          <p  className="text-gray-600 p-10">E-commerce Project</p>
         <Ecommerce />
         <p className="p-5 md:p-10 font-montserrat text-gray-600 font-light text-lg max-w-5xl text-center py-10 dark:text-white" > This e-commerce store was made using Next JS combined with Sanity to create a front and back end system in one. A client could be provided with access to Sanity CMS and add new products and change the banners and this would dynamically change the site and add new product pages. I integrated the payment page as a test service and will work upon entering 4242 continuosly as card number details.</p>
         <a type="button" href="https://ecommerce-sanity-build.vercel.app" target="_blank" rel="noreferrer" className="text-white bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg text-sm px-5 py-2.5 text-center font-montserrat mr-2 mb-2">VISIT STORE</a>
         </div>
  
          </div>
          </div>
          </div>


          <div className=" flex gap-10 mx-auto" >
            <div className="text-center shadow-lg md:p-10 rounded-xl my-10 mx-auto" >
           
          <p  className="text-gray-600 p-10">NFT Project</p>
         <RoboPunksNFT />
         <p className="p-5 md:p-10 font-montserrat text-gray-600 font-light text-lg max-w-5xl text-center py-10 dark:text-white" > The aim of this project was to show the integration of smart contracts on Solidity which is the language for Ethereum. I created an Ethereum smart contract. The contract is actually on Ethereum's test network Goerli. The page successfully allows for connection with MetaMask, a hot wallet service. I don't currently have the mint button enabled as I need to make the NFTs still.</p>
         <a type="button" href="https://full-mint-website-ten.vercel.app/" target="_blank" rel="noreferrer" className="text-white bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg text-sm px-5 py-2.5 text-center font-montserrat mr-2 mb-2">VISIT MINT SITE</a>
       
          </div>
          </div>



        
        </section>

      </main>    
    </div>
  )
}
