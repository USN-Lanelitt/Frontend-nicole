import React from 'react';
import './App.css';
import FriendList from "./Features/friend/friend-list";
import FriendRequestList from "./Features/friend/friend-request-list";
import SearchList from "./Features/search/search-list";
import ComboList from "./Features/search/combo-list";
import Login from "./Features/user/login";
import ColoredLine from "./Component/colored-line";
import Container from "@material-ui/core/Container";
import ReportModal from "./Features/report/report-modal";
import Admin from "./Features/admin/admin-table";
import ReportList from "./Features/admin/report-list";
import AmountTable from "./Features/admin/amount-table";
import Cookie from "./Features/user/cookies";
import Chat from "./Component/chat";


function App() {
    return (
        <div className="App">
            <Container maxWidth="sm">
                <Cookie/>
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
                <Chat/>
            </Container>
            <Container>
                <ColoredLine color="grey" />
                <AmountTable/>
                <Admin/>
            </Container >
            <Container maxWidth="md">
                <ColoredLine color="grey" />
                <ReportList/>
                <ColoredLine color="grey" />
            </Container>

        </div>

    );
}

export default App;
