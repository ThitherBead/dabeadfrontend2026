const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "rgb(18, 18, 18)") {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
        return;
    }
    else{
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#ffffff";
    }
});