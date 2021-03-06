import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import {
  LoadingController,
  ToastController,
  AlertController,
} from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  validations_form: FormGroup;
  image: any;
  item: any;
  load: boolean = false;

  constructor(
    private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private webview: WebView,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data;
        this.image = this.item.image;
      }
    });
    this.validations_form = this.formBuilder.group({
      title: new FormControl(this.item.title, Validators.required),
      description: new FormControl(this.item.description, Validators.required),
      price: new FormControl(this.item.price, Validators.required),
      location: new FormControl(this.item.location, Validators.required),
    });
  }

  upateProfile(value) {
    let data = {
      name: value.name,
      username: value.username,
      age: value.age,
      bio: value.bio,
      image: this.image,
    };
    this.firebaseService.updateProfile(this.item.id, data).then(res => {
      this.router.navigate(['/client']);
    });
  }

  onSubmit(value) {
    let data = {
      title: value.title,
      description: value.description,
      price: value.price,
      location: value.location,

      image: this.image,
    };
    this.firebaseService.updateEvent(this.item.id, data).then(res => {
      this.router.navigate(['/client']);
    });
  }

  async delete() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: 'Do you want to delete ' + this.item.title + '?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {},
        },
        {
          text: 'Yes',
          handler: () => {
            this.firebaseService.deleteEvent(this.item.id).then(
              res => {
                this.router.navigate(['/client']);
              },
              err => console.log(err)
            );
          },
        },
      ],
    });
    await alert.present();
  }

  openImagePicker() {
    this.imagePicker.hasReadPermission().then(
      result => {
        if (result == false) {
          // no callbacks required as this opens a popup which returns async
          this.imagePicker.requestReadPermission();
        } else if (result == true) {
          this.imagePicker
            .getPictures({
              maximumImagesCount: 1,
            })
            .then(
              results => {
                for (var i = 0; i < results.length; i++) {
                  this.uploadImageToFirebase(results[i]);
                }
              },
              err => console.log(err)
            );
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  async uploadImageToFirebase(image) {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
    });
    const toast = await this.toastCtrl.create({
      message: 'Image was updated successfully',
      duration: 3000,
    });
    this.presentLoading(loading);
    // let image_to_convert = 'http://localhost:8080/_file_' + image;
    let image_src = this.webview.convertFileSrc(image);
    let randomId = Math.random()
      .toString(36)
      .substr(2, 5);

    //uploads img to firebase storage
    this.firebaseService.uploadImage(image_src, randomId).then(
      photoURL => {
        this.image = photoURL;
        loading.dismiss();
        toast.present();
      },
      err => {
        console.log(err);
      }
    );
  }

  async presentLoading(loading) {
    return await loading.present();
  }
}
