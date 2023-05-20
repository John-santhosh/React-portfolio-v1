import styled from "styled-components";
import { SlBadge } from "react-icons/sl";
const About = () => {
  return (
    <Wrapper id="about" className="section-center">
      <span>
        <small>Get To Know</small>
        <h2>About me</h2>
      </span>
      <div className="">
        <div className="img-container">
          <img
            src={
              "https://images.pexels.com/photos/16373162/pexels-photo-16373162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
          />
        </div>
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
              I have a bachelor&#39;s degree in &#39;computer application&#39;
              from Madras University, 8 months of relevant IT experience
            </li>
            <li>
              This coding habit started as a hobby and Now about to start my
              carrier as a developer
            </li>
            <li>
              I&#39;m happiest when creating, exploring, and thinking about
              improving things. I&#39;m available for any freelancing or
              internship or full-time SE role, feel free to reach out and say
              hello!
            </li>
          </ol>
          <a href="#contact">
            <button className="btn btn-solid">Lets talk</button>
          </a>
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
      .img-container {
        width: 60%;
      }
    }
    @media only screen and (max-width: 550px) {
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
      background-color: var(--clr-p-9);
      border: 2px solid var(--clr-p-10);
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
  .img-container {
    width: 100%;
    object-fit: cover;
    display: grid;
    place-items: center;
    background: linear-gradient(
      45deg,
      transparent,
      var(--clr-s-1),
      transparent
    );
    border-radius: 2rem;
  }
  .img-container img {
    transform: rotate(10deg);
    border-radius: 2rem;
    aspect-ratio: 1/1;
    transition: var(--transition);
  }
  img:hover {
    transform: rotate(0);
  }
`;
export default About;
