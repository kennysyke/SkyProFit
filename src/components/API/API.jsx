// export function getResponse() {
//     const fetchPromise =
//         fetch(
//         "https://skyprofitness-5554f-default-rtdb.europe-west1.firebasedatabase.app/courses/.json",
//         {
//           method: "GET",
//         }
//       );
//       fetchPromise.then((response) => {
//         const jsonPromise = response.json();

//         jsonPromise.then((responseData) => {
//           const data = Object.values(responseData);
//           console.log(data);
//         });
//       })

//     }

// export function getResponse() {
//   return fetch(
//     "https://skyprofitness-5554f-default-rtdb.europe-west1.firebasedatabase.app/courses/.json",
//     {
//       method: "GET",
//     }
//   )
//     .then((response) => response.json())
//     .then((responseData) => Object.values(responseData))
//     .catch((error) => {
//       console.error("Error:", error);
//       return [];
//     });
// }
