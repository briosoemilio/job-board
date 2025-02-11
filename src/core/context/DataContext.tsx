"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { FilterType, JobListing } from "./types";
import { fetchData } from "../fetch/fetchData";
import { getErrorMessage } from "../utils/getErrorMessage";
import { getFilterType } from "../utils/getFilterType";

export const useDataContext = () => useContext(DataContext);

export interface DataContextType {
  data: JobListing[];
  filters: FilterType[];
  isLoading: boolean;
  error: string;
  onPressFilter: (filter: FilterType) => void;
  clearFilter: () => void;
}

export const DataContext = createContext<DataContextType>({
  data: [],
  filters: [],
  isLoading: false,
  error: "",
  onPressFilter: () => {
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
  const [allData, setAllData] = useState<JobListing[]>([]);
  const [filters, setFilters] = useState<FilterType[]>([]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const res = await fetchData();
      setAllData(res);
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

  useEffect(() => {
    // update data here
    const filterData = () => {
      if (filters.length === 0) return allData;

      return allData.filter((jobListing) => {
        return filters.every((filter) => {
          const filterType = getFilterType(filter);

          switch (filterType) {
            case "Level":
              return jobListing.level === filter;
            case "Languages":
              return jobListing.languages.includes(filter);
            case "Tools":
              return jobListing.tools.includes(filter);
            case "Roles":
              return jobListing.role.includes(filter);
          }
        });
      });
    };

    setData(() => filterData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  // Functions
  const onPressFilter = (filter: FilterType) => {
    if (filters.includes(filter)) {
      return setFilters((prevFilters) =>
        prevFilters.filter((f) => f !== filter)
      );
    }
    setFilters((prev) => [...prev, filter]);
  };

  const clearFilter = () => {
    setFilters([]);
  };

  return (
    <DataContext.Provider
      value={{ data, filters, isLoading, error, onPressFilter, clearFilter }}
    >
      {children}
    </DataContext.Provider>
  );
};
