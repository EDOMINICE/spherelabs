import styled from "styled-components";

const LandingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99.5vw;
  @media (max-width: 600px) {
    margin-top: -15vh;
  }
`;
const Span = styled.span`
  background-clip: text;
  background: -webkit-linear-gradient(60deg, #ea56ef, #0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Landingtext = styled.h1`
  font-size: ${(props) => (props.caps === "true" ? "5rem" : "2.5rem")};
  color: ${(props) =>
    props.caps === "true" ? "var(--primarytext)" : "var(--secondarytext)"};
  text-transform: ${(props) => (props.caps === "true" ? "capitalize" : "none")};
  @media (max-width: 750px) {
    font-size: ${(props) => (props.caps === "true" ? "4rem" : "2rem")};
  }
  @media (max-width: 600px) {
    font-size: ${(props) => (props.caps === "true" ? "3.5rem" : "1.8rem")};
  }
  @media (max-width: 550px) {
    font-size: ${(props) => (props.caps === "true" ? "4rem" : "1.8rem")};
  }
  @media (max-width: 440px) {
    font-size: ${(props) => (props.caps === "true" ? "3.4rem" : "1.8rem")};
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 550px) {
    display: none;
  }
`;
const Boxs = styled.div`
  display: none;
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const LandingDes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => (props.caps === "true" ? "0" : "3rem")};
`;

function Landing() {
  return (
    <LandingStyle>
      <Box>
        <Landingtext caps="true">
          <Span>Sphere</Span> is a multichain <Span>gaming</Span>
        </Landingtext>
        <Landingtext caps="true">project on solana</Landingtext>
      </Box>
      <Boxs>
        <Landingtext caps="true">
          <Span>Sphere</Span> is a multichain
        </Landingtext>
        <Landingtext caps="true">
          <Span>gaming</Span> project
        </Landingtext>
        <Landingtext caps="true"> on solana</Landingtext>
      </Boxs>
      <LandingDes>
        <Landingtext>join us and let us guide you through the</Landingtext>
        <Landingtext>blockchain gaming world</Landingtext>
      </LandingDes>
    </LandingStyle>
  );
}

export default Landing;
