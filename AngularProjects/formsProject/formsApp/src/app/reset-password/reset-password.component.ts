import { Component } from '@angular/core';
import { Test } from '../ObservableTest';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  testObserver(){
    let test = new Test();
    test.invoke();
  }
}
