const d = document;
const ls = localStorage;

export default function darkLight(button, classDark){
    const $darkLightBtn = d.querySelector(button);
    const $selectors = d.querySelectorAll("[data-dark]");
    //console.log($selectors);
    let moon = "🌒", sun = "☀️";

    const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $darkLightBtn.textContent = moon;
        ls.setItem("theme", "light");
    }

    const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $darkLightBtn.textContent = sun;
        ls.setItem("theme", "dark");
    }

    d.addEventListener("click", (e) => {
        if(e.target.matches(button)){
            if($darkLightBtn.textContent === moon)darkMode();
            else lightMode();
        }
    });

    d.addEventListener("DOMContentLoaded", (e) => {
        if(ls.getItem("theme") === null)ls.setItem("theme", "light");
        if(ls.getItem("theme") === "light")lightMode();
        if(ls.getItem("theme") === "dark")darkMode();
    });
}