import { Route, Routes } from "react-router-dom";
import QuizzList from "./components/QuizzList/QuizzList";

function App() {

  return (
    <>
      <Routes>
        <Route path="/"
          element={<QuizzList />} />
      </Routes>
    </>
  );
}

export default App;
