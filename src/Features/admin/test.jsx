import React, {useState} from "react";
import axios from "axios";

const func  = () => {
const GetReportAmount  = () => {
    const [reports, setReports] = useState([]);
    const [reportNr, setReportNr] = useState([]);
    axios.get('/getReports')
        .then((response) => {
            if (response.status === 200) {
                setReports(response.data);
            }
        })
        .catch((e) => {
            console.log(e);
        });

    console.log('antall rapporter');
    console.log(reports.length);

    return (
        <div>

        </div>
    );
};

console.log('antall rapporter');
//setReportsnr(reports.length);
// console.log(reportsnr);




const GetAssetIndividAmount = (userId) => {
    const [individAssetNr, setindividAssetNr] = useState([]);
    axios.get('/assets/ AssetAmount/' + userId)
        .then((response) => {
            if (response.status === 200) {
                setindividAssetNr(response.data);
            }
        })
        .catch((e) => {
            console.log(e);
        });

    console.log('antall invivid assets');
    console.log(reports.length);
    return (
        <div>

        </div>
    );
}
};