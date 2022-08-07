import NavigationBar from "./components/NavBar";
import HeroPage from "./components/HeroPage";
import FooterPage from "./components/FooterPage";
import TestimonialHero from "./components/TestimonialHero";
import Customer from "./components/Customer";
import Vendors from "./components/Vendors";
import ReviewForm from "./components/ReviewForm";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main className="mb-32">
        <HeroPage />
        <Customer className=" container py-5 my-6" />
        <TestimonialHero />
        <Vendors className=" container " />
        <ReviewForm />
        <ThankYou />
      </main>
      <FooterPage />
    </div>
  );
}

export default App;
