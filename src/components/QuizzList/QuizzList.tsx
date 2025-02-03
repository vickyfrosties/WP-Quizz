import { useEffect, useState } from "react";
import { QuizResponseWP } from "../../types/Quizz";
import Quizz from "../Quizz/Quizz";
import { fetchQuiz } from "../../services/Quizz.service";

const nbQuizzPerRequest = 2;

const QuizzList = () => {

  const [quizz, setQuizz] = useState<QuizResponseWP[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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

        <button onClick={handleClick}>Commencer le quiz</button>
      </div>

      <div>
        {quizz.map((questionObj, index) => (
          <div key={index}>
            {questionObj.association_avec_les_questions.map((questions, qIndex) => (
              <div key={qIndex}>
                <p>{questions.question_quizz}</p>
                <p>{questions.contenu}</p>
                <p>La réponse est : {questions.reponses_accepteees} </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default QuizzList;