import { FileText, MessageSquare, Download, MoveUpRight } from "lucide-react";
import ChatBox from "./ChatBox";
import { Maximize2 } from "lucide-react";

const ActionPanel = ({
  selectedText,
  setSelectedText,
  message,
  setMessage,
  setActiveTab,
}) => (
  <aside className="w-full lg:w-80 flex-shrink-0 bg-gray-50 dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700">
    <div className="p-4 h-full flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Actions</h3>
        <Maximize2 className="text-gray-500 dark:text-gray-400 w-5 h-5" />
      </div>

      <div className="flex flex-col gap-3">
        {[
          { label: "Content", variant: "btn-primary" },
          { label: "Summary", variant: "btn-warning" },
          { label: "Chat", variant: "btn-neutral" },
        ].map(({ label, variant }, i) => (
          <button
            key={i}
            className={`btn ${variant} flex items-center justify-start gap-2 text-sm`}
            onClick={() => setActiveTab(label.toLowerCase())}
          >
            <FileText className="w-4 h-4" />
            {label}
          </button>
        ))}

        <div className="divider my-2" />

        <button className="btn btn-outline flex items-center gap-2 text-sm">
          <Download className="w-4 h-4" />
          Download
        </button>

        <div className="divider my-2" />

        <ChatBox
          selectedText={selectedText}
          setSelectedText={setSelectedText}
          message={message}
          setMessage={setMessage}
        />
      </div>
    </div>
  </aside>
);

export default ActionPanel;
