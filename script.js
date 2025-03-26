function hitungHarga() {
            let harga = document.getElementById("diamond").value;
            document.getElementById("totalHarga").innerText = "Rp " + harga;

            let game = document.getElementById("game").value;
            let playerID = document.getElementById("playerID").value;
            let diamond = document.getElementById("diamond").options[document.getElementById("diamond").selectedIndex].text;

            let waMessage = `https://wa.me/6287717274346?text=Halo, saya ingin top-up ${game}%0AID: ${playerID}%0AItem: ${diamond}%0ATotal: Rp ${harga}`;
            document.getElementById("orderBtn").href = waMessage;
        }
    document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        alert(`Kamu memilih: ${item.querySelector('h3').textContent}`);
    });
});
