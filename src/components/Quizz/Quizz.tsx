
type QuizzProps = {
  id: number,
  title: string,
  image: string,
  description: string,
  difficulte: string,
  statut: string,
};

const Quizz = ({ title, image, description, difficulte, statut }: QuizzProps) => {
  return (
    <>
      <div>
        <h2> {title} </h2>
        <img src={image} alt={image} />
        <p>{description} </p>
        <p>Niveau de difficulté : {difficulte} </p>
        <p>Dernier état du quizz : {statut} </p>
      </div>
    </>
  );
};

export default Quizz;