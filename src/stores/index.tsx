import { createStore, useStore } from 'zustand';

interface IThemeProps {
  dark: boolean;
}

interface IThemeStore extends IThemeProps {
  setDark: (updater: (prev: boolean) => boolean) => void;
}

export const userThemeStore = createStore<IThemeStore>()(set => ({
  dark: false,
  setDark: updater => set(state => ({ dark: updater(state.dark) }))
}));

export const useThemeState = () => useStore(userThemeStore);
