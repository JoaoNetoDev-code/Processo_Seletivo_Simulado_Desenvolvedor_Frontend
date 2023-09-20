import { useContext } from 'react';
import { UseNewsContext } from '../../context/NewsProvider';
import Button from '../Button';
import './MoreNews.css';

function MoreNews() {
  const { news, page } = useContext(UseNewsContext);

  return (
    <>
      <nav className="nav-filter">
        <div>
          <button className="btn-nav-filter"><b>Mais recentes</b></button>
          <button className="btn-nav-filter"><b>Release</b></button>
          <button className="btn-nav-filter"><b>Notícias</b></button>
          <button className="btn-nav-filter"><b>Favoritas</b></button>
        </div>
        <button className="type-filter">
          <img src="src/images/type-list-filter.svg" alt="alguma coisa" />
        </button>
      </nav>
      <section className="list-news">
        {
          news.items.slice(1, page).map((item) => (
            <span key={ item.id } className="card-news">
              <h2>{item.titulo}</h2>
              <div>
                <p>
                  {item.introducao}
                </p>
                <Button
                  link={ item.link }
                  btnName="Leia a noticía aqui"
                  date={ item.data_publicacao }
                />
              </div>
            </span>
          ))
        }
      </section>
    </>
  );
}

export default MoreNews;
