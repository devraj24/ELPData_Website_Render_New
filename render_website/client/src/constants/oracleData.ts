// Oracle Corporation Data Constants - FORCE CORRECT DISPLAY
export const ORACLE_DISPLAY_DATA = {
  name: 'Oracle Corporation',
  companyCount: '2.84M',
  fullDisplay: 'Oracle Corporation (2.84M)',
  products: '613+ Products & Technologies',
  description: '613 Products & Technologies'
} as const;

// Force Oracle Corporation display - prevents any cached data issues
export const getOracleDisplayName = (): string => {
  return ORACLE_DISPLAY_DATA.fullDisplay;
};

export const getOracleCompanyCount = (): string => {
  return ORACLE_DISPLAY_DATA.companyCount;
};