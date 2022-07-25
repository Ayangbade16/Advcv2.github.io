import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationComponent } from './certification/certification.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [{path : "education", component: EducationComponent},
                        {path : "certification", component: CertificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
