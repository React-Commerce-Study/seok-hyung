import React, { useState } from 'react';
import './TabContent.css'

const TabContent = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    
    return (
        <div>
            <div className="tab-buttons">
                {tabs.map((tab, index) => (
                    <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={activeTab == index ? 'active' : ''}>
                    {tab.title}
                    </button>
                ))}
            </div>
            <div className="tab-content">
            {tabs[activeTab].content}
            </div>
        </div>
        );
};

export default TabContent;