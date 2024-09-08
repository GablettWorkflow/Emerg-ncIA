function pesquisar() {
     // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")
    
let campoPesquisa = document.getElementById("campo-pesquisa").value

campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = ""; // Inicializa a variável que armazenará os resultados formatados
    let titulo = "";
    let no_corpo = "";
    let nos_musculos = "";
    let no_rosto = "";
    let na_cognicao = "";
    let na_fala = "";
    let na_visao = "";
    let sensorial = "";
    
     // Percorre cada objeto dentro do array 'dados'
    for (let dado of dados) {
        no_corpo = dado.titulo.toLowerCase()
        nos_musculos = dado.nos_musculos.toLowerCase()
        no_rosto = dado.no_rosto.toLowerCase()
        na_cognicao = dado.na_cognicao.toLowerCase()
        na_fala = dado.na_fala.toLowerCase()
        na_visao = dado.na_visao.toLowerCase()
        sensorial = dado.sensorial.toLowerCase()

        if (titulo.includes(campoPesquisa) || no_corpo.includes(campoPesquisa) || nos_musculos.includes(campoPesquisa) || no_rosto.includes(campoPesquisa) || na_cognicao.includes(campoPesquisa) || na_fala.includes(campoPesquisa) || na_visao.includes(campoPesquisa) || sensorial.includes(campoPesquisa)) {
            resultados += `
        <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <h3>Nivel de Emergência:</h3>
                    <p>🔴 <strong>${dado.nivel_de_emergencia}</strong></p>
                    <h3>Casos Por Ano</h3>
                    <p>Aproximadamente <strong>${dado.casos_por_ano}</strong></p>
                    <a href=${dado.link_para_ligacao} target="_blank">Acionar Emergência</a>
                    <section class="sintomas">
                        <h2>📋 Prinicpais Sintomas</h2>
                        <ul>
                          <li><strong>Nos músculos:</strong> ${dado.nos_musculos}</li>
                          <li><strong>Na visão:</strong> ${dado.na_visao}</li>
                          <li><strong>Na fala:</strong> ${dado.na_fala}</li>
                          <li><strong>No corpo:</strong> ${dado.no_corpo}</li>
                          <li><strong>Sensorial:</strong> ${dado.sensorial}</li>
                          <li><strong>Na cognição:</strong> ${dado.na_cognicao}</li>
                          <li><strong>No rosto:</strong> ${dado.no_rosto}</li>
                        </ul>
                      </section>
                      <h2>🩺 Caracteristicas</h2>
                      <li><strong>Intensidade:</strong> ${dado.intensidade}</li>
                      <li><strong>Duração:</strong> ${dado.duração}</li>
                      <h2>🧬 Possiveis Causas</h2>
                      <li><strong>Causas:</strong> ${dado.causas}</li>
                      <li><strong>Fatores de Risco:</strong> ${dado.fatores_de_risco}</li>
                      <li><strong>Fatores agravantes:</strong> ${dado.fatores_agravantes}</li>
                      <h2>💊 Tratamentos</h2>
                      <li><strong>Fatores aliviantes:</strong> ${dado.fatores_aliviantes}</li>
                      <li><strong>Prevenção:</strong> ${dado.prevencao}</li>
                      <li><strong>Tratamento:</strong> ${dado.tratamento}</li>
                        <h2>🔗 Links Úteis</h2>
                        <a href=${dado.link_artigo}>Saiba Mais 💭</a>
                        <a href=${dado.link_video}>Video Rápido 🎥</a>
                </div>
        `
    }
     // Insere os resultados gerados dentro da seção no HTML
    section.innerHTML = resultados
        }
         // Concatena os dados de cada objeto em um template de string HTML
        
}