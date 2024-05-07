import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { PricingSectionComponent } from './pricing-section/pricing-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { LaptopMacbookRepairComponent } from './laptop-macbook-repair/laptop-macbook-repair.component';
import { VirusSpywareMalwareRemovalComponent } from './virus-spyware-malware-removal/virus-spyware-malware-removal.component';
import { ComputerRepairsComponent } from './computer-repairs/computer-repairs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '*', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'features', component: FeaturesSectionComponent },
  { path: 'services', component: ServicesSectionComponent },
  { path: 'pricing', component: PricingSectionComponent },
  { path: 'contact-us', component: ContactSectionComponent },
  { path: 'laptop-macbook-repair', component: LaptopMacbookRepairComponent },
  { path: 'virus-spyware-malware-removal', component: VirusSpywareMalwareRemovalComponent },
  { path: 'computer-repairs', component: ComputerRepairsComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
