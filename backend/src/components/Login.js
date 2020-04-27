import React, { useState, Fragment } from 'react';
import e from 'express';

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Verifying admin ${username}`);
    }

    return (
        <Fragment>
            <form className="form-signin" onSubmit={handleSubmit}>
                <h1>Arqams Academy Admin Login</h1>
                <label>
                    Username:
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </Fragment>
    )
}

export default Login;