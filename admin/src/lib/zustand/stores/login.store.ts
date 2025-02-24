import { createStore } from "zustand/vanilla";
import { persist, createJSONStorage } from "zustand/middleware";

export type LoginState = {
  isLogin: boolean;
  accessToken: string;
  refreshToken: string;
};

export type LoginActions = {
  getAccessToken: () => string;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  getIsLogin: () => boolean;
  setIsLogin: (isLogin: boolean) => void;
};

export type LoginStore = LoginState & LoginActions;

export const defaultInitState: LoginState = {
  isLogin: false,
  accessToken: "",
  refreshToken: "",
};

export const useLoginStore = (
  initState: LoginState = defaultInitState
) => {
  return createStore<LoginStore>()(
    persist(
      (set, get) => ({
        ...initState,
        getAccessToken: () => get().accessToken,
        setAccessToken: (accessToken) => set(() => ({ accessToken })),
        setRefreshToken: (refreshToken) =>
          set(() => ({ refreshToken })),
        setIsLogin: (isLogin) => set(() => ({ isLogin })),
        getIsLogin: () => get().isLogin,
      }),
      {
        name: "login",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  );
};
