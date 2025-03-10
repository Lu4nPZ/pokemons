import { createRoot } from "react-dom/client"; // Alteração aqui
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/theme-context.jsx";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
} else {
  console.error("Elemento #root não encontrado no index.html!");
}