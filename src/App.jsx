import { RouterProvider } from "react-router-dom";
import "./App.css";
import { appRouter, maintenanceAppRouter } from "./assets/routes/routes";

function App() {
  return (
    <div className="">
      <RouterProvider
        // key={siteSetting?.setting_data?.page_is_home || "default"} // Ensures re-render when settings change
        router={true ? appRouter : maintenanceAppRouter}
      />
    </div>
  );
}

export default App;
