const carResolvers = {
  Query: {
    car: (root, { id }, { dataSources }) => dataSources.mvrpAPI.getACar(id),
    cars: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllCars(),
  },
  Car: {
    vehicleStatus: ({ status }) => status,
    yearOfManufacture: ({ productionYear }) => productionYear,
  },
};

module.exports = carResolvers;
