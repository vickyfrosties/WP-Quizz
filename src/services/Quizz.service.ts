import { QuizResponseWP } from "../types/Quizz";

const { VITE_QUIZZ_URL_WP } = import.meta.env;

export async function fetchQuiz(): Promise<QuizResponseWP[]> {

  const response = await fetch(VITE_QUIZZ_URL_WP + "/wp-json/wp/v2/quiz?per_page=100");

  const result: QuizResponseWP[] = await response.json();
  console.log("Fetched Quizzes:", result);
  return result;
}

export async function fetchQuizById(id: number): Promise<QuizResponseWP[]> {
  const response = await fetch(VITE_QUIZZ_URL_WP + `wp-json/wp/v2/quiz/${id}`);

  const result: QuizResponseWP[] = await response.json();
  return result;
}