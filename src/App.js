import "./App.css";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Shot from "./components/Shot/Shot";
import Why from "./components/Why/Why";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Why />
      <Shot />
    </div>
  );
}

export default App;
