import Typography from "material-ui/styles/typography";
import { useForm } from "react-hook-form";
import { MainContainer } from "./components/MainContainer";
import { Input } from "./components/Input";
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
      // eslint-disable-next-line no-undef
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
          error={!!errors.firstName}
        />
        <Input
          ref={register}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
          error={!!errors.lastName}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
