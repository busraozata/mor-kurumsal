import { useEffect } from "react";
import Layout from "./Layouts/Layout/Layout";
import "./Styles/index.scss";


function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
