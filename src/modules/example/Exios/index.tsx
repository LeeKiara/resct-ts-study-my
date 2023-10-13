// // HTTP GET 요청
// async function getExample() {
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
//     console.log('GET Response:', response.data);
//   } catch (error) {
//     console.error('GET Error:', error);
//   }
// }

import axios from "axios";

const ExiosEx = () => {
  return (
    <div>
      <h1>Exios EX</h1>
    </div>
  );
};
// const ExiosEx = async () => {
//   const response = await axios.get("http://localhost:9090/todos");

//   console.log(`GET Response: ${response.data}`);

//   return (
//     <div>
//       <h1>ExiosEx</h1>
//     </div>
//   );
// };

export default ExiosEx;
