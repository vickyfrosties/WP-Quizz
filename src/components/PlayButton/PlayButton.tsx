import { useNavigate } from "react-router-dom";

const PlayButton = ({ quizzId }) => {

  const navigate = useNavigate();

  const handleStartQuizz = () => {
    navigate(`/quiz/${quizzId}`);
  };

  return (
    <>
      <button onClick={handleStartQuizz}></button>
    </>
  );
};

export default PlayButton;