import { useRef } from "react";

const getSelectionOffsets = (container) => {
  const selection = window.getSelection();
  if (!selection.rangeCount) return null;

  const range = selection.getRangeAt(0);
  const preSelectionRange = range.cloneRange();

  preSelectionRange.selectNodeContents(container);
  preSelectionRange.setEnd(range.startContainer, range.startOffset);
  const start = preSelectionRange.toString().length;
  const end = start + range.toString().length;

  return { start, end };
};

const ContentBox = ({ content, onSelectText }) => {
  const contentRef = useRef(null);

  const handleMouseUp = () => {
    const selection = window.getSelection();
    const selectedText = selection?.toString().trim() || "";

    const positions = getSelectionOffsets(contentRef.current); // still available if needed

    if (selectedText && onSelectText) {
      onSelectText(selectedText);
    }
  };

  if (!content) {
    return <p className="p-4 text-gray-500">No content to display.</p>;
  }

  return (
    <div
      className="overflow-y-auto w-full scroll-smooth max-h-[60vh] h-[60vh]"
      onMouseUp={handleMouseUp}
      ref={contentRef}
    >
      <div
        className="prose scroll-smooth max-w-none dark:prose-invert overflow-y-auto no-scrollbar p-14 rounded-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default ContentBox;
