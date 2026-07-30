// stores/studySearch.store.ts

import { create } from "zustand";

import type { StudySearchParams } from "@/lib/api/types";
import type { StudyStatus } from "@/types/study.types";

const DEFAULT_SEARCH: StudySearchParams = {
  term: "",
  location: "",
  status: undefined,
  pageToken: undefined,
  pageSize: 20,
};

interface StudySearchStore {
  search: StudySearchParams;

  updateSearch: (
    updates: Partial<StudySearchParams>,
  ) => void;

  setTerm: (term: string) => void;

  setStatus: (
    status?: StudyStatus[],
  ) => void;

  setLocation: (
    location: string,
  ) => void;

  setPageToken: (
    pageToken?: string,
  ) => void;

  reset: () => void;
}

export const useStudySearchStore =
  create<StudySearchStore>((set) => ({
    search: DEFAULT_SEARCH,

    updateSearch: (updates) =>
      set((state) => ({
        search: {
          ...state.search,
          ...updates,
        },
      })),

    setTerm: (term) =>
      set((state) => ({
        search: {
          ...state.search,
          term,
          pageToken: undefined,
        },
      })),

    setStatus: (status) =>
      set((state) => ({
        search: {
          ...state.search,
          status,
          pageToken: undefined,
        },
      })),

    setLocation: (location) =>
      set((state) => ({
        search: {
          ...state.search,
          location,
          pageToken: undefined,
        },
      })),

    setPageToken: (pageToken) =>
      set((state) => ({
        search: {
          ...state.search,
          pageToken,
        },
      })),

    reset: () =>
      set({
        search: DEFAULT_SEARCH,
      }),
  }));
