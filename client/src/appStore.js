import create from "zustand";

const useProjectStore = create((set) => ({
    project: "62d369ad443493a37a215d8b",
    updateProject: (key) => set({ project: key }),
}));

export default useProjectStore;
