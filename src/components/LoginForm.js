import { useForm, Controller } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';

const LoginForm = () => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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
            <FormGroup sx={{my: '16px'}}>
                <Controller
                control={control}
                name="Checkbox T&C"
                rules={{ required: "The field is required" }}
                render={({ field, fieldState: { errors } }) => (
                    <FormControlLabel 
                        label={label}
                        control={<Checkbox 
                            {...field}
                            errors={!!errors}
                            helperText={errors?.message}  />
                    } />
                )}
                />
                <Controller
                control={control}
                name="Subscribe"
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