import { ToastContainer } from "react-toastify";
// import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer position="top-center" />
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <MySkills></MySkills>
      <MyProjects></MyProjects>
      <Contacts></Contacts>
      <Footer></Footer>
    </AppContext>
  );
}

export default App;
