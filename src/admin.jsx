import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import axios from "axios";

function Admin() {
    const [id, setId] = useState();
    const [userId, setUserId] = useState(sessionStorage.getItem('userId'));
    const [users, setUsers] = useState([]);
        useEffect(()=> {
            console.log("admin", sessionStorage.getItem('userId'));
            axios.get('/users')
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response.data);
                        setUsers(response.data);
                    }
                })
                .catch(e => console.log(e));
        }, [setUsers, userId]);

    const [state, setState] = React.useState({

        columns: [
            { title: 'Id', field: 'id' },
            { title: 'Fornavn', field: 'firstName' },
            { title: 'Mellomnavn', field: 'middleName' },
            { title: 'Etternavn', field: 'lastName' },
            { title: 'E-post', field: 'email' },
            { title: 'Telefon', field: 'phone' },
            { title: 'Aktiv', field: 'active' },
            { title: 'Reklame', field: 'newsSubscription' },
            { title: 'Antall eiendeler', field: 'number' },
        ],
        data: users
    });

    function editUser(id) {
        console.log("editUser", id, sessionStorage.getItem('userId'));
        axios.post('/user/'+id+'/edit')
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                }
            })
            .catch(e => console.log(e));
    }

    return (
        <div >
            <MaterialTable
                title="Administrere brukere"
                columns={state.columns}
                data={users}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        console.log(oldData.id);
                                        editUser(oldData.id);
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>

                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    console.log(oldData.id);
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                }}
            />
        </div>
    );
}

export default Admin;