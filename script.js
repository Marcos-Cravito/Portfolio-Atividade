const botaoTopo = document.getElementById('voltar-topo');

function atualizarBotaoTopo() {
  botaoTopo.hidden = window.scrollY <= 300;
}

window.addEventListener('scroll', atualizarBotaoTopo);
atualizarBotaoTopo();

document.getElementById('ano').textContent = new Date().getFullYear();

