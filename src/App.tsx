import { useContext, useEffect } from 'react';
import { UseNewsContext } from './context/NewsProvider';
import Header from './components/Header';
import BreakNews from './components/BreakNews';
import MoreNews from './components/MoreNews';
import Footer from './components/Footer';
import fetchNews from './service/fetchNews';
import Loading from './components/Loading/Index';
import './App.css';

function App() {
  const { setNews, isLoading, setIsLoading } = useContext(UseNewsContext);

  useEffect(() => {
    const callInApi = async () => {
      setIsLoading(true);
      const data = await fetchNews();
      setNews(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };
    callInApi();
  }, []);

  if (isLoading) return <Loading />;
  return (
    <>
      <Header />
      <BreakNews />
      <MoreNews />
      <Footer />
    </>
  );
}

export default App;
