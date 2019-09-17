import React, { useState, useEffect } from 'react';
import User from './User';

const UserContainer = () =>{

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then(res => {
                console.log(res.data);
                setUsers(res.data.data);
            })
            .catch(err => {
                console.error(err)
            })
    },[])

    return (
        <>
            users.map(item => <User info={item} />)
        </>
    )
}

export default UserContainer;