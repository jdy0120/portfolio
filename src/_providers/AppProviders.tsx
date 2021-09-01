import React, { useReducer } from "react";

import { ThemeColor } from "../types/type";
import { createCtx } from "../utils/createCtx";

const [useCtx, Provider] = createCtx<Context>();

interface Context {
  state: State;
  setTheme: (themeColor: ThemeColor) => void;
}

export enum ActionType {
  SetTheme = "set-Theme",
}

export interface State {
  themeColor?: ThemeColor;
}

const initialState: State = {
  themeColor: "Black",
};

interface SetThemeAction {
  type: ActionType.SetTheme;
  payload: ThemeColor;
}

type Action = SetThemeAction;

interface Props {
  children?: React.ReactElement;
}

type Reducer = (state: State, action: Action) => State;

const setTheme =
  (dispatch: React.Dispatch<SetThemeAction>) =>
  (themeColor: ThemeColor): void => {
    dispatch({ type: ActionType.SetTheme, payload: themeColor });
  };

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case `set-Theme`:
      return { ...state, themeColor: action.payload };
    default:
      return state;
  }
};

function AppProvider(props: Props): React.ReactElement {
  const [state, dispatch] = useReducer<Reducer>(reducer, initialState);

  const actions = {
    setTheme: setTheme(dispatch),
  };

  return <Provider value={{ state, ...actions }}>{props.children}</Provider>;
}

export { useCtx as useAppContext, AppProvider };
