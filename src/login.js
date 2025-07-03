function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  console.log("User info from Google:", data);

  alert(`Login berhasil! Selamat datang, ${data.name}`);
  window.location.href = "index2.html";
}

window.addEventListener("load", function () {
  // Inisialisasi Google Login
  google.accounts.id.initialize({
    client_id:
      "947941764102-5ft2q9g21mei6vrn0jl89jahesu8llm5.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });

  // Tombol Google custom
  const customBtn = document.getElementById("custom-google-btn");
  if (customBtn) {
    customBtn.addEventListener("click", () => {
      google.accounts.id.prompt(); // tampilkan popup login
    });
  }

  // Simulasi Login Email Manual
  document
    .getElementById("loginForm")
    ?.addEventListener("submit", function (e) {
      e.preventDefault();
      window.location.href = "index2.html";
    });
});
