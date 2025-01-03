import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'maplibre-gl';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'map-mini-map',
  standalone: false,

  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;
  @Input() lngLat?: [number, number];

  ngAfterViewInit() {
    if(!this.divMap?.nativeElement) throw("Map div not found");
    if(!this.lngLat) throw("LngLat can't be null");

    const mapTilerKey = environment.maptiler_key;
    const map = new Map({
      container: this.divMap?.nativeElement, // container id
      style: `https://api.maptiler.com/maps/hybrid/style.json?key=${mapTilerKey}`,
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15,
      interactive: false,
      attributionControl: false,
    });


    // marker
    const marker = new Marker()
      .setLngLat(this.lngLat)
      .addTo(map);

  }

}
