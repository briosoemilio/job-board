"use client";

import { useDataContext } from "@/core/context/DataContext";
import { FilterType } from "@/core/context/types";
import {
  ClearButtonContainer,
  CloseButtonContainer,
  FilterContainer,
  FilterNameContainer,
  FilterTagContainer,
  MainContainer,
} from "./styles";

import RemoveIcon from "@public/images/icon-remove.svg";
import Image from "next/image";

const FilterTag = ({
  filter,
  onPressFilter,
}: {
  filter: FilterType;
  onPressFilter: (filter: FilterType) => void;
}) => {
  return (
    <FilterTagContainer>
      <FilterNameContainer>
        <p className="font-medium text-body">{filter}</p>
      </FilterNameContainer>
      <CloseButtonContainer onClick={() => onPressFilter(filter)}>
        <Image src={RemoveIcon} width={10} height={10} alt="remove-icon"/>
      </CloseButtonContainer>
    </FilterTagContainer>
  );
};

const JobFilter = () => {
  const { filters, onPressFilter, clearFilter } = useDataContext();

  if (filters.length === 0) return null;

  return (
    <MainContainer>
      <FilterContainer>
        {filters.map((filter, index) => (
          <FilterTag
            filter={filter}
            key={`filter-${index}`}
            onPressFilter={onPressFilter}
          />
        ))}
      </FilterContainer>
      <ClearButtonContainer onClick={clearFilter}>
        <p className="font-medium text-body underline hover:cursor-pointer">
          Clear
        </p>
      </ClearButtonContainer>
    </MainContainer>
  );
};

export default JobFilter;
