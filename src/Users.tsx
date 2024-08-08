import React, { FC } from 'react'
import { Login, Name } from './App.types';

interface UserProps {
    login: Login;
    name: Name;
    email: string;
}

const Users: FC<UserProps> = ({ login, name, email }) => {
    return (

        <li key={login.uuid}>
            <div>
                Name: {name.first} {name.last}
            </div>
            <div>
                Email: {email}
            </div>
            <hr />
        </li>


    )
}

export default Users