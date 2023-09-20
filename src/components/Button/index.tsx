import fetchNews from '../../service/fetchNews';
import './Button.css';

type PropButton = {
  date: string;
  btnName: string;
};
const handleClickbtn = () => {
  const data = fetchNews();
  console.log(data);
};

function Button({ date, btnName }: PropButton) {
  return (
    <span className="orderBtn">
      <p><b>{date}</b></p>
      <button
        onClick={ handleClickbtn }
        type="button"
        className="btn-more"
      >
        {btnName}
      </button>
    </span>
  );
}

export default Button;
