
document.addEventListener("DOMContentLoaded", () => {

    const APP_VERSION = "1.1.0";

    document.querySelectorAll("[data-version]").forEach((element) => {
        element.textContent = APP_VERSION;
    });

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    const downloadButtons = document.querySelectorAll(
        ".button-download"
    );

    downloadButtons.forEach((button) => {
        button.addEventListener("click", () => {
            console.info(
                `Download do Meu Rebanho Leiteiro, versão ${APP_VERSION}.`
            );
        });
    });
});
