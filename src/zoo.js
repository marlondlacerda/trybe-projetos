const data = require('./data');

function getSpeciesByIds(...ids) {
// seu código aqui
  const findSpecie = [];

  ids.forEach((id) => findSpecie.push(data.species.find((specie) => specie.id === id)));
  return findSpecie;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const findSpecie = data.species.find((specie) => specie.name === animal).residents;
  return findSpecie.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees.find((employee) => (employee.firstName === employeeName)
  || (employee.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const verifyI = data.employees.find((employee) => employee.id === id);
  if (verifyI.firstName === 'Stephanie') return true;
  return verifyI.managers.some((manager) => manager === '9e7d4524-363c-416a-8759-8aa7e50c0992');
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(newEmployee);
  return data.employees;
}

function countAnimals(findByName) {
  // seu código aqui
  const countSpecies = data.species
  // Source de pesquisa https://youtu.be/NiLUGy1Mh4U?t=946
    .reduce((acc, specie) => ({ ...acc, [specie.name]: specie.residents.length }), {});

  if (!findByName) return countSpecies;
  return (data.species.find((findSpecie) => findSpecie.name === findByName)).residents.length;
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * data.prices.Adult) + (Child * data.prices.Child) + (Senior * data.prices.Senior);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const findEmployee = data.employees.find((employee) => employee.id === id).responsibleFor[0];

  const { name, sex, age } = (data.species.find((specie) => specie.id === findEmployee).residents)
    .reduce((acc, animal) => ((animal.age > acc.age) ? animal : acc));

  return [name, sex, age];
}

function increasePrices(percentage) {
  // seu código aqui
  const percento = (percentage / 100) + 1;

  Object.keys(data.prices).forEach((person) => {
    data.prices[person] = Math.round((data.prices[person] * percento * 100)) / 100;
  });
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
