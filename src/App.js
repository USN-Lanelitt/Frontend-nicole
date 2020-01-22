import React from 'react';
import './App.css';
import UserList from "./user-list";
import LoginTab from "./LoginForm";

function App() {
  return (
    <div className="App">
        <box m={6}>
            <LoginTab />
        </box>
        <br/>
        <UserList/>

    </div>
  );
}

export default App;
