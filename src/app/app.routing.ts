import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { CustomersComponent } from './modules/customers/customers.component';
import { KycRequestComponent } from './modules/kyc/kyc-request/kyc-request.component';
import { KycInfoComponent } from './modules/kyc/kyc-info/kyc-info.component';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    { path: '', pathMatch: 'full', redirectTo: 'sign-in' },

    // Redirect signed in user to the '/example'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'home' },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule) },
            { path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule) },
            { path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule) },
            { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule) },
            { path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule) },
            { path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule) },
            { path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule) }
        ]
    },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'classic'
        },
        children: [
            { path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule) },
            { path: 'kycList', loadChildren: () => import('app/modules/kyc/kyc-shared.module').then(m => m.KycSharedModule) },
           // { path: 'kycList/:id', loadChildren: () => import('app/modules/kyc/kyc-shared.module').then(m => m.KycSharedModule) },
        ]
    },
//customer route
    {
        path: '',
        component: CustomersComponent,
        data: {
            layout: 'classic'
        },
        children: [
            { path: 'customer', loadChildren: () => import('app/modules/customers/customers.module').then(m => m.CustomersModule) },
        ]
    },

    //KYC route
   /* {
       // path: '',
      //  component: KycRequestComponent,
      //  data: {
         //   layout: 'layout'
       // },
        //children: [
          //  { path: 'kycList', loadChildren: () => import('app/modules/kyc/kyc-shared.module').then(m => m.KycSharedModule) },
       // ]
 // },*/

     //KYC iNFO
     {
        path:  'kycList/:id',
        component:  KycInfoComponent,
       // data: {
           // layout: 'classic'
       // },
       /* children: [
            { path: 'kycList/:id', loadChildren: () => import('app/modules/kyc/kyc-shared.module').then(m => m.KycSharedModule) },
      ]*/
    }, 
];
