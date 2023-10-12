var modal = document.getElementById("HetModal");
var leeftijdInput = document.getElementById("leeftijdInput");
var leeftijdControle = document.getElementById("leeftijdControle");
var resultaat = document.getElementById("resultaat");
var span = document.getElementsByClassName("sluit")[0];

leeftijdControle.onclick = function() {
   
    var leeftijd = parseInt(leeftijdInput.value);

   
    if (!isNaN(leeftijd) && leeftijd >= 18) {
        resultaat.innerHTML = "U bent 18 jaar of ouder.";
        resultaat.style.color = "green";
       
        window.location.href = "https://gamer.nl/reviews/games/pc-games/gta-6-alle-geruchten-en-feiten-op-een-rij//";
    } else {
        resultaat.innerHTML = "Helaas, u bent te jong.";
        resultaat.style.color = "red";
        
        window.location.href = "tejong.html";
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
