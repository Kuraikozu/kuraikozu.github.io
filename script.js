// --- Open modal --- //
const open = document.getElementById("openFull");
const modal = document.getElementById("modalBg");
const close = document.getElementById("closeModal");

open.onclick = () => {
    modal.style.display = "flex";
};
close.onclick = () => {
    modal.style.display = "none";
};

// --- Theme Switch --- //
const switchInput = document.getElementById("theme-switch");
const body = document.body;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light");
  switchInput.checked = true;
}

switchInput.addEventListener("change", () => {
  body.classList.toggle("light", switchInput.checked);
  localStorage.setItem("theme", switchInput.checked ? "light" : "dark");
});

// --- Random Image Loader --- //
const bannerFolder = "banner/";
const avatarFolder = "avatar/";
const banners = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];
const avatars = ["avatar1.png", "avatar2.png", "avatar3.png"];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

document.querySelector(".banner").style.backgroundImage =
  `url('${bannerFolder + randomFrom(banners)}')`;

document.querySelector(".avatar").style.backgroundImage =
  `url('${avatarFolder + randomFrom(avatars)}')`;

// --- Random Gradient Background --- //
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

const color1 = randomColor();
const color2 = randomColor();
const color3 = randomColor();
document.querySelector(".profile-card").style.solid = 
    `linear-gradient(135deg, ${color1}, ${color2})`;
document.querySelector(".profile-card").style.background = 
    `linear-gradient(135deg, ${color1}, ${color2}, ${color3})`;
// --- BIG or SMALL Tooltip --- //
const tooltip = document.getElementById("tooltip");
const container = tooltip.parentElement;

document.querySelectorAll(".badge").forEach(badge => {
    badge.addEventListener("mouseenter", e => {

        const rect = badge.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const type = badge.dataset.type;

        if (type === "small") {
            tooltip.innerHTML = `<div class="tooltip-small">${badge.dataset.tooltip}</div>`;
        }
        else if (type === "big") {
            tooltip.innerHTML = `
                <div class="tooltip-big">
                    <img src="${badge.dataset.icon}">
                    <h3>${badge.dataset.title}</h3>
                    <p>${badge.dataset.text}</p>
                    <div class="tooltip-arrow"></div>
                </div>
            `;
        }

        tooltip.style.left = (rect.left - containerRect.left + rect.width / 2) + "px";
        tooltip.style.top = (rect.top - containerRect.top - 10) + "px";
        tooltip.style.transform = "translate(-50%, -100%)";

        tooltip.style.opacity = "1";
    });

    badge.addEventListener("mouseleave", () => {
        tooltip.style.opacity = "0";
    });
});