const change = document.getElementById("change")

function change_data(){

document.getElementsByTagName('div')[3].innerText='Morozova'
document.getElementsByTagName('div')[4].innerText='Alexandra'
document.getElementsByTagName('div')[5].innerText='Romanovna'

}
change.addEventListener("click", change_data)