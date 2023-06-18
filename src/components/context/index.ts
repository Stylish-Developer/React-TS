import { createContext } from 'react';

//-- interface type for context
export interface contextInterface {
    employeeName: string
}

export const AppContext = createContext<contextInterface | null>(null);

const AppContextProvider = AppContext.Provider;
const AppContextConsumer = AppContext.Consumer;

export { AppContextProvider, AppContextConsumer };
