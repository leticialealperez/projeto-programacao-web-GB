"use strict";
const buttonListar = document.querySelector('#btn-mostrar-listagem');
buttonListar.addEventListener('click', () => {
    window.location.href = 'listagem.html';
});
document.addEventListener('DOMContentLoaded', () => {
    let dados = JSON.parse(localStorage.getItem('dados') || '[]');
    let totalAnalitico = 0;
    let totalAmigavel = 0;
    let totalAutoritario = 0;
    let totalExpressivo = 0;
    dados.forEach((registro) => {
        totalAnalitico += registro.resultados[0].pontuacao;
        totalAmigavel += registro.resultados[1].pontuacao;
        totalAutoritario += registro.resultados[2].pontuacao;
        totalExpressivo += registro.resultados[3].pontuacao;
    });
    // grafico BAR
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(desenharChartBar);
    function desenharChartBar() {
        let data = google.visualization.arrayToDataTable([
            ['Perfil', 'Pontos '],
            ['Analítico', totalAnalitico],
            ['Amigável', totalAmigavel],
            ['Autoritário', totalAutoritario],
            ['Expressivo', totalExpressivo],
        ]);
        let options = {
            title: 'Pontuação Total sobre Perfis Analisados'
        };
        let chart = new google.visualization.BarChart(document.getElementById('grafico-bar'));
        chart.draw(data, options);
    }
    // grafico PIE
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(desenharChartPie);
    function desenharChartPie() {
        var data = google.visualization.arrayToDataTable([
            ['Perfil', 'Percentual '],
            ['Analítico', totalAnalitico],
            ['Amigável', totalAmigavel],
            ['Autoritário', totalAutoritario],
            ['Expressivo', totalExpressivo],
        ]);
        var options = {
            title: 'Percentual Total sobre Perfis Analisados'
        };
        var chart = new google.visualization.PieChart(document.getElementById('grafico-pie'));
        chart.draw(data, options);
    }
});
