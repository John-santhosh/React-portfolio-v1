import styled from "styled-components";
import { MdOutlineWavingHand } from "react-icons/md";
import { social } from "../data";
import { useGlobalContext } from "../Context";
const Hero = () => {
  const { products } = useGlobalContext();
  const images = products.find((product) => product["tech-stack"] === true);
  const profileImg = products.find((product) => product.main_pic)?.images[0]
    .url;
  return (
    <Wrapper>
      <div className="section-center">
        <div className="hero-container">
          <div>
            <h2>
              Front-End React Developer{" "}
              <MdOutlineWavingHand className="waves" />
            </h2>
            <p>
              Hi, I&#39;m John Santhosh. A passionate Front-end React Developer
              base in Chennai.{" "}
            </p>
          </div>
          <div className="hero">
            <div className="social-links">
              <div className="social-icons">
                {social.map((item) => {
                  const { id, url, Icon } = item;
                  return (
                    <a target="_blank" href={url} key={id} rel="noreferrer">
                      <Icon />
                    </a>
                  );
                })}
                {/* <hr /> */}
              </div>
            </div>
            <div className="me">
              <img src={profileImg} alt="its me" />
            </div>
          </div>
        </div>
        <div className="stack">
          <h5>Tech Stack </h5>

          <div>
            {images?.images.map((image, ind) => {
              return (
                <div className="tech-container" key={ind}>
                  <img src={image.url} alt="" />
                </div>
              );
            })}
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
  background-color: var(--clr-p-9);
  h2 {
    color: var(--clr-p-4);
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-top: 4rem;
    .waves {
      transform: translateY(0.8rem);
    }
  }
  p {
    color: var(--clr-p-6);
    font-weight: 400;
    margin: 1.5rem 0;
    font-size: 1.2rem;
  }
  > div {
    display: grid;
    gap: 3rem;
    @media only screen and (max-width: 768px) {
      grid-template-rows: 5fr 2fr;
      text-align: center;
      h2 {
        font-size: 3rem;
        margin-top: 0;
      }
    }
  }
  .hero-container {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: space-between;
    > div:first-child {
      width: clamp(300px, 100%, 500px);
    }
    > div:last-child {
      width: clamp(350px, 100%, 400px);
    }
    @media only screen and (max-width: 992px) {
      justify-content: center;
    }
  }

  .stack {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4rem;
    margin-bottom: 1rem;
    h5 {
      width: 200px;
      font-size: 1rem;
      border-right: 2px solid var(--clr-p-6);
    }
    > div {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }
    @media only screen and (max-width: 992px) {
      justify-content: center;
      flex-direction: column;

      h5 {
        width: auto;
        border: none;
        border-bottom: 2px solid var(--clr-p-6);
      }
      > div {
        justify-content: center;
      }
    }
  }
  .tech-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    flex-wrap: wrap;
    border-radius: 50%;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    padding: 0.5rem;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
  .buttons {
    margin: 2rem 0;
    button {
      text-transform: capitalize;
    }
    .download {
      text-transform: uppercase;
    }
  }

  .hero {
    display: flex;
    align-items: center;
    gap: 2rem;
    @media only screen and (max-width: 992px) {
      order: -1;
    }
  }

  .me {
    display: grid;
    place-items: center;
    object-fit: cover;
    border-radius: 50%;
    overflow: hidden;
    border: 6px solid var(--clr-p-6);
    aspect-ratio: 1/1;
    animation: border-dance 4s linear infinite;
    background-color: #fff;
    filter: grayscale(20%);
    img {
      width: 100%;
      /* padding: 5rem 1.5rem 1.5rem; */
      /* filter: grayscale(100%); */
    }
  }
  /* @keyframes border-dance {
    0% {
      border-radius: 100% 80% 90% 70%;
    }
    25% {
      border-radius: 90% 70% 60% 80%;
    }
    50% {
      border-radius: 70% 90% 80% 60%;
    }
    90% {
      border-radius: 90% 70% 60% 80%;
    }
    100% {
      border-radius: 100% 80% 90% 70%;
    }
  } */
  @keyframes border-dance {
    0%,
    100% {
      border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
      transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    34% {
      border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
      transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
    }
    50% {
      transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    67% {
      border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
      transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
    }
  }

  .img-container {
  }

  .social-icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: var(--clr-s-1);
    font-size: 1.5rem;
    > a:hover {
      transition: var(--transition);
      svg {
        transition: var(--transition);
        filter: drop-shadow(0px 0px 6px var(--clr-s-1));
      }
    }
    hr {
      width: 0;
      height: 2rem;
      border-color: var(--clr-s-1);
      margin-bottom: 2rem;
    }
  }
  .scroll-bottom {
    button {
      font-size: 2rem;
      color: var(--clr-s-1);
      border: none;
      margin-bottom: 2rem;
    }
  }
  @media only screen and (min-width: 992px) {
    .me {
      margin: auto;
    }
    .scroll-bottom {
      display: none;
    }
    .social-links {
      display: none;
    }
  }
`;
export default Hero;
