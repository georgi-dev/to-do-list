var Todos  = {

    get: async (params) => {
        const response = await fetch('/receiver.php?req=get&page=' + params.page);
        
        const data = await response.json();

        populateTable(data);
        createPaginationLinks(data.pages);

        function populateTable(data) {
            let tblSrc = ``;



            for(let i = 0; i < data.todos.length; i++) {
                const todo = data.todos[i];
                tblSrc += `<tr data-id="${todo.id}">
                            <td class="title">${todo.title}</td>
                            <td class="description">${todo.description}</td>
                            <td class="created">${todo.created_at}</td>
                            <td>
                                <button class="text-blue action-btn edit-todo" onclick="Todos.getOne(${todo.id})" data-id=${todo.id}>Edit</button>
                                <button class="text-red action-btn remove-todo" onclick="Todos.onRemove(${todo.id})" data-id=${todo.id}>Remove</button>
                                
                            </td>
                        </tr>`

            }

            // .innerHTML = tblSrc;
            document.querySelector('tbody').innerHTML = tblSrc;
        }

        function createPaginationLinks(pages) {
            console.log(pages);
            let paginationLink = "";
            for (i = 1;i <= pages;i++) {
                paginationLink += "<a href=\"javascript:Todos.get({page:" + i + "})\" class=\"" + (i == params.page ? "active-link" : "") + "\">" + i + "</a>";
            }

            document.querySelector('.pagination').innerHTML = paginationLink;

        }
    },
    
    getOne: async (id) => {
        const response = await fetch('/receiver.php?req=get_one&id=' + id);
        
        const data = await response.json();
    
        const ids = document.querySelector('input[name="id"');
        const page_number = document.querySelector('input[name="page"');
        const title = document.querySelector('.title');
        const description = document.querySelector('.description');

        
        
        let url = new URL(window.location);
        let params = new URLSearchParams(url.search);
        console.log("PAGE", params.get('page'));
        // console.log("PAGE", urlParams);
        const page = params.get('page');
        ids.value = data.result.id;
        page_number.value = page;
        title.value = data.result.title;
        description.value = data.result.description;
        Todos.toggleModal("modalUpdateTodo");
    
        
    },
    toggleModal(id){
        const modalUpdateTodo = document.getElementById("modalUpdateTodo");
        const confirmModal = document.getElementById("confirmModal");

        if( id == 'modalUpdateTodo' ) {

            if(Todos.hasClass(modalUpdateTodo, 'show')) {
                modalUpdateTodo.classList.remove('show');
                modalUpdateTodo.classList.add('hide');
            }
            if(Todos.hasClass(modalUpdateTodo, 'hide')) {
                modalUpdateTodo.classList.remove('hide');
                modalUpdateTodo.classList.add('show');
            }

            
        }

        if( id == 'confirmModal' ) {

            if(Todos.hasClass(confirmModal, 'show')) {
                confirmModal.classList.remove('show');
                confirmModal.classList.add('hide');
            }
            if(Todos.hasClass(confirmModal, 'hide')) {
                confirmModal.classList.remove('hide');
                confirmModal.classList.add('show');
            }
        }

        
    },
    hasClass(element, className) {
        return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
    },
    update: async () => {
        
        const id = document.querySelector('input[name="id"').value;
        const title = document.querySelector('.title').value;
        const description = document.querySelector('.description').value;
        const response = await fetch(`/receiver.php?req=update&id=${id}&title=${title}&description=${description}`);
        
        const data = await response.json();
        
        console.log("DATA", data);
        var modal = document.getElementById("modalUpdateTodo");
        if(data.result) {
            modal.classList.remove('show');
            modal.classList.add('hide');
            // Todos.get({page:1});
            const parentTr = document.querySelector(`tr[data-id="${id}"]`);
            parentTr.querySelector('.title').innerHTML = title;
            parentTr.querySelector('.description').innerHTML = description;
            
        }

    },

    onRemove: async (id) => {

        // event.preventDefault();
        var modal = document.getElementById("confirmModal");
        
        modal.classList.remove('hide');
        modal.classList.add('show');
        document.querySelector('.confirm').setAttribute('data-id',  `${id}`);
    },

    remove: async () => {

        var modal = document.getElementById("confirmModal");
        
        const id = document.querySelector('.confirm').getAttribute('data-id');
        const response = await fetch(`/receiver.php?req=remove&id=${id}`);
        
        const data = await response.json();

        console.log("DATA", data);
        if(data.result) {
            modal.classList.remove('show');
            modal.classList.add('hide');
            Todos.get({page:1});
        }
    },

}