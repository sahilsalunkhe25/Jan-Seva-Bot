async function fetchTeslaNews() {
    const response = await fetch(' https://newsapi.org/v2/everything?q=tesla&from=2023-03-02&sortBy=publishedAt&apiKey=0f1197af506241168c6ffe8f614c5794');
    const data = await response.json();
    return data;
    fetchTeslaNews().then(data => {
    console.log(data);
  }).catch(error => {
    console.error(error);
  });
}