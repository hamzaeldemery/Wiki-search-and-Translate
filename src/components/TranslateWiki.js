import React, { useState } from "react";
import { SearchBar } from "./wikiList/SearchBar";
import { ListItems } from "./wikiList/ListItems";
import { Dropdown } from "./dropDown/DropDown";

const languagesDropdown = {
    name: "languages",
    title: "Select Language",
    choices: [
        {
            description: "Arabic",
            value: "ar",
        },
        {
            description: "English",
            value: "en",
        },
        {
            description: "Afrikaans",
            value: "af",
        },
        {
            description: "Hindi",
            value: "hi",
        },
    ],
};

const TranslateWiki = (props) => {
    const [input, setInput] = useState("");
    const [language, setLanguage] = useState(languagesDropdown.choices[0]);
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
                <Dropdown
                    data={languagesDropdown}
                    selected={language}
                    onSelectedChange={setLanguage}
                />
            </div>
            <div className="row">
                <ListItems searchQ={input} language={language} />
            </div>
        </div>
    );
};

export default TranslateWiki;
