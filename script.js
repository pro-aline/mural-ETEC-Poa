/**
 * Mural ETEC Poá - Script para efeitos visuais de post-its
 * 
 * Este script aplica rotações aleatórias e cores variadas aos post-its
 * para dar um aspecto mais realista ao mural.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Aplicar efeitos visuais aos post-its
    applyVisualEffects();
});

/**
 * Aplica efeitos visuais aos post-its
 * - Rotação aleatória
 * - Cores variadas
 * - Sombras para efeito 3D
 */
function applyVisualEffects() {
    // Obter todos os post-its
    const tipCards = document.querySelectorAll('.tip-card');
    
    // Cores claras e clássicas restritas a: amarelo, azul, verde e rosa
    const colors = [
        // Amarelos
        '#FFF8A6',
        '#FFF2B2',
        // Azuis
        '#E7F7FF',
        '#E0F2FF',
        // Verdes
        '#E9FFE3',
        '#E6F7E6',
        // Rosas
        '#FDE2E4',
        '#FFE6F1',
    ];
    
    // Aplicar estilos aleatórios a cada post-it
    tipCards.forEach(card => {
        // Rotação aleatória entre -3 e 3 graus
        const rotation = Math.random() * 6 - 3;
        
        // Cor aleatória do array de cores
        const colorIndex = Math.floor(Math.random() * colors.length);
        
        // Aplicar estilos
        card.style.transform = `rotate(${rotation}deg)`;
        card.style.backgroundColor = colors[colorIndex];
        
    // Adicionar sombra para dar efeito de profundidade (compatível com #333)
    card.style.boxShadow = '2px 2px 5px rgba(51,51,51,0.2)';
    });
}
