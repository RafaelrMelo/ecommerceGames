var slider, proxSlider, botao, imgAtual = 1, novaImg = 1; tempoTroca = 0, anima = "";
function carregaImagem(img) {
    tempoTroca = 0;
    switch (imgAtual) {
        case 1:
            slider = document.getElementById("um");
            document.querySelector(".um").removeAttribute("id", "ativo")
                ; break;
        case 2:
            slider = document.getElementById("dois");
            document.querySelector(".dois").removeAttribute("id", "ativo")
                ; break;
        case 3:
            slider = document.getElementById("tres");
            document.querySelector(".tres").removeAttribute("id", "ativo")
                ; break;
    }
    switch (img) {
        case 1:
            proxSlider = document.getElementById("um");
            document.querySelector(".um").setAttribute("id", "ativo")
                ; break;
        case 2:
            proxSlider = document.getElementById("dois");
            document.querySelector(".dois").setAttribute("id", "ativo")
                ; break;
        case 3: proxSlider =
            document.getElementById("tres");
            document.querySelector(".tres").setAttribute("id", "ativo")
                ; break;
    }
    slider.setAttribute("class", "hidden");
    proxSlider.classList.remove("hidden");
    imgAtual = img;

}
function troca(dir) {
    novaImg += dir;
    if (novaImg > 3) novaImg = 1;
    else if (novaImg < 1) novaImg = 3;
    carregaImagem(novaImg);
}
function trocaAut() {
    tempoTroca++;
    if (tempoTroca > 300) troca(1);
    anima = requestAnimationFrame(trocaAut);
}
function inicia() {
    botao = document.querySelectorAll(".seta");
    for (var i = 0; i < botao.length; i++) {
        botao[i].addEventListener("click", (event) => {
            var direcao = event.target.innerHTML;
            if (direcao == "&lt;") troca(-1);
            else if (direcao == "&gt;") troca(1);
        });
    }
    for (var i = 0; i < 3; i++) {
        switch (i) {
            case 0:document.querySelector(".um").addEventListener("click", () => {
                    carregaImagem(1);
                });
            break;
            case 1:document.querySelector(".dois").addEventListener("click", () => {
                    carregaImagem(2);
                });
            break;
            case 2:document.querySelector(".tres").addEventListener("click", () => {
                    carregaImagem(3);
                });
            break;
        }
    }
    trocaAut();
}
window.addEventListener("load", inicia);