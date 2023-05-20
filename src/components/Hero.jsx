import styled from "styled-components";
import cv from "../assets/john-santhosh resume1.pdf";
import { FaChevronCircleDown } from "react-icons/fa";
import { social } from "../data";
const Hero = () => {
  const profileImg =
    "https://lh3.googleusercontent.com/fife/APg5EOZaBdBVpR-hOWk7OFilYU4EVX_AzkiWczj0SjFnwezgyICL8Stz69cYj66b7De76dgeYNVkSLiwI5SdGOqXx5sZnGofpUf5VdK9a3psa2KWsi4ik1lv7j10vCg9ZWPif9IHRWrhaOVEPCgYOkReqHR76Wn8jEGAJ8cPJVCkvxc7hhKTi7uiYLTqWyb4FK4sm8jiTL1ZDDkqwdvxQhIj5y1Tjj1etk-NftI0objtENNDcB7TUEBcNhgOTUW4p_OxhftQmybVeDZM750QsPVKW1weAa-i-qgrCdzyWD1CtYD5uCZCJdu4oeR-CJNrDMtvIarC--6sYmxb9pXTdRpzC8wVBdl6r-Sh6e2d66ITvaGd38LUc2w_uLS8hK9zvIx1BGkiOGIzlgxJZ0yUrNTXRvp4BmqMYzBLd3VbcROJTqno7hwtZOLIhFtxVm4eLnBBmyijyFNTuVlEgPr3iRHOPs4aWo0gbvbKBkgJx69W8MERRXfF60cNM5rmdQZRLROdZSiNlcrrCwTkrNda0qN7fzWNqLIvCZb0Z-qXYEYNi9vu18Mjxd5XVjoC8umbUioTjhnQAsYONOa4ZvqeHZu6U5WaQl6P4p2cveeQaCuPC2S3bgw5FCWMhOpMXQa1cH1mI6gxuk5UyM1NPVlzqp5fvETAo3uq1cHDn0AvBKfuxPuWyGz9LHimCfK-6K2ca6uhZ0ouP02HxUPs3BLJ4klJqxpciJVLdnn7sOKJPM7jWLL_t5hYo7nqfRtKkQb_j0Q5yV848oMOREHDqLDh5vHr51WgT9yNoR1QtLnbDm8RLRJlNpQOSCe8XLxw-0_gS7ZqGf1LjbGriy0s_ks3IPvuc4pM_cKwoeSHLdeVbcHVRBip-3X4U-gC8uK180UMi8nafVtNS1CAOlj5UhOMtiYILTPc2lkLva4XoDYJmsTVvEcGqodejb4SMaKyVr4DxANSDaxLJfVkcVda1lWP_sY94gv4mHGS1h84gVgpNsj5UieLMPWWAUfUJLSaM-3qeKg6b46bR9_ydLyJy8_6buXgDHt_qycGGlfV-cWGdW1x_1RL74qrBxc4KTdzYsBm5sIK_RJckMvO8F4nAfR-7QTdDK4Cnsy6FyIAyYwBKXY2CLXzebL3_fQqQSc1lIt2jOHjQim1kKx5Z20woqdL3Gj5X2hXu-UU_iT6-A5L7e_7pXC8df-2feRVkcsnAoZd9xv26V_31WqI7OGqMg27WnBiCszxOCVaLTCGbFlB835cHg0c-7lKTgStTsSssLOq9Tic9Wc4ud1YV4s2npOEJ7CUMVabX3uSXMgYB5kklA31j8VPl1l7PvlDAKWAheDc3fe1mjJLLI5MBcExtnKIgYQok2mfZkg2577cmqVKAHrNUo2E-MAgA3Xe3lJUTltkSBjQw-UKtfvyW8RsYFH_DwpxSfQpkK9H4kPYuilT5QJZ6toVPTq-zb4_0UDooXy6RP4sgnnMw9HomF1xCfPCCn4psMSt4MGAdSAb3d9rZlcZtups-eVw9QAtsPLqLLoCDGEN8qZ4lpyNfhl_Y33Up5l8SJicM5N6OzkCBxNwQlp3uLNEAhOBNF0CeGS4cN8HAp_jLWAgQVG9AvEmOFAZ6j9PqD1e7qMGaWdwdIozbx81zyvBa2LUF8mP7PLpL-8ca4vdYvqcCN5I0tWRuC6HhyLHZ-uiCKRIFyUFiKwBgx9YhvgQfj_QTdvs8vjTJgV2WqfWr-4tssSaXXvA1NRsoXi0QuRj-sRW8agsGxrcXiQP01ZUDzyG_2sPjzxsjOP1SF4NPK760MKqZ6ohYYFWGBSwZdR7EvRWYfb2jNzn-HWLjQJJ3X-v1bk19BMrwh1osdV8ZC-c5GXOGkHii4uuG9zJp5bdxaND3Fp-f00Zi7nHloibNuyWcDgx1q6P9-d717xC5GjaI19pyA-nyEYiTNcl9CiOODw8ZAdtfE-mZku2Xf9Nd_JXta-rk4-V=s577-w432-h577-s-no?authuser=0";
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
                const { id, url, Icon } = item;
                return (
                  <a target="_blank" href={url} key={id} rel="noreferrer">
                    <Icon />
                  </a>
                );
              })}
              <hr />
            </div>
          </div>
          <div className="me">
            <img src={profileImg} alt="its me" />
          </div>
          <div className="scroll-bottom">
            <a href="#footer">
              <button>
                <FaChevronCircleDown />
              </button>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  h2 {
    color: var(--clr-p-1);
  }
  > div {
    display: grid;
  }
  @media only screen and (min-width: 1450px) {
    > div {
      gap: 5rem;
      grid-template-rows: 1fr 1fr;
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
    /* background-color: red; */
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
    > a:hover {
      transition: var(--transition);
      svg {
        transition: var(--transition);
        filter: drop-shadow(0px 0px 15px var(--clr-p-2));
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
