import  { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";

export const Input = forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      innerRef={ref}
      fullwidth
      {...props}
    />
  );
});
