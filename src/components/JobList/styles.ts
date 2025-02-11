import tw from "tailwind-styled-components";

// Job List Component
export const MainContainer = tw.div`mobile:mt-10`;

// Job Card Component
export const JobCardContainer = tw.div`
group bg-white min-h-[135px] z-10 shadow-lg mb-5 rounded-md flex mx-5

desktop:flex-row desktop:justify-between desktop:items-center desktop:p-10 
desktop:hover:pl-9

tablet:flex-col tablet:p-5 tablet:mx-2 tablet:hover:pl-4

mobile:mx-2 mobile:p-5 mobile:flex-col mobile:mb-16 mobile:hover:pl-4

hover:cursor-pointer hover:border-l-4 hover:border-l-primary

`;

export const FlexRowContainer = tw.div`flex flex-row`;

export const CompanyLogoContainer = tw.div``;

export const JobDetailsContainer = tw.div`
ml-5 

mobile:mt-10 mobile:-ml-[4.6rem]
`;

export const CompanyNameContainer = tw.div`flex flex-row flex-wrap gap-3

tablet:gap-0

mobile:gap-0`;

export const JobRoleContainer = tw.div``;

export const SupplementaryDetailsContainer = tw.div`flex flex-row gap-2 text-subtitle`;

export const JobFiltersContainer = tw.div`
flex flex-row flex-2 gap-4 flex-wrap

tablet:mt-5 tablet:pt-5 tablet:border-t-[1px] tablet:border-t-primary

mobile:mt-5 mobile:pt-5 mobile:border-t-[1px] mobile:border-t-primary
`;

// JobCard Sub Components

// Featured Tag
export const FeaturedTagContainer = tw.div`bg-veryDarkCyan py-1 px-2 items-center rounded-full`;

// New Tag
export const NewTagContainer = tw.div`bg-primary py-1 px-2 items-center rounded-full

tablet:mx-3

mobile:mx-3
`;

// Filter Tag
export const FilterTagContainer = tw.div`bg-background hover:bg-primary hover:text-white cursor-pointer py-1 px-3 rounded-sm`;

// Error Component
export const ErrorContainer = tw.div`text-heading`;

export const ErrorHeader = tw.p`text-header font-merriweather`;

export const ErrorIcon = tw.p`text-[12rem] mobile:text-[6rem] text-center font-merriweather`;

export const ErrorFooterContainer = tw.div`desktop:ml-10 mobile:mt-10`;

export const RefreshText = tw.span`underline font-bold hover:cursor-pointer`;
