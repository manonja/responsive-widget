const url = 'https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init'
const section = document.querySelector('.cards')

const addCard = (card) => {
  const article = document.createElement('article');
  article.className = 'card'

  article.innerHTML = `
    <a href="${card.url}">
      <picture class="thumbnail">
        <img src="${card.thumbnail[0].url}" alt="${card.name}">
      </picture>
      <div class="card-content">
        <h2>${card.name}</h2>
        <p class="branding"><small>${card.branding}</small></p>
      </div>
    </a>
  `
  section.append(article)
      
}

const addCards = (cards) => {
  cards.list.forEach(addCard)
}

const getData = () => {
  return fetch(url)
  .then(resp => resp.json())
}

const init = () => {
  getData()
    .then(addCards)
}

init() 