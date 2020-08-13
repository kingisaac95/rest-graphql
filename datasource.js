const { RESTDataSource } = require('apollo-datasource-rest');

class MvrpAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000';
  }

  async getAllCars() {
    return this.get('cars');
  }

  async getACar(id) {
    const result = await this.get('cars', {
      id
    });

    return result[0];
  }
};

module.exports = MvrpAPI;