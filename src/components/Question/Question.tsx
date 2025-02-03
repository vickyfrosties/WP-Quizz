
type QuestionProps = {
    id: number,
    question_quizz: string;
    contenu: string,
    reponses_accepteees: string,
    _association_avec_un_quiz: number;
};

const Question = ({ id, question_quizz, contenu, reponses_accepteees, _association_avec_un_quiz }: QuestionProps) => {

    return (
        <>
            <div>
                <h2>Question : {question_quizz} n° {id} </h2>
                <p>
                    {contenu}
                </p>
                <p>
                    {reponses_accepteees}
                </p>
                <p>
                    {_association_avec_un_quiz}
                </p>
            </div>
        </>
    );
};

export default Question;