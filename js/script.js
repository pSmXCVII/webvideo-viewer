function pegaLinkInformado() {
  const linkInformado = document.querySelector("#endereco-video").value;
  
  if(linkInformado){
    document.location.href = linkInformado;
  } else {
    alert("Um link válido deve ser informado para prosseguir");
  }

}

document.querySelector("#btn-ir").addEventListener('click', pegaLinkInformado);