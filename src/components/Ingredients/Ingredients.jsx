import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api';

function Ingredients() {
  const { slug } = useParams();
  const [{ data, error, loading }, setRecipeDetail] = useState({
    data: {},
    error: '',
    loading: true,
  });
  useEffect(() => {
    api
      .get(`/recipes/${slug}`)
      .then(({ data }) => {
        //console.log(data._id);
        setRecipeDetail({ data, error: '', loading: false });
      })
      .catch(() => {
        setRecipeDetail({ data: {}, error: 'Hups, něco se pokazilo ...', loading: false });
      });
  }, [slug]);
  if (loading) {
    return 'Loading ...';
  }
  if (!!error) {
    return error;
  }
  return (
    <ul>
      {data.ingredients.map(({ _id, name, amount, amountUnit }) => (
        <li key={_id}>
          {name} {amount} {amountUnit}
        </li>
      ))}
    </ul>
  );
}

export default Ingredients;
