import { Routes } from '@angular/router';
import { Motorcycling } from './pages/motorcycling/motorcycling';
import { Auto } from './pages/auto/auto';
import { Inicio } from './pages/inicio/inicio';
import { MTB } from './pages/mtb/mtb';
import { MX } from './pages/mx/mx';
import { Outlet } from './pages/outlet/outlet';
import { Sportswear } from './pages/sportswear/sportswear';
import { TechAir } from './pages/tech-air/tech-air';

export const routes: Routes = [
{path: '',component: (Inicio)},
{path: 'motorcycling',component: (Motorcycling)},
{path: 'auto',component: (Auto)},
{path: 'mtb',component: (MTB)},
{path: 'mx',component: (MX)},
{path: 'outlet',component: (Outlet)},
{path: 'sportswear',component: (Sportswear)},
{path: 'tech-air',component: (TechAir)},
{path: '**',redirectTo:'' },
];
