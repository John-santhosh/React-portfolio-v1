import styled from "styled-components";
import { FaHome } from "react-icons/fa";
const Navbar = () => {
  return (
    <Wrapper>
      <FaHome />
      <FaHome />
      <FaHome />
      <FaHome />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 3rem;
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(350px, 90%, 450px);
  margin: auto;
  text-align: center;
  border-radius: 100px;
  background-color: #0000007a;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  visibility: hidden;
`;
export default Navbar;
