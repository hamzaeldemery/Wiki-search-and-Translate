import axios from "axios";
import React, { useState, useEffect } from "react";

export const Convert = ({ text, language }) => {
    const [translatedText, setTranslatedText] = useState("");
    const [debouncedText, setDebouncedText] = useState(text);
    useEffect(() => {
        const response = async () => {
            let res = await axios.post(
                "https://translation.googleapis.com/language/translate/v2",
                {},
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
                    },
                }
            );
            setTranslatedText(res.data.data.translations[0].translatedText);
        };
        if (debouncedText.length) response();
    }, [debouncedText, language]);
    useEffect(() => {
        let time = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(time);
        };
    }, [text]);
    return (
        <div>
            <div
                className={`ui ${
                    debouncedText.length ? "visible" : "hidden"
                } message`}
            >
                <p>{translatedText}</p>
            </div>
        </div>
    );
};
