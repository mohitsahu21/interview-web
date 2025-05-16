import React, { useEffect, useState } from 'react'

type Question = {
  id: string;
  question: string;
  answer: string;
};

type QuestionsPageProps = {
  questions: Question[];
};

const QuestionsPage = ({questions} : QuestionsPageProps) => {
    const [data, setData] = useState<Question[]>();
    
   useEffect(() => {
  if (questions?.length > 0) {
    setData(questions);
  }
}, [questions]); // include `questions` as a dependency
  return (
   <div>
    {data?.map((item)=>(
        <div key={item.id}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>

        </div>
    ))}
   </div>
  )
}

export default QuestionsPage