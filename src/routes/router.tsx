import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { topics } from "../Constants/topics";
import QuestionsPage from "../pages/QuestionsPage";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        {topics.map((item) => (
          <Route key={item.id} path={item.path} element={<QuestionsPage questions={item.jsonPath}/>} />
        ))}
        <Route path={"/"} element={<Home/>} />
      </Routes>
    </Suspense>
  );
}
