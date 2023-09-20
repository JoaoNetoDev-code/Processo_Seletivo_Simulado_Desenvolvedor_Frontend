import { createContext, useState } from 'react';
import { ContextType, DataType } from '../type';

export const UseNewsContext = createContext({} as ContextType);

function UseNewsProvider({ children } : { children: React.ReactNode }) {
  const [news, setNews] = useState({} as DataType);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState(10);

  const contextDatas = {
    news, setNews, isLoading, setIsLoading, page, setPage,
  };

  return (
    <UseNewsContext.Provider value={ contextDatas }>
      {children}
    </UseNewsContext.Provider>
  );
}

export default UseNewsProvider;
