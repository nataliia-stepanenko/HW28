import { useForm, Controller } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';

const LoginForm = () => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);
      };

      return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Container sx={{flexDirection: "column"}}>
            <Controller 
                control={control}
                fullWidth
                name="User name"
                rules={{ required: "The field is required" }}
                render={({ field, fieldState: { error } }) => (
                    <TextField  
                        {...field} 
                        label="User name" 
                        variant="outlined" 
                        error={!!error}
                        helperText={error?.message}
                    />
                )} 
            />
            <Controller 
                control={control}
                fullWidth
                name="Password"
                rules={{ required: "The field is required" }}
                render={({ field, fieldState: { error } }) => (
                    <TextField  
                        {...field} 
                        label="Password" 
                        variant="outlined" 
                        error={!!error}
                        helperText={error?.message}
                        type="password"
                    />
                )} 
            />
            <Button sx={{width: '100%'}} variant="contained" type="submit">Login</Button>
            </Container>
        </form>
      );
};

export default LoginForm;