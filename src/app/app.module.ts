import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReferenciaComponent } from './component/referencia/referencia.component';
import { ReferenciaModalComponent } from './component/referencia-modal/referencia-modal.component';
import { AguardeComponent } from './component/aguarde/aguarde.component';
import { ApiService } from './service/api.service';
import { MensagemService } from './service/mensagem.service';
import { AguardeService } from './service/aguarde.service';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';


registerLocaleData(localePt, 'pt-BR');

//npm install ng2-currency-mask --save
export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

import { ObserversModule } from '@angular/cdk/observers';
import { PortalModule } from '@angular/cdk/portal';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioButton } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import {MatExpansionModule} from '@angular/material/expansion';

const MATERIAL_MODULES = [
MatAutocompleteModule,
MatButtonModule,
MatButtonToggleModule,
MatCardModule,
MatChipsModule,
MatCheckboxModule,
MatDatepickerModule,
MatTableModule,
MatDialogModule,
MatFormFieldModule,
MatGridListModule,
MatIconModule,
MatInputModule,
MatListModule,
MatMenuModule,
MatPaginatorModule,
MatProgressBarModule,
MatProgressSpinnerModule,
MatRippleModule,
MatSelectModule,
MatSidenavModule,
MatSliderModule,
MatSlideToggleModule,
MatSnackBarModule,
MatSortModule,
MatStepperModule,
MatTabsModule,
MatToolbarModule,
MatTooltipModule,
OverlayModule,
PortalModule,
BidiModule,
A11yModule,
MatCommonModule,
ObserversModule,
MatExpansionModule
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeLayoutComponent,
    ReferenciaComponent,
    ReferenciaModalComponent,
    AguardeComponent,
  ],
  imports: [    
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CurrencyMaskModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MATERIAL_MODULES
  ],
  exports:[MATERIAL_MODULES],
  bootstrap: [AppComponent],
  providers: [
    AguardeService,
    ApiService,
    MensagemService,
    MatDatepickerModule,
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }, { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  entryComponents: [
    AguardeComponent,
    ReferenciaModalComponent,
  ]
})
export class AppModule { }
