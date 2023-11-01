export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "7704fbcb3bmshc8286741c7c9ef0p1adfdcjsna325052230ca",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=volkswagen",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
