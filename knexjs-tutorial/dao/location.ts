import db from '../db/db';

class LocationDAO {
  async createLocation(city: String): Promise<Number> {
    const [id] = await db('location')
      .insert({
        city,
      })
      .returning('id');

    return id;
  }

  async getLocationList(): Promise<[Location]> {
    const locationList = await db('location')
      .select('*');

    return locationList;
  }

  async getLocationById(locationId: Number): Promise<Location> {
    const locationItem = await db('location')
      .first('*')
      .where('id', '=', locationId);
      return locationItem;
  }
}

export default new LocationDAO();
