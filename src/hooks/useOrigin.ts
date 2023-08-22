
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { Location } from "../Interfaces/Locations";
import { LocationService } from "../services/LocationService";

type ActiveLocationId = Location["id"] | null;

export const useLocationFetch = (id:Location["id"]) => {
  const [activeId, setActiveId] = useState<ActiveLocationId>(null);
  const [state, fetchLocation, abortLocationFetch] = useFetch<Location>();
    
  const handleLocationFetch = (id: Location["id"]) => {
    fetchLocation((signal) => LocationService.getOne(signal, id));
  };
  
  const initializeFetch = (id: ActiveLocationId) => {
    setActiveId(id);
    abortLocationFetch();

    id !== null && handleLocationFetch(id);
  };
  useEffect(() => {
    handleLocationFetch(id);
  }, []);
  return [ state, initializeFetch] as const;
};