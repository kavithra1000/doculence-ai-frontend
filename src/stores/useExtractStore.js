import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js"

const useExtractStore = create((set, get) => ({  // 👈 added `get`
  url: "",
  content: "",
  summary: "",
  loading: false,
  error: "",
  actions: [],

  setUrl: (url) => set({ url }),

  fetchExtract: async () => {
    set({ loading: true, content: "", summary: "", error: "" });

    try {
      const state = get(); // ✅ use get() safely here
      const res = await axiosInstance.post("/actions", { url: state.url });

      set({
        content: res.data.content.content || "No content found.", // note the extra .content
        summary: res.data.summary || "",
        loading: false,
      });

    } catch (err) {
      const msg = err.response?.data?.message || "Failed to extract content.";
      set({ error: msg, loading: false });
    }
  },

  fetchUserActions: async () => {
    set({ loading: true, error: "" });
    try {
      const res = await axiosInstance.get("/actions");
      set({ actions: res.data, loading: false });
      
    } catch (err) {
      const msg = err.response?.data?.message || "Failed to fetch actions.";
      set({ error: msg, loading: false });
    }
  },

}));

export default useExtractStore;
