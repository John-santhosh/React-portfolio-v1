import styled from "styled-components";
import { skills } from "../data";
const MySkills = () => {
  return (
    <Wrapper id="skills">
      <div className="section-center">
        <span>
          <small>What Skills I have</small>
          <h2>My Skills</h2>
        </span>
        <div className="section-container">
          {/* front-end skills */}
          <div className="tech-skills">
            <h3>Frontend Development</h3>
            <div className="skills">
              {skills.frontend.map((item) => {
                return <Skills key={item.id} {...item} />;
              })}
            </div>
          </div>
          {/* end  */}

          {/* backend skills  */}
          <div className="tech-skills">
            <h3>BackEnd Development</h3>
            <div className="skills">
              {skills.backend.map((item) => {
                return <Skills key={item.id} {...item} />;
              })}
            </div>
          </div>
          {/* end */}

          {/* other skills  */}
          <div className="tech-skills">
            <h3>Additional skills</h3>
            <div className="skills">
              {skills.others.map((item) => {
                return <Skills key={item.id} {...item} />;
              })}
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </Wrapper>
  );
};

function Skills({ id, skill, Icon, level }) {
  return (
    <div className="skill">
      <Icon />
      <div>
        <h4>{skill}</h4>
        <small>{level}</small>
      </div>
    </div>
  );
}

const Wrapper = styled.section`
  * {
    transition: var(--transition);
  }
  min-height: 100vh;
  > div {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-rows: 1fr 5fr;

    @media only screen and (max-width: 550px) {
      grid-template-rows: 1fr 6fr;
    }
    @media only screen and (min-width: 1350px) {
      grid-template-rows: 2fr 5fr;
      height: 100vh;
    }
  }
  .section-container {
    display: grid;
    place-self: start;
    /* gap: 2rem; */
    @media only screen and (min-width: 840px) {
      grid-template-columns: 1fr 1fr;
    }
    @media only screen and (min-width: 1300px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media only screen and (min-width: 550px) {
      > div:first-child {
        > div.skills {
          > div:last-child {
            grid-column: 1/3;
          }
        }
      }
    }
  }
  span {
    text-align: center;
    h2 {
      font-size: 1.8rem;
    }
  }

  .tech-skills {
    background-color: var(--clr-p-9);
    border: 2px solid var(--clr-p-10);
    border-radius: 0 0 2rem 2rem;
    /* padding: 1.5rem 3rem; */

    margin: 1rem;
    overflow: hidden;
    transform-origin: top;
    h3 {
      text-align: center;
      margin-bottom: 1rem;
      font-size: 1.3rem;
      letter-spacing: 1px;
      padding: 1.5rem 2rem 0.8rem;
      border-radius: 0 0 2rem 2rem;
      background: linear-gradient(
        var(--clr-p-9),
        var(--clr-p-9) 50%,
        var(--clr-s-1) 50%,
        var(--clr-s-1)
      );
      background-size: 100% 200%;

      /* background: linear-gradient(#252525, #252525 50%, #2ecc71 50%, #2ecc71); */
      /* background: linear-gradient(
        0deg,
        rgba(11, 47, 52, 1) 21%,
        rgba(78, 181, 195, 1) 80%
      ); */
      /* background-size: 0% 0%; */
    }
    :hover h3 {
      /* background-color: var(--clr-p-11); */
      background-position: 100% -100%;

      color: var(--clr-p-1);
    }
  }
  .skills {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.5rem 3rem;

    @media only screen and (min-width: 552px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .skill {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

export default MySkills;
