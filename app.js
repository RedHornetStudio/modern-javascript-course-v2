const add = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');

add.addEventListener('submit', e => {
    e.preventDefault();
    // let html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    //                 <span>${e.target.add.value}</span>
    //                 <i class="far fa-trash-alt delete"></i>
    //             </li>`
    // ul.innerHTML += html;

    let pattern = /^[a-zA-Z]+(\s+[a-zA-Z]+)*$/;
    if(pattern.test(e.target.add.value.trim())) {
        let li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        let span = document.createElement('span');
        span.textContent = e.target.add.value.trim();

        let i = document.createElement('i');
        i.classList.add('far', 'fa-trash-alt', 'delete');

        li.appendChild(span);
        li.appendChild(i);
        ul.appendChild(li);

        add.reset();
    }
});

ul.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

search.addEventListener('input', () => {
    let searchValue = search.value.trim().toLowerCase();

    Array.from(ul.children).forEach(e => {
        if(e.children[0].textContent.toLowerCase().includes(searchValue)) {
            e.classList.remove('filtered');
        } else {
            e.classList.add('filtered');
        }
    });
});