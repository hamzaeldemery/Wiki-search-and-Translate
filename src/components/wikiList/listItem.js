import React, { useState, useEffect } from "react";
import axios from "axios";
export const ListItem = ({
    active,
    item,
    setActiveIndexFunc,
    idx,
    language,
}) => {
    const [tranlated, setTranslated] = useState("");
    useEffect(() => {
        let text = item.snippet;
        text = text.replace(/<[^>]*>/g, "");
        console.log(text);
        const response = async () => {
            try {
                let res = await axios.post(
                    "https://translation.googleapis.com/language/translate/v2",
                    {},
                    {
                        params: {
                            q: text,
                            target: language.value,
                            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
                        },
                    }
                );
                console.log(res);
                setTranslated(res.data.data.translations[0].translatedText);
            } catch (error) {
                setTranslated("Error Occured, not able to translate!");
            }
        };
        response();
    }, [language, item]);
    return (
        <div className="ui grid">
            <div className="ui row">
                <div className="thirteen wide column">
                    <div
                        className={`title ${active}`}
                        onClick={() => {
                            setActiveIndexFunc(idx);
                        }}
                    >
                        <i className="dropdown icon"></i>
                        {item.title}
                    </div>

                    <div className={`content ${active}`}>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: item.snippet,
                            }}
                        ></span>{" "}
                        <br />
                        <br />
                        <span>{tranlated}</span>
                    </div>
                </div>
                <div className="three wide column">
                    <a
                        href={`https://en.wikipedia.org/?curid=${item.pageid}`}
                        className="ui button"
                    >
                        Go
                    </a>
                </div>
            </div>
        </div>
    );
};
