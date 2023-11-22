var listaFilmes = ['https://br.web.img3.acsta.net/pictures/14/03/31/19/28/462555.jpg', 'https://live.staticflickr.com/3327/3428645998_e6a6775888_z.jpg', 'https://i.pinimg.com/550x/86/55/80/865580314a24d809e6fb0f12ce72e738.jpg', 'https://cdn.culturagenial.com/imagens/psicopata-americano-poster.jpg', 'https://images.justwatch.com/poster/203860750/s718/sky-high-super-escola-de-herois.jpg', 'https://br.web.img3.acsta.net/medias/nmedia/18/93/46/28/20258378.jpg', 'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg', 'https://i.pinimg.com/originals/92/a6/87/92a687223d019954e34581d4fbd75f70.jpg','https://www.cineplayers.com/sites/default/files/posters/2020/08/god.jpg', 'https://www.gazetavirtual.com.br/wp-content/uploads/2018/08/Better-Call-Saul-Divulga%C3%A7%C3%A3o.jpg' ];
//desafio 2 - adicionar itens na lista usando o .push

listaFilmes.push('https://upload.wikimedia.org/wikipedia/pt/8/82/Pulp_Fiction_cover.jpg', 'https://br.web.img2.acsta.net/medias/nmedia/18/90/07/53/20391069.jpg');

var nomeFilmes = ['Breaking Bad', 'Kill Bill ', 'Clube da Luta', 'Pscicopata Americano', 'Sky High', 'Taxi Driver', 'Bastardos Inglórios', 'Scarface', 'Poderoso Chefão', 'Better Call Saul', 'Pulp Fiction', 'Django Livre'];

document.write('<div class="container_todosFilmes">')
//desafio 1 - transformar for em while
var i = 0;
while(i < listaFilmes.length){
    if((listaFilmes[i].endsWith('jpg')) || (listaFilmes[i].endsWith('jpeg'))){
        document.write('<div class="container_filme">')
        document.write('<img src='+ listaFilmes[i] +'>');
        document.write('<p>'+ nomeFilmes[i] +'</p>'); //desafio 4 - colocar titulos embaixo da imagem
        document.write('</div>')
    }else{
        document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>');
    }
    i++;
}
document.write('</div>')

  

