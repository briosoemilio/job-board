import { FilterType, Languages, Level, Role, Tools } from "../context/types";

export const getFilterType = (filterType: FilterType) => {
  // Create values array
  const levels = Object.values(Level);
  if (levels.includes(filterType as Level)) {
    // Check if filter type includes array
    return "Level";
  }

  const languages = Object.values(Languages);
  if (languages.includes(filterType as Languages)) {
    return "Languages";
  }

  const tools = Object.values(Tools);
  if (tools.includes(filterType as Tools)) {
    return "Tools";
  }

  const roles = Object.values(Role);
  if (roles.includes(filterType as Role)) {
    return "Roles";
  }

  return null;
};
