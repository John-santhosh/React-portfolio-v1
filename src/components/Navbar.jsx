import styled from "styled-components";
import { BiMessageRounded, BiMoveHorizontal } from "react-icons/bi";
import { navLinks } from "../data";
import { useState } from "react";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState(1);
  return (
    <Wrapper>
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

      <a>
        <BiMoveHorizontal />
      </a>
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
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  align-items: center;
  padding: 1.7rem 2rem;

  @media only screen and (max-width: 390px) {
    padding: 0;
    gap: 1rem;
  }
  a {
    display: flex;
    font-size: 1.2rem;
    color: var(--clr-s-1);
    padding: 1rem;
    transition: var(--transition);

    :hover {
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
