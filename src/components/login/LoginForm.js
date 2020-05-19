import React from "react";
import { useForm } from "react-hook-form"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as yup from 'yup';

function LoginForm() {

    const schema = yup.object().shape({
        username: yup.string().required("Username is required"),
        password: yup.string().min(4, 'Password must be atleast 4 characters').required("Password is required"),
    });

    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log('data', data);
        
    }

    return (
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" placeholder="Enter your username" ref={register({required: true})} />
                    {errors.username && <p>{errors.username.message}</p>}
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter your password" ref={register({required: true})} />
                    {errors.password && <p>{errors.password.message}</p>}
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
    )
}

export default LoginForm
