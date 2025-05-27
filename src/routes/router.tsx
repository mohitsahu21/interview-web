import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { topics } from "../Constants/topics.tsx";
// import QuestionsPage from "../pages/QuestionsPage";
import Home from "../pages/Home";
import MainTopic from "../pages/MainTopic.tsx";

export default function AppRoutes() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        {topics.map((item) => (
          // <Route key={item.id} path={item.path} element={<QuestionsPage questions={item.jsonPath}/>} />
          <Route key={item.id} path={item.path} element={<MainTopic topic={item}/>} />
        ))}
        <Route path={"/"} element={<Home/>} />
      </Routes>
    </Suspense>
  );
}
