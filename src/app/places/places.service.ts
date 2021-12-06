import { Injectable } from '@angular/core';
import {Place} from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Torre Eiffel',
      imageURL: 'https://images.chicmagazine.com.mx/YaunwslDzprh_vg7kiIQ7IkX9ig=/958x596/uploads/media/2021/03/31/torre-eiffel-ingeniero-gustave-eiffel.jpg',
      comments: ['Hermoso Lugar','Volvería otra vez']
    },
    {
      id: '2',
      title: 'Estatua de la libertad',
      imageURL: 'https://static.anuevayork.com/wp-content/uploads/2019/07/11084916/Como-visitar-la-Estatua-de-la-Libertad-en-Nueva-York-1500-2.jpg',
      comments: ['Magnifica']
    },
    {
      id: '3',
      title: 'Obelisco',
      imageURL: 'https://demigranteaturista.com/wp-content/uploads/2020/07/OBELISCO-PORTADA-PPAL.jpeg',
      comments: ['Argentinismo']
    },
    {
      id: '4',
      title: 'Coliseo',
      imageURL: 'https://www.enroma.com/wp-content/uploads/2021/07/Coliseo-Romano.jpg',
      comments: ['Histórico','Salvaje']
    },
    {
      id: '5',
      title: 'Auschwitz',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Auschwitz_I_%2822_May_2010%29.jpg',
      comments: ['Siglo XX','Terror']
    }
  ]
  constructor() { }

  getPlaces() {
    return [...this.places] // Hace una copia de los elementos de arriba
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }

  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments:[],
      id: `${this.places.length + 1}`
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }

}
