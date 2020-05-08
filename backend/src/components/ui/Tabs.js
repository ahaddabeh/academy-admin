import React, { createContext, useContext, useState } from "react";

const tabStyle = {
    color: "#3c94e7"
}

// Context is shared state. Shared means it is shared outside and with all the other components within this file
// 
const TabContext = createContext();

// Gives us access to the shared context inside of functional components
const useTabContext = () => useContext(TabContext);

const Tab = (props) => {
    const { active } = useTabContext();
    return (
        <li className="nav-item">
            <a className={`nav-link ${props.tab === active && "active"}`} data-toggle="tab" data-tab={props.tab} onClick={props.onClick}>{props.children}</a>
        </li>
    )
}


const TabList = (props) => {
    const { setTab } = useTabContext();
    const _props = props.allTabsActive ? { onClick: setTab } : {};
    const children = React.Children.map(props.children, (child, idx) => (
        React.cloneElement(child, { tab: `tab-${idx}`, ..._props })
    ))

    return (
        <ul style={tabStyle} className="nav nav-tabs">{children}</ul>
    )
}

const TabPanel = (props) => {
    const { active } = useTabContext();
    return (
        <div id={props.id} className={`tab-pane ${props.id === active && "active"}`}>{props.children}</div>
    )
}

const TabContent = (props) => {
    const children = React.Children.map(props.children, (child, idx) => (
        React.cloneElement(child, { id: `tab-${idx}` })
    ))
    return (
        <div className="tab-content">{children}</div>
    )
}

const Tabs = (props) => {
    const searchString = new URLSearchParams(props.history.location.search);
    const activeTab = searchString.get("tab");
    const [active, setActive] = useState(activeTab || "tab-0")
    const setTab = (e) => {
        const selectedTab = e.target.getAttribute("data-tab");
        setActive(selectedTab);
        props.history.push(`${props.history.location.pathname}?tab=${selectedTab}`)
    }
    return (
        // Provider allows access to the context/state to anything within its tags 
        <TabContext.Provider value={{ active, setTab }}>
            <div className="card">
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </TabContext.Provider>
    )
}

// Compound component
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Content = TabContent;
Tabs.Panel = TabPanel;

export default Tabs;

