import * as Yup from "yup";

export const signUpSchema=Yup.object({
    name : Yup.string().min(2).max(25).required("Enter Name").matches(/^[a-zA-Z\s]+$/,"please Enter valid Name"),
    email: Yup.string().email().required("Enter your Email Id").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please enter valid Email Id"),
    password: Yup.string().required("Enter Password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/,
    "password must be eight to sixteen characters including one uppercase letter,one special character and alphanumeric characters"),
    mobile_no: Yup.number().required("Enter your mobile number")
});