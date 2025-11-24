import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Main/SideBar';
import Navbar from '../components/Main/Navbar';
import HeroSection from '../components/Home/HeroSection';
import ChatBox from '../components/Main/ChatBox';
import MainSection from '../components/Main/MainSection'
import ExtractionForm from '../components/Main/ExtractionForm.jsx'
import { toast } from 'react-toastify';
import useExtractStore from '../stores/useExtractStore.js';
import Tab from '../components/Main/Tab.jsx';
import ChatTab from '../components/Main/ChatTab.jsx';
import Actions from '../../../backend/src/model/action.model.js';

const Main = () => {

  const [smallScreen, setSmallScreen] = useState(false);
  const [activeTab, setActiveTab] = useState("content");
  const { summary, content, error } = useExtractStore();
  const [collapsed, setCollapse] = useState(true);
  const {fetchUserActions} = useExtractStore();


  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  useEffect(() => {
    fetchUserActions()
  },[fetchUserActions]);


  return (
    <div className='w-screen h-screen flex dark:bg-neutral-800'>
      <Sidebar smallScreen={smallScreen} setSmallScreen={setSmallScreen} collapsed={collapsed} setCollapse={setCollapse} />
      <div className='content-container flex flex-col flex-1 w-full h-full'>
        <Navbar smallScreen={smallScreen} setSmallScreen={setSmallScreen} />

        {content ? <>
          <MainSection activeTab={activeTab} setActiveTab={setActiveTab} summary={summary} content={content} />
          <ChatTab activeTab={activeTab} setActiveTab={setActiveTab} collapsed={collapsed} setCollapse={setCollapse} />
        </>
          : <ExtractionForm setActiveTab={setActiveTab} />}

      </div>
    </div>
  )
}

export default Main;