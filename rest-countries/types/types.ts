interface HomePageProps {
  searchParams?: SearchParams;
}

interface SearchParams {
  country?: string;
  region?: string;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}
