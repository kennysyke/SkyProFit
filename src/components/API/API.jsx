export function getResponse() { 
  const get = []
    const fetchPromise = fetch(
      "https://skyprofitness-5554f-default-rtdb.europe-west1.firebasedatabase.app/workouts/.json",
      {
        method: "GET",
      }
    );
      fetchPromise.then((response) => {
        const jsonPromise = response.json();

        jsonPromise.then((responseData) => {           
            console.log(responseData) 
            responseData.forEach(element => {
              element.push(get)
              console.log(get) 
            });
        });        
      })
         
    }    
  