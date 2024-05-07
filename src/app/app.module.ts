import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FeaturedServicesComponent } from './featured-services/featured-services.component';
import { ClientsComponent } from './clients/clients.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { FeaturesDetailsSectionComponent } from './features-details-section/features-details-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { PricingSectionComponent } from './pricing-section/pricing-section.component';
import { FaqSectionComponent } from './faq-section/faq-section.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FormsModule } from '@angular/forms';
import { LaptopMacbookRepairComponent } from './laptop-macbook-repair/laptop-macbook-repair.component';
import { VirusSpywareMalwareRemovalComponent } from './virus-spyware-malware-removal/virus-spyware-malware-removal.component';
import { ComputerRepairsComponent } from './computer-repairs/computer-repairs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HeroSectionComponent,
    FeaturedServicesComponent,
    ClientsComponent,
    FeaturesSectionComponent,
    FeaturesDetailsSectionComponent,
    ServicesSectionComponent,
    PricingSectionComponent,
    FaqSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent,
    LaptopMacbookRepairComponent,
    VirusSpywareMalwareRemovalComponent,
    ComputerRepairsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Import FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
})
export class AppModule { }
