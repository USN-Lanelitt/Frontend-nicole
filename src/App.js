import React from 'react';
import './App.css';
import FriendList from "./friend-list";
import FriendRequestList from "./friend-request-list";
import SearchList from "./search-list";
import ComboList from "./combo-list";
import Login from "./login";
import ColoredLine from "./colored-line";
import Container from "@material-ui/core/Container";
import Report from "./report-form";
import ReportModal from "./report-modal";

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
                <ReportModal/>
                <ColoredLine color="grey" />
            </Container>
        </div>
    );
}

export default App;
