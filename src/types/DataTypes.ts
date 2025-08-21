export type Product = {
  id: string;
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
  productId: string;
  quantity: string; // allow units like "1000 kg" or numeric
  incoterm: string;
  shipmentMode: string;
  preferredDate: string;
  message: string;
};
