export interface Price {
  value: number;
  symbol: string;
  isDefault: number;
}

export interface Guarantee {
  start: string;
  end: string;
}

export enum TypeProduct {
  Monitor = "Monitor",
  Phone = "Phone",
  Pad = "Pad"
}


export interface Product {
  id: number,
  serialNumber: number,
  isNew: number,
  photo: string,
  title:string,
  type: TypeProduct,
  specification: string,
  guarantee: Guarantee,
  price: Price[],
  order: number,
  date: string
}