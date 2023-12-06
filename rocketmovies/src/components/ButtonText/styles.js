
import  styled  from "styled-components";

export const Container = styled.button`
 background: none;
font-size: 16px;
color: ${({ theme, $isActive}) => $isActive ? theme.COLORS.PINK : theme.COLORS.GRAY_100};
border: none;
`