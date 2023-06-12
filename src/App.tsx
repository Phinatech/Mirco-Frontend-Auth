// import { RouterProvider } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { element } from "./routes/MainRoutes.tsx";

const App = () => {
  return (
    <div>
      <RouterProvider router={element} />
    </div>
  );
};

export default App;
