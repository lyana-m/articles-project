export enum Country {
  Russia = 'Russia',
  USA = 'USA',
  Kazakhstan = 'Kazakhstan',
  Armenia = 'Armenia',
  Thailand = 'Thailand',
};

export const countryOptions = Object.values(Country).map((value) => ({
  value,
  label: value,
}));
