import tw from "tailwind-styled-components";

// Job Filter Bar Container
export const MainContainer = tw.div`
bg-white z-10 shadow-lg rounded-md flex justify-between items-center mx-5 p-6 relative -top-12 -mb-4
`;

export const FilterContainer = tw.div`
flex-4 gap-5 flex flex-wrap
`;

export const ClearButtonContainer = tw.div``;

// SubComponents

// Filter Tag
export const FilterTagContainer = tw.div`
flex flex-row
`;

export const FilterNameContainer = tw.div`
bg-background px-2 rounded-l-mg
`;

export const CloseButtonContainer = tw.div`
bg-primary flex items-center justify-center px-2 rounded-r-md flex-1

hover:cursor-pointer hover:bg-veryDarkCyan
`;
