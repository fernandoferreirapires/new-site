let currentSlide = 0; // Índice da imagem atual
const slides = document.querySelectorAll('#slide img'); // Todas as imagens
const totalSlides = slides.length; // Quantidade total de imagens

// Função para mostrar a imagem atual
function showSlide(index) {
    slides[currentSlide].style.opacity = 0; // Oculta a imagem atual
    currentSlide = (index + totalSlides) % totalSlides; // Atualiza o índice
    slides[currentSlide].style.opacity = 1; // Mostra a nova imagem
}

// Evento para o botão "Voltar"
document.getElementById('prev').addEventListener('click', () => {
    showSlide(currentSlide - 1); // Vai para a imagem anterior
});

// Evento para o botão "Avançar"
document.getElementById('next').addEventListener('click', () => {
    showSlide(currentSlide + 1); // Vai para a próxima imagem
});

const dataInicio = new Date("2024-08-28T00:00:00");

function atualizarContadores(){
    const agora = new Date();
    const diferenca = agora - dataInicio;

const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24)));
const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

document.getElementById("ano").innerText = `${anos}\nanos`;
document.getElementById("mes").innerText = `${meses}\nmeses`;
document.getElementById("dias").innerText = `${dias}\ndias`;
document.getElementById("horas").innerText = `${horas}\nhoras`;
document.getElementById("minutos").innerText = `${minutos}\nminutos`;
document.getElementById("segundos").innerText = `${segundos}\nsegundos`;
}
setInterval(atualizarContadores,1000);