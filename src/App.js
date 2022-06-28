import React, { useEffect, useState } from 'react';
import Main from './pages/Main';

const App = () => {

  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async () => { 
    try {
      //https://dmitripavlutin.com/javascript-fetch-async-await/
      //https://codesandbox.io/s/fetch-data-from-an-api-hko1m
      const response = await fetch(
        `https://api.github.com/gists/public?per_page=15&page=${currentPage}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
   
      const myData = await response.json();
      setData(myData);
      console.log(myData);
    } catch (err) {
      alert(err.message);
      throw new Error(err);
    }
  };

   useEffect(() => {
      getData();
    }, [currentPage]);

  useEffect(() => {
   getData();
  },[])
    return (
      <div>
        <Main
       
          data={data ? Object.values(data) : null}
          setCurrentPage={setCurrentPage}
          setData={setData}
          currentPage={currentPage}
        />
      </div>
    );
  };
  
  export default App;