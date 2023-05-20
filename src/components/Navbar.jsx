import styled from "styled-components";
import { BiMoveHorizontal } from "react-icons/bi";
import { HiArrowSmUp } from "react-icons/hi";
import { navLinks } from "../data";
import { useState } from "react";
import { useGlobalContext } from "../Context";

const Navbar = () => {
  const { verticalNav, setVerticalNav } = useGlobalContext();
  const [activeLink, setActiveLink] = useState(1);

  return (
    <Wrapper className={verticalNav ? "vertical-nav" : null}>
      {navLinks.map((link) => {
        const { Icon, id, url } = link;
        const activeId = id === activeLink;
        return (
          <a
            className={activeId ? "active" : null}
            onClick={() => setActiveLink(id)}
            key={id}
            href={url}
          >
            <Icon />
          </a>
        );
      })}

      <button
        onClick={() => setVerticalNav(!verticalNav)}
        className="btn btn-clear"
      >
        {verticalNav ? <HiArrowSmUp></HiArrowSmUp> : <BiMoveHorizontal />}
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  z-index: 999;
  height: 3rem;
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  margin: auto;
  text-align: center;
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.694);
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  align-items: center;
  padding: 1.7rem 2rem;
  transition: all 1s;
  @media only screen and (max-width: 767px) {
    .btn-clear {
      display: none;
    }
  }
  button {
    font-size: 1.3rem;
    display: flex;
    color: var(--clr-p-9);
    padding: 1rem;
    transition: var(--transition);
  }
  @media only screen and (max-width: 390px) {
    padding: 0;
    gap: 1rem;
  }
  a {
    display: flex;
    font-size: 1.2rem;
    color: var(--clr-p-9);
    padding: 1rem;
    transition: var(--transition);

    :hover,
    button.btn:hover {
      color: var(--clr-p-4);
      background-color: rgba(0, 0, 0, 0.742);
      border-radius: 50%;
    }
    :active {
      color: var(--clr-p-2);
    }
  }

  a.active {
    background-color: rgba(54, 54, 54, 0.742);
    border-radius: 50%;
    color: var(--clr-p-2);
  }
`;
export default Navbar;
