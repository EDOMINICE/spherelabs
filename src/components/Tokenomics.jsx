import styled from "styled-components";

const TokenomicsStyle = styled.div`
  width: 99.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20vh 0;
  @media (max-width: 600px) {
    padding: 5vh 0;
  }
`;
const Src = styled.img`
  width: 60%;
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;
function Tokenomics() {
  return (
    <TokenomicsStyle>
      <Src src="/token.jpg" />
    </TokenomicsStyle>
  );
}

export default Tokenomics;
