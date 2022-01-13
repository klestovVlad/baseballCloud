import { FC } from "react";
import styled from "styled-components";
import { AuthorizationForm } from "./authorization-form";

export const Modal: FC = () => (
  <Content>
    <Header>Welcome to BaseballCloud!</Header>
    <Caption>Sign into your account here:</Caption>
    <AuthorizationForm />
  </Content>
);

const Content = styled.div`
  background: hsla(0, 0%, 100%, 0.8);
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 0 20px rgb(0 0 0 / 40%);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  width: 100%;
  max-width: 450px;
`;

const Header = styled.h1`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  -webkit-text-align: center;
  text-align: center;
  color: #667784;
  margin-bottom: 8px;
`;

const Caption = styled.p`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  -webkit-text-align: center;
  text-align: center;
  color: #667784;
  font-size: 16px;
  margin-bottom: 40px;
`;
