import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { QUIZ_ENUM } from "./constants";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <App quizType={QUIZ_ENUM.SLOW_STATE} />
);
