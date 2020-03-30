import axios from "axios";
import {useState} from "react";


function Report(subject, comment) {
    let id = 4;
    sessionStorage.setItem('userId2', id);

    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [userId2, setId2] = useState(sessionStorage.getItem('userId2'));
    console.log("sendFriendRequest", userId, sessionStorage.getItem('userId'));
    axios.post('/user/'+ userId  +'/friend/'+ userId2+'/report' , {
        subject:subject,
        comment:comment
    }).then((response) => {
        if (response.status === 200) {
            console.log(response.data);
        }
    })
        .catch(e => console.log(e));
}

export default Report;