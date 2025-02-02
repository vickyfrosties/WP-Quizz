import { useEffect, useState } from "react";
import { QuizResponseWP } from "../../types/Quizz";
import Quizz from "../Quizz/Quizz";
import { fetchArticle } from "../../services/Quizz.service";

const nbQuizzPerRequest = 2;

const QuizzList = () => {

  const [quizz, setQuizz] = useState<QuizResponseWP[]>([]);

  useEffect(() => {
    fetchArticle(nbQuizzPerRequest)
      .then(setQuizz)
      .catch(err => console.error("Erreur de chargement des quiz:", err));
  }, []);

  return (
    <div>
      <h1>Liste des Quiz</h1>
      {quizz.length > 0 ? (
        quizz.map(quiz => <Quizz key={quiz.id}
          id={quiz.id}
          title={quiz.title.rendered}
          image={quiz.image.guid}
          description={quiz.description}
          difficulte={quiz.difficulte[0]}
          statut={quiz.statut[0]} />)
      ) : (
        <p>Aucun quiz trouvé.</p>
      )}
    </div>
  );
};

export default QuizzList;