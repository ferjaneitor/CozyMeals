// context/AppContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface AppContextProps {
  tempData: string | null;
  setTempData: (data: string | null) => void;
  identified: boolean;
  setIdentified: (identified: boolean) => void;
  loginType:string;
  setLoginType:(loginType: string) => void;
  Search:string;
  SetSearch:(loginType: string) => void;
}

const AppContext = createContext<AppContextProps>({
  tempData: null,
  setTempData: () => {},
  identified: false,
  setIdentified: () => {},
  loginType: '',
  setLoginType: () => {},
  Search: '',
  SetSearch: () => {},
});

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [tempData, setTempData] = useState<string | null>(null);
  console.log("🚀 ~ tempData:", tempData)
  console.log("🚀 ~ setTempData:", setTempData)
  const [identified, setIdentified] = useState<boolean>(true);
  console.log("🚀 ~ identified:", identified)
  console.log("🚀 ~ setIdentified:", setIdentified)
  const [loginType,setLoginType] = useState<string>('Receptor');
  console.log("🚀 ~ loginType:", loginType);
  console.log("🚀 ~ setLoginType:", setLoginType);
  const [Search,SetSearch] = useState<string>('')

  return (
    <AppContext.Provider value={{ tempData, setTempData, identified, setIdentified, loginType,setLoginType, Search,SetSearch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
const useAppContext = () => useContext(AppContext);

export { AppContext, AppProvider, useAppContext };
