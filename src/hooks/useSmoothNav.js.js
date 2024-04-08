import { useContext } from "react";
import { AppContext } from "../App";

export default function useSmoothNav(tokenonicsId, roadmapId, aboutId) {
  const { setOpenMenu } = useContext(AppContext);
  function handleClick(ele, close) {
    close && setOpenMenu(false);
    ele === "token" &&
      tokenonicsId.current.scrollIntoView({ behavior: "smooth" });
    ele === "roadmap" &&
      roadmapId.current.scrollIntoView({ behavior: "smooth" });
    ele === "about" && aboutId.current.scrollIntoView({ behavior: "smooth" });
  }
  return [handleClick];
}
