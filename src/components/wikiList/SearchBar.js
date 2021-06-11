import React, { useState } from "react";
import "../../css/searchBar.css";

export const SearchBar = (props) => {
    const [input, setInput] = useState("");
    const onInputChange = (e) => {
        setInput(e.target.value);
        props.onSubmit(e.target.value);
    };

    const formOnSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input);
    };

    return (
        <form onSubmit={(e) => formOnSubmit(e)} className="ui form">
            <div className="field">
                <div className=" ui huge icon input ">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={input}
                        onChange={(e) => onInputChange(e)}
                    />
                    <i
                        className="inverted circular search link icon"
                        onClick={(e) => formOnSubmit(e)}
                    />
                </div>
            </div>
        </form>
    );
};
