import React from 'react'
import RenderPanel from './RenderPanel.jsx'

const MainSection = ({ activeTab, setActiveTab, summary, content }) => {
  return (
      <RenderPanel
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        summary={summary}
        content={content}
      />
  )
}

export default MainSection;
