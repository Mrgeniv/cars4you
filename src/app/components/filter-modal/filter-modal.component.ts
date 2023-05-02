import { Component, OnInit, OnChanges } from '@angular/core';
import { data } from 'src/app/mock/mock-data';
import { SeriesType } from 'src/app/types';
import { Car, CarBrand } from '../../interfaces';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css'],
})
export class FilterModalComponent implements OnInit, OnChanges {
  carModels: Array< Car['details']['model'] >;
  carBrands: Array< CarBrand | 'Beliebig' >;
  selectedCarBrand: string = '';
  selectedCarSeries: string = '';
  selectedCarVariant: string = '';
  carSeriesBasedOnSelectedBrand: SeriesType[] = [];
  carVariantsBasedOnSelectedSeries: string[] = [];
  constructor(private carService: CarService) {}

 handleSelectChangeForBrand(event: Event) {
  this.selectedCarBrand = (event.target as HTMLSelectElement).value
  this.resetSelect();
  if (this.selectedCarBrand !== 'Beliebig') {
    this.carSeriesBasedOnSelectedBrand = this.carService.getSeriesBasedOnBrand(this.selectedCarBrand);
  }
}

resetSelect() {
  this.selectedCarSeries = '';
  this.carSeriesBasedOnSelectedBrand = [];
  this.carVariantsBasedOnSelectedSeries = [];
}

 handleSelectChangeForSeries(event: Event) {
  this.selectedCarSeries = (event.target as HTMLSelectElement).value
  if( this.selectedCarSeries !== 'Beliebig') {
    this.carVariantsBasedOnSelectedSeries = this.carService.getVariantsBasedOnSeries(this.selectedCarSeries);
  } else {
    this.carVariantsBasedOnSelectedSeries = [];
  }
 }

 handleSelectChangeForVariant(event: Event) {
  this.selectedCarVariant = (event.target as HTMLSelectElement).value
 }

 filterCarList(){
  if(this.selectedCarBrand && this.selectedCarSeries && this.selectedCarVariant) {
    this.carService.filterVariantInSeries(this.selectedCarBrand, this.selectedCarSeries, this.selectedCarVariant)
    
  } else if(this.selectedCarBrand && this.selectedCarSeries) {
    this.carService.filterSeriesInBrand(this.selectedCarBrand, this.selectedCarSeries);

  } else {
    this.carService.filterBrand(this.selectedCarBrand);
  }
 }

 ngOnChanges() {}


  ngOnInit() {
    this.carModels = this.carService.getCarModels();
    this.carBrands = ['Beliebig', ...this.carService.getCarBrands()];
    console.log(data);
  }
}
