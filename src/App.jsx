import "./App.css";
import {
  About,
  Contacts,
  Experience,
  Hero,
  Navbar,
  Testimonials,
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
      <Experience></Experience>
      <Testimonials></Testimonials>
      <Contacts></Contacts>
      <Footer></Footer>
      <MySkills></MySkills>
      <MyProjects></MyProjects>
    </>
  );
}

export default App;
