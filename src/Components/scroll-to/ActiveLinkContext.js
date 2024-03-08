// ActiveLinkContext.js
import React, { createContext, useState, useContext } from "react";

const ActiveLinkContext = createContext();

export const ActiveLinkProvider = ({ children }) => {
    const [activeLink, setActiveLink] = useState("");

    const setActive = (link) => {
        setActiveLink(link);
    };

    return (
        <ActiveLinkContext.Provider value={{ activeLink, setActive }}>
            {children}
        </ActiveLinkContext.Provider>
    );
};

export const useActiveLink = () => {
    const context = useContext(ActiveLinkContext);
    if (!context) {
        throw new Error("useActiveLink must be used within an ActiveLinkProvider");
    }
    return context;
};
