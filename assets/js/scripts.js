(function() {
    
    var modal = document.getElementById("modalUpdateTodo");
    var confirmModal = document.getElementById("confirmModal");

    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('show');
            modal.classList.add('hide');
            confirmModal.classList.remove('show');
            confirmModal.classList.add('hide');
        });
    });
    
    document.body.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('show');
            modal.classList.add('hide');
        }
        if (event.target == confirmModal) {
            confirmModal.classList.remove('show');
            confirmModal.classList.add('hide');
        }
    }  
 })();