function toggle() {
    document.body.classList.toggle("dark-mode");
    let rename = document.getElementById("fixed-dark-mode-button__button");
    if (rename.innerHTML === "<i class=\"fa-solid fa-moon fa-2x\"></i>") {
        rename.innerHTML = "<i class=\"fa-solid fa-sun fa-2x\"></i>";
    }
    else {
        rename.innerHTML = "<i class=\"fa-solid fa-moon fa-2x\"></i>";
    }
}