import React, {useState} from "react";
import axios from "axios";

const ReportAmount  = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [reports, setReports] = useState();
    const [reportNr, setReportNr] = useState();
    axios.get('/getReports')
        .then((response) => {
            if (response.status === 200) {
                setReports(response.data);
                setReportNr(reports.length);
            }
        })
        .catch((e) => {
            console.log(e);
        }, [setReportNr], [userId]);

    console.log('antall rapporter');
    console.log(reports);

    return (
        <div>
            {reportNr}
        </div>
    );
};

export default ReportAmount;