import { useEffect, useState } from "react";
import { QuizResponseWP } from "../../types/Quizz";
import { fetchQuizById } from "../../services/Quizz.service";

const Question = () => {

    const [questions, setQuestions] = useState<QuizResponseWP[]>([]);

    useEffect(() => {
        fetchQuizById(0)
            .then(setQuestions)
            .catch(err => console.error("Erreur du chargement des questions", err));
    }, []);

    return (
        <>
            <div>
                {questions.map(question => (
                    <div key={question.id}>
                        {question.association_avec_les_questions.map((questions, qIndex) => (
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

export default Question;