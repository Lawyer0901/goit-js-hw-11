export { fetchCountries, populationFormat };

function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })

    .catch(err => console.log('Error!'));
}

function populationFormat(numbers) {
  const numberNew = numbers.toString();
  return numberNew.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
