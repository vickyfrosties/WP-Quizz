import { Route, Routes } from "react-router-dom";
import QuizzList from "./components/QuizzList/QuizzList";
import Question from "./components/Question/Question";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<QuizzList />} />
        <Route path="/quiz/:id" element={<Question />} />

      </Routes>
    </>
  );
}

export default App;
