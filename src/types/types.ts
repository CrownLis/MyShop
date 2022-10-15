export interface ICard {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: { rate: number; count: number };
}

export interface ICart {
  id: number;
  userId: number;
  date: Date;
  products: IProduct[];
}

export interface IProduct {
  productId: number;
  quantity: number;
}

export interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  name?: {
    firstname: string;
    lastname: string;
  };
  address?: {
    city: string;
    street: string;
    number: string | number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone?: string;
}

export interface IProductInCart {
  product: ICard;
  amount: number;
}
