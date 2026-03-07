// let src = "puwapuchimiku.png"
// let text = "puwapuchi miku"
// let titulo = "R$39,39"

// const infoCard = document.getElementById('info1')
// const titleCard = document.getElementById('titulo1')
// const imgCard = document.getElementById('img1')

// imgCard.setAttribute('src', src)
// titleCard.textContent = titulo
// infoCard.textContent = text

const headings = [
  "Hatsune Miku",
  "Kagamine Rin",
  "Kagamine Len",
  "Megurine Luka",
  "Kamui Gakupo",
  "GUMI",
  "Sweet Ann",
  "Prima",
  "Big Al",
  "Sonika"
]

const dataInfo = [
  "Hatsune Miku é uma voicebank japonesa da Crypton Future Media lançada em 2007. Ficou extremamente famosa por sua voz jovem e versátil, tornando-se um dos maiores ícones da cultura Vocaloid.",
  "Kagamine Rin é uma voicebank feminina lançada pela Crypton Future Media em 2007. Sua voz é energética e brilhante, ideal para músicas pop rápidas e animadas.",
  "Kagamine Len é a contraparte masculina da Rin, lançado junto com ela. Sua voz é juvenil e funciona bem em rock, pop e músicas dramáticas.",
  "Megurine Luka foi lançada em 2009 e é conhecida por sua voz mais madura. Ela pode cantar em japonês e inglês, sendo muito usada em músicas eletrônicas e melancólicas.",
  "Kamui Gakupo é um Vocaloid masculino com voz profunda baseado no cantor Gackt. Sua voicebank é muito usada em músicas épicas, rock e temas samurai.",
  "GUMI (Megpoid) foi lançada pela Internet Co. Ltd. e possui uma voz natural e expressiva. É muito popular em vários gêneros como pop, rock e músicas experimentais.",
  "Sweet Ann foi uma das primeiras voicebanks em inglês do Vocaloid 2. Sua voz feminina suave é adequada para músicas pop e baladas.",
  "Prima é uma voicebank voltada para canto operístico e clássico. Ela é usada principalmente em músicas corais ou estilo ópera.",
  "Big Al é uma voicebank masculina em inglês conhecida por sua voz profunda e suave, sendo usada em rock, pop e músicas lentas.",
  "Sonika é uma voicebank feminina em inglês com voz energética e eletrônica, ideal para música pop e dance."
]

const imgSrc = [
    'puwapuchimiku.png',
    'puwapuchimiku.png',
    'puwapuchimiku.png',
    'lucas.webp',
    'gakupo.jpg',
    'puwapuchimiku.png',
    'puwapuchimiku.png',
    'puwapuchimiku.png',
    'puwapuchimiku.png',
    'puwapuchimiku.png'
    
]

const imgCard = document.getElementsByClassName('img-card')
const title = document.getElementsByClassName('titulo')
const info = document.getElementsByClassName('info')

for(let i = 0; i < 10; i++){
    imgCard[i].setAttribute("src", imgSrc[i])
    title[i].textContent = headings[i]
    info[i].textContent = dataInfo[i]
    
}