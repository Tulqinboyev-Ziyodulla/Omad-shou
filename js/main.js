document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".title");
    const btn = document.querySelector(".btn");
    const input = document.querySelector(".input");
    const form = document.querySelector(".form");

    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });

    btn.addEventListener("click", () => {
        let inputvalue = input.value;

        const TEL_NUMBERS = [
            "+998 95 123 33 52",    
            "+998 98 456 78 98",
            "+998 99 100 00 10",
            "+998 55 412 55 05",
            "+998 90 410 10 20",
            "+998 97 952 00 80",
        ];

        if (inputvalue) {
            TEL_NUMBERS.unshift(inputvalue);  
        }

        console.log(TEL_NUMBERS);

        btn.setAttribute("disabled", true);

        let interval = setInterval(() => {
            let index = Math.floor(Math.random() * TEL_NUMBERS.length);
            title.textContent = TEL_NUMBERS[index];
        }, 50);

        setTimeout(() => {
            clearInterval(interval);
            btn.removeAttribute("disabled");
            let finalIndex = Math.floor(Math.random() * TEL_NUMBERS.length);
            title.textContent = TEL_NUMBERS[finalIndex];
        }, 2500);
    });
});