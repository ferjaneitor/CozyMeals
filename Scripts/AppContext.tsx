// context/AppContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface AppContextProps {
  tempData: string | null;
  setTempData: (data: string | null) => void;
}

const AppContext = createContext<AppContextProps>({
  tempData: null,
  setTempData: () => {},
});

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [tempData, setTempData] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ tempData, setTempData }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
const useAppContext = () => useContext(AppContext);

export { AppContext, AppProvider, useAppContext };
