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
import AppContext from "./Context";
function App() {
  return (
    <AppContext>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <MySkills></MySkills>
      {/* <Experience></Experience> */}
      {/* <Testimonials></Testimonials> */}
      <MyProjects></MyProjects>
      <Contacts></Contacts>
      <Footer></Footer>
    </AppContext>
  );
}

export default App;
