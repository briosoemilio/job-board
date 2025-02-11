"use client";

import { useDataContext } from "@/core/context/DataContext";
import { FilterType, JobListing } from "@/core/context/types";
import Image from "next/image";
import {
  CompanyLogoContainer,
  CompanyNameContainer,
  FeaturedTagContainer,
  FilterTagContainer,
  FlexRowContainer,
  JobCardContainer,
  JobDetailsContainer,
  JobFiltersContainer,
  JobRoleContainer,
  MainContainer,
  NewTagContainer,
  SupplementaryDetailsContainer,
} from "./styles";

const FilterTag = ({ filter }: { filter: string }) => {
  const { onPressFilter } = useDataContext();

  return (
    <FilterTagContainer onClick={() => onPressFilter(filter as FilterType)}>
      <p className="font-semibold text-body">{filter}</p>
    </FilterTagContainer>
  );
};

const FeaturedTag = () => {
  return (
    <FeaturedTagContainer>
      <p className="text-background text-small font-bold">FEATURED</p>
    </FeaturedTagContainer>
  );
};

const NewTag = () => {
  return (
    <NewTagContainer>
      <p className="text-background text-small font-bold">NEW!</p>
    </NewTagContainer>
  );
};

const JobCard = ({ data }: { data: JobListing }) => {
  return (
    <JobCardContainer>
      <FlexRowContainer>
        <CompanyLogoContainer>
          <Image
            src={data.logo}
            alt={`${data.company}-logo`}
            width={75}
            height={75}
            className="mobile:hidden min-w-[75px]"
          />
          <Image
            src={data.logo}
            alt={`${data.company}-logo`}
            width={75}
            height={75}
            className="hidden mobile:block relative -top-14"
          />
        </CompanyLogoContainer>
        <JobDetailsContainer>
          <CompanyNameContainer>
            <p className="font-medium text-body">{data.company}</p>
            {data.new && <NewTag />}
            {data.featured && <FeaturedTag />}
          </CompanyNameContainer>
          <JobRoleContainer>
            <p className="text-black font-semibold text-heading group-hover:text-primary">
              {data.position}
            </p>
          </JobRoleContainer>
          <SupplementaryDetailsContainer>
            <p>{data.postedAt}</p>
            <p> ∙ </p>
            <p>{data.contract}</p>
            <p> ∙ </p>
            <p>{data.location}</p>
          </SupplementaryDetailsContainer>
        </JobDetailsContainer>
      </FlexRowContainer>
      <JobFiltersContainer>
        <FilterTag filter={data.role} />
        <FilterTag filter={data.level} />
        {data.languages.map((language, index) => (
          <FilterTag filter={language} key={`language-filter-${index}`} />
        ))}
        {data.tools.map((tool, index) => (
          <FilterTag filter={tool} key={`tool-filter-${index}`} />
        ))}
      </JobFiltersContainer>
    </JobCardContainer>
  );
};

export const JobList = () => {
  const { data } = useDataContext();
  return (
    <MainContainer>
      {data.map((jobListing, index) => (
        <JobCard data={jobListing} key={index} />
      ))}
    </MainContainer>
  );
};
