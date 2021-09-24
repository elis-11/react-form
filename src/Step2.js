import Typography from "material-ui/styles/typography";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { MainContainer } from "./components/MainContainer";
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router";


export const step2 = () => {
  const history = useHistory();
  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onBlur",
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
        <Input id="email" type="email" label="Email" name="email" required />
      </Form>
    </MainContainer>
  );
};
