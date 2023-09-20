const fetchNews = async () => {
  const url = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchNews;
