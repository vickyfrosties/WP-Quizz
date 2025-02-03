import { useEffect, useState } from "react";
import { QuizResponseWP } from "../../types/Quizz";
import { fetchQuizById } from "../../services/Quizz.service";

// affichage des questions et leur contenu
const QuestionDetails = () => {

    const [questions, setQuestions] = useState<QuizResponseWP[]>([]);

    useEffect(() => {
        fetchQuizById(29)
            .then(setQuestions)
            .catch(err => console.error("Erreur lors du chargement des questions.", err));
    }, []);
    return (
        <>

            {questions.map((question) => {
                return question.association_avec_les_questions.map((detail) => (
                    <div key={detail.id}>
                        <p>{detail.question_quizz}</p>
                        <p>{detail.contenu}</p>
                        <p>{detail.reponses_accepteees}</p>
                    </div>
                ));
            })}
        </>
    );
};

export default QuestionDetails;