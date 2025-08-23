const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
    if (sidebar.classList.contains("-translate-x-full")) {
        mainContent.style.marginLeft = "-16rem";
    } else {
        mainContent.style.marginLeft = "0rem";
    }
});

function logoutUser() {
    window.location.href = "index.html";
}