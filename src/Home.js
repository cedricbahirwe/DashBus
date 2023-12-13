import React, { useState, useEffect } from 'react'

const Component = () => {
    const [value, setValue] = useState(0);

    const [users, setUsers] = useState([]);


    const getData = async () => {
        // const endpoint = 'http://jsonplaceholder.typicode.com/users';
        const endpoint = 'http://localhost:8080/admin/';
        const response = await fetch(endpoint, {
            // mode: 'no-cors',
            headers: {
                // 'Cache-Control': 'no-cache',
                "ngrok-skip-browser-warning": "69420"
            }
        });

        // console.log("Res", await response.text());
        // console.log("Finish")
        const users = await response.json();
        console.log("items", users);
        setUsers(users);
    }

    useEffect(() => {
        setValue(value + 1);
        // getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>Imported Component</h1>
            <p>New value is {value}</p>

            <button onClick={async () => {
                setValue(value + 1);
                await getData();

            }}>Click me to increase</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.dob}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Component