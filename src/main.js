// ✅ Aoutoscroll
document.addEventListener("DOMContentLoaded", function () {
  const autoScrollGallery = document.getElementById("autoScrollGallery");
  const testimonialScroll = document.getElementById("testimonialScroll");

  let scrollSpeed = 1;
  let interval = 20;

  function autoScroll(container) {
    if (!container) return;
    container.scrollLeft += scrollSpeed;
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollLeft = 0;
    }
  }

  setInterval(() => autoScroll(autoScrollGallery), interval);
  setInterval(() => autoScroll(testimonialScroll), interval);

  // ✅ Register Form
  document
    .getElementById("registerForm")
    ?.addEventListener("submit", function (e) {
      e.preventDefault();
      window.location.href = "login.html";
    });

  // ✅ Profil Form
  document
    .getElementById("profilForm")
    ?.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Profil berhasil disimpan!");
      window.location.href = "index2.html";
    });

  // ✅ Login Form
  document
    .getElementById("loginForm")
    ?.addEventListener("submit", function (e) {
      e.preventDefault();
      window.location.href = "index2.html";
    });
});

// ✅ Konsultasi
document.addEventListener("DOMContentLoaded", function () {
  const card = document.getElementById("cardkonsultasi");
  if (card) {
    card.addEventListener("click", function () {
      window.location.href = "chat.html";
    });
  }
});

// ✅ Edukasi
document.addEventListener("DOMContentLoaded", function () {
  const card = document.getElementById("cardEdukasi");
  if (card) {
    card.addEventListener("click", function () {
      window.location.href = "edukasi1.html";
    });
  }
});

// ✅ Dropdown
document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");

  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", function () {
    dropdownMenu.classList.add("hidden");
  });
});

// ✅ Preview Gambar
const imageInput = document.getElementById("image-input");
const preview = document.getElementById("image-preview");

imageInput.addEventListener("change", function () {
  preview.innerHTML = "";
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.className = "max-w-[100px] mt-2 rounded";
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});

// ✅ Chat Bot
function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const file = imageInput.files[0];
  const userMessage = input.value.trim();

  if (userMessage === "" && !file) return;

  const timestamp = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // ✅User Bubble
  const userBubble = document.createElement("div");
  userBubble.className = "flex self-end flex-row-reverse max-w-[80%] items-end";

  const userContent = document.createElement("div");
  userContent.className =
    "bg-[#1976d2] text-white p-3 rounded-2xl text-sm relative flex flex-col";

  const contentWrapper = document.createElement("div");
  contentWrapper.className = "flex justify-between items-end gap-2";

  const messageText = document.createElement("p");
  messageText.className = "whitespace-pre-wrap";
  messageText.innerText = userMessage;

  const timeRead = document.createElement("span");
  timeRead.className = "text-xs text-blue-200 whitespace-nowrap";
  timeRead.innerHTML = `${timestamp} ✔✔`;

  contentWrapper.appendChild(messageText);
  contentWrapper.appendChild(timeRead);
  userContent.appendChild(contentWrapper);

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.className = "max-w-[200px] mt-2 rounded";
      userContent.appendChild(img);
    };
    reader.readAsDataURL(file);
  }

  const avatar = document.createElement("img");
  avatar.src = "/images/avatar1.png";
  avatar.alt = "User";
  avatar.className = "w-8 h-8 rounded-full mx-2";

  userBubble.appendChild(avatar);
  userBubble.appendChild(userContent);
  chatBox.appendChild(userBubble);
  chatBox.scrollTop = chatBox.scrollHeight;

  input.value = "";
  imageInput.value = "";
  preview.innerHTML = "";

  // ✅Bot Bubble
  setTimeout(() => {
    const botBubble = document.createElement("div");
    botBubble.className = "flex self-start max-w-[80%] items-end";

    const botContent = document.createElement("div");
    botContent.className =
      "bg-gray-50 border border-gray-300 p-3 rounded-2xl text-sm relative flex flex-col";

    const botWrapper = document.createElement("div");
    botWrapper.className = "flex justify-between items-end gap-2";

    const botText = document.createElement("p");
    botText.className = "whitespace-pre-wrap";

    const message = userMessage.toLowerCase();
    if (message.includes("motor saya mogok")) {
      botText.innerText =
        "Apakah Anda menggunakan starter elektrik atau manual?";
    } else if (message.includes("elektrik")) {
      botText.innerText =
        "Coba periksa aki motor Anda, apakah lemah atau kotor?";
    } else {
      botText.innerText =
        "Terima kasih! Permintaan Anda sedang diproses oleh teknisi.";
    }

    const botTime = document.createElement("span");
    botTime.className = "text-xs text-gray-400 whitespace-nowrap";
    botTime.innerText = `${timestamp} ✔✔`;

    botWrapper.appendChild(botText);
    botWrapper.appendChild(botTime);
    botContent.appendChild(botWrapper);

    const botAvatar = document.createElement("img");
    botAvatar.src = "/images/Avatar2.png";
    botAvatar.alt = "Bot";
    botAvatar.className = "w-8 h-8 rounded-full mr-2";

    botBubble.appendChild(botAvatar);
    botBubble.appendChild(botContent);
    chatBox.appendChild(botBubble);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}
