import React from "react";

import { Container, FirstName, LastName } from "./styles";

interface HeaderProps {
  firstName: string;
  lastName: string;
}

const Header: React.FC<HeaderProps> = ({ firstName, lastName }) => {
  return (
    <Container>
      <FirstName>{firstName}</FirstName>
      <LastName>{lastName}</LastName>
    </Container>
  );
};

export default Header;
