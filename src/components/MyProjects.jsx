import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { useState } from "react";
const MyProjects = () => {
  const { products } = useGlobalContext();
  console.log(products);
  return (
    <Wrapper id="portfolio">
      <div>
        <p>My Recent Works</p>
        <h2>Portfolio</h2>
      </div>

      <article className="section-center">
        <div className="card-container">
          {products
            .filter((prod) => prod.portfolio)
            .map((project, ind) => {
              return <Project key={ind} {...project}></Project>;
            })}
        </div>
      </article>
    </Wrapper>
  );
};
function Images() {
  return (
    <button onClick={() => setMainPic(images?.[1])} key={ind}>
      <img src={image.url} alt="" />
    </button>
  );
}
function Project({ id, title, images, description, git, netlify, stack }) {
  const [mainPic, setMainPic] = useState(images?.[3]);

  // console.log(mainPic);
  return (
    <div className="card">
      <div className="img-container">
        <img src={mainPic.url} alt="" />
        <div className="sub-images">
          {images.map((image, ind) => {
            return (
              <button onClick={() => setMainPic(images?.[1])} key={ind}>
                <img src={image.url} alt="" />
                <Images images={images} image />
              </button>
            );
          })}
        </div>
      </div>
      <div className="project-description">
        <h3 className="title">{title}</h3>
        <p>{description}</p>
        <p>
          {stack.map((item, ind) => {
            return <small key={ind}>{item}</small>;
          })}
        </p>
        <a href={git}>
          <button className="btn">git</button>
        </a>
        <a href={netlify}>
          <button className="btn btn-solid">netlify</button>
        </a>
      </div>
    </div>
  );
}
const Wrapper = styled.section`
  min-height: 100vh;
  margin: 1rem 0;
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
    grid-template-rows: 4fr 1fr;
    gap: 2rem;
  }
  .sub-images {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    object-fit: cover;
    button {
      border: 2px solid transparent;
    }
    img {
      height: 100%;
    }
  }
  .project-description {
    small {
      margin-right: 1rem;
    }
  }
`;

export default MyProjects;
