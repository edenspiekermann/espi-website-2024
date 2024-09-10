export interface JobDescriptionProperties {
  jobDescriptions: Description[];
}

type Description = {
  name: string;
  value: string;
};
