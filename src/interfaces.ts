export interface DataHeadInfo {
  key: string;
  label: string;
  disablePadding: boolean;
  align: "left" | "right" | "inherit" | "center" | "justify" | undefined;
}

export interface ImageProps {
  path: string;
  alt: string;
  name: string;
}

export interface Datus {
  column1: number;
  column2: number;
  column3: ImageProps;
  column4: Array<ImageProps>;
}

export interface Feature {
  name: string | number;
  status: boolean;
}

export interface FeatureGroup {
  group_title: string;
  features: Array<Feature>;
}
