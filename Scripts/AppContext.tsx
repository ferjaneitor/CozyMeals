// context/AppContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface AppContextProps {
  tempData: string | null;
  setTempData: (data: string | null) => void;
  identified: boolean;
  setIdentified: (identified: boolean) => void;
}

const AppContext = createContext<AppContextProps>({
  tempData: null,
  setTempData: () => {},
  identified: false,
  setIdentified: () => {},
});

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [tempData, setTempData] = useState<string | null>(null);
  const [identified, setIdentified] = useState<boolean>(false);
  console.log("🚀 ~ setIdentified:", setIdentified)
  console.log("🚀 ~ setIdentified:", setIdentified)

  return (
    <AppContext.Provider value={{ tempData, setTempData, identified, setIdentified }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
const useAppContext = () => useContext(AppContext);

export { AppContext, AppProvider, useAppContext };
