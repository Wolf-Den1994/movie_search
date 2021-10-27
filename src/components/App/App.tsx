import { useEffect, useState } from 'react';
import Content from '../Content/Content';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import loadGif from '../../assets/images/load.gif';
import style from './App.module.scss';
import Pagination from '../Pagination/Pagination';

const App = () => {
  const [total, setTotal] = useState('0');
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');
  const [loader, setLoader] = useState(true);
  const [fault, setFault] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoader(true);
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${query}&page=${page}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setTotal(data.totalResults);
        setData(data.Search);
        setFault(false);
      })
      .catch(() => {
        setFault(true);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [query, page]);

  return (
    <div className={style.content}>
      <Header query={query} onQuery={setQuery} />
      {!query ? (
        <h2 className={style.fault}>Enter movie in input ↑</h2>
      ) : (
        <>
          {fault || !total ? (
            <h2 className={style.fault}>
              Something went wrong, check the data
            </h2>
          ) : (
            <>
              {loader ? (
                <div className={style.center}>
                  <img src={loadGif} alt="load" className={style.load} />
                </div>
              ) : (
                <>
                  <SearchBox query={query} total={total} />
                  {data && <Content data={data} />}
                  <Pagination onPage={setPage} page={page} />
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
