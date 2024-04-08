import styled from "styled-components";
import { MdCancel } from "react-icons/md";

const Tests = styled.div`
  font-size: 1.6rem;
  position: relative;
  padding: 1.5rem 2rem;
  cursor: pointer;
  background-clip: text;
  background: -webkit-linear-gradient(60deg, #ea56ef, #0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-top: 1px solid var(--secondarytext);
  z-index: 10000;
  width: fit-content;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #0ff;
    height: 3px;
    transition: all 2s ease-in;
  }
`;
const iconstyle = {
  fontSize: "2rem",
  cursor: "pointer",
  color: "#ea56ef",
};
export default function Notify({ notify, submitted, first, second }) {
  return (
    <>
      {first === "true" && (
        <Tests className={notify && "roll"}>
          <MdCancel style={iconstyle} />
          Coming soon
        </Tests>
      )}
      {second === "true" && (
        <Tests className={submitted && "roll"}>
          <MdCancel style={iconstyle} />
          Submitted Succefully
        </Tests>
      )}
    </>
  );
}
