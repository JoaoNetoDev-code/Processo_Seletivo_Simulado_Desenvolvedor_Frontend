import { useContext } from 'react';
import './Footer.css';
import { UseNewsContext } from '../../context/NewsProvider';

function Footer() {
  const { page, news, setPage } = useContext(UseNewsContext);

  const myCarrosel = () => {
    if (page < news.items.length) {
      return setPage(page + 9);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return setPage(10);
  };

  return (
    <footer className="footer-more">
      <button onClick={ myCarrosel } className="btn-more-news">
        {
          page === 82 ? 'VOLTAR AO TOPO' : 'MAIS NOTÍCIAS'
        }
      </button>
    </footer>
  );
}

export default Footer;
