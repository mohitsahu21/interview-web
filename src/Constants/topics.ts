import javascriptImg from "../assets/img/javascript.png"
import reactImg from "../assets/img/reactjs.png"
import nodejsImg from "../assets/img/nodejs.png"
import {reactjs} from "../Constants/qustions/reactjs.ts"
import {nodejs} from "../Constants/qustions/nodejs.ts"
import {javascript} from "../Constants/qustions/javascript.ts"

type Question = {
  id: string;
  question: string;
  answer: string;
};

type Topic = {
  id: number;
  subject: string;
  path: string;
   img: string; // image imports are strings (URLs after bundling)
  jsonPath: Question[]; // strictly an array, NOT a string
};

export const topics: Topic[] = [
    {id:1,
      subject: "Reactjs",
      img: reactImg,
      jsonPath: reactjs,
      path:"/react-interview-questions/"
    },
    {id:2,
      subject:"NodeJS",
      img: nodejsImg,
      jsonPath:nodejs,
       path:"/nodejs-interview-questions/"
    },
    {id:3,
      subject:"Javascript",
      img: javascriptImg,
      jsonPath: javascript,
       path:"/javascript-interview-questions/"
    }
  ]