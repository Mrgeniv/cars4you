import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/interfaces';
import { CarService } from 'src/app/services/car.service';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  carId: number;
  sub: any;
  currentCar: Car;

  pdfSrc: string = '';
  firstName:string = '';
  lastName:string = '';
  username:string = '';
  email:string = '';
  adress:string = '';
  adress2:string = '';
  country:string = '';
  state:string = '';
  plz:string = '';


  handleCountryChange(event:Event){
    this.country = (event.target as HTMLInputElement).value;
  }
  handleStateChange(event:Event){
    this.state = (event.target as HTMLInputElement).value;
  }




  constructor(private route: ActivatedRoute,private carService:CarService){}


  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.carId = +params['id'];
    });
    this.currentCar = this.carService.getCarById(this.carId);

    
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
  loadPdf() {




    const doc = new jsPDF();
    doc.text('Mietvertrag', 10, 10);
    doc.text('Vermieter: Car4You',10,20);
    doc.text('Straße: Musterstraße 1',10,30);
    doc.text('Postleitzahl: 11111 Musterstadt',10,40);
    doc.text('Tel: 0421/ 12345678 ',10,50);
    doc.text('Email: cars4you@gmail.com',10,60);

    doc.text(`Mieter: ${this.firstName}`+` `+`${this.lastName}`, 10, 80);
    doc.text(`Benutzername: ${this.username}`, 10, 90);
    doc.text(`Adresse: ${this.adress}`, 10, 100);
    doc.text(`Adresse2: ${this.adress2}`, 10, 110);
    doc.text(`Plz: ${this.plz}`, 10, 120);
    doc.text(`Land: ${this.country}`, 10, 130);
    doc.text(`Bundesland: ${this.state}`, 10, 140);
    

    doc.text(`Autoinformationen:`, 10, 160);
  
    doc.text(`Autoname: ${this.currentCar.details.brand} ${this.currentCar.details.series} ${this.currentCar.details.variant} ${this.currentCar.details.modifications} ${this.currentCar.details.model}`, 10, 170);
    doc.text(`Zulasssungsdatum: ${this.currentCar.details.yearOfConstruction}`, 10, 180);
    doc.text(`Tankart: ${this.currentCar.details.fuelType}`, 10, 190);
    doc.text(`Verbrauch 1/100km: ${this.currentCar.details.fuelConsumptionRateInLiter}`, 10, 200);
    doc.text(`Getriebe: ${this.currentCar.details.transmissionType}`, 10, 210);
    doc.text(`Mietpreise: ${this.currentCar.details.price}`, 10, 220);
    doc.text(`Anzahl Sitze: ${this.currentCar.details.seatsAmount}`, 10, 230);
    doc.text(`Abgabe/Abhol - Ort: ${this.currentCar.details.placeOfRental}`, 10, 240);




    doc.save('car-details.pdf');



    // Aktualisiere den Wert von pdfSrc mit dem generierten PDF
    this.pdfSrc = doc.output('datauristring');
  }





}
