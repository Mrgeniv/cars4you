import {
    CAR_BRANDS,
    CAR_CONSTRUCTIONYEAR,
    CAR_FUEL,
    CAR_MODEL,
    CAR_MODS,
    CAR_SERIES,
    CAR_SITS, CAR_TRANSMISSION,
    CAR_VARIANTS
} from "../types/index";

export type CarDetails = { model: CAR_MODEL, price: number, horsePower: number, seatsAmount: CAR_SITS, transmissionType: CAR_TRANSMISSION, fuelType: CAR_FUEL, brand: CAR_BRANDS, series: CAR_SERIES, variant?: CAR_VARIANTS, modifications?: CAR_MODS, yearOfConstruction: CAR_CONSTRUCTIONYEAR, fuelConsumptionRateInLiter?: number, placeOfRental?: string }
export type CarBrand = CarDetails['brand'];
export interface Car {
    id: number,
    details: CarDetails
    knz?: string,
    image?: string
}

