import React from "react";
import { FaGithub, FaOrcid, FaUniversity } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import avatar from "../assets/avatar.jpg";
import { RiGraduationCapFill } from "react-icons/ri";

export default function About() {
  const educations = [
    "2013-2017, PhD. Degree in Information Science (Electronic Commerce), The National University of Malaysia, www.ukm.edu.my",
    "2006-2008, M.Sc. Degree in Computer Information System, The Arab Academy for Banking and Financial Sciences, GPA: 87.9 (very good), www.aabfs.org",
    "2002-2006, B.Sc. Degree in Computer Science, Palestine Polytechnic University, GPA: 78.7 (very good), www.ppu.edu",
    "2002, Secondary High School – Scientific Section, Al-Fadelia Secondary School, Tulkarm-Palestine, 84.1 (very good).",
  ];

  function Education() {
    return (
      <div>
        {educations.map((item, index) => (
          <div key={index} className="flex items-center gap-2 ">
            <RiGraduationCapFill />
            <p>{item}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="2xl:flex  lg:mx-auto xs:mx-0 xs:px-7 w-full lg:px-28  pt-10 gap-80 justify-center animate-slideIn ">
      <div className="flex flex-col 2xl:justify-center 2xl:align-middle gap-5 xs:align-top ">
      
        <img
          src={avatar}
          alt="Dr. Fadi Herzallah"
          className="aspect-square w-[230px] h-[230px] border rounded-full object-cover lg:mx-0 xs:mx-auto xl:mx-auto"
        />
       
         <div className=" xs:mx-auto 2xl:mx-0 flex flex-col gap-4">


         <div className="flex flex-col gap-4 justify-center   " >
        <p className="font-sans top-10 font-bold xs:text-center lg:text-start ">
          Fadi A. T. Herzallah
        </p>
        <p className="xs:text-center lg:text-start -mt-3">د. فادي أحمد حرزالله</p>
        </div>
        <div className="flex gap-4 lg:justify-start align-middle   ">
          <FaUniversity />
          <a href="https://ptuk.edu.ps/en/index.php">
            Palestine Technical University
          </a>
        </div>
        <div className="flex gap-4 lg:justify-start align-middle cursor-pointer   ">
          <MdEmail />
          <a target="_blank" href="">
            Email
          </a>
        </div>
        <div className="flex gap-4 lg:justify-start align-middle cursor-pointer   ">
          <SiGooglescholar />
          <a
            target="_blank"
            href="https://scholar.google.com/citations?user=WlGlvHoAAAAJ&hl=ar&oi=ao"
          >
            Google Scholar
          </a>
        </div>
        <div className="flex gap-4 lg:justify-start align-middle cursor-pointer   ">
          <FaOrcid className="ai ai-orcid ai-fw icon-pad-right text-lime-400 my-auto" />
          <a target="_blank" href="https://orcid.org/0000-0001-8589-7950">
            ORCID
          </a>
        </div>
        <div className="flex gap-4 lg:justify-start align-middle cursor-pointer   ">
          <span className="text-white bg-black w-5">SC</span>
          <a
            target="_blank"
            href="https://www.scopus.com/authid/detail.uri?authorId=56644756100"
          >
            Scopus
          </a>
        </div>
        <div className="flex gap-4 lg:justify-start align-middle cursor-pointer  ">
          <FaGithub />
          <a target="_blank" href="https://github.com/academicpages">
            Github
          </a>
        </div>

         </div>
      </div>

      <div className="2xl:w-2/3 xs:w-full flex flex-col align-middle py-20 justify-center ">
        <h1 className="font-sans font-bold">SHORT BIO:</h1>
        <br />
        <p className="text-justify leading-relaxed max-w-3xl xl:mx-auto 2xl:mx-0 xs:mx-auto">
          Fadi Herzallah is currently working as an Associate Professor in the
          Department of Marketing and E-Commerce at{" "}
          <a
            href="https://ptuk.edu.ps/en/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            Palestine Technical University Kadoori
          </a>
          , Palestine, and he is the Dean of the Faculty of Integrated Education. He
          received his PhD in Information Science—E-Commerce from The National
          University of Malaysia—Malaysia, his M.Sc. Degree in Computer Information
          System from The Arab Academy for Banking and Financial Sciences—Jordan, and
          his B.Sc. Degree in Computer Science from Palestine Polytechnic
          University—Palestine. His research interests are in the areas of e-commerce
          applications, technology adoption, online social networks, green IT,
          e-marketing, EHRM, and others.
        </p>

        <br />
        <div className="font-sans font-bold">Education:</div>
        <br />
        <div className="education-list text-justify leading-relaxed max-w-3xl  xl:mx-auto 2xl:mx-0 xs:mx-auto">{Education()}</div>
      </div>
    </div>
  );
}
