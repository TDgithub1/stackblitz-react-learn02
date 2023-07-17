import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Contact = () => {
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    const dataFetching = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

      const data = await res.json();

      if (data) {
        setMainData(data);
      }
    };

    dataFetching();
  }, []);

  return (
    <ContactContainer>
      <div>
        This is Contact
        <div>
          {mainData?.map(({ id, title }) => (
            <Link to={`/contact/${id}`} key={id}>
              <div>
                <h3>{title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`

  color: red;

`;
