import Typography from "material-ui/styles/typography";
import React from "react";
import { MainContainer } from "./components/MainContainer";
import { Input } from "@material-ui/core";
import { Form } from "./components/Form";
import { PrimaryButton } from "./components/PrimaryButton";

export const Step1 = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        {/* {" "} */}
        Step 1
      </Typography>
      <Form>
          <Input
            ref={register}
            id="firstName"
            type="text"
            label="First Name"
            name="firstName"
            />
        <Input
          ref={register}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
