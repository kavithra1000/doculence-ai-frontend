import React from "react";
import { Sparkles } from "lucide-react";

const SummaryBox = ({ summary }) => (
  <div className="h-[70vh] w-full pt-5 pb-50 flex flex-col items-center will-change-transform no-scrollbar overflow-y-auto scroll-smooth px-4 sm:px-6 md:px-8 duration-250 transition-all  Monal`}>
        <Tab">
     <div
      className="prose max-w-3xl break-words"
      dangerouslySetInnerHTML={{ __html: summary }}
    />
  </div>

);

export default SummaryBox;
