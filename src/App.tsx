import { Route, Routes } from "react-router-dom";
import QuizzList from "./components/QuizzList/QuizzList";
import QuestionDetails from "./components/Question/QuestionDetails";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<QuizzList />} />
        <Route path="/quiz/:quizzId" element={<QuestionDetails />} />
      </Routes>
    </>
  );
}

export default App;
