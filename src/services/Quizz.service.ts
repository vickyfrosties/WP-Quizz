import { QuizResponseWP } from "../types/Quizz";

const { VITE_URL_WP } = import.meta.env;


export async function fetchArticle(nbQuizzPerRequest: number): Promise<QuizResponseWP[]> {

  const url = VITE_URL_WP + `wp-json/wp/v2/quiz?per_page=${nbQuizzPerRequest}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Erreur API: ${response.status}`);
    }
    return await response.json();
  }

  catch (error) {
    console.error("Erreur de récupération des quiz:", error);
    return [];
  }
}