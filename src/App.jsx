
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Title2 from "./Components/Title2/Title2";
import Campus from "./Components/Campus/Campus";
import Title3 from "./Components/Title3/Title3";
import Testimonials from "./Components/Testimonials/Testimonials";
import Title4 from "./Components/Title4/Title4";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title />
        <Programs />
        <About/>
        <Title2/>
        <Campus/>
        <Title3/>
        <Testimonials/>
        <Title4/>
        <Contact/>
        <Footer/>
      </div>
     

      

    </div>
  );
};

export default App;
