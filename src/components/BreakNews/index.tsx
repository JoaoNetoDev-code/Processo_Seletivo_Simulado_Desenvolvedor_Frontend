import { useState, useContext } from 'react';
import Button from '../Button';
import './BreakNews.css';
import { UseNewsContext } from '../../context/NewsProvider';

function BreakNews() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { news } = useContext(UseNewsContext);
  const breakNews = news.items[0];

  return (
    <section className="break-news">
      <span className="banner-post">
        <img
          src="src/images/breakNewsPost.png"
          alt="breakNewsPost"
          className="image-post"
        />
      </span>
      <span className="news-container">
        <div className="recent-news">
          <p className="news-select"><b>Noticías mais recentes</b></p>
          <label htmlFor="favorite">
            <input
              id="favorite"
              onChange={ () => setIsChecked(!isChecked) }
              className="check-favorite"
              checked={ isChecked }
              type="checkbox"
            />
            <span className="checkmark">
              {
                isChecked
                  ? <img src="src/images/hartsIsFalse.png" alt="favorite" />
                  : <img src="src/images/hartsIsTrue.png" alt="favorite" />
              }
            </span>
          </label>
        </div>
        <div className="news-content">
          <h1>{breakNews.titulo}</h1>
          <p>
            {breakNews.introducao}
          </p>
        </div>
        <Button
          link={ breakNews.link }
          btnName="Leia a noticía aqui"
          date={ breakNews.data_publicacao }
        />
      </span>
    </section>
  );
}

export default BreakNews;
