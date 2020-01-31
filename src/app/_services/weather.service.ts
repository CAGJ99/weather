import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../../config';



import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
  
export class WeatherService {
    constructor(private http: HttpClient ) {}
// insertar cabeceragi
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })};

// Obtener el clima desde la API de Open Weather
getWeatherXCity(city: string): Observable<any> {
    const apiKey = '0e4e4d55dd58fa7bb8e3871c6d319361';
    const countryCode = 'CL';
    return this.http.get<any>(`${config.apiUrl}${city},${countryCode}&appid=${apiKey}&units=metric`);
}
}
