import React, { useEffect, useState } from 'react';
import Main from './pages/Main';



const App = () => {

  const [data, setData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

   useEffect(() => {
   //promisiss
      // const data = /* await */ fetch("https://api.github.com/gists/public").then((data)=>console.log(data));
      // cors error fetch problem
    

      const getData = async () => {
        try {
          //https://dmitripavlutin.com/javascript-fetch-async-await/
          //https://codesandbox.io/s/fetch-data-from-an-api-hko1m
          const response = await fetch(
            `https://api.github.com/gists/public?page=${currentPage}`,
            {
              method: "GET",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          // sending data=>json
          //recving json=> data [] {} ''
          const myData = await response.json();
          setData(myData);
        } catch (err) {
          alert(err.message);
          throw new Error(err);
        }
      };
      getData();
    }, [currentPage]);
    return (
      <div>
        {/* changing data type from obj to array */}
        <Main
          data={data ? Object.values(data) : null}
          setCurrentPage={setCurrentPage}
          setData={setData}
        />
      </div>
    );
  };
  
  export default App;