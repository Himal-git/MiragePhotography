import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'

	const routes: Routes = [
		{
			path: '/my-new-route',
			component: MyNewRouteComponent,
		},
		{
			path: '',
			component: DashboardComponent,
		},
	];



@NgModule({
	imports: [
		RouterModule.forRoot(routes)
    ],
	exports: [
		RouterModule
	],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
