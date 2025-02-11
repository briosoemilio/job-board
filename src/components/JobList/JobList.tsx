"use client";

import { useDataContext } from "@/core/context/DataContext";
import { FilterType, JobListing } from "@/core/context/types";
import Image from "next/image";
import {
  CompanyLogoContainer,
  CompanyNameContainer,
  ErrorContainer,
  ErrorFooterContainer,
  ErrorHeader,
  ErrorIcon,
  FeaturedTagContainer,
  FilterTagContainer,
  FlexRowContainer,
  JobCardContainer,
  JobDetailsContainer,
  JobFiltersContainer,
  JobRoleContainer,
  MainContainer,
  NewTagContainer,
  RefreshText,
  SupplementaryDetailsContainer,
  SupplementaryDetailText,
} from "./styles";
import { ERROR_ICON } from "@/constants/errorIcon";

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
    <JobCardContainer $featured={data.featured}>
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
            <p className="text-veryDarkCyan font-semibold text-heading hover:text-primary hover:cursor-pointer">
              {data.position}
            </p>
          </JobRoleContainer>
          <SupplementaryDetailsContainer>
            <SupplementaryDetailText>{data.postedAt}</SupplementaryDetailText>
            <SupplementaryDetailText>∙</SupplementaryDetailText>
            <SupplementaryDetailText>{data.contract}</SupplementaryDetailText>
            <SupplementaryDetailText>∙</SupplementaryDetailText>
            <SupplementaryDetailText>{data.location}</SupplementaryDetailText>
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

const ErrorComponent = ({ reload }: { reload: () => void }) => {
  return (
    <ErrorContainer>
      <ErrorHeader>Errorrrrrrrr</ErrorHeader>
      <ErrorIcon>{ERROR_ICON.VARIANT_A}</ErrorIcon>
      <ErrorFooterContainer>
        <p>An unknown error has occurred please try again.</p>
        <p>
          Press to <RefreshText onClick={reload}>Refresh</RefreshText>.
        </p>
      </ErrorFooterContainer>
    </ErrorContainer>
  );
};

export const JobList = () => {
  const { data, error, reload } = useDataContext();

  if (error !== "") return <ErrorComponent reload={reload} />;

  return (
    <MainContainer>
      {data.map((jobListing, index) => (
        <JobCard data={jobListing} key={index} />
      ))}
    </MainContainer>
  );
};
