import ReactDOM from "react-dom/client";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [userdata] = useFetch("https://jsonplaceholder.typicode.com/todos");
   console.log("data",userdata);
  return (
    <>
      {userdata &&
        userdata.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default Home;