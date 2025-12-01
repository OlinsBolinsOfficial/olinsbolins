// Saraksts ar izpildītājiem no json faila
let artists = [];
// Izpildītājs kas būs jāmin
let chosenArtist = null;

// Ielādē izpildītājus un izvēlas vienu no tiem
async function startGame() {
  document.getElementById("feedback").innerHTML = "📡 Ielādējas dati...";

  const response = await fetch("artists.json");
  artists = await response.json();

  chosenArtist = artists[Math.floor(Math.random() * artists.length)];
  console.log("Chosen Artist:", chosenArtist);

  document.getElementById("feedback").innerHTML = "🎵 Mini izpildītāju!";
  
  // Poga strādā kas spēle sākas
  document.querySelector("button").disabled = false;
}

// Izsauc izpildītāju kad spēle sākas
function makeGuess() {
        const input = document.querySelector("#guessInput");
  let userGuess = input.value.trim().toLowerCase();

if (!userGuess) {
     document.getElementById("feedback").innerHTML =
"<span class='Nepareizi'>Ievadi vārdu!</span>";
   return;
  }

  // Atrast pareizo izpildītāju
  let match = null;
  for (let i = 0; i < artists.length; i++) {
     if (artists[i].name.toLowerCase() === userGuess) {
match = artists[i];
      break;
   }
}

  if (!match) 
    {
    document.getElementById("feedback").innerHTML =
    "<span class='Nepareizi'>Nav atrasts izpildītājs!</span>";
    return;
  }

  let msg = "";
msg += `Vārds: ${match.name}<br><br>`;

  // Salīdzina žanru
  msg += `Žanrs: 
  ${
    match.genre === chosenArtist.genre
 ? `<span class='Pareizi'>${match.genre}</span>`
      : `<span class='Nepareizi'>${match.genre}</span>`
  }<br>`;

  // salīdzina debiju
  if (match.debut === chosenArtist.debut)
     {
msg += `Debija: <span class='Pareizi'>${match.debut}</span><br>`; } else {
    const hint = match.debut < chosenArtist.debut ? "Augstāk" : "Zemāk";
msg += `Debija: <span class='Nepareizi'>${match.debut} (${hint})</span><br>`;
  }

  // salīdzina valsti
  msg += `Valsts:
   ${
    match.country === chosenArtist.country
      ? `<span class='Pareizi'>${match.country}</span>`
      : `<span class='Nepareizi'>${match.country}</span>`}<br>`;

  // salīdzina dzimumu
  msg += `Dzimums:
   ${
          match.gender === chosenArtist.gender
      ? `<span class='Pareizi'>${match.gender}</span>`
      : `<span class='Nepareizi'>${match.gender || "??"}</span>`
  }<br>`;

  document.getElementById("feedback").innerHTML = msg;

  if (match.name === chosenArtist.name) {
alert(`Tu atminēji izpildītāju ${chosenArtist.name}!`);
  }
}

// sāk spēli
startGame();
