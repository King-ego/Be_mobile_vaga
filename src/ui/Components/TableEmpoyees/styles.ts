import styled from "styled-components";

export const Container = styled.div`
  margin: 31px 32px 0 32px;
`;

export const TableTitle = styled.div`
  width: 100%;
  height: 49px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #5984c0;

  > div {
    width: 20%;

    color: #fff;

    &:nth-child(1) {
      padding-left: 32px;
    }
  }
`;

export const TableBody = styled.div`
  width: 100%;
  height: 49px;

  background: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;

  > div {
    width: 20%;

    &:nth-child(1) {
      padding-left: 32px;
    }

    > img {
      width: 34px;
      height: initial;

      border-radius: 50%;
    }
  }
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const TableNFound = styled.div`
  width: 100%;
  height: 49px;

  background: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;
