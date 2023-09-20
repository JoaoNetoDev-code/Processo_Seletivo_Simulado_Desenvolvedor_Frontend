export type DataType = {
  count: number;
  items: NewsType[];
  nextPage: number;
  page: number;
  previousPage: number;
  showingFrom: number;
  showingTo: number;
  totalPages: number;
};

export type NewsType = {
  data_publicacao: string;
  destaque: boolean;
  editorias: string;
  id: number;
  imagens: string;
  introducao: string;
  link: string;
  produto_id: number;
  produtos: string;
  produtos_relacionados: string;
  tipo: string;
  titulo: string;
};

export type ContextType = {
  news: DataType;
  setNews: (data: DataType) => void;
  isLoading: boolean;
  setIsLoading: (boolean: boolean) => void;
  page: number;
  setPage: (number: number) => void
};

export type BreakNewsType = {
  image_fulltext:string;
  image_intro: string;
};
