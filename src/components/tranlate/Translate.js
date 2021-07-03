import React, { useState } from "react";
import { Dropdown } from "../dropDown/DropDown";
import { Convert } from "./Convert";

const languagesDropdown = {
    name: "languages",
    title: "Select Language",
    choices: [
        {
            description: "Arabic",
            value: "ar",
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

export const Translate = (props) => {
    const [input, setInput] = useState("");
    const [language, setLanguage] = useState(languagesDropdown.choices[0]);
    const onInputChange = (e) => {
        setInput(e.target.value);
    };
    return (
        <div style={{ margin: "5%" }}>
            <div className="ui form">
                <div className="ui field">
                    <label>Enter text</label>
                    <input
                        type="text"
                        placeholder="Your text here..."
                        value={input}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
            </div>

            <Dropdown
                data={languagesDropdown}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <h3>Output</h3>
            <Convert text={input} language={language} />
        </div>
    );
};
