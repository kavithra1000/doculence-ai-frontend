import React from "react";
import { X, ArrowUp } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize"

const ChatBox = () => {

    const referencedQuote = 'your ref...';

    return (

        <div className="w-full max-w-3xl border dark:bg-neutral-700 dark:border-neutral-600 border-gray-300 rounded-3xl shadow-xl flex flex-col gap-3 p-4 bg-white mb-6 sm:mb-8 md:mb-10 transition-all duration-300">

            {/* Referenced quote section */}
            <div className="text-sm dark:text-white text-gray-800 italic flex justify-between items-start font-semibold">
                <q className="pr-2">{referencedQuote}</q>
                <button aria-label="Clear quote">
                    <X className="w-4 h-4 text-gray-800" />
                </button>
            </div>

            {/* Autosizing input area */}
            <TextareaAutosize
                minRows={1}
                maxRows={6}
                placeholder="Ask Anything..."
                className="w-full dark:text-white resize-none border-0 focus:ring-0 focus:outline-none text-sm sm:text-base scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 "
            />

            {/* Send button */}
            <div className="flex items-center justify-end">
                <button
                    className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 flex items-center justify-center"
                    aria-label="Send message"
                >
                    <ArrowUp className="w-5 h-5 text-white" />
                </button>
            </div>
        </div>

    );
};

export default ChatBox;
