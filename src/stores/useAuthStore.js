import { create } from "zustand"
import { axiosInstance } from "../lib/axios.js"
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLogging: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,

    checkAuth: async () => {
        try {

            const res = await axiosInstance.get("/auth/check");
            set({authUser: res.data})

        }catch(error) {

            set({authUser: null})
            console.log("error of zustand", error)

        } finally {

            set({isCheckingAuth: false})

        }
    },

    login: async (formData) => {
        set({isLogging: true})
        try {
            const res = await axiosInstance.post("/auth/login", formData);
            toast.success("Logged in successfully!");
            set({authUser: res.data.user});

            console.log(res.data.user)
        } catch (error) {
            console.log("error of zustand", error)
            toast.error(error.response.data.message || "Failed to log in");
        }
    },

    signup: async (formData) => {
        set({isSigningUp: true})
        try {
            const res = await axiosInstance.post("/auth/signup", formData);
            toast.success("Account created successfully!");
            set({authUser: res.data})
        } catch (error) {
            toast.error(error.response.data.message || "Failed to create account");
        } finally {
            set({isSigningUp: false})
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            set({authUser: null});
            toast.success("Logged out successfully!");
        } catch (error) {
            console.log("error of zustand", error);
            toast.error(error.response.data.message || "Failed to log out");
        }
    },

    updateProfile: async (formData) => {
        set({isUpdatingProfile: true})
        try {
            const res = await axiosInstance.put("/auth/update-profile", formData);
            set({authUser: res.data});
            toast.success("Profile updated successfully!");
        } catch (error) {
            console.log("error of zustand", error);
            toast.error(error.response.data.message || "Failed to update profile");
        } finally {
            set({isUpdatingProfile: false})
        }
    }
}))