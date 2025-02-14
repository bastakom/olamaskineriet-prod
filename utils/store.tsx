import { create } from "zustand";

interface IsOpenMenu {
  soundOpen: boolean;
  setSoundOpen: (value: boolean) => void;
  liveOpen: boolean;
  setLiveOpen: (value: boolean) => void;
  volumeOpen: boolean;
  setVolumeOpen: (value: boolean) => void;
  videoBlock: string | null;
  setVideoBlock: (value: string) => void;
  soundOn: string;
  setSoundOn: (value: string) => void;
}

const useStore = create<IsOpenMenu>((set) => ({
  soundOpen: false,
  setSoundOpen: (value) => set({ soundOpen: value }),
  liveOpen: false,
  setLiveOpen: (value) => set({ liveOpen: value }),
  volumeOpen: false,
  setVolumeOpen: (value) => set({ volumeOpen: value }),
  videoBlock: null,
  setVideoBlock: (value) => set({ videoBlock: value }),
  soundOn: "",
  setSoundOn: (value) => set({ soundOn: value }),
}));

export default useStore;
