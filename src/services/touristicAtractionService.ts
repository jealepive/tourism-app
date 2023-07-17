import axios from 'axios';
import { ITouristicAttractionsResponse } from '../utils/types';
import { API_COLOMBIA_BASE_URL } from '../utils/endpoints';

export const getTouristicAttractions = async (): Promise<
  ITouristicAttractionsResponse | undefined
> => {
  try {
    //TODO: Mover URL de api-colombia como constante
    const response = await axios.get(
      `${API_COLOMBIA_BASE_URL}/TouristicAttraction/pagedList?Page=2&PageSize=6`,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
