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

    getLocationById(personId: Number) {
        return locationDAO.getLocationById(personId);
    }
}

export default new LocationService();
