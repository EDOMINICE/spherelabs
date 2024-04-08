import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { useContext } from "react";
import { AppContext } from "../App";
import useSmoothNav from "../hooks/useSmoothNav.js.js";

const MenuBarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--menuoverlay);
  gap: 5rem;
  width: 100vw;
  height: 100vh;
  padding-top: 30vh;
  position: relative;
  backdrop-filter: blur(3px);
`;
const List = styled.span`
  font-size: 2rem;
  background-clip: text;
  background: -webkit-linear-gradient(120deg, #0ff, #ea56ef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  &:hover {
    background-clip: text;
    background: -webkit-linear-gradient(120deg, #ea56ef, #0ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const iconstyle = {
  fontSize: "2.7rem",
  cursor: "pointer",
  color: "#ea56ef",
  transition: "all 0.3s",
  position: "absolute",
  top: "10%",
  right: "15%",
};
export default function MenuBar({ tokenonicsId, roadmapId, aboutId }) {
  const { setOpenMenu } = useContext(AppContext);
  const [handleClick] = useSmoothNav(tokenonicsId, roadmapId, aboutId);
  return (
    <MenuBarBox>
      <RxCross1 style={iconstyle} onClick={() => setOpenMenu(false)} />
      <List onClick={() => handleClick("token", "close")}>tokenonics</List>
      <List onClick={() => handleClick("roadmap", "close")}>roadmap</List>
      <List onClick={() => handleClick("about", "close")}>about</List>
    </MenuBarBox>
  );
}
