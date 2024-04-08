import styled from "styled-components";
import Nav from "./Nav";
import Landing from "./Landing";
import { FaXTwitter } from "react-icons/fa6";
import { SlGameController } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";
import { useContext, useState } from "react";
import Notify from "./Notify";
import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";
import { AppContext } from "../App";
import About from "./About";

const Video = styled.video`
  position: absolute;
  top: 0;
  top: 0;
  object-fit: cover;
  left: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
`;
const AppPageStyle = styled.div`
  width: 99.5vw;
`;
const NavStyle = styled.div`
  width: 99.5vw;
  position: fixed;
  background-color: transparent;
  top: 0;
  left: 0;
  z-index: 1;
  backdrop-filter: blur(8px);
`;
const LandingStyle = styled.div`
  width: 99.5vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(var(--darkoverlay) 50%, var(--background));
`;
const SocialBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: fixed;
  top: 55%;
  left: -3%;
  transform: rotate(90deg);
  @media (max-width: 900px) {
    top: 70%;
  }
  @media (max-width: 590px) {
    transform: translateX(-50%);
    top: 80%;
    left: 50%;
    position: absolute;
  }
`;
const Social = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 4rem;
    height: 4rem;
  }
`;
const iconstyle = {
  fontSize: "2rem",
  cursor: "pointer",
  color: "var(--secondarytext)",
};
const LandingCta = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 625px) {
    gap: 1rem;
    width: 30rem;
    justify-content: center;
  }
  @media (max-width: 600px) {
    top: 65%;
  }
`;
const Play = styled.span`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.8rem;
  background-clip: text;
  background: -webkit-linear-gradient(60deg, #ea56ef, #0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 1px solid var(--secondarytext);
  cursor: pointer;
  &:hover {
    background-clip: text;
    background: -webkit-linear-gradient(60deg, #0ff, #ea56ef);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 1px solid var(--primarytext);
  }
`;
const NofifyBox = styled.div`
  position: fixed;
  top: 15%;
  right: 5%;
  z-index: 10000;
  transition: all 0.4s;
  @media (max-width: 500px) {
    right: 32%;
  }
`;
const Token = styled.div`
  width: 99.5vw;
  background: var(--background);
`;
const AboutStyle = styled.div`
  width: 99.5vw;
  gap: 3rem;
  padding: 2rem 1rem 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--background);
  position: relative;
`;
const Logo = styled.img`
  width: 5rem;
`;
const Logos = styled.img`
  width: 80%;
  @media (max-width: 500px) {
    width: 90%;
  }
`;
const Road = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99.5vw;
  padding: 10vh 0 20vh 0;
  background: var(--background);
  @media (max-width: 500px) {
    padding: 10vh 0 5vh 0;
  }
`;
const MenuBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s;
  z-index: 100;
`;
const Design1 = styled.div`
  position: absolute;
  top: 15%;
  left: 18%;
`;
const Design2 = styled.div`
  position: absolute;
  top: 88%;
  right: 5%;
`;
const iconstyles = {
  fontSize: "3rem",
  cursor: "pointer",
  color: "#0ff",
};
const iconstyles2 = {
  fontSize: "3rem",
  cursor: "pointer",
  color: "#ea56ef",
};
const AboutUs = styled.span`
  font-size: 3.5rem;
  background-clip: text;
  background: -webkit-linear-gradient(60deg, #0ff, #ea56ef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-top: 20vh;
  text-transform: uppercase;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;
function AppPage() {
  const [notify, setNotify] = useState(false);
  function handleNotify() {
    setNotify(true);
    setTimeout(() => setNotify(false), 2100);
  }
  const { openMenu, tokenonicsId, roadmapId, aboutId } = useContext(AppContext);
  return (
    <AppPageStyle>
      <NavStyle>
        <Nav
          tokenonicsId={tokenonicsId}
          roadmapId={roadmapId}
          aboutId={aboutId}
        />
      </NavStyle>
      <MenuBox className={openMenu ? "activeMenu" : "inactiveMenu"}>
        <MenuBar
          tokenonicsId={tokenonicsId}
          roadmapId={roadmapId}
          aboutId={aboutId}
        />
      </MenuBox>
      <NofifyBox className={notify ? "visible" : "hide"}>
        <Notify first="true" notify={notify} />
      </NofifyBox>
      <LandingStyle>
        <Video
          src="/backvideo.mp4"
          playsInline
          type="video/mp4"
          autoplay="true"
          loop
          muted
        />
        <Landing />
        <SocialBox>
          <Social
            onClick={() =>
              window.open("https://twitter.com/spherelabs_sol", "blank")
            }
          >
            {" "}
            <FaXTwitter style={iconstyle} />
          </Social>
          <Social
            onClick={() => window.open("https://t.me/spherelabs_soll", "blank")}
          >
            <FaTelegramPlane style={iconstyle} />
          </Social>
          <Social onClick={() => window.open("https://github.com", "blank")}>
            <IoLogoGithub style={iconstyle} />
          </Social>
        </SocialBox>
        <LandingCta>
          <Play onClick={() => handleNotify()}>Play Game</Play>
          <Link to="airdrop" style={{ textDecoration: "none" }}>
            <Play>Join Airdrop &rarr;</Play>
          </Link>
        </LandingCta>
      </LandingStyle>
      <Token ref={tokenonicsId}>
        <Tokenomics />
      </Token>
      <Road ref={roadmapId}>
        <Roadmap />
        <Logos src="/roadmap.jpg" />
      </Road>
      <AboutStyle ref={aboutId}>
        <AboutUs>About Us</AboutUs>
        <Logo src="/image2.png" />
        <About />
        <Design1>
          <SlGameController style={iconstyles} />
        </Design1>
        <Design2>
          <SlGameController style={iconstyles2} />
        </Design2>
      </AboutStyle>
    </AppPageStyle>
  );
}
export default AppPage;
