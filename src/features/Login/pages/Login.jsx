import { useAuth } from 'hooks';
import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

function Login() {
    const { login } = useAuth();

    const handleSubmitForm = (values) => {
        const { username, password } = values;
        login(username, password);
    }

    return (
        <div>
            <LoginForm
                handleSubmitForm={handleSubmitForm}
            />
        </div>
    )
}

export default Login
