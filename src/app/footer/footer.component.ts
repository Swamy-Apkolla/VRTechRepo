import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  loading = false;
  isSent = false;
  errorMessage = '';

  onSubmit() {
    if (this.loading) {
      return; // Prevent multiple submissions while already processing one
    }

    this.loading = true;
    // Here, you can implement your logic to send the subscription request to the server
    // Once the request is completed, update the loading, isSent, and errorMessage accordingly
    setTimeout(() => {
      this.loading = false;
      alert('Email Sent');
      this.isSent = true;
    }, 2000); // For demo purpose, assuming the request takes 2 seconds
  }
}
