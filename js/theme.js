export function initTheme() {

    const root = document.documentElement;
    const themeBtn = document.querySelector(".theme-toggle");

    themeBtn.addEventListener("click", () => {

        const currentTheme = root.getAttribute("data-theme");

        if (currentTheme === "dark") {
            root.removeAttribute("data-theme");
        } else {
            root.setAttribute("data-theme", "dark");
        }

    });

}