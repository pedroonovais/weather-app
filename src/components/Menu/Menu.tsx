import { BiHomeAlt } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiBookHeart } from "react-icons/bi";
import { BiSolidUserCircle } from "react-icons/bi";
import { StyledMenu, StyledMenuItem, StyledWrapperMenu } from "./Menu.style";

export const Menu = () => {
    return(
        <StyledMenu>
            <StyledWrapperMenu>
                <StyledMenuItem>
                    <BiHomeAlt size="1.5rem" color="#38aede"/>
                    <a href="#">Inicio</a>
                </StyledMenuItem>
                <StyledMenuItem>
                    <BiSearch size="1.5rem" color="#38aede"/>
                    <a href="#">Busca</a>
                </StyledMenuItem>
                <StyledMenuItem>
                    <BiBookHeart size="1.5rem" color="#38aede"/>
                    <a href="#">Favoritos</a>
                </StyledMenuItem>
                <StyledMenuItem>
                    <BiSolidUserCircle size="1.5rem" color="#38aede"/>
                    <a href="#">Perfil</a>
                </StyledMenuItem>
            </StyledWrapperMenu>
        </StyledMenu>
    )
}