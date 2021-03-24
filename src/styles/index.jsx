import styled, { createGlobalStyle } from "styled-components";
import imgOne from "../assets/images/1.png";
import imgTwo from "../assets/images/2.png";
export const GlobalStyled = createGlobalStyle`
  @keyframes anim{
      from{
          bottom: -100%;
      }
      to{
          bottom:0%;
      }
  }

  @keyframes anim2{
      from {
          left:30%;
          width:530px;
      }
      to{
          width:0px;
          left:50%;
      }
  }
  @keyframes anim3{
      from{
          left:-100%;
      }
      to{
          left:0%;
      }
  }

  @keyframes anim4{
      from{
          top:-100%;
      }
      to{
          top:0%;
      }
  }
  body{
        margin: 0;
        background:#1e242a;
    }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
`;

export const BoxOne = styled.div`
  width: 530px;
  height: 625px;
  background-image: url(${imgOne});
  position: absolute;
  bottom: -100%;
  left: 30%;
  animation: anim 2s forwards, anim2 3s forwards 3s;
  &:after {
    content: "";
    position: absolute;
    width: 530px;
    height: 625px;
    background-image: url(${imgTwo});
    left: 0px;
    z-index: -1;
  }
`;

export const BoxTwo = styled.div`
  width: auto;
  height: auto;
  font-family: "Bahnschrift Condensed";
  color: #fff;
  font-size: 10em;
  font-weight: 500;
  line-height: 130px;
  position: absolute;
  top: 250px;
  left: 100px;
  overflow: hidden;
`;

export const TextBoxTwo = styled.div`
  position: relative;
  left: -100%;
  animation: anim3 2s forwards 2s;
`;

export const BoxThree = styled.div`
  overflow: hidden;
`;

export const ContainerBoxThree = styled.div`
  width: 100%;
  position: absolute;
  top: -100%;
  animation: anim4 2s forwards 2.5s;
`;

export const ContainerLogo = styled.div`
  float: left;
  margin-left: 100px;
  margin-top: 20px;
`;

export const Logo = styled.img`
  width: 50px;
`;

export const ContainerMenu = styled.div`
  font-family: "Bahnschrift Condensed";
  font-size: 14px;
  color: #fff;
  letter-spacing: 2px;
  margin-right: 150px;
  margin-top: 20px;
  float: right;
`;

export const ListMenu = styled.ul`
  list-style: none;
`;

export const ItemMenu = styled.li`
  display: inline-block;
  margin-left: 100px;
`;
