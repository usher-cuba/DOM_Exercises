const d = document;
const w = window;

export default function scrollTopBtn(button){
    const $topBtn = d.querySelector(button);

    w.addEventListener("scroll", (e) => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        //console.log(scrollTop);
        if(scrollTop > 600)
            $topBtn.classList.remove("hidden");
        else
            $topBtn.classList.add("hidden");
    });

    d.addEventListener("click", (e) => {

        if(e.target.matches(button)){
            w.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }
    });
}