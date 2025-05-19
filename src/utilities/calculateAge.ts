export const calculateAge = (birthDay: string): number => {
  const [day, month, year] = birthDay.split("-").map(Number);
  const birthDate = new Date(year, month - 1, day);
  const ageDifMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};