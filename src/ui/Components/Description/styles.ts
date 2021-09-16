import styled from 'styled-components';

export const Container = styled.div`
  margin: 32px 32px 0 32px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

`;

export const TitleInfoLeft = styled.div`
  width: 139px;
  height: 28px;

  h4{
    font-family: Roboto;
    font-size: 28px;
  }
`;

export const ContainerInput = styled.div`
  width: 282px;
  height: 40px;
  border-radius: 4px;
  padding-right: 15.51px;

  background: #fff;

  display: flex;
  align-items: center;

  input {
    flex: 1;

    border: 0;

    margin-left: 12px;
  }

  button {
    background: transparent;
    border: 0;
    svg {
      height: 24px;
    }
  }
`;

