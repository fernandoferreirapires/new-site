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