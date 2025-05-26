import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-AboutUs',
  templateUrl: './AboutUs.component.html',
  styleUrls: ['./AboutUs.component.scss']
})
export class AboutUsComponent implements OnInit {

   teamData          : any;
   testimonialData   : any;
   missionVisionData : any;
   aboutInfo         : any;

   contactForm  : UntypedFormGroup;
   emailPattern : any = /\S+@\S+\.\S+/;

   constructor(
      private formGroup : UntypedFormBuilder
   ) { }

   ngOnInit() {
      this.initForm();
      this.getAboutInfo();
      this.getMissionVision();
      this.getTestimonialData();
      this.getTeamData();
   }

   initForm(){
      this.contactForm = this.formGroup.group({
         first_name : ['', { validators: [Validators.required] }],
         last_name  : ['', { validators: [Validators.required] }],
         email      : ['', { validators: [Validators.required, Validators.pattern(this.emailPattern)] }],
         subject    : ['', { validators: [Validators.required] }],
         message    : ['', { validators: [Validators.required] }]
      })
   }

   submitForm() {
      if(this.contactForm.invalid){
         console.log(this.contactForm.value)
         return;
      }
   }

   public getAboutInfo() {
   }

   public getMissionVision() {
   }

   public getTeamData() {
   }

   public getTestimonialData() {
   }
}

