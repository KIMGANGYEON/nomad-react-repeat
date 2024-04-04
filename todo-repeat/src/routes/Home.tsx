import { useEffect, useState } from "react";
import Movies from "../components/Movies";

function Home() {
  interface Movie {
    id: number;
    title: string;
    summary: string;
    genres: string[];
    medium_cover_image: string;
  }

  function Moives() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState<Movie[]>([]);
    const getMovies = async () => {
      const json = await (
        await fetch(
          "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(() => {
      getMovies();
    }, []);
    return (
      <>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          movies.map((movie) => (
            <Movies
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))
        )}
      </>
    );
  }

  interface Coin {
    id: string;
    name: string;
    symbol: string;
    quotes: {
      USD: {
        price: number;
      };
    };
  }

  function Coins() {
    const [loading, setLoding] = useState(true);
    const [coins, setCoins] = useState<Coin[]>([]);
    const [pCoin, setPcoin] = useState<Coin[]>([]);
    const [money, setMoney] = useState<string | number>("");
    useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
          setLoding(false);
          setCoins(json);
        });
    }, []);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setMoney(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setPcoin(
        coins
          .filter((coin) => coin.quotes.USD.price < parseInt(String(money)))
          .sort((a, b) => b.quotes.USD.price - a.quotes.USD.price)
      );
    };

    return (
      <div>
        <h1>The Coins! ({pCoin.length})</h1>
        {loading ? <strong>Loading...</strong> : null}
        <form onSubmit={onSubmit}>
          <input
            value={money}
            type="number"
            onChange={onChange}
            placeholder="your money"
          />
          <button type="submit">Click!</button>
        </form>

        <ul>
          {pCoin.map((coin) => (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}): {Math.round(coin.quotes.USD.price)}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState<string[]>([]);
  const onChahge = (e: React.ChangeEvent<HTMLInputElement>) =>
    setToDo(e.target.value);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  const deleteToDo = (index: number) => {
    const newToDos = [...toDos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  };
  // Movie App

  return (
    <>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChahge}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => deleteToDo(index)}>❌</button>
        </li>
      ))}
      <Coins />
      <hr />
      <Moives />
    </>
  );
}

export default Home;
