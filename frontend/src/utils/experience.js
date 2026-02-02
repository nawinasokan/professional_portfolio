export const calculateExperienceYears = (startDate) => {
  const start = new Date(startDate);
  const today = new Date();
  const years = (today - start) / (1000 * 60 * 60 * 24 * 365.25);
  return years.toFixed(1);
};
