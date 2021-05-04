import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { FuseConfigService } from '@fuse/services/config.service';
import { FuseAnimations } from '@fuse/animations';
import { AuthService } from '../../../core/auth/auth.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    styleUrls    : ['./sign-in.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : FuseAnimations
})
export class AuthSignInComponent implements OnInit
{
    loginForm: FormGroup;
    err:String;
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        //private _fuseConfigService: FuseConfigService,
        //private _activatedRoute: ActivatedRoute,
        private _formBuilder: FormBuilder,
        private _authService: AuthService,
        private router: Router
    )
    {
        // Configure the layout
      /*  this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };*/
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        console.log("form initiated");
        this.loginForm = this._formBuilder.group({
            log   : ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
    // -----------------------------------------------------------------------------------------------------
    // convenience getter for easy access to form fields
    //Method 1: connecting the login button for it to send a response when clicked
    // -----------------------------------------------------------------------------------------------------

    /*  get f() { 
        console.log("getting form controls");
          return this.loginForm.controls; 
        }
        onSubmit() : void
        {
        console.log("form submitted");
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

      this.loginService.loginCustomer(this.f.log.value, this.f.password.value)
            .subscribe(
                data => {
                     alert("login succesful");
                },
                error => {
                    alert("Not connected");

                });
            

    }*/

     // -----------------------------------------------------------------------------------------------------
    // convenience getter for easy access to form fields
    //Method 2: connecting the login button for it to send a response when clicked
    // -----------------------------------------------------------------------------------------------------
  OnSubmit(log: string,password: string){

    this._authService.loginCustomer(log,password).subscribe(
        (data) => {
            this.router.navigate(['/home']);
             //alert("login succesful");
             console.log("good")
        },
        (err: HttpErrorResponse) => {
            console.log("not conn")

        });
    }

}
