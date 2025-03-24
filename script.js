function checkCode() {
    const correctCode = "12345678"; // Pola yang benar
    const inputCode = document.getElementById("inputCode").value; // Mengambil nilai input
    const errorMessage = document.getElementById("errorMessage");
    const overlay = document.getElementById("overlay");
    const resultContainer = document.getElementById("resultContainer");
    const phoneButton = document.getElementById("phoneButton"); // Misalkan tombol HP memiliki id 'phoneButton'
    const pageBottom = document.getElementById("pageBottom"); // Misalkan bagian bawah halaman memiliki id 'pageBottom'

    if (inputCode === correctCode) {
        overlay.style.display = "none"; // Menyembunyikan overlay
        resultContainer.style.display = "block"; // Menampilkan pesan hasil

        // Menonaktifkan tombol HP dan bagian bawah layar
        phoneButton.style.pointerEvents = "none"; // Menonaktifkan interaksi dengan tombol HP
        pageBottom.style.display = "none"; // Menyembunyikan bagian bawah halaman
    } else {
        errorMessage.textContent = "Pola salah! Silakan coba lagi."; // Menampilkan pesan kesalahan
    }
}
