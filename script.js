let herois = [
    { nome: "Laryssa", xp: 7500 },
    { nome: "Carlos", xp: 2500 },
    { nome: "Mariana", xp: 9500 },
    { nome: "Pedro", xp: 12000 }
];

function classificaNivel(xp) {
    if (xp < 1000) return "Ferro";
    else if (xp <= 2000) return "Bronze";
    else if (xp <= 5000) return "Prata";
    else if (xp <= 7000) return "Ouro";
    else if (xp <= 8000) return "Platina";
    else if (xp <= 9000) return "Ascendente";
    else if (xp <= 10000) return "Imortal";
    else return "Radiante";
}

const container = document.getElementById("herois-container");

herois.forEach(heroi => {
    const nivel = classificaNivel(heroi.xp);
    const card = document.createElement("div");
    card.className = "heroi-card";
    card.innerHTML = `
        <p>Nome: <strong>${heroi.nome}</strong></p>
        <p>XP: ${heroi.xp}</p>
        <p class="nivel">Nível: ${nivel}</p>
    `;
    container.appendChild(card);
});
