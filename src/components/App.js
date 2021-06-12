import React from "react";
import TranslateWiki from "./TranslateWiki";
export const App = () => {
    return (
        <div className="App" style={styling.app}>
            <TranslateWiki />
        </div>
    );
};

const styling = {
    app: {
        paddingTop: "10px",
    },
};
