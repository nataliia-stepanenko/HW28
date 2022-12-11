import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";

import AuthContext from "../contexts/auth/AuthContext";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';

const LoginForm = () => {
    const {loginUser} = useContext(AuthContext);

    const { handleSubmit, control } = useForm();
    const onSubmit = (control) => {
        console.log(control);
        loginUser(control);
      };

    const label = (
        <>
        <span>I agree to the </span>
        <Link href="#"
        target="_blank"
        underline="none">terms and conditions</Link>
        </>
    )

      return(
        <form sx={{flexDirection: "column"}} onSubmit={handleSubmit(onSubmit)}>
            <Controller 
                control={control}
                fullWidth
                name="username"
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
                name="password"
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
            <FormGroup sx={{my: '16px'}}>
                <Controller
                control={control}
                name="consent"
                defaultValue={true}
                rules={{ required: "The field is required" }}
                render={({ field, fieldState: { error } }) => (
                    <FormControlLabel 
                        label={label}
                        control={<Checkbox 
                            {...field}
                            defaultChecked
                            error={!!error}
                            helperText={error?.message}  />
                    } />
                )}
                />
                <Controller
                control={control}
                name="subscribe"
                defaultValue={false}
                render={({ field }) => (
                    <FormControlLabel 
                        label="Send me the latest deal alerts"
                        control={<Checkbox  {...field} />} 
                />
                )} 
                />
            </FormGroup>
            <Button sx={{width: '100%', fontSize: 18, margin: 0}} variant="contained" type="submit">Sign In</Button>
        </form>
      );
};

export default LoginForm;