import { create } from 'zustand';

// Mapping from navigation menu items to service IDs
export const serviceIdMap: Record<string, string> = {
  "Geophysical Surveys": "geophysics",
  "Drilling & Sampling": "drilling",
  "Digital Solutions": "digital",
  "Resource Estimation & BFS": "modeling",
  "Environmental & Closure": "environmental",
  "Laboratory": "laboratory",
  "Sales": "sales",
  "Training": "training",
};

interface ActiveServiceStore {
  pendingServiceId: string | null;
  setPendingServiceId: (id: string | null) => void;
  clearPendingServiceId: () => void;
}

export const useActiveServiceStore = create<ActiveServiceStore>((set) => ({
  pendingServiceId: null,
  setPendingServiceId: (id) => set({ pendingServiceId: id }),
  clearPendingServiceId: () => set({ pendingServiceId: null }),
}));
