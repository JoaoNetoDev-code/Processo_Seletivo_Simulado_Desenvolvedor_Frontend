import './Button.css';

type PropButton = {
  date: string;
  btnName: string;
  link: string;
};
const handleClickbtn = async (link: string) => {
  console.log('clicou');
  window.open(link, '_blank');
};

const calcularDiferencaEmDias = (dataDePublicacao: string) => {
  const [dataOffHours] = dataDePublicacao.split(' ');
  const [dia, mes, ano] = dataOffHours.split('/');
  const dataPublicacao = new Date(`${ano}-${mes}-${dia}T00:00:00`);
  const dataAtual = new Date();
  const diferencaEmMilissegundos = dataPublicacao.getTime() - dataAtual.getTime();
  const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
  if (diferencaEmDias === 0) {
    return 'publicado hoje.';
  }
  return `${Math.abs(diferencaEmDias)} dias atrás.`;
};

function Button({ date, btnName, link }: PropButton) {
  return (
    <span className="orderBtn">
      <p><b>{calcularDiferencaEmDias(date)}</b></p>
      <button
        onClick={ () => handleClickbtn(link) }
        type="button"
        className="btn-more"
      >
        {btnName}
      </button>
    </span>
  );
}

export default Button;
