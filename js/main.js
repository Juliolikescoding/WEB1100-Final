const url_api = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=00f065b27d284ccdbd348950a3114a47';
const searchBox = document.querySelector('.searchBox')
const search = document.querySelector('.search')


function wikiSearch(){
    const api_url= `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchBox.value}&format=json&callback=?`

    $.ajax({
        url: api_url,
        type: "GET",
        dataType: "json",

    })
}

searchButton.addEventListener('click', wikiSearch)