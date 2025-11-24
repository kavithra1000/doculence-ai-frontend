import React from "react";
import { Loader2, ArrowRight, X } from "lucide-react";
import useExtractStore from "../../stores/useExtractStore";

const ExtractorForm = ({ setActiveTab }) => {
  const { url, setUrl, fetchExtract, loading } = useExtractStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading && url.trim()) {
      fetchExtract();
      setActiveTab("content");
    }
  };

  return (
    <section className="rounded-xl p-6 sm:p-8 md:p-12 my-6 sm:my-8 max-w-full border-[2px] border-dashed border-indigo-500 hover:shadow transition-all">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
          <div className="relative w-full">
            <input
              type="url"
              placeholder="Paste a website URL..."
              className="w-full pr-10 border border-gray-300 bg-white rounded-lg px-4 py-3 sm:py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-gray-800"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              aria-label="Website URL to extract content from"
            />
            {url && (
              <button
                type="button"
                onClick={() => setUrl("")}
                aria-label="Clear URL"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !url.trim()}
            aria-busy={loading}
            className={`group px-6 py-3 sm:py-3.5 rounded-lg font-medium transition-all w-full sm:w-auto min-w-[120px] flex items-center justify-center ${
              loading || !url.trim()
                ? "bg-blue-700/90 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800 cursor-pointer shadow-md hover:shadow-lg"
            } text-white`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin w-5 h-5" />
                Extracting...
              </span>
            ) : (
              <span className="flex items-center gap-1 group-hover:gap-2 transition-all">
                Extract
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </span>
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ExtractorForm;