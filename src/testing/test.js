export const tax = (salary) => {
  const tax = 10 / 100;
  const gross = salary - salary * tax;
  return `Gross salary is Rp.${gross}`;
};

export const greeting = (name) => `Hi ${name}`;
