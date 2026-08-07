import { create } from "zustand";

import type { StudySearchParams } from "@/lib/api/types";
import type { StudyStatus } from "@/types/study.types";

const DEFAULT_SEARCH: StudySearchParams = {
  term: "",
  location: "",
  status: undefined,
  missingField: undefined,
  pageToken: undefined,
  pageSize: 20,
  previousPageTokens: [],
};

interface StudySearchStore {
  search: StudySearchParams;

  updateSearch(
    updates: Partial<StudySearchParams>,
  ): void;

  setTerm(term: string): void;

  setStatus(
    status?: StudyStatus[],
  ): void;

  setLocation(
    location: string,
  ): void;

  setMissingField(
    missingField?: string,
  ): void;

  nextPage(
    nextPageToken?: string,
  ): void;

  previousPage(): void;

  resetPagination(): void;

  setTotalCount(total?: number): void;

  reset(): void;
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
          previousPageTokens: [],
        },
      })),

    setStatus: (status) =>
      set((state) => ({
        search: {
          ...state.search,
          status,
          pageToken: undefined,
          previousPageTokens: [],
        },
      })),

    setLocation: (location) =>
      set((state) => ({
        search: {
          ...state.search,
          location,
          pageToken: undefined,
          previousPageTokens: [],
        },
      })),

    setMissingField: (missingField) =>
      set((state) => ({
        search: {
          ...state.search,
          missingField,
          pageToken: undefined,
          previousPageTokens: [],
        },
      })),

    nextPage: (nextPageToken) =>
      set((state) => ({
        search: {
          ...state.search,

          previousPageTokens: [
            ...state.search.previousPageTokens,
            state.search.pageToken ?? "",
          ],

          pageToken: nextPageToken,
        },
      })),

    previousPage: () =>
      set((state) => {
        const history = [
          ...state.search.previousPageTokens,
        ];

        const previous =
          history.pop() ?? "";

        return {
          search: {
            ...state.search,
            previousPageTokens: history,
            pageToken:
              previous || undefined,
          },
        };
      }),

    resetPagination: () =>
      set((state) => ({
        search: {
          ...state.search,
          pageToken: undefined,
          previousPageTokens: [],
        },
      })),

    setTotalCount: (totalCount) =>
      set((state) => ({
        search: {
          ...state.search,
          totalCount,
        },
      })),

    reset: () => ({
      search: DEFAULT_SEARCH,
    }),
  }));
