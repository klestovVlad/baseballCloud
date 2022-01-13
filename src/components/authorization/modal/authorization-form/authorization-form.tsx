import { FC } from "react";
import { Field, Form as FinalForm } from "react-final-form";
import styled from "styled-components";
import { StyledInput } from "../../../../ui/styled-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import { useSignInQuery, useValidateTokenMutation } from "../../../../store";

export const AuthorizationForm: FC = () => {
  const { data: userData, isLoading } = useSignInQuery({
    email: "test@example.com",
    password: "12345678",
  });
  console.log(userData);

  const [validateToken, { isError }] = useValidateTokenMutation({});

  const userIcon = <FontAwesomeIcon color="#667784" icon={faUser} />;
  const passwordIcon = <FontAwesomeIcon color="#667784" icon={faLock} />;
  const onSubmit = async () => {
    await validateToken("");
  };
  return (
    <FinalForm
      onSubmit={onSubmit}
      render={({ handleSubmit }) => {
        return (
          <FormWrapper onSubmit={handleSubmit}>
            <Field name="login" component={StyledInput} icon={userIcon} />
            <Field
              name="password"
              component={StyledInput}
              icon={passwordIcon}
            />
            <StyledButton>Sign In</StyledButton>
          </FormWrapper>
        );
      }}
    />
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledButton = styled.button`
  color: #ffffff;
  font-weight: 400;
  border: solid 1px transparent;
  box-shadow: 0 0 4px 0 rgb(72 187 255 / 0%);
  background-color: #48bbff;
  padding-top: 15px;
  padding-bottom: 17px;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 4px;
`;
