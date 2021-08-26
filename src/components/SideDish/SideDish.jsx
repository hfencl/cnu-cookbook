import React, { useEffect, useState } from 'react';
import { api } from '../../api';

export function SideDish() {
  const [{ data, error, loading }, setRecipeDetail] = useState({
    data: {},
    error: '',
    loading: true,
  });
  useEffect(() => {
    api
      .get(`/recipes/side-dishes`)
      .then(({ data }) => {
        //console.log(data);
        setRecipeDetail({ data, error: '', loading: false });
      })
      .catch(() => {
        setRecipeDetail({ data: {}, error: 'Hups, něco se pokazilo ...', loading: false });
      });
  }, []);
  if (loading) {
    return 'Loading ...';
  }
  if (!!error) {
    return error;
  }

  return (
    <>
      <ul>
        {data.map((sideDish) => (
          <li key={sideDish}>{sideDish}</li>
        ))}
      </ul>
    </>
  );
}
