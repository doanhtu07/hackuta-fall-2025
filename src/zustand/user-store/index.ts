import { mockUser1, User } from "@/mock/user";
import { createStore } from "zustand/vanilla";

export type UserState = {
  user: User | null;
};

export type UserActions = {
  login: () => void;
  logout: () => void;
};

export type UserStore = UserState & UserActions;

export const getDefaultUserState = (): UserState => ({
  user: null,
});

export const createUserStore = (initState: UserState = getDefaultUserState()) => {
  return createStore<UserStore>()((set) => ({
    ...initState,
    login: () => set((store) => ({ ...store, user: mockUser1 })),
    logout: () => set((store) => ({ ...store, user: null })),
  }));
};
