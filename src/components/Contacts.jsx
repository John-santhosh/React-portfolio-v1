import styled from "styled-components";
import { FiCopy } from "react-icons/fi";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { contacts } from "../data";
const Contacts = () => {
  const [mailSent, setMailSent] = useState(true);
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
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
          toast.success("Mail Sent successfully");
        },
        (error) => {
          console.log(error.text);
          setMailSent(true);
          toast.error("please try after some time!");
        }
      );
  };

  return (
    <Wrapper id="contact">
      <span>
        <p>Get In Touch</p>
        <h2>Contact Me</h2>
      </span>
      <div className="section-center">
        <div className="contacts">
          {contacts.map((contact) => {
            return <Contact key={contact.id} {...contact} />;
          })}
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
        </div>
      </div>
    </Wrapper>
  );
};

function Contact({ id, Icon, text, connect, connectId, url }) {
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
    <div key={id} className="contact">
      <FiCopy
        title="Copy!"
        className="copy"
        onClick={() => {
          window.navigator.clipboard.writeText(connectId);
          copiedText();
        }}
      />
      <small className={textCopied ? "hide active" : "hide"}>Copied!</small>
      <Icon />
      <p>{connect}</p>
      <span>{connectId}</span>
      <a href={url} target="_blank" rel="noreferrer">
        {text}
      </a>
    </div>
  );
}

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
  .hide {
    transition: var(--transition);
    position: absolute;
    top: 1rem;
    left: 2.5rem;
    opacity: 0;
    z-index: -1;
  }

  .active {
    opacity: 1;
    z-index: 20;
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
        /* margin: 1rem 0; */
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
        /* color: #fff; */
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
