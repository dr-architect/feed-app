import React from "react";
import {FeedItem} from "./feed-context-provider";
export interface AppState {
    feeds?: FeedItem[];
    updateState: (newState: Partial<AppState>) => void;
}
export const defaultState: AppState = {
    feeds: [],
    updateState: () => {}
};

export const FeedsContext = React.createContext(defaultState);
