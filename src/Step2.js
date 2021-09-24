import { Typography } from "material-ui/core";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { MainContainer } from "./components/MainContainer";
import { PrimaryButton } from "./components/PrimaryButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
});

export const step2 = () => {
  const history = useHistory();
  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push("/step3");
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 2
      </Typography>
      <Form>
        <Input
          id="email"
          type="email"
          label="Email"
          name="email"
          required
          error={!!errors.email}
          helperText={!!errors?.email?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
