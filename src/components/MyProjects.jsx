import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { useState } from "react";
import { BiGitBranch } from "react-icons/bi";
import { RiExternalLinkFill } from "react-icons/ri";
import { CgRadioChecked } from "react-icons/cg";
const MyProjects = () => {
  const { products } = useGlobalContext();
  // console.log(products);

  return (
    <Wrapper id="portfolio">
      <div>
        <p>My Recent Works</p>
        <h2>Portfolio</h2>
      </div>
      {products.length === 0 ? (
        <p className="spinner spinner-center"></p>
      ) : (
        <article className="section-center">
          <div className="card-container">
            {products
              .filter((prod) => prod.portfolio)
              .map((project, ind) => {
                return <Project key={ind} {...project}></Project>;
              })}
          </div>
        </article>
      )}
    </Wrapper>
  );
};
function Images({ images, image, ind, setMainPic, mainPic, id }) {
  const activeImg = id === mainPic.id;
  return (
    <button
      className={activeImg ? "active-img" : null}
      onClick={() => setMainPic(images?.[ind])}
      key={ind}
    >
      <img src={image.url} alt="" />
    </button>
  );
}
function Project({ id, title, images, description, git, netlify, stack }) {
  const [mainPic, setMainPic] = useState(images?.[0]);

  // console.log(mainPic);
  return (
    <div className="card">
      <div className="img-container">
        <img src={mainPic.url} alt="" />
        <div className="sub-images">
          {images.map((image, ind) => {
            return (
              <Images
                key={ind}
                images={images}
                image={image}
                ind={ind}
                id={image.id}
                setMainPic={setMainPic}
                mainPic={mainPic}
              />
            );
          })}
        </div>
      </div>
      <div className="project-description">
        <h3 className="title">{title}</h3>
        <p>{description}</p>
        <p className="tech-stack">
          {stack.map((item, ind) => {
            return (
              <small key={ind}>
                <CgRadioChecked />
                {item}
              </small>
            );
          })}
        </p>
        <div className="links-container">
          <a href={git}>
            <button className="btn">
              code <BiGitBranch />
            </button>
          </a>
          <a href={netlify}>
            <button className="btn btn-solid">
              netlify <RiExternalLinkFill />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
const Wrapper = styled.section`
  min-height: 100vh;
  margin: 1rem 0;
  .spinner-center {
    margin-top: 2rem;
  }
  > div:first-of-type {
    text-align: center;
    margin: 1.5rem 0;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    /* background-color: aliceblue; */
    justify-content: center;
    @media only screen and (min-width: 1025px) {
      justify-content: space-between;
    }
  }
  .card {
    padding: 1rem;
    border-radius: 1rem;
    /* width: clamp(300px, 100%, 30%); */
    background-color: var(--clr-p-9);
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    @media only screen and (max-width: 992px) {
      grid-template-columns: unset;
    }
  }
  .img-container {
    display: grid;
    grid-template-columns: 10fr 1fr;
    gap: 2rem;
    @media only screen and (max-width: 768px) {
      grid-template-columns: unset;
      grid-template-rows: 4fr 1fr;
      .sub-images {
        grid-template-rows: unset;
        grid-template-columns: repeat(5, 1fr);
        gap: 0.5em;
      }
    }
    > img {
      min-height: auto;
      width: 100%;
      /* max-width: 400px; */
      /* max-height: 350px; */
      border-radius: 1rem;
      object-fit: cover;
    }
  }
  .sub-images {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    gap: 1rem;
    object-fit: cover;
    .active-img {
      filter: opacity(100%);
      border: 2px solid var(--clr-s-1);
    }
    button {
      /* width: 50px;
      height: ; */
      border: 2px solid transparent;
      transition: var(--transition);
      filter: opacity(50%);
      img {
        height: 100%;
      }
    }
  }
  .project-description {
    text-align: center;
    padding: 0 1.5rem;
    .title {
      margin: 1rem 0;
      text-transform: uppercase;
    }
    .tech-stack {
      margin: 2rem 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    small {
      font-size: 1rem;
      color: var(--clr-p-5);
      display: grid;
      grid-template-columns: 1fr 5fr;
      margin-right: 1rem;
      place-items: center;
    }
    .links-container {
      display: flex;
      justify-content: center;
      gap: 2rem;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-size: 1rem;
        letter-spacing: 2px;
        svg {
          font-size: 1.3rem;
        }
      }
    }
  }
`;

export default MyProjects;
