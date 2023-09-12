import './Button.css'

type PropButton = {
  date: string;
  btnName: string;
};

function Button({ date, btnName }: PropButton) {
  return (
    <span className='orderBtn'>
      <p><b>{date}</b></p>        
      <button type="button" className='btn-more'>{btnName}</button>
    </span>
  );
}

export default Button;
