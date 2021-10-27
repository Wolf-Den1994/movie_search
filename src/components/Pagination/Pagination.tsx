import style from './Pagination.module.scss';

interface IPaginationProps {
  onPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}

const arr = ['<', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '>'];

const Pagination = ({ onPage, page }: IPaginationProps) => {
  const clickHandle = (num: string) => {
    if (num === '<' && page > 1) {
      onPage((state) => --state);
    }
    if (num === '>') {
      onPage((state) => ++state);
    }
    if (num !== '<' && num !== '>') {
      onPage(+num);
    }
  };

  return (
    <div className={style.pagination}>
      {arr.map((num) => (
        <span
          key={num}
          className={style.button}
          onClick={() => clickHandle(num)}
        >
          {num}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
