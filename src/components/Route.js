import { useState, useEffect } from "react";

export const Route = ({ path, children }) => {
    const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

    useEffect(() => {
        const swicthPage = () => {
            setCurrentUrl(window.location.pathname);
        };
        const urlChange = window.addEventListener("popstate", () => {
            swicthPage();
        });
        return () => {
            window.removeEventListener(urlChange);
        };
    }, []);
    return currentUrl === path && children;
};
