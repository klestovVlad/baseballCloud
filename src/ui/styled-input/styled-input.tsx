import { FC } from "react";
import { FieldRenderProps } from "react-final-form";
import styled from "styled-components";

interface InputProps extends FieldRenderProps<string> {
  placeholder: string;
  icon?: JSX.Element;
}

export const StyledInput: FC<InputProps> = ({ input, placeholder, icon }) => {
  return (
    <Content>
      <IconContainer>{icon}</IconContainer>
      <InputField
        onChange={input.onChange}
        value={input.value}
        placeholder={placeholder}
      />
    </Content>
  );
};

const Content = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const InputField = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 4px;
  background-color: #eff1f3;
  padding: 6px 12px 10px 37px;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: #667784;
  border: 1px solid transparent;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate(0, -50%);
`;
