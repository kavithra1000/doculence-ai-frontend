import React from 'react'
import useExtractStore from '../../stores/useExtractStore';
import { X, Loader2, ArrowRight } from "lucide-react";


const ExtractionForm = ({ setActiveTab }) => {

    const { url, setUrl, fetchExtract, loading, fetchUserActions } = useExtractStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!loading && url.trim()) {
            await fetchExtract();         // ✅ wait until extraction is done
            await fetchUserActions();     // ✅ now fetch latest actions
            setActiveTab("Content");
        }
    };


    return (
        <section className="h-full w-full px-4 sm:px-6 md:px-8 mt-[100px] xl:mt-45">
            <h1 className="text-3xl font-semibold dark:text-white text-neutral-700 text-center">
                What's on your mind today?
            </h1>

            <div className="mt-8 max-w-3xl mx-auto w-full rounded-xl transition-all">
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="flex flex-col sm:flex-row  items-center gap-2 p-2 rounded-lg dark:bg-neutral-700 border border-gray-300 dark:border-neutral-600 shadow-sm">
                        {/* URL Input */}
                        <div className="relative w-full flex-1">
                            <input
                                type="url"
                                placeholder="Paste a website URL..."
                                className="w-full font-semibold text-neutral-700 pr-10 dark:bg-neutral-700 dark:text-white px-2 py-1.5  focus:outline-none focus:ring-0"
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

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading || !url.trim()}
                            aria-busy={loading}
                            className={`relative group px-6 py-3.5 rounded-lg font-medium transition-all w-full sm:w-auto min-w-[120px] flex items-center justify-center ${loading || !url.trim()
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
            </div>
        </section>

    );
};

export default ExtractionForm;