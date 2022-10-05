export interface Product {
  _id: string;
  user_id: string;
  description: string;
  category: string;
  price: string;
  commission: string;
  quantity: string;
  images: Image[];
  mainImage: string;
  name: string;
  details: string[];
  sizes: string[];
  colors: string[];
  uploadTime: number;
}

export interface Image {
  url: string;
}
