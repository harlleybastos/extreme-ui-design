import {
  BoxOne,
  BoxThree,
  BoxTwo,
  ContainerBoxThree,
  ContainerLogo,
  ContainerMenu,
  GlobalStyled,
  ItemMenu,
  ListMenu,
  Logo,
  MainContainer,
  TextBoxTwo,
} from "./styles";
import logo from "./assets/images/logo.png"; // with import

function App() {
  return (
    <>
      <GlobalStyled />
      <MainContainer>
        <BoxOne></BoxOne>
        <BoxTwo>
          <TextBoxTwo>
            EXTREME
            <br />
            UI DESIGN
          </TextBoxTwo>
        </BoxTwo>
        <BoxThree>
          <ContainerBoxThree>
            <ContainerLogo>
              <Logo src={logo} />
            </ContainerLogo>

            <ContainerMenu>
              <ListMenu>
                <ItemMenu>HOME</ItemMenu>
                <ItemMenu>SERVICES</ItemMenu>
                <ItemMenu>ABOUT</ItemMenu>
                <ItemMenu>CONTACT</ItemMenu>
                <ItemMenu>HELP</ItemMenu>
              </ListMenu>
            </ContainerMenu>
          </ContainerBoxThree>
        </BoxThree>
      </MainContainer>
    </>
  );
}

export default App;
