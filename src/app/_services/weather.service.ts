import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config';


import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(private http: HttpClient ) {}

// Obtener el clima desde la API de Open Weather
getWeatherXCity(city: string): Observable<any> {
    return this.http.get<any>(`${config.apiUrl}${city}`);
}
}
