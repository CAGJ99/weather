import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../_services/weather.service';


@Component({
  selector: 'app-weather-list',
  template: ` 
  <div class=container fxLayout="row" fxLayoutAlign="center center">
  <mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Clima Max!</mat-card-title>
    <mat-card-subtitle>Consulta el clima de tu ciudad!</mat-card-subtitle>
    <mat-card-subtitle>

        <mat-form-field class="example-full-width">
         <input matInput placeholder="Ciudad" #city required="true">
  </mat-form-field>
          <button mat-raised-button color="accent" (click)="getWeather(city.value)"><i class="material-icons">
            search
  </i></button>
  </mat-card-subtitle>
 
  </mat-card-header>
  <mat-card-content>
  <div *ngIf="Mostrar" class="card card-body text-center">
        <h1 class="h4">Información del Clima</h1>
        <p>Ciudad: {{Weather.name}}</p>
        <p>Latitud: {{Weather.coord.lat}}</p>
        <p>Longitud: {{Weather.coord.lon}}</p>
        <p>Humedad: {{Weather.main.humidity}}</p>
        <p>P.A: {{Weather.main.pressure}}</p>
        <p>Temperatura: {{Weather.main.temp}} °C</p>
        <p>Descripcion: {{Weather.weather[0].description }}</p>
      </div>
      <div *ngIf="Error" class="alert alert-danger mt-3 mb-0">
        {{Error}}</div>
  </mat-card-content>
</mat-card>

</div>
`
})
export class WeatherListComponent implements OnInit{

 Error:any; 
 Mostrar:any;
 Weather: any = [];
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private weatherApi: WeatherService,
  
  ) { }

  ngOnInit() {
    
  }
  getWeather(city: string)
  {
  this.weatherApi.getWeatherXCity(city).subscribe((data:{})=>{
    this.Weather = data;
    this.Mostrar = "correcto";
    console.log(this.Weather);
  },
  error => {
    const message = error;
    console.log(message);
    this.Error = message.statusText;
    
  });
}}



