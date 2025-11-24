import React from 'react';

const ContentBox = ({ content }) => {
  return (
    <div className="h-[70vh] w-full pt-5 pb-50 flex flex-col items-center will-change-transform no-scrollbar overflow-y-auto scroll-smooth px-4 sm:px-6 md:px-8 duration-250 transition-all  Monal`}>
        <Tab">
    <div
      className="prose dark:text-white  max-w-3xl break-words"
      dangerouslySetInnerHTML={{ __html: content }}
    />
    </div>

  );
};

export default ContentBox;
