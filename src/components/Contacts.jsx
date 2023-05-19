import styled from "styled-components";
import { RiMailStarLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contacts = () => {
  const [mailSent, setMailSent] = useState(true);
  const [message, setMessage] = useState(true);
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    // "YOUR_SERVICE_ID",
    // "YOUR_TEMPLATE_ID",
    // "YOUR_PUBLIC_KEY"
    setMailSent(false);

    emailjs
      .sendForm(
        "service_5pg3xqm",
        "template_v2ikjp5",
        form.current,
        "UYyklTY4JoFTNUi08"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setMailSent(true);
          setMessage(true);
        },
        (error) => {
          console.log(error.text);
          setMailSent(true);
          setMessage(false);
        }
      );
  };
  const [textCopied, setTextCopied] = useState(false);
  const copiedText = () => {
    setTextCopied(!textCopied);
    setTimeout(() => {
      setTextCopied((prev) => {
        return !prev;
      });
    }, 2000);
  };
  return (
    <Wrapper id="contact">
      <span>
        <p>Get In Touch</p>
        <h2>Contact Me</h2>
      </span>
      <div className="section-center">
        <div className="contacts">
          <div className="contact">
            <FiCopy
              title="Copy!"
              className="copy"
              onClick={() => {
                window.navigator.clipboard.writeText("johnsantosh2@gamil.com");
                copiedText();
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
          <form ref={form} onSubmit={handleSubmit}>
            <input
              placeholder="Full Name"
              required
              type="text"
              name="name"
              id=""
            />
            <input
              placeholder="email@email.com"
              type="email"
              name="email"
              id=""
            />
            <textarea
              placeholder="Message"
              name="message"
              id=""
              rows="8"
            ></textarea>
            {mailSent ? (
              <button className="btn btn-solid">Send Message </button>
            ) : (
              <button type="button" className="btn btn-solid">
                <div className="spinner"></div>
              </button>
            )}
          </form>

          <p className={mailSent ? "text-hide" : "active"}>
            {message
              ? "Mail received, I will get back to you Shortly"
              : "There was an error! Please try again after some time"}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr 6fr;
  @media only screen and (min-width: 800px) {
    grid-template-rows: 2fr 6fr;
  }
  > span {
    place-self: center;
  }
  .text-hide {
    opacity: 0;
  }
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
    /* text-align: left; */
  }
  > div {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 8rem;
    @media only screen and (max-width: 768px) {
      grid-template-columns: unset;
      gap: 4rem;
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
          font-size: 1rem;
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
