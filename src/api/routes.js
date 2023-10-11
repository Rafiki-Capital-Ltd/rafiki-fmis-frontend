export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const COUNTY_ROUTE = '/counties';
export const CONSTITUENCY_ROUTE = '/constituencies';
export const SUBCOUNTY_ROUTE = '/subcounties';

export const LOGIN_ROUTE = '/auth/login';
export const LOGOUT_ROUTE = '/auth/logout';
export const REGISTER_ROUTE = '/auth/register';
export const PROFILE_ROUTE = '/auth/profile';
export const REFRESH_TOKEN_ROUTE = '/auth/refresh';

export const USER_ROLES_COUNT_ROUTE = '/users/count';

export const FARMS_ROUTE = '/farms';
export const FARM_CONTEXT_ROUTE = FARMS_ROUTE + '/context';

export const FARM_ASSETS_ROUTE = '/farm-assets';
export const FARM_ASSETS_COUNT_ROUTE = FARM_ASSETS_ROUTE + '/count';

export const FARM_INPUTS_ROUTE = '/farm-inputs';
export const FARM_INPUTS_COUNT_ROUTE = FARM_INPUTS_ROUTE + '/count';

export const FARM_ANIMALS_ROUTE = '/farm-animals';
export const FARM_CROPS_ROUTE = '/farm-crops';

export const FARM_CONSUMPTIONS_ROUTE = '/farm-consumptions';
export const FARM_CONSUMPTIONS_TOTAL_ROUTE = FARM_CONSUMPTIONS_ROUTE + '/total';

export const FARM_PRODUCTIONS_ROUTE = '/farm-productions';
export const FARM_PRODUCTIONS_TOTAL_ROUTE = FARM_PRODUCTIONS_ROUTE + '/total';

export const FARM_SALES_ROUTE = '/farm-sales';
export const FARM_SALES_TOTAL_ROUTE = FARM_SALES_ROUTE + '/total';

export const FARM_PURCHASES_ROUTE = '/farm-purchases';
export const FARM_PURCHASES_TOTAL_ROUTE = FARM_PURCHASES_ROUTE + '/total';

export const FARM_EXPENSES_ROUTE = '/farm-expenses';
export const FARM_EXPENSES_TOTAL_ROUTE = FARM_EXPENSES_ROUTE + '/total';
