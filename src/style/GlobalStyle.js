import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --background: #252324;
    --menuBack: #252324;
    --primarytext: #FEFCFF;
    --secondarytext: #f2f2f2d4;
    --lighttext: #e7e7e7bb;
    --tetiarytext:#cccccc85;
    --gradient: linear-gradient(#ea56ef, #0ff);
    --overLay: #252324cc;
    --darkoverlay: #000000c8;
    --menuoverlay: #000000de;
}
html {
    font-size: 62.5%;
}

*,*:focus,*::before,*::after {
    outline: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body {
    font-family: "inter", sans-serif;
    line-height: 1.2;
}
::-webkit-scrollbar {
    width: 0.5vw;
}
::-webkit-scrollbar-thumb {
    background-color:  #ea56ef55;
    border-radius: 1rem;
}
::-webkit-scrollbar-thumb:hover { 
    background-color: #0ffa;
    border-radius: 1rem;
}
::-webkit-scrollbar-track {
    background-color: #252324;
}

.roll::before {
    content: "";
    bottom: 0;
    left: 0;
    width: 0;
    background-color: #ea56ef;
    height: 3px;
    position: absolute;
}
.visible {
    transform: translateX(0);
    @media (max-width:500px) {
        transform: translateY(0);
     }
}
.hide {
    transform: translateX(200%);
    @media (max-width:500px) {
        transform: translateY(-400%);
    }
}
.activeMenu {
        transform: translateX(0);
    }
    .inactiveMenu {
        transform: translateX(-100%);
    }
    .activeMenus {
        transform: translateX(0);
    }
    .inactiveMenus {
        transform: translateX(100%);
    }
`;
export default GlobalStyle;
