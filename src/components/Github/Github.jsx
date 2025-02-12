import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  // const [data, setData] = React.useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/tejasbahurupi").then((res) => {
  //     res.json().then((data) => {
  //       setData(data);
  //     });
  //   });
  // });

  const data = useLoaderData();
  return (
    <>
      <h1 className="py-16 bg-orange-500 flex justify-center align-center text-3xl">
        Github : {data.login}
        <img src={data.avatar_url} alt="" style={{ width: "100px" }} />
      </h1>
    </>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/tejasbahurupi");
  return res.json();
};
