import { Component, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  sliderConfig = {
    slidesPerView: 1.2,
    spaceBetween: 5,
    centeredSlides: false
  };
  constructor(private navCtrl: NavController) {}
  
  openTransactions() {
    this.navCtrl.navigateForward('transactions');
  }
}
