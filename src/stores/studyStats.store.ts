import { create } from "zustand";

import type {
  StatTypes,
  StudyFieldSearchParams,
} from "@/lib/api/types";

const DEFAULT_SEARCH: StudyFieldSearchParams = {
  types: [],
  fields: [],
};

interface StudyStatsStore {
  search: StudyFieldSearchParams;

  updateSearch: (
    updates: Partial<StudyFieldSearchParams>,
  ) => void;

  setTypes: (
    types: StatTypes[],
  ) => void;

  setFields: (
    fields: string[],
  ) => void;

  reset: () => void;
}

export const useStudyStatsStore =
  create<StudyStatsStore>((set) => ({
    search: DEFAULT_SEARCH,

    updateSearch: (updates) =>
      set((state) => ({
        search: {
          ...state.search,
          ...updates,
        },
      })),

    setTypes: (types) =>
      set((state) => ({
        search: {
          ...state.search,
          types,
        },
      })),

    setFields: (fields) =>
      set((state) => ({
        search: {
          ...state.search,
          fields,
        },
      })),

    reset: () => ({
      search: DEFAULT_SEARCH,
    }),
  }));
