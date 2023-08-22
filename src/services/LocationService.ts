import { Location } from "../Interfaces/Locations";
import { Signal } from "../hooks/useFetch";





export const LocationService = {
  
  getOne: async (signal: Signal, id: Location["id"]): Promise<Location> => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location/${id}`,
      {
        signal,
      }
    );

    if (response.status < 200 || response.status >= 400) {
      return Promise.reject(new Error("Error"));
    }

    const location=await response.json();

    return location;
  },
};