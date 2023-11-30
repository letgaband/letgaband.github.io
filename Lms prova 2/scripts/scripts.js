let imgh = document.getElementById("logo-header");
let h3h = document.getElementById("logotype-header");

imgh.addEventListener('click', ()=>{window.location.href = "../pages/index.html";});
h3h.addEventListener('click', ()=>{window.location.href = "../pages/index.html";});

//
let cidade = document.getElementById("cidade");
let info = document.getElementById("info");
cidade.addEventListener('click', ()=>{info.innerText = "*No momento só aceitamos voluntários da cidade de Boa viagem"});