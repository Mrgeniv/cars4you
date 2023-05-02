import { Component, OnInit, OnChanges, Injectable } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

@Injectable({
  providedIn: 'root'
})

export class HomeComponent implements OnInit, OnChanges {
  carsArray: CarService['cars'] = [];
  constructor(private carService: CarService) {}

  ngOnChanges() {
    this.carsArray = this.carService.getCars();
    console.log('Change')
  }

  ngOnInit() {
    this.carsArray = this.carService.getCars();
  }
}
