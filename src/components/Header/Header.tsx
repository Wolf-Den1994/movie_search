import { Dispatch, SetStateAction } from 'react';
import style from './Header.module.scss';
import avatar from '../../assets/images/user.png';

interface IHeaderProps {
  query: string;
  onQuery: Dispatch<SetStateAction<string>>;
}

const Header = ({ query, onQuery }: IHeaderProps) => {
  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) =>
    onQuery(e.target.value);

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <h1>Movie Catalog</h1>
        <input className={style.input} value={query} onChange={inputHandle} />
        <div className={style.user}>
          <img src={avatar} alt="user Avatar" />
          <p>Alexander Borisenko</p>
          <span className={style.arrow}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
