import { LocationInterface } from "../interface/location.interface";
import locationDAO from '../dao/location';

class LocationService {
    createLocation(locationDto: LocationInterface) {
        const { city } = locationDto;
        return locationDAO.createLocation(city);
    }

    getLocationList() {
      return locationDAO.getLocationList();
    }

    getLocationById(locationId: Number) {
        return locationDAO.getLocationById(locationId);
    }

    getLocationByPersonId(personId: Number) {
        return locationDAO.getLocationByPersonId(personId);
    }
}

export default new LocationService();
