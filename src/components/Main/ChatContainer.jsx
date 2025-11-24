import React from 'react'
import { MessageSquare } from 'lucide-react';

const ChatContainer = () => {
  return (
    <div
                    id="chat-panel"
                    role="tabpanel"
                    aria-labelledby="chat-tab"
                    className="flex h-full flex-col items-center gap-4 p-6  rounded-lg w-full"
                >
                    <MessageSquare className="mt-25 w-10 h-10 text-sky-500" />
                    <h3 className="text-lg font-medium text-sky-800">
                        Chat with your content
                    </h3>
                    <p className="text-sm text-sky-700 text-center max-w-md">
                        Select text from the content to ask specific questions or chat generally about the document.
                    </p>
                </div>
  )
}

export default ChatContainer