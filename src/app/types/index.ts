/* Brands */
export enum CAR_BRANDS {
    VW = 'VW',
    AUDI = 'Audi',
    MERCEDES = 'Mercedes Benz',
    BMW = 'Bmw',
    FIAT = 'Fiat',
    OPEL = 'Opel',
    HYUNDAI = 'Hyundai',
    TESLA = 'Tesla',
    POLESTAR = 'Polestar',
    MG = 'MG',
    LYNKCO = 'Lynk & Co'
}

export type BrandType = { brandId: CAR_BRANDS, series: Array<SeriesType>, mods: Array<string>  }
export type SeriesType = { seriesId: CAR_SERIES, variants: VariantsType };
export type VariantsType = Array<string>
export type CarsData = Array<BrandType>

/* Modifikation */
export type CAR_MODS = POLESTAR_MOD_ENUM| MG_MOD_ENUM | LYNKCO_MOD_ENUM | VW_MOD_ENUM | AUDI_MOD_ENUM | MERCEDES_MOD_ENUM | TESLA_MOD_ENUM | HYUNDAI_MOD_ENUM | MERCEDES_MOD_ENUM | BMW_MOD_ENUM | FIAT_MOD_ENUM | OPEL_MOD_ENUM
export type VW_MOD = []
export type AUDI_MOD = []
export type MERCEDES_MOD = ['AMG']
export type BMW_MOD =['M Competition','M']
export type FIAT_MOD =[]
export type OPEL_MOD =[]
export type HYUNDAI_MOD =[]
export type TESLA_MOD =[]
export type POLESTAR_MOD =[]
export type MG_MOD =[]
export type LYNKCO_MOD =[]

export enum VW_MOD_ENUM {}
export enum AUDI_MOD_ENUM {}
export enum MERCEDES_MOD_ENUM {
    AMG = 'AMG'
}
export enum BMW_MOD_ENUM {
    MCOMPETITION = 'M Competition',
    M = 'M'
}
export enum FIAT_MOD_ENUM {}
export enum OPEL_MOD_ENUM {}
export enum HYUNDAI_MOD_ENUM {}
export enum TESLA_MOD_ENUM {}
export enum POLESTAR_MOD_ENUM {}
export enum MG_MOD_ENUM {}
export enum LYNKCO_MOD_ENUM {}

export const VW_MOD_ARRAY: VW_MOD | [] = []
export const AUDI_MOD_ARRAY: AUDI_MOD | [] = []
export const MERCEDES_MOD_ARRAY: MERCEDES_MOD | [] = ['AMG']
export const BMW_MOD_ARRAY: BMW_MOD | [] =['M Competition', 'M']
export const FIAT_MOD_ARRAY: FIAT_MOD | [] = []
export const OPEL_MOD_ARRAY: OPEL_MOD | [] = []
export const HYUNDAI_MOD_ARRAY: HYUNDAI_MOD | [] = []
export const TESLA_MOD_ARRAY: TESLA_MOD | [] = []
export const POLESTAR_MOD_ARRAY: POLESTAR_MOD | [] = []
export const MG_MOD_ARRAY: MG_MOD | [] = []
export const LYNKCO_MOD_ARRAY: LYNKCO_MOD | [] = []
export const CAR_MOD_ARRAY = [VW_MOD_ARRAY, AUDI_MOD_ARRAY, MERCEDES_MOD_ARRAY, BMW_MOD_ARRAY, FIAT_MOD_ARRAY, OPEL_MOD_ARRAY, HYUNDAI_MOD_ARRAY, TESLA_MOD_ARRAY, POLESTAR_MOD_ARRAY, MG_MOD_ARRAY, LYNKCO_MOD_ARRAY]  

/* Varianten */

