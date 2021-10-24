import { RouterModule, Routes } from '@angular/router';

import {
    HomeMainPageComponent,
    PostPageComponent,
    AboutComponent
} from './shared/index.page';

const app_routes: Routes = [
    { path: 'inicio', component: HomeMainPageComponent },
    { path: 'sobre-mi', component: AboutComponent },
    { path: 'post', component: PostPageComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });