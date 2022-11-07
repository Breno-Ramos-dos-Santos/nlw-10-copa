function createGame(player1, hour, player2) {
  return `
   <li>
     <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
     <strong>${hour}</strong>
     <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
   </li>
   `
}
let delay = 0.5
function createCard(date, day, games) {
  delay = delay + 0.5
  return `
        <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "Quinta-Feira",
    createGame("brazil", "16:00", "serbia") +
      createGame("portugal", "13:00", "ghana")
  ) +
  createCard(
    "27/11",
    "Segunda-Feira",
    createGame("croatia", "13:00", "canada") +
      createGame("spain", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "Segunda-Feira",
    createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "02/12",
    "Sexta-Feira",
    createGame("portugal", "12:00", "southkorea") +
      createGame("brazil", "16:00", "cameroon")
  )
