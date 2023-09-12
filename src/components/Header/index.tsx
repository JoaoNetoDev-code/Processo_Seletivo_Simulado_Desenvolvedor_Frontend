import logoNews from '/public/logoNews.svg'
import './Header.css'

function Header() {
  return (
    <header className='main-header'>
      <img src={logoNews} alt="logo-News" className='logo-news' />
      <h1 className='title-Header'>TRYBE NEWS</h1>
    </header>
  );
}

export default Header;