export type CAR_VARIANTS = VW_TROC_VARIANT_ENUM | VW_TOURAN_VARIANT_ENUM | VW_GOLF_VARIANT_ENUM | VW_TIGUAN_VARIANT_ENUM | AUDI_Q5_VARIANT_ENUM | AUDI_A8_VARIANT_ENUM | MERCEDES_V_VARIANT_ENUM | MERCEDES_SL_VARIANT_ENUM | BMW_Z4_VARIANT_ENUM | BMW_VIERER_VARIANT_ENUM | BMW_FUENFER_VARIANT_ENUM | FIAT_FUENFHUNDERT_VARIANT_ENUM | OPEL_CROSSLAND_VARIANT_ENUM | HYUNDAI_I_VARIANT_ENUM | TESLA_MODEL_VARIANT_ENUM | POLESTAR_ZWEI_VARIANT_ENUM | MG_EHS_VARIANT_ENUM | LYNKCO_NULLEINS_VARIANT_ENUM
export type VW_VARIANT = 'GTE'
export type AUDI_VARIANT = '';
export type MERCEDES_VARIANT = '166L' | '63';
export type BMW_VARIANT = ''
export type FIAT_VARIANT = '';
export type OPEL_VARIANT = 'X'
export type HYUNDAI_VARIANT = '30'
export type TESLA_VARIANT = 'Y' | '3'
export type POLESTAR_VARIANT = 'Standard'
export type MG_VARIANT = '';
export type LYNKCO_VARIANT = '';



export enum VW_TROC_VARIANT_ENUM {}
export enum VW_TOURAN_VARIANT_ENUM {}
export enum VW_GOLF_VARIANT_ENUM {
    GTE = 'GTE'
}
export enum VW_TIGUAN_VARIANT_ENUM {}
export enum AUDI_Q5_VARIANT_ENUM {}
export enum AUDI_A8_VARIANT_ENUM {}

export enum MERCEDES_V_VARIANT_ENUM {
    HUNDERTSECHSENL = '166L'
}
export enum MERCEDES_SL_VARIANT_ENUM {
    DREIUNDSECHZIG = '63'
}
export enum BMW_Z4_VARIANT_ENUM {}
export enum BMW_VIERER_VARIANT_ENUM {}
export enum BMW_FUENFER_VARIANT_ENUM {}
export enum FIAT_FUENFHUNDERT_VARIANT_ENUM {}
export enum OPEL_CROSSLAND_VARIANT_ENUM {
    X = 'X'
}
export enum HYUNDAI_I_VARIANT_ENUM{}
export enum TESLA_MODEL_VARIANT_ENUM {
    Y = 'Y',
    DREI = '3'
}
export enum POLESTAR_ZWEI_VARIANT_ENUM {
    STANDART = 'Standard'
}
export enum MG_EHS_VARIANT_ENUM {}
export enum LYNKCO_NULLEINS_VARIANT_ENUM {}

export const VW_TROC_VARIANTS_ARRAY: Array<string> = [];
export const VW_TOURAN_VARIANTS_ARRAY: Array<string> = [];
export const VW_GOLF_VARIANTS_ARRAY: Array<string> = ['GTE'];
export const VW_TIGUAN_VARIANTS_ARRAY: Array<string> = [];
export const AUDI_Q5_VARIANTS_ARRAY: Array<string> = []
export const AUDI_A8_VARIANTS_ARRAY: Array<string> = []
export const MERCEDES_V_VARIANTS_ARRAY: Array<string>  = ['116L']
export const MERCEDES_SL_VARIANTS_ARRAY: Array<string>  = ['63']
export const BMW_Z4_VARIANTS_ARRAY: Array<string> = []
export const BMW_VIERER_VARIANTS_ARRAY: Array<string> = []
export const BMW_FUENFER_VARIANTS_ARRAY: Array<string> = []
export const FIAT_FUENFHUNDERT_VARIANTS_ARRAY: Array<string> = []
export const OPEL_CROSSLAND_VARIANTS_ARRAY: Array<string> = ['X']
export const HYUNDAI_I_VARIANTS_ARRAY: Array<string> = ['30']
export const TESLA_MODEL_VARIANTS_ARRAY: Array<string> = ['Y', '3']
export const POLESTAR_ZWEI_VARIANTS_ARRAY: Array<string> = ['Standard']
export const MG_EHS_VARIANTS_ARRAY: Array<string> = []
export const LYNKCO_NULLEINS_VARIANTS_ARRAY: Array<string> = []
export const CAR_VARIANTS_ARRAY = [VW_TROC_VARIANTS_ARRAY, VW_TOURAN_VARIANTS_ARRAY, VW_GOLF_VARIANTS_ARRAY, AUDI_Q5_VARIANTS_ARRAY, AUDI_A8_VARIANTS_ARRAY, MERCEDES_V_VARIANTS_ARRAY, MERCEDES_SL_VARIANTS_ARRAY, BMW_Z4_VARIANTS_ARRAY, BMW_VIERER_VARIANTS_ARRAY, BMW_FUENFER_VARIANTS_ARRAY, FIAT_FUENFHUNDERT_VARIANTS_ARRAY, OPEL_CROSSLAND_VARIANTS_ARRAY, HYUNDAI_I_VARIANTS_ARRAY, TESLA_MODEL_VARIANTS_ARRAY, POLESTAR_ZWEI_VARIANTS_ARRAY, MG_EHS_VARIANTS_ARRAY, LYNKCO_NULLEINS_VARIANTS_ARRAY]

