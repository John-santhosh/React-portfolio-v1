import styled from "styled-components";
import { useGlobalContext } from "../Context";
const MyProjects = () => {
  const { products } = useGlobalContext();
  // console.log(products);

  return (
    <Wrapper id="portfolio">
      <div>
        <p>My Recent Works</p>
        <h2>Portfolio</h2>
      </div>

      <article className="section-center">
        <div className="card-container">
          {products.map((a, ind) => {
            console.log(a);
            return (
              <div key={ind} className="card">
                <img
                  src="https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <h3>title</h3>
                <p>details</p>
                <a href="">
                  <button className="btn">1</button>
                </a>
                <a href="#">
                  <button className="btn btn-solid">1</button>
                </a>
              </div>
            );
          })}
        </div>
      </article>
    </Wrapper>
  );
};

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
    width: clamp(300px, 100%, 30%);
    background-color: var(--clr-p-9);
  }
`;

export default MyProjects;
