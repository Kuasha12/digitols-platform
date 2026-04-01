import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Reating from "./components/reating/Reating";
import Card from "./components/card/Card";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Reating></Reating>
      <Card></Card>
    </>
  );
}

export default App;
