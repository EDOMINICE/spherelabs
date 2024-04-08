import styled from "styled-components";
import { SlMenu } from "react-icons/sl";
import { Link } from "react-router-dom";
import useSmoothNav from "../hooks/useSmoothNav.js";
import { useContext } from "react";
import { AppContext } from "../App.jsx";

const NavCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2.5vh 1vw;
  background: transparent;
`;
const NavName = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  background-clip: text;
  background: -webkit-linear-gradient(60deg, #0ff, #ea56ef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 600px) {
    display: none;
  }
`;
const NavLogo = styled.img`
  width: 6rem;
`;
const Lists = styled.li`
  font-size: 1.8rem;
  list-style: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: bold;
  background-clip: text;
  background: -webkit-linear-gradient(60deg, #0ff, #ea56ef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover {
    background-clip: text;
    background: -webkit-linear-gradient(60deg, #ea56ef, #0ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const MenuBox = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: inline-block;
    padding-right: 2rem;
  }
`;
const iconstyle = {
  fontSize: "2.7rem",
  cursor: "pointer",
  color: " var(--secondarytext)",
  transition: "all 0.3s",
};
export default function Nav({ tokenonicsId, roadmapId, aboutId }) {
  const [handleClick] = useSmoothNav(tokenonicsId, roadmapId, aboutId);
  const { setOpenMenu } = useContext(AppContext);
  return (
    <NavCon>
      <Link to="/" style={{ textDecoration: "none" }}>
        <NameBox>
          <NavLogo src="/image2.png" />
          <NavName>SPHERE</NavName>
        </NameBox>
      </Link>
      <NavList>
        <Lists onClick={() => handleClick("token")}>Tokenomics</Lists>
        <Lists onClick={() => handleClick("roadmap")}>Roadmap</Lists>
        <Lists onClick={() => handleClick("about")}>About</Lists>
      </NavList>
      <MenuBox>
        <SlMenu onClick={() => setOpenMenu((el) => !el)} style={iconstyle} />
      </MenuBox>
    </NavCon>
  );
}
