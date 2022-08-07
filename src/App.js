import NavigationBar from "./components/NavBar";
import HeroPage from "./components/HeroPage";
import FooterPage from "./components/FooterPage";
import TestimonialHero from "./components/TestimonialHero";
import Customer from "./components/Customer";
// import ReviewForm from "./components/ReviewForm";
// import ThankYou from "./components/ThankYou";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main>
        <HeroPage />
        <Customer className=" container py-5" />
        <TestimonialHero />
        {/* <ReviewForm /> */}
        {/* <ThankYou /> */}
      </main>
      <FooterPage />
    </div>
  );
}

export default App;
