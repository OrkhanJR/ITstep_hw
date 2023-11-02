const year = prompt("Введите год: ");
const month = prompt("Введите месяц :");

const date = new Date(year, month - 1, 1); 
date.setMonth(date.getMonth() + 1);
date.setDate(date.getDate() - 1);

const countOfMonths = date.getDate();
console.log(`В этлм месяце ${countOfMonths} дней`);