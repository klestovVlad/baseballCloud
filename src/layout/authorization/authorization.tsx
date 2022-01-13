import { FC } from "react";
import styled from "styled-components";
import { Header, Footer, Modal } from "../../components/authorization";
import Image from "../../image/background.png";

export const Authorization: FC = () => (
  <Content>
    <Header />
    <Body>
      <Modal />
    </Body>
    <Footer />
  </Content>
);

const Body = styled.section`
  display: flex;
  flex-grow: 1;
  background-image: url(${Image});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
