import type { JSX } from "react";
import { Button } from "@chakra-ui/react"



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

type topicsProps = {
    topic: Topic;
}

const MainTopic = ({topic} : topicsProps) => {
  return (
    <div>
        <div className="mx-2 px-2 md:mx-20 pt-16">
            <h1 className="text-3xl font-bold text-center mb-4 animate__animated animate__backInLeft">{topic.heading}</h1>
            <p className="text-xl text-center mb-8 animate__animated animate__backInRight">{topic.description}</p>
        </div>
        <div className="flex justify-center flex-col items-center mt-4 pt-4 ">
            <div className="mx-4 px-4 my-2 py-2 sm:mx-6 sm:px-6 md:mx-8 md:px-8">
           
             <Button className="animate__animated animate__swing" colorPalette="purple" size="xl">
        {topic.subject} Interview Questions For Freshers
      </Button>

            </div>
            <div className="mx-4 px-4 my-2 py-2 sm:mx-6 sm:px-6 md:mx-8 md:px-8">
           
             <Button className="animate__animated animate__swing" colorPalette="pink" size="xl">
        {topic.subject} Interview Questions For Intermediate
      </Button>

            </div>
            <div className="mx-4 px-4 my-2 py-2 sm:mx-6 sm:px-6 md:mx-8 md:px-8">
           
             <Button className="animate__animated animate__swing" colorPalette="yellow" size="xl">
        {topic.subject} Interview Questions For Experienced
      </Button>

            </div>
        </div>
    </div>
  )
}

export default MainTopic