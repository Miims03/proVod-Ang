// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://localhost:8000/api/video';

  constructor() {}
  
  getVideoData() {

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
