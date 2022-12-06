import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

import {getUsers} from "../api";

const Users = () => {
    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data);
            setLoading(false);
        });
    }, []);

    if(isLoading){
        return (
            <div className="main_box">
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className="main_box">
            <table>
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(({id, firstName, lastName, email, phone}) => (
                        <tr key={id}>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                            <td><button onClick={() => navigate(`/users/${id}`)}>Show more</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default Users