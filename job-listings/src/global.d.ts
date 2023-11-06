type Listing = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

type ListingProps = {
  listing: Listing;
};

type FilterProps = {
  name: string;
};

type PillProps = {
  name: string;
  colors: string;
};
