import axios from 'axios';
import { API_URL, HEADERS } from '../config';
import { parseResponse } from './response';

export default class EventsOne {
  // eslint-disable-next-line consistent-return
  static getEvents = async (guideID) => {
    try {
        const response = await axios.get(`${API_URL}UpcomingTastings/Guide/${guideID}`,
         {headers: HEADERS,});
        return parseResponse(response);
    } 
    catch (error) {
        return { message: 'failed', payload: error };
    }
  };  
}