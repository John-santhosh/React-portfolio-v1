import styled from "styled-components";
import { SlBadge } from "react-icons/sl";
import { useGlobalContext } from "../Context";
import cv from "../assets/JOHN SANTHOSH Front-End_dev.pdf";
const About = () => {
  const { products, loading } = useGlobalContext();
  const AboutImage = products.find((product) => product.main_pic)?.images[1]
    .url;
  // const cv = products.find((product) => product.resume)?.images[0].url;
  return (
    <Wrapper id="about" className="section-center">
      <span>
        <small>Get To Know</small>
        <h2>About me</h2>
      </span>
      <div className="">
        {loading ? (
          <div className="custom-loader"></div>
        ) : (
          <div className="img-container">
            <img src={AboutImage} alt="its me John" />
          </div>
        )}
        <div className="about-me">
          <div className="about-card">
            <div>
              <SlBadge />
              <h5>Interested</h5>
              <p>In Front-end</p>
            </div>
            <div>
              <SlBadge />
              <h5>Projects</h5>
              <p>30+ Completed</p>
            </div>
            <div>
              <SlBadge />
              <h5>Experience</h5>
              <p>&lt;1 year</p>
            </div>
          </div>

          <ol>
            <li>I am passionate about bringing website to life</li>
            <li>
              I have a bachelor&#39;s degree in &#39;computer applications&#39;
              and 8 months of IT experience.
            </li>
            <li>
              This coding habit started as a hobby and Now about to start my
              carrier as a developer.
            </li>
            <li>
              I&#39;m happiest when creating, exploring, and thinking about
              improving things. I&#39;m available for any freelancing and
              Full-Time SE role, Feel free to reach out and say hello!
            </li>
          </ol>
          <div className="buttons">
            <a href="#contact">
              <button className="btn btn-solid">Lets talk</button>
            </a>
            {/* "https://www.canva.com/design/DAFpW1Q3irw/XfIpQNY76oC4V2jQPUqOpA/view?utm_content=DAFpW1Q3irw&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel" */}
            <a download href={cv} target="_blank" rel="noreferrer">
              <button className="download btn">DOWNLOAD CV</button>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  align-items: end;
  p {
    line-height: 2;
  }
  @media only screen and (min-width: 450px) {
    /* gap: 5rem; */
  }
  span {
    display: grid;
    text-align: center;
    place-self: center;
    margin-top: 1rem;
  }
  > div {
    display: grid;
    grid-template-columns: 35% 55%;
    place-items: center;
    gap: 10%;
    place-self: center;
    @media only screen and (max-width: 992px) {
      grid-template-rows: 1fr 1fr;
      grid-template-columns: unset;
      gap: 0;

      .img-container {
        margin: 3rem 0;
        width: 65%;
        overflow: visible;
      }
    }
    @media only screen and (max-width: 550px) {
      .img-container {
        width: 85%;
        margin: 3rem 0;
      }
      gap: 2rem;
      grid-template-rows: 2fr 5fr;
    }
  }
  div.about-card {
    gap: 1rem;
    align-items: center;
    width: 100%;
    > div {
      min-width: 200px;
    }
  }

  .about-card {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    width: 100%;
    justify-content: center;
    gap: 2rem;
    @media only screen and (min-width: 992px) {
      justify-content: space-between;
    }
    > * {
      text-align: center;
      background-color: var(--clr-p-8);
      border: 2px solid var(--clr-p-8);
      border-radius: 10px;
      padding: 2rem;
      transition: var(--transition);
      svg {
        font-size: 1.3rem;
      }
      :hover {
        background-color: transparent;
      }
    }
  }
  .about-me {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    justify-items: start;
    gap: 1rem;
    ol {
      list-style: none;
      li {
        margin: 0.5rem 0;
      }
    }
  }
  .buttons {
    display: flex;
    gap: 1rem;
  }
  .img-container {
    width: 100%;
    object-fit: cover;
    display: grid;
    place-items: center;
    background: linear-gradient(
      50deg,
      transparent,
      var(--clr-p-7),
      transparent
    );
    border-radius: 2rem;
    transform: rotateY(180deg);
  }
  .img-container img {
    /* transform: rotate(-10deg); */
    border-radius: 2rem;
    object-position: top;
    aspect-ratio: 1/1;
    transition: var(--transition);
  }
  /* img:hover {
    transform: rotate(0);
  } */
`;
export default About;
