import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Facebook} from '@ionic-native/facebook/ngx';
import {LoadingController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loading: any;

  constructor(private router: Router,
              private fb: Facebook,
              public loadingController: LoadingController,
              private fireAuth: AngularFireAuth) {
  }

  async ngOnInit() {
    this.loading = await this.loadingController.create({message: 'Connecting ...'});
  }

  async presentLoading(loading) {
    await loading.present();
  }

  async login() {
    const res = await this.fb.login(['email']);
    alert(JSON.stringify(res));

  }

}
