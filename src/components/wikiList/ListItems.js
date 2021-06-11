import React, { useState, useEffect } from "react";
import { Wikipedia } from "../../apis/Wikipedia";

export const ListItems = ({ searchQ }) => {
    const [response, setResponse] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [debouncedTerm, setDebouncedTerm] = useState(searchQ);
    useEffect(() => {
        const query = async () => {
            let res = await Wikipedia.get("/api.php", {
                params: {
                    srsearch: debouncedTerm,
                },
            });
            setResponse(res.data.query.search);
        };
        if (debouncedTerm) {
            query();
        }
    }, [debouncedTerm]);
    useEffect(() => {
        let time = setTimeout(() => {
            setDebouncedTerm(searchQ);
        }, 1000);
        return () => {
            clearTimeout(time);
        };
    }, [searchQ]);
    let renderedList = response.map((item, idx) => {
        const active = idx === activeIndex ? "active" : "";
        return (
            <React.Fragment key={item.pageid}>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="thirteen wide column">
                            <div
                                className={`title ${active}`}
                                onClick={() => {
                                    setActiveIndex(idx);
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
                                ></span>
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
            </React.Fragment>
        );
    });
    return <div className="ui styled accordion">{renderedList}</div>;
};
