import { useState } from "react";
import { QuizResponseWP } from "../../types/Quizz";
import Quizz from "../Quizz/Quizz";

const nbQuizzPerRequest = 2;

const QuizzList = () => {

  const [quizz, setQuizz] = useState<QuizResponseWP[]>([]);


  return (
    <div>
      {quizz.map(quiz => (
        <Quizz
          key={quiz.id}
          id={quiz.id}
          title={quiz.title.rendered}
          image={quiz.image.guid}
          description={quiz.description}
          difficulte={quiz.difficulte[0]}
          statut={quiz.statut[0]}
        />
      ))}
    </div>
  );
};

export default QuizzList;