"use client";

import { useDataContext } from "@/core/context/DataContext";
import { FilterType } from "@/core/context/types";

const FilterTag = ({
  filter,
  onPressFilter,
}: {
  filter: FilterType;
  onPressFilter: (filter: FilterType) => void;
}) => {
  return (
    <div className="flex flex-row">
      <div className="bg-background px-2 rounded-l-md">
        <p className="font-medium text-body">{filter}</p>
      </div>
      <div
        className="bg-primary hover:bg-veryDarkCyan hover:cursor-pointer flex items-center justify-center px-2 rounded-r-md"
        onClick={() => onPressFilter(filter)}
      >
        <p className="text-white">X</p>
      </div>
    </div>
  );
};

const JobFilter = () => {
  const { filters, onPressFilter, clearFilter } = useDataContext();

  if (filters.length === 0) return null;

  return (
    <div className="bg-white z-10 shadow-lg rounded-md flex justify-between items-center mx-5 p-6 relative -top-12 -mb-4">
      <div className="gap-5 flex">
        {filters.map((filter, index) => (
          <FilterTag
            filter={filter}
            key={`filter-${index}`}
            onPressFilter={onPressFilter}
          />
        ))}
      </div>
      <div onClick={clearFilter}>
        <p className="font-medium text-body underline hover:cursor-pointer">
          Clear
        </p>
      </div>
    </div>
  );
};

export default JobFilter;
