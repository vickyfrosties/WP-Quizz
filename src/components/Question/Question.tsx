
type QuestionProps = {
    ID: number,
    question_quizz: string;
    contenu: string,
    reponses_accepteees: string,
    _association_avec_un_quiz: number;
};

const Question = ({ ID, question_quizz, contenu, reponses_accepteees, _association_avec_un_quiz }: QuestionProps) => {

    return (
        <>
            <div>
                <h2>Question : {question_quizz} n° {ID} </h2>
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