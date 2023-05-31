const exemplePromessesGroupées = async () => {
  const promesses = [];

  promesses.push(axios.get('/toto'));
  promesses.push(axios.get('/tata'));
  promesses.push(axios.get('/tutu'));

  const [toto, tata, tutu] = await Promise.all(promesses);

  console.log('Les trois promesses ont obtenu une réponse.');
};
