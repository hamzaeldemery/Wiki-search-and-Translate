import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { ListItems } from "./ListItems";
export const List = () => {
    const [input, setInput] = useState("");

    const onSubmit = (text) => {
        setInput(text);
    };
    return (
        <div className="ui two column centered  grid">
            <div className="row">
                <div className="column">
                    <SearchBar onSubmit={onSubmit} />
                </div>
            </div>
            <div className="row">
                <ListItems searchQ={input} />
            </div>
        </div>
    );
};