/* Serien */

export type CAR_SERIES = VW_SERIES_ENUM | AUDI_SERIES_ENUM | MERCEDES_SERIES_ENUM | BMW_SERIES_ENUM | FIAT_SERIES_ENUM | OPEL_SERIES_ENUM | HYUNDAI_SERIES_ENUM | TESLA_SERIES_ENUM | POLESTAR_SERIES_ENUM | MG_SERIES_ENUM | LYNKCO_SERIES_ENUM
// export type VW_SERIES = 'T-Roc' | 'Touran' | 'Golf' | 'Tiguan'
// export type AUDI_SERIES = 'Q5' | 'A8'
export type MERCEDES_SERIES  = 'V'| 'SL'
export type BMW_SERIES = 'Z4' | '4er' | '5er'
// export type FIAT_SERIES = '500' | ''
// export type OPEL_SERIES = 'Crossland' | ''
// export type HYUNDAI_SERIES = 'I' | ''
// export type TESLA_SERIES = 'Model' | ''
// export type POLESTAR_SERIES = '2' | ''
// export type MG_SERIES = 'EHS' | ''
// export type LYNKCO_SERIES = '01' | ''
export enum VW_SERIES_ENUM {
    TROC = 'T-Roc',
    TOURAN = 'Touran',
    GOLF = 'Golf',
    TIGUAN = 'Tiguan'
}

export enum AUDI_SERIES_ENUM {
    Q5 = 'Q5',
    A8 = 'A8'
}

export enum MERCEDES_SERIES_ENUM {
    V = 'Vito',
    SL = 'SL'
}

export enum BMW_SERIES_ENUM {
    Z4 = 'Z4', 
    VIERER = '4er', 
    FUENFER = '5er'
}

export enum FIAT_SERIES_ENUM {
    FUENFHUNDERT = '500'
}

export enum OPEL_SERIES_ENUM {
    CROSSLAND = 'Crossland'
}

export enum HYUNDAI_SERIES_ENUM {
    I = 'I'
}

export enum TESLA_SERIES_ENUM {
    MODEL = 'Model'
}

export enum POLESTAR_SERIES_ENUM {
    ZWEI = '2'
}

export enum MG_SERIES_ENUM {
    EHS = 'EHS'
}

export enum LYNKCO_SERIES_ENUM {
    NULLEINS = '01'
}

