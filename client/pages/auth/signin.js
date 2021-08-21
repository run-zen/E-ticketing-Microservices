import React, { useState } from 'react';
import Router from 'next/router';
import InvalidInput from '../../components/InvalidInput';
import { useRequest } from '../../hooks/use-request';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { doRequest, errors } = useRequest({
        url: '/api/users/signin',
        method: 'post',
        body: {
            email,
            password,
        },
        onSuccess: () => Router.push('/'),
    });

    const onsubmit = async (event) => {
        event.preventDefault();

        await doRequest();
    };

    return (
        <div className="container">
            <form onSubmit={onsubmit}>
                <h1>Sign In</h1>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                    />
                </div>
                <div>
                    {errors.map((item) => (
                        <InvalidInput>{item.message}</InvalidInput>
                    ))}
                </div>
                <button type="submit" className="btn btn-primary">
                    Sign in
                </button>
            </form>
        </div>
    );
}

export default Signin;
