import React, { useState, FC } from "react";
import {AppState, FeedsContext} from "./feed-context";
import {icons} from "../components/InputField/InputField";
import { v4 as uuidv4 } from "uuid";

export interface FeedItem {
    id: string;
    msg: string;
    date: string,
    status: string,
    component: React.FC
}

interface FeedsContextState {
    feeds?: FeedItem[];
}

interface FeedsContextProviderProps {
    children?: React.ReactNode;
}

const initialState: FeedsContextState = {
    feeds: [
        { id: uuidv4(), date: '2023-11-25T11:51:26+02:00', status: icons[4].text, msg: 'Hello 3', component: icons[4].component },
        { id: uuidv4(), date: '2023-11-21T11:51:26+02:00', status: icons[1].text, msg: 'Hello 2', component: icons[1].component },
        { id: uuidv4(), date: '2023-11-12T11:51:26+02:00', status: icons[0].text, msg: 'Hello 1', component: icons[0].component },
    ]
};

export const FeedsContextProvider: FC<FeedsContextProviderProps> = ({ children }) => {
    const [state, setState] = useState<FeedsContextState>(initialState);

    const updateState = (newState: FeedsContextState): void => {
        setState(newState);
    };

    const contextValue: AppState = {
        ...state,
        updateState,
    };

    return (
        <FeedsContext.Provider value={contextValue}>
            {children}
        </FeedsContext.Provider>
    );
};

