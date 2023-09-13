import './BreakNews.css'
import { useState } from 'react'
import breakNewsPost from '/public/breakNewsPost.png';
import hartsIsFalse from '/public/hartsIsFalse.png';
import hartsIsTrue from '/public/hartsIsTrue.png';
import Button from '../Button';

function BreakNews() {
  const [isCheckd, setIsCheked] = useState(true);
  return (
    <section className='break-news'>
      <span className='banner-post'>
        <img src={breakNewsPost} alt="breakNewsPost" className='image-post' />
      </span>
      <span className='news-container'>
        <div className='recent-news'>
        <p className='news-select'><b>Noticías mais rescentes</b></p>
        <label htmlFor="favorite">
          <input
            id='favorite'
            onChange={ () => setIsCheked(!isCheckd) }
            className='check-favorite' checked={isCheckd}
            type="checkbox"
          />
          <span className='checkmark'>
            <img
              src={isCheckd ? hartsIsTrue : hartsIsFalse}
              alt="favorite"
            />
          </span>
          </label>
        </div>
        <div className='news-content'>
          <h1>Brasil tem 1,3 milhão de quilombolas em 1.696 municípios</h1>
          <p>A população quilombola do país é de 1.327.802 pessoas, ou 0,65% do total de habitantes. Os dados são do Censo 2022, que investigou pela primeira vez esse grupo, integrante dos povos e comunidades tradicionais reconhecidos pela Constituição de 1988.</p>
        </div>
        <Button btnName='Leia a noticía aqui' date='a 2 dias' />
      </span>
    </section>
  );
}

export default BreakNews;
