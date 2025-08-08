document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".mensaje-inicial").style.display = "none";
        const form = document.querySelector("form");
        form.style.display = "flex";
    }, 3000); // 3 segundos
});
