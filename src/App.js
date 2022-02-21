import "./App.css";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import New from "./components/New/New";
import Saying from "./components/Saying/Saying";
import Shot from "./components/Shot/Shot";
import Video from "./components/Video/Video";
import Why from "./components/Why/Why";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Why />
      <Shot />
      <Video />
      <New />
      <Saying />
      <Footer />
    </div>
  );
}

export default App;
