import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    const statusCode = res.status;
    console.log(statusCode);
    const data = res.data;
    console.log(data);
  })
  .catch(() => {
    console.log("Error: something went wrong");
  });
