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
              <p>50+ Completed</p>
            </div>
            <div>
              <SlBadge />
              <h5>Experience</h5>
              <p>&lt;1 year</p>
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            vitae id dolorem? Dolore vitae aliquid quam voluptas numquam
            adipisci reprehenderit eos delectus corrupti dicta quia, animi
            doloribus necessitatibus ut nam.
          </p>
          <button className="btn btn-solid">Lets talk</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr 5fr;
  place-items: center;
  align-items: end;
  @media only screen and (min-width: 450px) {
    gap: 5rem;
  }
  span {
    display: grid;
    place-items: center;
  }
  > div {
    display: grid;
    grid-template-columns: 35% 50%;
    place-items: center;
    gap: 15%;
    place-self: center;
    @media only screen and (max-width: 550px) {
      gap: 0%;
    }
    @media only screen and (max-width: 992px) {
      grid-template-columns: unset;
      grid-template-rows: 50% 50%;
    }
  }
  div.about-card {
    gap: 2rem;
    align-items: center;
    width: 100%;
    > div {
      min-width: 170px;
    }
  }

  .about-card {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    width: 100%;
    @media only screen and (min-width: 769px) {
    }
    justify-content: center;
    gap: 2rem;
    > * {
      text-align: center;
      background-color: var(--clr-p-9);
      border-radius: 10px;
      padding: 2rem;
      svg {
        font-size: 1.3rem;
      }
    }
  }
  .about-me {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    justify-items: start;
  }
  .img-container {
    object-fit: cover;
    display: grid;
    place-items: center;
    background: linear-gradient(
      45deg,
      transparent,
      var(--clr-s-1),
      transparent
    );
  }
  .img-container img {
    transform: rotate(10deg);
    border-radius: 10px;
    aspect-ratio: 1/1;
    transition: var(--transition);
  }
  img:hover {
    transform: rotate(0);
  }
`;
export default About;
