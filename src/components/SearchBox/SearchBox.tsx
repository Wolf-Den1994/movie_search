import style from './SearchBox.module.scss';

interface ISearchBoxProps {
  query: string;
  total: string;
}

const SearchBox = ({ query, total }: ISearchBoxProps) => {
  return (
    <div className={style.searchBox}>
      <p className={style.par}>
        You searched for: {query}, {total} result found
      </p>
    </div>
  );
};

export default SearchBox;
