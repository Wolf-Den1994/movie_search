import { IDataApi } from '../../utils/types';
import notFound from '../../assets/images/notFound.jpg';
import style from './Content.module.scss';

interface IContentProps {
  data: IDataApi[];
}

const Content = ({ data }: IContentProps) => {
  return (
    <div className={style.content}>
      {data.map((item) => (
        <div className={style.item} key={item.Poster + item.Title}>
          <img
            src={item.Poster === 'N/A' ? notFound : item.Poster}
            alt="Poster"
            className={style.image}
          />
          <div className={style.text}>
            <p>Name: {item.Title}</p>
            <p>Year: {item.Year}</p>
            <p>imdbID: {item.imdbID}</p>
            <p>Type: {item.Type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
