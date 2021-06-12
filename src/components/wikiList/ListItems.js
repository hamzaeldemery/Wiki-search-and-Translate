import React, { useState, useEffect } from "react";
import { Wikipedia } from "../../apis/Wikipedia";
import { ListItem } from "./listItem";

export const ListItems = ({ searchQ, language }) => {
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
                <ListItem
                    idx={idx}
                    item={item}
                    setActiveIndexFunc={setActiveIndex}
                    active={active}
                    language={language}
                />
            </React.Fragment>
        );
    });
    return <div className="ui styled accordion">{renderedList}</div>;
};
