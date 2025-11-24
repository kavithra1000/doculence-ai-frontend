import React from 'react'
import ChatBox from './ChatBox'
import Tab from './Tab'

const ChatTab = ({collapsed, activeTab, setActiveTab}) => {
  return (
    <div className={`fixed ${(collapsed) ? 'sm:left-13 left-0 overflow-hidden' : 'left-50'} bottom-0 left-0 right-0 flex flex-col items-center px-4 sm:px-6 md:px-8 duration-250 transition-all  Monal`}>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}/>
        <ChatBox/>
    </div>
  )
}

export default ChatTab