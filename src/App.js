import React from 'react';
import './App.css';
import FriendList from "./friend-list";
import FriendRequestList from "./friend-request-list";
import SearchList from "./search-list";
import ComboList from "./combo-list";
import Login from "./login";
import ColoredLine from "./colored-line";
import Container from "@material-ui/core/Container";
import ReportForm from "./report-modal";
import Admin from "./admin";

function App() {
    return (
        <div className="App">
            <Container maxWidth="sm">
                <Login/>
                <ColoredLine color="grey" />
                <FriendList/>
                <ColoredLine color="grey" />
                <FriendRequestList/>
                <ColoredLine color="grey" />
                <SearchList/>
                <ColoredLine color="grey" />
                <ComboList/>
                <ColoredLine color="grey" />
                <ReportForm/>

            </Container>
            <Container>
                <ColoredLine color="grey" />
                <Admin/>
                <ColoredLine color="grey" />
            </Container>
        </div>

    );
}

export default App;
