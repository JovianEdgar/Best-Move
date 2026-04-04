export interface Listing {
  id: string;
  address: string;
  neighborhood: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  type: 'Single Family' | 'Multi Family' | 'Condo' | 'Co-op';
  status: 'Active' | 'Pending' | 'Sold';
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  location: string;
}
