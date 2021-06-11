import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
//import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomersComponent } from './modules/customers/customers.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { AdminProfileComponent } from './modules/admin-profile/admin-profile.component';
import { KycTableComponent } from './modules/kyc-table/kyc-table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { KycRequestComponent } from './modules/kyc/kyc-request/kyc-request.component';
import { DataComponent } from './data/data.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routerConfig: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy       : PreloadAllModules,
    relativeLinkResolution   : 'legacy'
};

@NgModule({
    declarations: [
        AppComponent,
        CustomersComponent,
        AdminProfileComponent,
        KycTableComponent,
        KycRequestComponent,
        DataComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse & Fuse Mock API
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),
        //Material Module
        MatSnackBarModule,
        MatPaginatorModule,
        MatTableModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        //NgxChartsModule,
        // Core
        CoreModule,

        // Layout
        LayoutModule,

        // 3rd party modules
        MarkdownModule.forRoot({}),

        MatSortModule,

        //NgbModule.forRoot()
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
