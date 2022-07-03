import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

const schema = yup.object().shape({
    login: yup.string().required(),
    password: yup.string().min(6).max(16).required(),
})

const initialValues = {
    login: '',
    password: ''
};

const Input = styled(Field)`
font-size: 12px;
width: 300px
`;
const FormAuth = styled(Form)`
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
gap: 10px;
`;
const Label = styled.label`
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
font-size: 12px;
font-weight: 600;
`;
const ErrorNotify = styled(ErrorMessage)`
color: red;
`;
export const LoginForm = () => {
    const handleSubmit = (values, {resetForm}) => {
console.log(values);

resetForm();
    }
    return (
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        <FormAuth autoComplete="off">
            <Label htmlFor="login">Login
            <Input type="text" name="login"/>
            <ErrorNotify component="p" name='login'/>
            </Label>
            <Label htmlFor="password">Password
            <Input type="password" name="password"/>
            <ErrorNotify component="p" name='password'/>
            </Label>
            <button type="submit">Submit</button>
        </FormAuth>
        </Formik>
    );
};