import {create} from 'zustand';

export const useThemeStore = create((set) => ({
  theme:'light',

  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme); 
    set({ theme });
  },
}));

