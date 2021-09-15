import React from 'react';
import ContainerInput from '../ContainerInput';

import { Container, TitleInfoLeft } from './styles';

interface TitleInfoProps {
  titleinfo: string;
  placeholder:string;
}

const Description: React.FC<TitleInfoProps> = ({ titleinfo,placeholder }) => {
  return (
    <Container>
      <TitleInfoLeft>
        <h4>{titleinfo}</h4>
      </TitleInfoLeft>
      <form>
        <ContainerInput placeholder={placeholder} />
      </form>
    </Container>
  );
};

export default Description;
