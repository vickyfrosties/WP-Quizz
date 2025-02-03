import { useEffect, useState } from "react";
import { QuizResponseWP } from "../../types/Quizz";
import { fetchQuiz } from "../../services/Quizz.service";
import { useParams } from "react-router-dom";

// affichage des quizz 
const QuizzList = () => {

  const [quizz, setQuizz] = useState<QuizResponseWP[]>([]);
  const { quizzId } = useParams();

  useEffect(() => {
    fetchQuiz()
      .then(setQuizz)
      .catch(err => console.error("Erreur de chargement des quiz:", err));
  }, []);

  return (
    <>
      <div>
        <h1>Liste des Quiz {quizzId} </h1>

        {quizz.map((quiz) => {
          return (
            <div key={quiz.id}>
              <p> {quiz.titre} </p>
              <img src={quiz.image.guid} alt="" />
              <p> {quiz.description} </p>
              <p> Niveau du quizz : {quiz.difficulte} </p>
              <p> État du quizz : {quiz.statut} </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default QuizzList;