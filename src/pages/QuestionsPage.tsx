import { useEffect, useState } from 'react'
import { Accordion, Span } from "@chakra-ui/react"
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
   <div className={"mx-20 pt-16"}>
     <Accordion.Root multiple defaultValue={["b"]}>
      {data?.map((item:Question) => (
        <Accordion.Item key={item.id} value={item.id} className='flex justify-center flex-col gap-1 mb-8'>
          <Accordion.ItemTrigger>
          <span className="text-yellow-400">Ques:{item.id}</span>
            <Span flex="1" className='font-bold text-xl'>{item.question}</Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
              <span className="text-yellow-400">Answer:{"    "}</span>
            <Accordion.ItemBody className='font-semibold text-lg pl-8'>
             {item.answer}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
   </div>
  )
}

export default QuestionsPage