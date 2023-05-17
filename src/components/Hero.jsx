import styled from "styled-components";
import cv from "../assets/john-santhosh resume1.pdf";
import { FaChevronCircleDown } from "react-icons/fa";
import { social } from "../data";
const Hero = () => {
  const profileImg =
    "https://lh3.googleusercontent.com/m9Xvg1SUJ83d3svzZbxGefGOOebBqZ_Qw-mAs807KIQDbw2zUZwgwwFIBbkXwKcnjJZkWasVxqmaw5JRHg35Dx3L2RTHZNAzG4P7wZJOjLgVgzNuovuFIWcsUSLHdb8W5wVLOKiHNvtmehskyenNgCHYNWTQCmjlq_jOQo81vLon4sjynhhsRNj3PGBoWIL46LbbIREL3fALi3wSo0TUNsQpi45pMeULFKTv353xwHqHhXFqRKO-Jbrm5z6713Tgsp8Vv7vmc4fc91lWeQC-k9Hkj017-XhwNiJTVvZncoFquNMgNq7VT0ZownA1lJROT5lVuRYTCv7qFdrbDpE5CJsdnPPqh62_T0vZkFLhp8Ufv1jEODy7u4-szXNie5tSlECuYTDdTvT0kk65RUG6Z3c2sYxnTpIPoAsVmAmWm6DJBCRqp8M0rKzhTYqM4tWtyc9ZCEugBmAcBtFKcwlv2umphgOk9AxZT3rD40H_2DFvqiIinkJr9eJCrPKPGpRzKr7yF3UyTMOQu6BKsC2t68hM2lVW13YUwBZq-1Nzge7cocWKCTcgzaiElTMPfg7REzGU07-npBFW5HxAQC6rJBUPAMywu0SYegPwTG-3xNywo_r4OE0arPSy-VvEFw53g7ObytwWw2wdEdxwpTk0lhRxcggd1C2ktecT1MnbftQBg6s1IKUFaiOxRSXRoLShUl1E2xj_KhHpsDszq6qOf8Kd8J8w8N1JrhdLw0Z3SoaJfsSwRVomRILHBJ8j5_taSJI11oZ8h_9LEtfPOUR_-s8BQ5Vn7cDHrBwOtWk4jpFRRSArLQTeqv1jnQxn2w93S6_5yqk2Nq6pzSYT8-ZmHMedVrQgoKc8Tq2e1HyjJzFwYpb84xS44bQRQCg6GKmuGv3t0oS04GMUp0_36hh0N5IBSphEcuNj3tsJDu3xUg5KEfYjXg=w432-h577-s-no?authuser=0";
  return (
    <Wrapper>
      <div className="section-center">
        <div>
          <p>Hello, I'm</p>
          <h2>John santhosh</h2>
          <p>Front-end Developer</p>
          <div className="buttons">
            <a href={cv} download>
              <button className="download btn">DOWNLOAD CV</button>
            </a>
            {/* </button> */}
            <a href="#contact">
              <button className="btn-solid btn">Lets Talk</button>
            </a>
          </div>
        </div>
        <div className="hero">
          <div className="social-links">
            <div className="social-icons">
              {social.map((item) => {
                const { id, url, FaHome } = item;
                return (
                  <a href={url} key={id}>
                    <FaHome />
                  </a>
                );
              })}
              <hr />
            </div>
          </div>
          <div className=" me">
            <img src={profileImg} alt="its me" />
          </div>
          <div className="scroll-bottom">
            <button>
              <FaChevronCircleDown />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* height: 100vh; */
  text-align: center;
  /* background-color: orange; */
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    /* background-color: red; */
  }
  @media only screen and (min-width: 1450px) {
    > div {
      gap: 5rem;
      height: 100vh;
    }
    div.me {
      width: 22rem;
      height: 100%;
    }
  }
  @media only screen and (max-width: 390px) {
    > div {
      min-height: 100vh;
    }
  }
  p {
    font-weight: 500;
    color: var(--clr-p-3);
  }
  p:first-child {
    color: #fff;
    font-weight: 600;
    padding-top: 3rem;
  }
  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
  .buttons {
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
    button {
      text-transform: capitalize;
    }
    .download {
      text-transform: uppercase;
    }
  }

  .hero {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: flex-end;
  }

  .me {
    background-color: var(--clr-s-1);
    background: linear-gradient(0deg, var(--clr-s-5) 6%, var(--clr-s-1) 100%);
    border-radius: 12rem 12rem 0 0;
    width: 250px;
    overflow: hidden;
  }
  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
    /* transform: translateY(20px); */
    padding: 5rem 1.5rem 1.5rem;
  }

  .img-container {
  }

  .social-icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: var(--clr-s-1);
    font-size: 1.3rem;
    hr {
      width: 0;
      height: 5rem;
      border-color: var(--clr-s-1);
    }
  }
  .scroll-bottom {
    button {
      font-size: 2rem;
      color: var(--clr-s-1);
      border: none;
    }
  }
  @media only screen and (max-width: 600px) {
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
