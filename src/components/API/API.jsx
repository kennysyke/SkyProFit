export function getResponse() { 
    const fetchPromise =
        fetch(
        "https://skyprofitness-5554f-default-rtdb.europe-west1.firebasedatabase.app/courses/.json",
        {
          method: "GET",
        }
      );
      fetchPromise.then((response) => {
        const jsonPromise = response.json();

        jsonPromise.then((responseData) => {           
            console.log(responseData) 
        });        
      })
         
    }    
  