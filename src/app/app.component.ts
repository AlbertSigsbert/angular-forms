import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') myForm:NgForm;
  answer = '';
  submitted = false;
  
  user = {
    username:'',
    email: '',
    secretQuestion:'',
    answer:''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';

    this.myForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    })
  }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.myForm.value.userData.username;
    this.user.email = this.myForm.value.userData.email;
    this.user.secretQuestion = this.myForm.value.secret;
    this.user.answer = this.myForm.value.questionAnswer;
    //reset
    this.myForm.reset();
  }


}
