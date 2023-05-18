import "./App.css";
import {
  About,
  Contacts,
  // Experience,
  Hero,
  Navbar,
  // Testimonials,
  Footer,
  MySkills,
  MyProjects,
} from "./components/allCompIndex";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <MySkills></MySkills>
      {/* <Experience></Experience> */}
      {/* <Testimonials></Testimonials> */}
      <MyProjects></MyProjects>
      <Contacts></Contacts>
      <Footer></Footer>
    </>
  );
}

export default App;
