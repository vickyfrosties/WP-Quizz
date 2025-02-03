import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('wp_quiz_list')!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>,
  </BrowserRouter>
);
