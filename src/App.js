import { useEffect, useState } from 'react';
import './App.scss';

const App = () => {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("guys");
  const [pics, setPics] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  
  const key = "XbKOljq_mz5UmCja0MByQGAJi41olwZh_uoG_7P9gfI";

  const add = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  const getImageData = async () => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${key}`
      );
      const data = res?.data?.results;
      setPics(data);
      setIsloading(false);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    getImageData();
  }, []);

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>count: {count} </p>
       <button onClick={add}>
         +
       </button>
         <br />
       <button onClick={decrease}>
         -
       </button>
       <div className='image__cards'>
          {isLoading ? (
            <p>loading...</p>
          ) : (
            pics &&
            pics.map((data) => (
              <div className='cards' key={data.id}>
                <img alt={data.alt_description} src={data.urls.small} />
                <div className='more__info'>
                  <p className='name'>
                    {data?.user?.first_name},{" "}
                    <span>{data?.user?.total_photos}</span>{" "}
                  </p>
                  <p className='location'>
                    {data?.user?.location}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
    </div>
  );
}

export default App;
