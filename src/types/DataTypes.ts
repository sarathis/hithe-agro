import { JSX } from "react";

export type Product = {
  id: number;
  title: string;
  shortDesc: string;
  longDescBullets: string[];
  image: string; 
  packSizes?: string[];
  hsCode?: string;
};


export type QuoteForm = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  country: string;
  productId: number;
  quantity: string; // allow units like "1000 kg" or numeric
  incoterm: string;
  shipmentMode: string;
  preferredDate: string;
  message: string;
};

export interface IProcessSteps
{
    id:number;
    icon:JSX.Element;
    title:string;
    description:string;
}