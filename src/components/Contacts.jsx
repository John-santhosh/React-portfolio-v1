import styled from "styled-components";
import { RiMailStarLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";
const Contacts = () => {
  const [textCopied, setTextCopied] = useState(false);
  const copiedText = () => {
    setTextCopied(true);
    setTimeout(() => {
      setTextCopied(false);
    }, 2000);
  };
  return (
    <Wrapper id="contact">
      <p>Get In Touch</p>
      <h2>Contact Me</h2>
      <div className="section-center">
        <div className="contacts">
          <div className="contact">
            <FiCopy
              className="copy"
              onClick={() => {
                window.navigator.clipboard.writeText("johnsantosh2@gamil.com");
                setTextCopied(!textCopied);
              }}
            />
            <small className={textCopied ? "hidden active" : "hidden"}>
              Copied!
            </small>
            <RiMailStarLine />
            <p>email</p>
            <span>johnsantosh2@gamil.com</span>

            <a href="mailto:johnsantosh2@gamil.com">Send a message</a>
          </div>
          <div className="contact">
            <FiCopy className="copy" />
            <RiMailStarLine />
            <p>email</p>
            <span>john@leaning.con</span>
            <a href="mailto:johnsantosh2@gamil.com">Send a message</a>
          </div>
          <div className="contact">
            <FiCopy className="copy" />
            <FaWhatsapp />
            <p>Whatsapp</p>
            <span>7550188335</span>
            <a href="https://Wa.me/7550188335" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <input placeholder="something" type="text" name="" id="" />
            <input placeholder="something" type="email" name="" id="" />
            <textarea placeholder="something" name="" id="" rows="8"></textarea>
            <button className="btn btn-solid">Send Message </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  min-height: 100vh;

  .hidden {
    transition: var(--transition);
    position: absolute;
    top: 1rem;
    left: 2.5rem;
    opacity: 0;
  }

  .active {
    opacity: 1;
  }
  p {
    text-transform: capitalize;
  }
  > div {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 8rem;
    @media only screen and (max-width: 768px) {
      grid-template-columns: unset;
    }
    @media only screen and (max-width: 425px) {
      justify-items: center;
    }
  }
  .contacts {
    display: grid;
    gap: 2rem;

    .contact {
      background-color: var(--clr-p-10);
      display: grid;
      place-items: center;
      border-radius: 1rem;
      padding: 1rem;
      position: relative;

      svg {
        font-size: 1.3rem;
        margin: 1rem 0;
      }
      .copy {
        position: absolute;
        top: 1rem;
        left: 1rem;
        font-size: 1rem;
        margin: 0;
        cursor: pointer;
      }
      p {
        color: #fff;
      }
      span {
        color: var(--clr-p-1);
      }
      a {
        color: var(--clr-s-3);
        margin-top: 1rem;
        text-decoration: underline;
      }
    }
  }

  .contact-form {
    form {
      display: grid;
      /* flex-direction: column; */
      /* grid-template-rows: repeat(4, 50px); */
      justify-items: start;
      > *:not(button) {
        padding: 1rem;
        font-size: 1.1rem;
        font-weight: 300;
        outline: none;
        border-radius: 10px;
        border: 2px solid var(--clr-s-1);
        background-color: transparent;
        color: var(--clr-p-2);
        width: 100%;
        ::placeholder {
          color: var(--clr-p-2);
          font-weight: 300;
        }
      }
      gap: 1rem;
      input {
        height: 60px;
      }
      /* background-color: ; */
    }
  }
`;
export default Contacts;
