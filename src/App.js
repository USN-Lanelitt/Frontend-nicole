import React from 'react';
import './App.css';
import FriendList from "./Features/friend/friend-list";
import FriendRequestList from "./Features/friend/friend-request-list";
import SearchList from "./Features/search/search-list";
import ComboList from "./Features/search/combo-list";
import Login from "./Features/user/login";
import ColoredLine from "./Components/colored-line";
import Container from "@material-ui/core/Container";
import ReportModal from "./Features/report/report-modal";
import Admin from "./Features/admin/admin-table";
import ReportList from "./Features/report/report-list";

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

            </Container>
            <Container>
                <ColoredLine color="grey" />
                <Admin/>
                <ColoredLine color="grey" />
                <ReportList/>
                <ColoredLine color="grey" />
            </Container>
        </div>

    );
}

export default App;
