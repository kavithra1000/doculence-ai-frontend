import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { ArrowUp, X } from "lucide-react";

const ChatBox = ({ selectedText, setSelectedText, message, setMessage, className }) => {
  const maxRefLength = 50;
  const shortRef = selectedText.length > maxRefLength
    ? selectedText.slice(0, maxRefLength) + "..."
    : selectedText;

  return (
    <div className={`${className}className w-full  mx-auto border rounded-2xl shadow-lg flex flex-col gap-4 mt-auto p-3 `}>
      {selectedText && (
        <div className="text-sm text-gray-800 italic px-1 flex justify-between font-semibold">
          <q>{shortRef}</q>
          <button onClick={() => setSelectedText("")}>
            <X className="w-4 h-4 text-gray-800" />
          </button>
        </div>
      )}

      <TextareaAutosize
        minRows={1}
        maxRows={3}
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow resize-none border-0 focus:ring-0 focus:outline-none scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      />

      <div className="flex items-center justify-end">
        <button
          className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 active:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          aria-label="Send message"
          disabled={!message.trim()}
          onClick={() => {
            if (selectedText) {
              setMessage((prev) => prev + (prev ? " " : "") + selectedText);
              setSelectedText("");
              window.getSelection()?.removeAllRanges();
            }
          }}
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
