import logo from "../../images/icon0.png";
import { Button, Nav, ImageLogo, Div, I, Input } from "./NavbarStyle";

/* import '../Navbar/Navbar.css' */

export function Navbar() {
  return (
    <>
      <Nav>
        <Div className="input-search-space">
          <I className="bi bi-search"></I>
          <Input type="text" name="pesquisa" id="" placeholder="Pesquisa" />
        </Div>
        <ImageLogo src={logo} alt="Logo do Breaking News" srcset="" />
        <Button>Entrar</Button>
      </Nav>
    </>
  );
}

