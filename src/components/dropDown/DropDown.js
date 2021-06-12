import React, { useState, useEffect, useRef } from "react";

export const Dropdown = ({ data, selected, onSelectedChange }) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef();
    let renderedList = data.choices.map((item) => {
        if (item === selected) return null;
        return (
            <div
                className="item"
                data-value={item.value}
                key={item.value}
                onClick={(e) => onSelectItem(e, item)}
            >
                {item.description}
            </div>
        );
    });
    const onSelectItem = (e, item) => {
        onSelectedChange(item);
    };
    const hideShowMenu = (e) => {
        e.preventDefault();
        setVisible(!visible);
    };

    useEffect(() => {
        const eventListenerFunc = (event) => {
            if (ref.current.contains(event.target)) return;
            setVisible(false);
        };
        document.addEventListener("click", eventListenerFunc, {
            capture: true,
        });
        document.removeEventListener("click", eventListenerFunc, {
            capture: true,
        });
    }, []);

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label>{data.title}</label>
                <div
                    onClick={(e) => hideShowMenu(e)}
                    className={`ui selection dropdown ${
                        visible ? "visible active" : ""
                    }`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.description}</div>
                    <div
                        className={`menu ${
                            visible ? "visible transition" : ""
                        }`}
                    >
                        {renderedList}
                    </div>
                </div>
            </div>
        </div>
    );
};
