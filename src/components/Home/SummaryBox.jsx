import React from "react";
import { Sparkles } from "lucide-react";

const SummaryBox = ({ summary, handleMouseUp }) => (
  <div className="h-[60vh] max-h-[60vh] overflow-y-auto prose w-full max-w-none scroll-smooth p-14">

    <div
      className="p-4 rounded-lg "
      dangerouslySetInnerHTML={{ __html: summary }}
      onMouseUp={handleMouseUp}
    />

  </div>
);

export default SummaryBox;
