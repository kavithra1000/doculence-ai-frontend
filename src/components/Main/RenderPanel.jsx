import React from 'react'
import ContentBox from './ContentBox';
import SummaryBox from './SummaryBox';
import ChatContainer from './ChatContainer';

const RenderPanel = ({activeTab, summary, content}) => {

    switch (activeTab) {
        case "Summary":
            return <SummaryBox
                summary={summary}
            />;
        case "Content":
            return (
                <ContentBox
                    content={content}
                />
            );
        case "Chat":
            return (
                <ChatContainer/>
            );
        default:
            return null;
    }
};

export default RenderPanel