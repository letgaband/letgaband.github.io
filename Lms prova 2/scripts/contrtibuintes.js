let contribuintesCon = document.querySelector('.contribuintes-container');
const campanhas = ['Carnaval', 'Gatinho doente'];

async function randomUser() {
  try {
    const response = await axios.get('https://randomuser.me/api/?format=json');
    let nome = response.data.results[0].name.first + " " + response.data.results[0].name.last;
    let foto = response.data.results[0].picture.medium;
    let campanha = campanhas[Math.round(Math.random())];
    let valor = ((Math.floor(Math.random() * 15))+1).toFixed(2);
    console.log(nome);
    contribuintesCon.innerHTML += ('<div class="contribuinte">\
                     <div class="contribuinte-img"><img src="'+foto+'"/></div>\
                     <div class="contribuinte-infos">\
                       <h5>'+nome+'</h5>\
                       <div class="contribuicao">\
                         <h6>Ajudou Campanha <span>'+campanha+'</span></h6>\
                         <p>Contribuiu com <span>R$ '+valor+'</span></p>\
                       </div>\
                     </div>\
                   </div>');

  } catch (error) {
    console.log(error);
  }
}
randomUser();

async function insertUsers() {
  setInterval(randomUser, 3000);
}

insertUsers();