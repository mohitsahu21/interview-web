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
  heading: string;
  description: string;
};

export const topics: Topic[] = [
    {id:1,
      subject: "Reactjs",
      img: <FaReact className="bg-black text-[#61DAFB] w-full h-full p-2"/>,
      jsonPath: reactjs,
      path:"/react-interview-questions/",
      heading: "React.js Interview Questions",
      description: "React.js is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and manage the state of their applications efficiently. React's virtual DOM and component-based architecture make it a popular choice for modern web development.",
      
    },
    {id:2,
      subject:"NodeJS",
      img: <FaNodeJs className="bg-black text-[#3C873A] w-full h-full p-2"/>,
      jsonPath:nodejs,
       path:"/nodejs-interview-questions/",
      heading: "Node.js Interview Questions",
      description: "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to run JavaScript on the server side. It is designed for building scalable network applications and is known for its non-blocking, event-driven architecture. Node.js is widely used for developing web servers, APIs, and real-time applications."
    },
    {id:3,
      subject:"Javascript",
      img: <IoLogoJavascript className="bg-black text-[#F7DF1E]  w-full h-full p-2"/>,
      jsonPath: javascript,
      path:"/javascript-interview-questions/",
      heading: "JavaScript Interview Questions",
      description: "JavaScript is a versatile programming language primarily used for web development. It enables interactive and dynamic content on websites and is an essential part of modern web applications. JavaScript can be used on both the client side (in browsers) and the server side (with Node.js), making it a powerful tool for developers."
    }
  ]