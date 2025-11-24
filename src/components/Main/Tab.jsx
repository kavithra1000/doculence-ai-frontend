import React, { useState, useRef } from 'react';
import { AlignLeft } from 'lucide-react';

const tabs = ['Content', 'Summary', 'Chat'];

const Tab = ({ activeTab, setActiveTab }) => {
  const [open, setOpen] = useState(true);
  const tabRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowRight') {
      const next = (index + 1) % tabs.length;
      tabRefs.current[next]?.focus();
    } else if (e.key === 'ArrowLeft') {
      const prev = (index - 1 + tabs.length) % tabs.length;
      tabRefs.current[prev]?.focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      setActiveTab(tabs[index]);
    }
  };

  return (
      <div className={`bg-transparent w-full max-w-3xl flex flex-row items-start ${open ? 'gap-3' : 'gap-0'}`}>
        {/* Toggle Group */}
        <div
          className={`bg-white border-gray-300 dark:bg-neutral-700 dark:border-neutral-600 transition-all duration-300 ease-in-out px-0 
            ${open ? 'max-w-[320px] opacity-100' : 'max-w-0 opacity-0 overflow-hidden'}
            mr-auto mb-4 h-fit flex items-center bg-gray-0 rounded-full border shadow-md gap-0`}
        >
          {tabs.map((tab, index) => (
            <div
              key={tab}
              ref={(el) => (tabRefs.current[index] = el)}
              tabIndex={0}
              onClick={() => setActiveTab(tab)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              role="button"
              aria-pressed={activeTab === tab}
              className={`py-1 px-3 whitespace-nowrap hover:cursor-pointer transition-all duration-300 
                ${index === 0 ? 'rounded-l-2xl' : index === tabs.length - 1 ? 'rounded-r-2xl' : ''}
                ${open ? 'opacity-100' : 'opacity-0'}
                ${activeTab === tab ? 'text-sky-800 bg-sky-200' : 'bg-neutral-100 text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-800 hover:text-gray-700 dark:hover:bg-neutral-500 hover:bg-gray-200'}`}
            >
              {tab === 'Chat' ? 'Ask AI' : tab}
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="flex-1">
          <div
            className="bg-white dark:bg-neutral-700 py-2 px-2 w-fit bg-gray-0 rounded-full border border-gray-300 mb-4 cursor-pointer hover:bg-gray-200 shadow-md"
            onClick={() => setOpen(!open)}
          >
            <AlignLeft className="w-4 h-4" />
          </div>
        </div>
      </div>
  );
};

export default Tab;
