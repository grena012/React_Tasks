import * as Yup from "yup";

export const signUpSchema=Yup.object({
    name : Yup.string().min(2).max(25).required("Enter Name").matches(/^[a-zA-Z\s]+$/,"please Enter valid Name"),
    
    password: Yup.string().required("Enter Password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/,
    "password must be eight to sixteen characters including one uppercase letter,one special character and alphanumeric characters")
   
});