import React from "react";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3,
            marginTop: 200,
            marginBottom: 50,
        }}
    />
);

export default ColoredLine;