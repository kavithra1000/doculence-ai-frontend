import {
  FileText,
  Clipboard,
  MessageSquare,
  Maximize2,
  X,
} from "lucide-react";
import SummaryBox from "./SummaryBox";
import ContentBox from "./ContentBox";
import ChatBox from "./ChatBox";
import { useState } from "react";

const MainSection = ({
  summary,
  content,
  activeTab,
  setActiveTab,
  selectedText,
  setSelectedText,
  message,
  setMessage,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);

  if (!summary && !content) return null;

  const tabs = [
    { id: "content", icon: <FileText className="w-4 h-4" />, label: "Content" },
    { id: "summary", icon: <Clipboard className="w-4 h-4" />, label: "Summary" },
    { id: "chat", icon: <MessageSquare className="w-4 h-4" />, label: "Chat" },
  ];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) setIsMaximized(false);
  };

  const renderPanel = () => {
    switch (activeTab) {
      case "summary":
        return <SummaryBox summary={summary} />;
      case "content":
        return (
          <ContentBox
            content={content}
            onSelectText={setSelectedText}
            selectedText={selectedText}
            isMaximized={isMaximized}
          />
        );
      case "chat":
        return (
          <div
            id="chat-panel"
            role="tabpanel"
            aria-labelledby="chat-tab"
            className="flex flex-col items-center justify-center gap-4 p-6 bg-sky-50 rounded-lg max-h-[60vh] h-[60vh]"
          >
            <MessageSquare className="w-10 h-10 text-sky-500" />
            <h3 className="text-lg font-medium text-sky-800">
              Chat with your content
            </h3>
            <p className="text-sm text-sky-700 text-center max-w-md">
              {selectedText
                ? "You've selected text to chat about. Ask your question below."
                : "Select text from the content to ask specific questions or chat generally about the document."}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Backdrop for maximized state */}
      {isMaximized && (
        <div
          className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 ${isMaximized}`}
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
      )}

      {/* Main Section Container */}
      <section
        className={`border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden transition-all duration-200 ease-in-out 
          ${isMaximized
          ? "fixed inset-0 sm:inset-0 lg:inset-0 z-50 shadow-xl flex flex-col"
          : "mb-10 relative z-10"
          }`}
      >
        {/* Top Navigation Tabs */}
        <div className="flex justify-between items-center border-b border-gray-200 bg-gray-200">
          {/* Tab List */}
          <div className="flex" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors 
                  ${activeTab === tab.id
                  ? "text-sky-600 border-b-2 border-sky-600 bg-white/50"
                  : "text-gray-600 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`${tab.id}-panel`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Maximize / Minimize Button */}
          <div className="flex items-center gap-2 pr-4">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label={isMaximized ? "Minimize" : "Maximize"}
              title={isMaximized ? "Minimize panel" : "Maximize panel"}
            >
              {isMaximized ? (
                <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
              ) : (
                <Maximize2 className="w-5 h-5 text-gray-500 hover:text-gray-700" />
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col h-full">
          {/* Main Panel Content */}
          <div className=" bg-white text-gray-800 flex-1">
            {renderPanel()}
          </div>

          {/* Chat Input Section */}
          <div
            className={`px-14 pb-6 ${isMaximized ? "px-4 lg:px-[10vw]" : ""
              }`}
          >
            <ChatBox
              className={"chat sticky"}
              selectedText={selectedText}
              setSelectedText={setSelectedText}
              message={message}
              setMessage={setMessage}
              isMaximized={isMaximized}
            />
          </div>
        </div>

      </section>
    </>
  );
};

export default MainSection;
