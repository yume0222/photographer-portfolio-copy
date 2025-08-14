export type Product = {
  title: string;
  text: string[];
  image: {
    url: string;
    width: number;
    height: number;
  };
}
export type Award = {
  title: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
}
export type SchoolTableRow = {
  label: string;
  value: string | string[];
};
