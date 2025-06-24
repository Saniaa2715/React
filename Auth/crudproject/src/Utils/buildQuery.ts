export const buildQuery = (query: any) => Object.entries(query).reduce((queryString, current) => `${queryString}&${current[0]}=${current[1]}`, '').substring(1);
