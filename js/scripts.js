// input type select
document.querySelectorAll('.form-label').forEach( label => {
    if (label.classList.contains('select')) {
        label.addEventListener('click', (e) => {
            label.querySelector('.form-select').classList.toggle('show')
        })
    }

    label.querySelectorAll('.form-select-item').forEach( selectItem => {
        selectItem.addEventListener('click', () => {
            label.querySelector('input').value = selectItem.textContent;
            label.querySelector('.form-select').classList.remove('show')
        });
    });
});

// submit form
document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();

    let error = false;

    document.querySelectorAll('.form input').forEach( input => {
        if (input.required && !input.value) {
            input.classList.add('error');
        }else{
            input.classList.remove('error');
        }

        let label = input.closest('label').querySelector('p').textContent;

        document.querySelector('.modal-form').insertAdjacentHTML('afterbegin', `<label class="modal-label"><p>${label}</p><span>-</span><input type="text" readonly class="modal-input" value="${input.value}" name="${input.name}"></label>`);
    });

    if (!error) {
        document.querySelector('.modal').classList.add('show');
    }
});

// modal
document.querySelectorAll('.modal-close, .modal-bg').forEach( el => {
    el.addEventListener('click', (e) => {
        e.target.closest('.modal').classList.remove('show');

        e.target.closest('.modal').querySelectorAll('label').forEach( label => {
            label.remove();
        })
    });
});

document.querySelector('.modal-form').addEventListener('submit', (e) => {
    e.preventDefault();

    document.querySelectorAll('.modal-form input').forEach( input => {
        let label = input.closest('label').querySelector('p').textContent;
        console.log(label + ' - ' + input.value);
    });
});