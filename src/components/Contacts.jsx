import styled from "styled-components";
import { RiMailStarLine } from "react-icons/ri";
const Contacts = () => {
  return (
    <Wrapper id="contact">
      <p>Get In Touch</p>
      <h2>Contact Me</h2>
      <div className="section-center">
        <div className="contacts">
          <div className="contact">
            <RiMailStarLine />
            <p>email</p>
            <span>john@leaning.con</span>
            <small>Send a message</small>
          </div>
          <div className="contact">
            <RiMailStarLine />
            <p>email</p>
            <span>john@leaning.con</span>
            <small>Send a message</small>
          </div>
          <div className="contact">
            <RiMailStarLine />
            <p>email</p>
            <span>john@leaning.con</span>
            <small>Send a message</small>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" name="" id="" />
            <input type="email" name="" id="" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className="btn">1 </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  height: 100vh;
  p {
    text-transform: capitalize;
  }
  .contact {
    background-color: var(--clr-p-10);
  }
  > div {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
  }
  .contact-form {
    form {
      display: grid;
      /* flex-direction: column; */
      grid-template-rows: repeat(4, 100px);
      gap: 1rem;
      /* background-color: ; */
    }
  }
`;
export default Contacts;
