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
export type GalleryImage = {
  url: string;
  alt: string;
};

export type SchoolTableRow = {
  label: string;
  value: string | string[];
};
