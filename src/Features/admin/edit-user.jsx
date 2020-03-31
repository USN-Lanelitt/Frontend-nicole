import axios from "axios";

function editUser(id, nickname, firstname, middlename, lastname, address, address2, zipCode, phone, email, usertype, active, newsSubscription, userterms) {
    console.log("editUser ", id, sessionStorage.getItem('userId'));
    axios.post('/user/'+id+'/edit', {
        nickname: nickname,
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,
        address: address,
        address2: address2,
        zipCode: zipCode,
        phone: phone,
        email: email,
        usertype: usertype,
        active: active,
        newsSubscription: newsSubscription,
        userterms: userterms,
        }).then((response) => {
            if (response.status === 200) {
                console.log(response.data);
            }
        })
        .catch(e => console.log(e));
}

export default editUser;