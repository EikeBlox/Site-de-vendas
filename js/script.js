document.querySelectorAll('.produto').forEach(produto => {
    const diminuirBtn = produto.querySelector('.diminuir');
    const aumentarBtn = produto.querySelector('.aumentar');
    const quantidadeTexto = produto.querySelector('.quantidade');

    let quantidade = 0;

    diminuirBtn.addEventListener('click', () => {
        if (quantidade > 0) {
            quantidade--;
            quantidadeTexto.textContent = quantidade;
        }
    });

    aumentarBtn.addEventListener('click', () => {
        quantidade++;
        quantidadeTexto.textContent = quantidade;
    });
});
