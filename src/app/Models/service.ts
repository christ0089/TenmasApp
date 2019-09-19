import { BarCodeFormat } from './Enum/codeType';

export interface IService {
    name: string;
    img: string;
    pricing: IFixedPricing | IOpenPricing;
    containsBarcode: boolean;
    barcode?: {
        barcode_format: BarCodeFormat;
        contains_price: boolean;
        barcode_length: number;
        price_range: [];
        account_range: [];
    };
}

export interface IFixedPricing {
    pricing: [];
}

export interface IOpenPricing {
    pricing: number;
}