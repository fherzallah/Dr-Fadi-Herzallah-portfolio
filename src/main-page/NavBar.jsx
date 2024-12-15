import React from "react";
import {Link} from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import cv  from '../assets/Dr_Fadi_Herzallah_CV.pdf';


export default function NavBar (){
    return (
           <div className="text-3xl flex justify-between align-middle p-10 top-0 w-full gap-96 fixe mx-auto cursor-pointer shadow-md shadow-slate-700">
                        <Link to='/' className="hover:text-violet-600  duration-300">Dr. Fadi Herzallah</Link>
                        <div className=" flex gap-5 justify-center align-middle">
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
            </div>



    );
} 



