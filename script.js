function checkCode() {
    const correctCode = "12345678"; // Pola yang benar
    const inputCode = document.getElementById("inputCode").value; // Mengambil nilai input
    const errorMessage = document.getElementById("errorMessage");
    const overlay = document.getElementById("overlay");
    const resultContainer = document.getElementById("resultContainer");

    if (inputCode === correctCode) {
        overlay.style.display = "none"; // Menyembunyikan overlay
        resultContainer.style.display = "block"; // Menampilkan pesan hasil
    } else {
        errorMessage.textContent = "Pola salah! Silakan coba lagi."; // Menampilkan pesan kesalahan
    }
}
