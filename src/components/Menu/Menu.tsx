import { BiBookHeart, BiHomeAlt, BiSearch, BiSolidUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { StyledMenu, StyledMenuItem, StyledWrapperMenu } from "./Menu.style";

export const Menu = () => {
    return (
        <StyledMenu>
            <StyledWrapperMenu>
                <StyledMenuItem>
                    <BiHomeAlt size="1.5rem" color="#38aede" />
                    <Link to="/">Inicio</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <BiSearch size="1.5rem" color="#38aede" />
                    <Link to="/busca">Busca</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <BiBookHeart size="1.5rem" color="#38aede" />
                    <Link to="/favoritos">Favoritos</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <BiSolidUserCircle size="1.5rem" color="#38aede" />
                    <Link to="/perfil">Perfil</Link>
                </StyledMenuItem>
            </StyledWrapperMenu>
        </StyledMenu>
    )
}