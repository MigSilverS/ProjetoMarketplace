let btn = document.getElementById('btn');
let resultado = document.getElementById('resultado');
let arrProdutos = [];

function cadastrarProduto() {
    let nome = document.getElementById('nome').value;
    let imagem = document.getElementById('imagem').files[0];
    let valor = document.getElementById('valor').value;
    valor = parseFloat(valor.replace('R$', '').replace(',', '.'));
    let categoria = document.getElementById('categoria').value;
    let local = document.getElementById('local').value;
    let valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const reader = new FileReader();
    reader.onload = function() {
        const produto = {
            nome: nome,
            imagem: reader.result,
            valor: valorFormatado,
            categoria: categoria,
            local: local
        }

        arrProdutos.push(produto);
        
        resultado.innerHTML += `
            <div class="card" ">
                <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class:text-center>
                        <p>Valor: ${produto.valor} <br>
                            Categoria: ${produto.categoria} <br>
                            Local: ${produto.local}
                        </p>
                    </p>
                </div>
            </div>
        `;
    }

    reader.readAsDataURL(imagem);
}

btn.addEventListener('click', cadastrarProduto);