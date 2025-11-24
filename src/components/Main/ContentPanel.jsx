import SummaryBox from "../Home/SummaryBox";
import ContentBox from "../Home/ContentBox";
import { MessageSquare } from "lucide-react";

const ContentPanel = ({
  activeTab,
  summary,
  content,
  selectedText,
  setSelectedText,
  isMaximized,
}) => {
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
          className="flex flex-col items-center justify-center gap-4 p-6 bg-sky-50 rounded-lg mb-6 min-h-[50vh]"
        >
          <MessageSquare className="w-10 h-10 text-sky-500" />
          <h3 className="text-lg font-medium text-sky-800">Chat with your content</h3>
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

export default ContentPanel;
