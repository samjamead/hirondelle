export interface PostWithBinaryDate {
  date: string;
  binaryDate: string;
  title: string;
  slug?: string;
  link?: string;
  category: string;
  quote?: string;
  externalLink?: string;
  attribution?: string;
  attributionLink?: string;
  distance: number;
  elevation: number;
  duration: number;
  mountains?: string[];
}