export const VW_SERIES_ARRAY: Array<SeriesType> = [{seriesId: VW_SERIES_ENUM.TROC, variants: VW_TROC_VARIANTS_ARRAY}, {seriesId: VW_SERIES_ENUM.GOLF, variants: VW_GOLF_VARIANTS_ARRAY}, {seriesId: VW_SERIES_ENUM.TIGUAN, variants: VW_TIGUAN_VARIANTS_ARRAY}, {seriesId: VW_SERIES_ENUM.TOURAN, variants: VW_TOURAN_VARIANTS_ARRAY}]
export const AUDI_SERIES_ARRAY: Array<SeriesType> = [{ seriesId: AUDI_SERIES_ENUM.Q5, variants: AUDI_Q5_VARIANTS_ARRAY }, { seriesId: AUDI_SERIES_ENUM.A8, variants: AUDI_A8_VARIANTS_ARRAY }]
export const MERCEDES_SERIES_ARRAY: Array<SeriesType> = [{seriesId: MERCEDES_SERIES_ENUM.V, variants: MERCEDES_V_VARIANTS_ARRAY }, { seriesId: MERCEDES_SERIES_ENUM.SL, variants: MERCEDES_SL_VARIANTS_ARRAY }]
export const BMW_SERIES_ARRAY: Array<SeriesType> = [{seriesId: BMW_SERIES_ENUM.Z4, variants: BMW_Z4_VARIANTS_ARRAY },{seriesId: BMW_SERIES_ENUM.VIERER, variants: BMW_VIERER_VARIANTS_ARRAY }, {seriesId: BMW_SERIES_ENUM.FUENFER, variants: BMW_FUENFER_VARIANTS_ARRAY }]
export const FIAT_SERIES_ARRAY: Array<SeriesType> = [{seriesId: FIAT_SERIES_ENUM.FUENFHUNDERT, variants: FIAT_FUENFHUNDERT_VARIANTS_ARRAY}]
export const OPEL_SERIES_ARRAY: Array<SeriesType> = [{seriesId: OPEL_SERIES_ENUM.CROSSLAND, variants: OPEL_CROSSLAND_VARIANTS_ARRAY}]
export const HYUNDAI_SERIES_ARRAY: Array<SeriesType> = [{seriesId: HYUNDAI_SERIES_ENUM.I, variants: HYUNDAI_I_VARIANTS_ARRAY}]
export const TESLA_SERIES_ARRAY: Array<SeriesType> = [{seriesId: TESLA_SERIES_ENUM.MODEL, variants: TESLA_MODEL_VARIANTS_ARRAY}]
export const POLESTAR_SERIES_ARRAY: Array<SeriesType> = [{seriesId: POLESTAR_SERIES_ENUM.ZWEI, variants: POLESTAR_ZWEI_VARIANTS_ARRAY}]
export const MG_SERIES_ARRAY: Array<SeriesType> = [{seriesId: MG_SERIES_ENUM.EHS, variants: MG_EHS_VARIANTS_ARRAY }]
export const LYNKCO_SERIES_ARRAY: Array<SeriesType> = [{seriesId: LYNKCO_SERIES_ENUM.NULLEINS, variants: LYNKCO_NULLEINS_VARIANTS_ARRAY}]


/* Model */
export enum CAR_MODEL {
    LIMOUSINE = 'Limousine',
    SUV = 'Suv',
    COUPE ='Coupé',
    CABRIO = 'Cabriolet',
    VAN = 'Van',
    KOMPAKT = 'Kompaktwagen',
    KOMBI = 'Kombi',
    PICKUP = 'Pick-Up',
    ELEKTRO = 'Elektrowagen'
}

export const CAR_MODEL_ARRAY: Array<string>= ['Limousine', 'Suv', 'Coupé', 'Cabriolet', 'Van' ,'Kompaktwagen' ,'Kombi', 'Pick-Up', 'Elektrowagen']
export enum CAR_CONSTRUCTIONYEAR {
    ZWEITAUSEND = '2000',
    ZWEITAUSENDEINS = '2001',
    ZWEITAUSENDZWEI = '2002',
    ZWEITAUSENDDREI = '2003',
    ZWEITAUSENDVIER = '2004',
    ZWEITAUSENDFUENF = '2005',
    ZWEITAUSENDSECHS = '2006',
    ZWEITAUSENDSIEBEN = '2007',
    ZWEITAUSENDACHT = '2008',
    ZWEITAUSENDNEUN = '2009',
    ZWEITAUSENDZEHN = '2010',
    ZWEITAUSENDELF = '2011',
    ZWEITAUSENDZWÖLF = '2012',
    ZWEITAUSENDDREIZEHN = '2013',
    ZWEITAUSENDVIERZEHN = '2014',
    ZWEITAUSENDFUENFZEHN = '2015',
    ZWEITAUSENDSECHSZEHN = '2016',
    ZWEITAUSENDSIEBZEHN = '2017',
    ZWEITAUSENDACHTZEHN = '2018',
    ZWEITAUSENDNEUNZEHN = '2019',
    ZWEITAUSENDZWANZIG = '2020',
    ZWEITAUSENDEINUNDZWANZIG = '2021',
    ZWEITAUSENDZWEIUNDZWANZIG = '2022',
    ZWEITAUSENDDREIUNDZWANZIG = '2023'
}

export enum CAR_SITS {
    ZWEISITZER = '2 Sitzer',
    VIERSITZER = '4 Sitzer',
    FUENFSITZER = '5 Sitzer',
    SIEBENSITZER = '7 Sitzer'
}

export enum CAR_FUEL {
    BENZIN = 'Benzin',
    DIESEL = 'Diesel',
    HYBRID = 'Hybrid',
    ELEKTRO = 'Elektro',
}

export enum CAR_TRANSMISSION {
    MAUNELL = 'Manuell',
    AUTOMATIK = 'Automatik',
}