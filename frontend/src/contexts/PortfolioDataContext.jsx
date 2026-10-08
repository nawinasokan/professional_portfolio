import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { fetchPortfolioData } from '../lib/portfolioApi';

const PortfolioDataContext = createContext(null);

export const PortfolioDataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = useCallback(async () => {
    try {
      const result = await fetchPortfolioData();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    refetch().finally(() => setLoading(false));
  }, [refetch]);

  return (
    <PortfolioDataContext.Provider value={{ data, loading, error, refetch }}>
      {children}
    </PortfolioDataContext.Provider>
  );
};

export const usePortfolioData = () => useContext(PortfolioDataContext);
