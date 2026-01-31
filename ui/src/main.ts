import "./styles.css";
import { initLocale } from "./localization";

// Initialize locale before loading the app
await initLocale();
await import("./ui/app.ts");
