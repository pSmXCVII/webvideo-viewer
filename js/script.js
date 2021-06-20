function buscaHistoricoStorage(){
  const historico = JSON.parse(localStorage.getItem('pages'));
  return historico;
}

function montaHistorico(){
  const divHistorico = document.querySelector("#historico");
  const historico = buscaHistoricoStorage();
  if(historico){
    const historicoArray = Array.from(historico);
    divHistorico.innerHTML = "<h3>Histórico de acessos</h3>";
    
      historicoArray.forEach((i)=>{
        const data = new Date(i.data);
        const divItem = document.createElement('div');
        divItem.classList.add("itemHistorico");
        divItem.innerHTML = `
        <div class="card border-success mb-3">
          <div class="card-body text-success">
            <p class="card-text">
            ${i.link}
            </p>
          </div>
          <div class="card-footer text-end bg-transparent border-success">
            ${data.toLocaleDateString()} às ${data.toLocaleTimeString()}
          </div>
        </div>`;
        divHistorico.appendChild(divItem);
      });
    
  }
}
window.addEventListener('load', montaHistorico);

function incluiHistorico() {
  const linkInformado = document.querySelector("#endereco-video").value;
  const historico = buscaHistoricoStorage();
  if(historico){
    if(linkInformado){
      const data = Date();
      const historicoArray = Array.from(historico);
      const objStorage = {"link":linkInformado, "data": data};
      historicoArray.push(objStorage)
      localStorage.setItem('pages', JSON.stringify(historicoArray));
      montaHistorico();
      acessarLink(linkInformado);
    } else {
      alert("Um link válido deve ser informado para prosseguir");
    }
    
  } else {
    if(linkInformado){
      const data = Date();
      const objStorage = {"link":linkInformado, "data": data};
      localStorage.setItem('pages', JSON.stringify(objStorage));
      montaHistorico();
      acessarLink(linkInformado);
    } else {
      alert("Um link válido deve ser informado para prosseguir");
    }
  }
}

document.querySelector("#btn-ir").addEventListener('click', incluiHistorico);

function acessarLink(link){
  document.location.href = link;
}
