import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const [data, setData] = useState({});

  const { id } = useParams(); //react hook(get id)
  console.log(id);

  useEffect(() => {
    const getData = async () => {
      //async function use because fetching data
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await res.json();
      if (data) {
        setData(data);
      }
    };

    getData();

    return () => {
      //cleanup useeffect hook using same get data function
      getData();
    };
  }, [id]);

  return (
    <div>
      This is User page
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      ) : null}
    </div>
  );
};
export default User;
