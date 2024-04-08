import styled from "styled-components";
import Nav from "./Nav";
import { useContext, useState } from "react";
import Notify from "./Notify";
import MenuBar from "./MenuBar";
import { AppContext } from "../App";

const AirdropStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Airdropbox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: inherit;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(var(--darkoverlay) 50%, var(--background));
`;
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
const NavStyle = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
`;
const Inputbox = styled.div`
  display: flex;
  margin-top: 3rem;
  gap: 2rem;
  @media (max-width: 615px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  @media (max-width: 615px) {
  }
`;
const Submit = styled.span`
  background-clip: text;
  background: -webkit-linear-gradient(60deg, #ea56ef, #0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 1px solid var(--secondarytext);
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-clip: text;
    background: -webkit-linear-gradient(60deg, #0ff, #ea56ef);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 1px solid var(--primarytext);
  }
`;
const Input = styled.input`
  padding: 1rem 2rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  background-color: #393939e0;
  color: var(--secondarytext);
  box-shadow: 0 1.5rem 1rem 1rem 0 #0003;
  border: none;
  cursor: ${(props) => (props.allow ? "pointer" : "not-allowed")};
  &::placeholder {
    color: var(--tetiarytext);
    font-size: 2rem;
  }
`;
const Span = styled.span`
  background-clip: text;
  background: -webkit-linear-gradient(60deg, #ea56ef, #0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Textbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NofifyBox = styled.div`
  position: fixed;
  top: 12%;
  right: 5%;
  z-index: 10000;
  transition: all 0.4s;
  @media (max-width: 500px) {
    right: 22%;
  }
`;
const Landingtext = styled.h1`
  @media (max-width: 700px) {
    display: none;
  }
  font-size: ${(props) => (props.caps === "true" ? "5rem" : "3rem")};
  margin-top: ${(props) => (props.caps === "true" ? "0" : "5rem")};
  color: ${(props) =>
    props.caps === "true" ? "var(--primarytext)" : "var(--secondarytext)"};
  text-transform: ${(props) => (props.caps === "true" ? "capitalize" : "none")};
`;
const Landingtexts = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${(props) => (props.caps === "true" ? "5rem" : "3rem")};
    margin-top: ${(props) => (props.caps === "true" ? "0" : "5rem")};
    color: ${(props) =>
      props.caps === "true" ? "var(--primarytext)" : "var(--secondarytext)"};
    @media (max-width: 400px) {
      font-size: ${(props) => (props.caps === "true" ? "4.4rem" : "3rem")};
    }
  }
`;
const Landingtextss = styled.div`
  @media (max-width: 700px) {
    display: inline-block;
    font-size: 3rem;
    color: var(--primarytext);
    margin-top: 5rem;
  }
  @media (max-width: 615px) {
    display: inline-block;
    font-size: 2.5rem;
    color: var(--primarytext);
    margin-top: 5rem;
  }
  @media (max-width: 400px) {
    display: inline-block;
    font-size: 2rem;
    color: var(--primarytext);
    margin-top: 5rem;
  }
  display: none;
`;
const MenuBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s;
  z-index: 100;
`;
function Airdrop() {
  const [submitted, setSubmitted] = useState(false);
  const [twitter, setTwitter] = useState("");
  const [wallet, setWallet] = useState("");
  const [allow, setAllow] = useState(true);
  const { openMenu, tokenonicsId, roadmapId, aboutId } = useContext(AppContext);
  function handleSubmit(e) {
    console.log("working");
    e.preventDefault();
    if (!twitter || !wallet || twitter[0] !== "@" || wallet.length <= 37)
      return;
    setTwitter("");
    setWallet("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2100);
    setAllow(false);
  }
  return (
    <AirdropStyle>
      <NofifyBox className={submitted ? "visible" : "hide"}>
        <Notify second="true" submitted={submitted} />
      </NofifyBox>
      <NavStyle>
        <Nav />
      </NavStyle>
      <MenuBox className={openMenu ? "activeMenu" : "inactiveMenu"}>
        <MenuBar
          tokenonicsId={tokenonicsId}
          roadmapId={roadmapId}
          aboutId={aboutId}
        />
      </MenuBox>
      <Airdropbox>
        <Video
          src="/backvideo.mp4"
          playsInline
          type="video/mp4"
          autoplay="true"
          loop
          muted
        />
        <Textbox>
          <Landingtext caps="true">
            <Span>Welcome</Span> to <Span>Sphere</Span> airdrop
          </Landingtext>
          <Landingtexts caps="true">
            <Span>Welcome</Span>
            to sphere airdrop
          </Landingtexts>
          <Landingtext>To participate, submit the following</Landingtext>
          <Landingtextss>To participate, submit the following</Landingtextss>
        </Textbox>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Inputbox>
            <Input
              allow={allow}
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              type="text"
              placeholder="Twitter username"
              disabled={!allow}
            />
            <Input
              allow={allow}
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              type="text"
              placeholder="Solana address"
              disabled={!allow}
            />
          </Inputbox>
          <Submit onClick={(e) => handleSubmit(e)}>Submit details</Submit>
        </Form>
      </Airdropbox>
    </AirdropStyle>
  );
}

export default Airdrop;
