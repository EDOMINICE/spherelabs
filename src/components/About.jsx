import styled from "styled-components";

const AboutStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Span = styled.span`
  color: var(--lighttext);
  font-size: 2rem;
  @media (max-width: 935px) {
    font-size: 1.8rem;
  }
  @media (max-width: 840px) {
    width: 85vw;
  }
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;
const Spans = styled.span`
  color: #8d8d8dcf;
  font-size: 1.8rem;
  margin-top: 2rem;
  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-top: 1rem;
  }
  @media (max-width: 550px) {
    font-size: 1.5rem;
    margin-top: 7rem;
  }
`;

function About() {
  return (
    <AboutStyle>
      <Span>
        Sphere is a multichain gaming platform on solana committed to
        transparency, fairness, and innovation.
      </Span>
      <Span>
        focused on empowering gamers by giving them control over their gaming
        experiences
      </Span>
      <Span>and the opportunity to truly own their digital assets.</Span>
      <Span>
        join us on this exciting journey as we redefine the future of gaming on
        Solana.
      </Span>
      <Spans> &copy;2024 SPHERE ALL RIGHT RESERVED</Spans>
    </AboutStyle>
  );
}

export default About;
