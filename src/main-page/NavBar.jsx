import React , {useState} from "react";
import {Link} from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import cv  from '../assets/Dr_Fadi_Herzallah_CV.pdf';
import { HiMenu } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";


export default function NavBar (){


    const [show,setShow] = useState(true);

    function toggleShow(){
       setShow(!show)
    }




    return (
           <div className="lg:text-3xl xs:text-xl flex justify-between align-middle p-10 top-0 w-full gap-10 mx-auto cursor-pointer shadow-md shadow-slate-700">
                        <Link to='/' className="hover:text-violet-600  duration-300 whitespace-nowrap">Dr. Fadi Herzallah</Link>
                        <div className={` lg:flex lg:gap-5 lg:justify-center lg:align-middle  lg:relative lg:top-auto xs:top-20 xs:right-10 xs:fixed xs:backdrop:blur-xl 
                                          lg:py-0 lg-px-0 lg:flex-row lg:bg-none lg:shadow-none
                                          xs:z-10 xs:py-10 xs:px-5 xs:flex-col xs:gap-5 xs:bg-gray-50 xs:shadow-2xl xs:rounded-md  ${show?"hidden":"flex"}
                                           ${!show && "animate-slideIn"} ${show &&"animate-slideOut"}`}>
                        <a
                           href={cv}
                           download="Dr_Fadi_Herzallah_CV.pdf"  
                           className="hover:text-violet-600 duration-300"
                        >
                         CV
                        </a>  
                        <Link to='/publications' className="hover:text-violet-600 duration-300">publications</Link>
                        <Link to='/' className="hover:text-violet-600 duration-300">home</Link>
                        <a  className="my-auto hover:text-violet-600 duration-300" ><CiSearch/></a>
                        
                        </div>
                        <button className="hover:text-violet-600 duration-300 lg:hidden xs:inline " onClick={toggleShow}>{show?<HiMenu />:<ImCancelCircle />}</button>
            </div>



    );
} 






