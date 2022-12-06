import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";

import {getUserById} from "../api";

const User = () => {
    const {userId} = useParams();
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState({});
  
    useEffect(() => {
        getUserById(userId).then((data) => {
            setUser(data);
            setLoading(false);
        });
    }, [userId]);

    if(isLoading){
        return (
            <div className="main_box">
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className="main_box_col">
            <h3>{user.firstName} {user.lastName}</h3>
            <table>
                    <tr>
                        <th scope="row">First Name</th>
                        <td>{user.firstName}</td>
                    </tr>
                    <tr>
                        <th scope="row">Last Name</th>
                        <td>{user.lastName}</td>
                    </tr>
                    <tr>
                        <th scope="row">Maiden Name</th>
                        <td>{user.maidenName}</td>
                    </tr>
                    <tr>
                        <th scope="row">Age</th>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <th scope="row">Gender</th>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <th scope="row">Email</th>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <th scope="row">Phone</th>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <th scope="row">Image</th>
                        <td><img src={user.image} alt={user.firstName + " " + user.lastName}/></td>
                    </tr>
                    <tr>
                        <th scope="row">Birth date</th>
                        <td>{user.birthDate}</td>
                    </tr>
                    <tr>
                        <th scope="row">Eye color</th>
                        <td>{user.eyeColor}</td>
                    </tr>
                    <tr>
                        <th scope="row">Hair color</th>
                        <td>{user.hair.color}</td>
                    </tr>
                    <tr>
                        <th scope="row">Blood group</th>
                        <td>{user.bloodGroup}</td>
                    </tr>
                    <tr>
                        <th scope="row">Height</th>
                        <td>{user.height}</td>
                    </tr>
                    <tr>
                        <th scope="row">Weight</th>
                        <td>{user.weight}</td>
                    </tr>
                    <tr>
                        <th scope="row">University</th>
                        <td>{user.university}</td>
                    </tr>
                    <tr>
                        <th scope="row">Place of work</th>
                        <td>{user.company.address.city}</td>
                    </tr>
                    <tr>
                        <th scope="row">Position</th>
                        <td>{user.company.title}</td>
                    </tr>
                    <tr>
                        <th scope="row">IP</th>
                        <td>{user.ip}</td>
                    </tr>
            </table>
            <p><Link to="/users">Back to the Users list</Link></p>
        </div>
    );

};

export default User;