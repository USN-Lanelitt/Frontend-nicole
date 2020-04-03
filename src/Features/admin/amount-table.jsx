import React from "react";
import AssetAmount from "./asset-amount";
import ReportAmount from "./raport-amount";
import UserAmount from "./user-amount";

const AmountTable = () => {
    return (
        <div>
            <UserAmount/>
            <ReportAmount/>
            <AssetAmount/>

        </div>
    );
};

export default AmountTable;