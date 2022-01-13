import { FC } from "react";
import styled from "styled-components";

export const Footer: FC = () => (
  <Container>
    <Caption>© 2018 BaseballCloud</Caption>
  </Container>
);

const Container = styled.footer`
  height: 40px;
  padding: 16px;
  background-color: var(--white);
  align-items: center;
  display: flex;
`;

const Caption = styled.span`
  color: #333;
  font-size: 14px;
`;
