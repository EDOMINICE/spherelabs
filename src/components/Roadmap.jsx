import styled from "styled-components";

const RoadmapStyle = styled.div`
  width: 99.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vh;
`;
const Src = styled.img`
  width: 50%;
  @media (max-width: 600px) {
    width: 60%;
  }
  @media (max-width: 500px) {
    width: 70%;
  }
`;
function Roadmap() {
  return (
    <RoadmapStyle>
      <Src src="/Roadmaphead.jpg" />
    </RoadmapStyle>
  );
}

export default Roadmap;
