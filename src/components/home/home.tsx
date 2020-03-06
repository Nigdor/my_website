import React from "react";
import styled from "styled-components";

interface HomeInterface {}

export const Home: React.FC<HomeInterface> = props => {
  return (
    <HomeWrapper>
      {folders.map((text, index) => (
        <HomeElement key={index}>{text}</HomeElement>
      ))}
    </HomeWrapper>
  );
};
const folders: string[] = [
  "Accueil",
  "Mes projets",
  "Mes expériences",
  "Mes services",
  "Me contacter"
];
const HomeWrapper = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
`;
const HomeElement = styled.div`
  text-align: center;
`;
