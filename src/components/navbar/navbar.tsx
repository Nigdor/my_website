import React from "react";
import styled from "styled-components";

interface NavbarInterface {}

export const Navbar: React.FC<NavbarInterface> = props => {
  return (
    <NavbarWrapper>
      {folders.map((text, index) => (
        <NavbarElement key={index}>{text}</NavbarElement>
      ))}
    </NavbarWrapper>
  );
};
const folders: string[] = [
  "Accueil",
  "Mes projets",
  "Mes expériences",
  "Mes services",
  "Me contacter"
];
const NavbarWrapper = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
`;
const NavbarElement = styled.div`
  text-align: center;
`;
