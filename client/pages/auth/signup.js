import React, { useState } from 'react';
import Router from 'next/router';
import InvalidInput from '../../components/InvalidInput';
import { useRequest } from '../../hooks/use-request';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { doRequest, errors } = useRequest({
        url: '/api/users/signup',
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
                <h1>Signup</h1>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        className="form-control"
                    />

                    {errors.map((err) => {
                        if (
                            err.field === 'email' ||
                            err.message.startsWith('Email')
                        ) {
                            return (
                                <InvalidInput key={err.message}>
                                    {err.message}
                                </InvalidInput>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                    />

                    {errors.map((err) => {
                        if (err.field === 'password') {
                            return (
                                <InvalidInput key={err.message}>
                                    {err.message}
                                </InvalidInput>
                            );
                        }
                        return null;
                    })}
                </div>
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default Signup;
