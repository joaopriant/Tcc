function onload(){
    const homeMenu = document.getElementById("homeMenu")
    const cadastrarMenu = document.getElementById("cadastrarMenu");
    const abrirChamadoMenu = document.getElementById("abrirChamadoMenu");
    const manutencoesMenu = document.getElementById("manutencoesMenu");
    const logout = document.getElementById("iconuser");
    
    homeMenu.style.display = 'none'; //or
    cadastrarMenu.style.display = 'none'; //or
    abrirChamadoMenu.style.display = 'none'; //or
    manutencoesMenu.style.display = 'none'; //or
    
    const textoJson = localStorage.getItem("dadosLogin");
    const objetoJson = JSON.parse(textoJson);
    //alert(objetoJson.acessos.AberturaChamado);
    if(objetoJson.acessos.AberturaChamado==1){
      abrirChamadoMenu.style.display = "block"
    }
    if(objetoJson.acessos.Manutencao==1){
      manutencoesMenu.style.display = "block"
    }
    if(objetoJson.acessos.Dashboard==1){
      homeMenu.style.display = "block"
    }
    if(objetoJson.acessos.cadastrarMenu==1){
      cadastrarMenu.style.display = "block"
    }
    
  }