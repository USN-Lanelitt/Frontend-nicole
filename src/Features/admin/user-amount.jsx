import React, {useState} from "react";
import axios from "axios";
import ReportAmount from "./raport-amount";

const UserAmount  = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [users, setUsers] = useState();
    const [userNr, setUserNr] = useState();
    axios.get('/users')
        .then((response) => {
            if (response.status === 200) {
                setUsers(response.data);
                setUserNr(users.length);
            }
        })
        .catch((e) => {
            console.log(e);
        }, [setUserNr], [userId]);

    console.log('antall brukere');
    console.log(userNr);

    return (
        <div>
            {userNr}
        </div>
    );
};

export default UserAmount;

