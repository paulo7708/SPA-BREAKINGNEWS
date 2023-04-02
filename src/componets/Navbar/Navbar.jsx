import { Fragment } from "react";
import logo from "../../images/icon0.png";
import '../Navbar/Navbar.css'

export function Navbar() {
  return (
    <>
      <nav>
        <div className="input-search-space">
          <i className="bi bi-search"></i>
          <input type="text" name="pesquisa" id="" placeholder="Pesquisa" />
        </div>
        <img src={logo} alt="Logo do Breaking News" srcset="" />
        <button>Entrar</button>
      </nav>
    </>
  );
}
