export interface IResponseApiHouse {
  picture: string;
  price: number;
  description: IHouseDescription;
  model: string;
  location: string;
  createdAt: string;
}

interface IHouseDescription {
  size: string;
  bedroom: number;
  bathroom: number;
}
