import React from 'react';
import './App.css';
import UserList from "./user-list";
import LoginForm from "./LoginForm";
import RegisterForm from "./register";


function App() {
    return (
        <div className="App">
            <box m={6}>
                <LoginForm />
            </box>
            <br/>
            <RegisterForm />
            <br/>
            <UserList/>
        </div>
    );
}

export default App;
