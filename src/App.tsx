// import { RouterProvider } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { element } from "./routes/MainRoutes.tsx";
import {RecoilRoot} from "recoil"


const App = () => {
  return (
    <div>
      <RecoilRoot>
        <RouterProvider router={element} />
      </RecoilRoot>
    </div>
  );
};

export default App;
