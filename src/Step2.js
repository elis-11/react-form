import Typography from "material-ui/styles/typography"
import { Form } from "./components/Form"
import { MainContainer } from "./components/MainContainer"

export const step2=()=>{
    return <MainContainer>
        <Typography component='h2' variant='h5'>
            Step 2
        </Typography>
        <Form>
            <Input
        </Form>
    </MainContainer>
}