// ===== SCRIPT PRINCIPAL =====

// Aguardar o DOM carregar
document.addEventListener('DOMContentLoaded', function() {

    // 1. ATIVAR MENU ATUAL
    const currentPage = window.location.pathname.split('/').pop();
    const menuLinks = document.querySelectorAll('.sidebar-menu a');

    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active');
        }
    });

    // 2. SIMULAR NOTIFICAÇÕES (dados estáticos para teste)
    const notificationBadge = document.querySelector('.notification-badge');
    if (notificationBadge) {
        notificationBadge.addEventListener('click', function() {
            alert('Você tem 3 notificações não lidas');
            // Futuramente: redirecionar para página de notificações
        });
    }

    // 3. VALIDAÇÃO DE FORMULÁRIO SIMPLES
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Formulário enviado (simulação - integrar com Django depois)');
        });
    });

    // 4. BOTÕES DE AÇÃO (tabelas)
    const actionButtons = document.querySelectorAll('.btn-action');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const action = this.textContent.trim();
            alert(`Ação: ${action} (simulação)`);
        });
    });

    // 5. FILTROS SIMPLES (para lista de tarefas)
    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            alert(`Filtrando por: ${this.value}`);
            // Futuramente: atualizar tabela via AJAX
        });
    });

});

// ===== FUNÇÕES AUXILIARES =====

// Formatar data (ex: 2024-03-19 → 19/03/2024)
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT');
}

// Verificar se tarefa está atrasada
function isOverdue(deadline) {
    const hoje = new Date();
    const prazo = new Date(deadline);
    return prazo < hoje;
}

// Mostrar/esconder loading
function showLoading() {
    // Implementar futuramente
    console.log('Carregando...');
}

function hideLoading() {
    console.log('Carregamento concluído');
}