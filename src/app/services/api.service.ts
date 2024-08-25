// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/video';

  constructor() {}
  
  getData() {

    return axios.get(`${this.apiUrl}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error('Erreur lors de la requête GET:', error);
        throw error;
      });
  }
}
