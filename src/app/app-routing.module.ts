import { Routes, RouterModule } from '@angular/router';
import { WeatherListComponent } from './_components/weather-list/weather-list.component';





const APP_ROUTES: Routes = [
{path: '', component: WeatherListComponent},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
