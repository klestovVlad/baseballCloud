import { FC } from "react";
import styled from "styled-components";
import { BaseballCloudLogo } from "../../../ui/icons";

export const Header: FC = () => {
  return (
    <Container>
      <BaseballCloudLogo />
    </Container>
  );
};

const Container = styled.header`
  height: 45px;
  background-color: var(--white);
  display: flex;
  align-items: center;
  padding: 8px;
`;
