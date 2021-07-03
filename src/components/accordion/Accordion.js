import React, { useState } from "react";

export const Accordion = ({ list }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    let renderedList = list.map((item, idx) => {
        const active = idx === activeIndex ? "active" : "";
        return (
            <React.Fragment key={item.title}>
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
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion" style={{ margin: "5%" }}>
            {renderedList}
        </div>
    );
};
