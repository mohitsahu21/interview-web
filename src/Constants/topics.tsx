// import javascriptImg from "../assets/img/javascript.png"
// import reactImg from "../assets/img/reactjs.png"
// import nodejsImg from "../assets/img/nodejs.png"
// import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa6";

import {reactjs} from "./qustions/reactjs.ts"
import {nodejs} from "./qustions/nodejs.ts"
import {javascript} from "./qustions/javascript.ts"
import type { JSX } from "react";





type Question = {
  id: string;
  question: string;
  answer: string;
};

type Topic = {
  id: number;
  subject: string;
  path: string;
   img: string | JSX.Element; // Accept both image URLs and React elements; // image imports are strings (URLs after bundling)
  jsonPath: Question[]; // strictly an array, NOT a string
};

export const topics: Topic[] = [
    {id:1,
      subject: "Reactjs",
      img: <FaReact className="bg-black text-[#61DAFB] w-full h-full p-2"/>,
      jsonPath: reactjs,
      path:"/react-interview-questions/"
    },
    {id:2,
      subject:"NodeJS",
      img: <FaNodeJs className="bg-black text-[#3C873A] w-full h-full p-2"/>,
      jsonPath:nodejs,
       path:"/nodejs-interview-questions/"
    },
    {id:3,
      subject:"Javascript",
      img: <IoLogoJavascript className="bg-black text-[#F7DF1E]  w-full h-full p-2"/>,
      jsonPath: javascript,
      path:"/javascript-interview-questions/"
    }
  ]