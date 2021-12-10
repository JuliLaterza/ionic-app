import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router' //El router te permite navegar
import { Place } from '../place.model';
import {AlertController} from "@ionic/angular";
import { PlacesService } from '../places.service';



@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place

  constructor(private activateRoute: ActivatedRoute, private placesService: PlacesService, private router: Router, private alertCtrl: AlertController) { }
  // Con private router: Router, lo que hago es aplicar el método para redirigir Aplicable en Delete

  ngOnInit() { //Con este código, tomo todos los datos del ID
    this.activateRoute.paramMap.subscribe(paraMap => {
      // redirect
      const recipeId = paraMap.get('placeId')
      this.place = this.placesService.getPlace(recipeId);
      console.log(this.place);
    })
  }

  async deletePlace() {

    const alertElement = await this.alertCtrl.create({
      header: 'Desea eliminar el lugar?',
      message: "Si indicas 'Ok', se eliminará.",
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
      },
      {
        text: 'Ok',
        handler: () => {
          this.placesService.deletePlace(this.place.id);
          this.router.navigate(['/places']) // Cada vez que elimino un elemento, redigir a la página principal
        }
      }
    ]
    });
    await alertElement.present();
  }
}
