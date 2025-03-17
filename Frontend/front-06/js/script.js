// Criando uma function
function updateTime() {
   const timeDiv = document.querySelector("#time"); // querySelector pode selecionar varias coisas, como id, class ou até msm estrutura;
   const dataNew = new Date();

  const hours = String(dataNew.getHours()).padStart(2, "0"); // Transformar number em string e typeoff = typo da variavel
  const minutes = String(dataNew.getMinutes()).padStart(2, "0");
  const seconds = String(dataNew.getSeconds()).padStart(2, "0");

  

 // Jeito errado:  timeDiv.textContent = hours + ":" + minutes + ":" + seconds;
 timeDiv.textContent = `${hours}:${minutes}:${seconds}`; // $ = template string
 
 
}

setInterval(updateTime, 1000)
//Chamar function
updateTime();