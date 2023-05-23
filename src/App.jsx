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
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AnimateOnScroll();
  }, []);
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

function AnimateOnScroll() {
  const allElements = document.body.querySelectorAll("div#root>*[class]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.add("hidden");
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  allElements.forEach((ele) => observer.observe(ele));
}
export default App;
