import styled from "styled-components";
import { footerLinks, navLinks } from "../data";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper id="footer">
      <h2>JOHN</h2>
      <div className="section-center">
        <ol className="nav-links">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ol>
        <div className="social-links">
          {footerLinks.map((link) => {
            return (
              <a key={link.id} href={link.url}>
                <link.Icon></link.Icon>
              </a>
            );
          })}
        </div>
      </div>
      <small>
        &copy; John santhosh {new Date().getFullYear()} all rights reserved
      </small>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  text-align: center;
  background-color: var(--clr-s-1);
  margin-top: 3rem;
  h2 {
    color: var(--clr-p-11);
    font-size: 2rem;
    font-weight: 500;
    padding: 1.5rem 0;
  }
  ol {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.3rem;
    color: var(--clr-p-10);
    text-transform: capitalize;
    margin-bottom: 2rem;
  }
  .social-links {
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    gap: 2rem;
    > a {
      background-color: var(--clr-p-10);
      padding: 0.6rem;
      font-size: 1.3rem;
      display: flex;
      /* justify-content: center; */
      align-items: center;
      border: 2px solid var(--clr-p-10);
      transition: var(--transition);
      border-radius: 10%;
      :hover {
        background-color: transparent;
        border-radius: 50%;
        color: var(--clr-p-10);
        transform: scale(1.1);
      }
    }
  }
  small {
    color: var(--clr-p-10);
  }
  padding-bottom: 5rem;
`;
export default Footer;
