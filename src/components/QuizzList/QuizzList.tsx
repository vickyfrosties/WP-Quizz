import { useEffect, useId, useState } from "react";
import { QuizResponseWP } from "../../types/Quizz";
import Quizz from "../Quizz/Quizz";
import { fetchQuiz } from "../../services/Quizz.service";
import { useNavigate } from "react-router-dom";

const nbQuizzPerRequest = 2;

const QuizzList = () => {

  const [quizz, setQuizz] = useState<QuizResponseWP[]>([]);
  const navigate = useNavigate();
  const id = useId();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`/quiz/${id}`);
  };

  useEffect(() => {
    fetchQuiz(nbQuizzPerRequest)
      .then(setQuizz)
      .catch(err => console.error("Erreur de chargement des quiz:", err));
  }, []);

  return (
    <>
      <div>
        <h1>Liste des Quiz</h1>
        {quizz.length > 0 ? (
          quizz.map(quiz =>
            <Quizz key={quiz.id}
              id={quiz.id}
              title={quiz.title.rendered}
              image={quiz.image.guid}
              description={quiz.description}
              difficulte={quiz.difficulte[0]}
              statut={quiz.statut[0]} />)
        ) : (
          <p>Aucun quiz trouvé.</p>
        )}

        <button onClick={handleClick}>Commencer le quiz</button>
      </div>
    </>
  );
};

export default QuizzList;