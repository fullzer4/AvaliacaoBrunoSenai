const calc = () => {
    let taxa = document.getElementById("taxa").value
    let tempo = document.getElementById("tempo").value
    let aplicacao = document.getElementById("aplicacao").value
    document.getElementById("result").value = ((Number(aplicacao) * Number(taxa) / 100) * Number(tempo))
}