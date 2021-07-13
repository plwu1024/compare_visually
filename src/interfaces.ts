export interface DataHeadInfo {
  key: string;
  label: string;
  disablePadding: boolean;
}

export interface ImageProps {
  path: string;
  alt: string;
}

export interface Datus {
  column1: number;
  column2: number;
  column3: ImageProps;
  column4: Array<ImageProps>;
}
