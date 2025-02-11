"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { JobListing, Languages } from "./types";
import { fetchData } from "../fetch/fetchData";
import { getErrorMessage } from "../utils/getErrorMessage";

export const useDataContext = () => useContext(DataContext);

export interface DataContextType {
  data: JobListing[];
  isLoading: boolean;
  error: string;
  addFilter: (filter: Languages) => void;
  removeFilter: (filter: Languages) => void;
  clearFilter: () => void;
}

export const DataContext = createContext<DataContextType>({
  data: [],
  isLoading: false,
  error: "",
  addFilter: () => {
    // placeholder
  },
  removeFilter: () => {
    // placeholder
  },
  clearFilter: () => {
    // placeholder
  },
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  // React Hooks
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<JobListing[]>([]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const res = await fetchData();
      setData(res);
    } catch (err) {
      const _error = getErrorMessage(err);
      setError(_error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Functions
  const addFilter = (filter: string) => {
    console.log({ filter });
  };
  const removeFilter = (filter: string) => {
    console.log({ filter });
  };
  const clearFilter = () => {
    setData([]);
  };

  return (
    <DataContext.Provider
      value={{ data, isLoading, error, addFilter, removeFilter, clearFilter }}
    >
      {children}
    </DataContext.Provider>
  );
};
