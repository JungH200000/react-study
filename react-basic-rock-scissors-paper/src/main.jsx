// react-basic-rock-scissors-paper
// /src/main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // App 컴포넌트 불러오기

createRoot(document.getElementById('root')).render(
  <>
    <StrictMode>
      <App />
    </StrictMode>
  </>
);
