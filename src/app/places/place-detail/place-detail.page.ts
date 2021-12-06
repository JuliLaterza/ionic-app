import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router' //El router te permite navegar
import { Place } from '../place.model';
import { PlacesService } from '../places.service';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place

  constructor(private activateRoute: ActivatedRoute, private placesService: PlacesService) { }

  ngOnInit() { //Con este código, tomo todos los datos del ID
    this.activateRoute.paramMap.subscribe(paraMap => {
      // redirect
      const recipeId = paraMap.get('placeId')
      this.place = this.placesService.getPlace(recipeId);
      console.log(this.place);
    })
  }

  deletePlace() {
    this.placesService.deletePlace(this.place.id);
  }
}
