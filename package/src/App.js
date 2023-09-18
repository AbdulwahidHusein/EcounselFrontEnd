import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import { useState } from "react";
import RegistrationPage from "./views/ui/Register";
const App = () => {

const [login, setLogin] = useState(false);

  const routing = useRoutes(Themeroutes);

  return <>
   {
   !login &&   <div className="dark">{routing}</div>
}
{
  !login && <RegistrationPage />
}
  </>
 

};

export default App;
