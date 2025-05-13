const btnSubmit = document.querySelector(".btn");

const tabsForm = document.querySelectorAll("input, textarea[name='text']");

const invalidEValidTabs = document.querySelectorAll(".normal-state, .valid-tab, .invalid-tab");

const activeWarning = document.querySelectorAll(".active-hide");

btnSubmit.addEventListener('click', () => {
    tabsForm.forEach((item, index) => {
        if (item.value === '') {
            item.classList.remove('normal-state');
            activeWarning[index].classList.remove('active-hide');
        } else {
            item.classList.remove('normal-state', 'invalid-tab');
            activeWarning[index].classList.add('active-hide');
        };
    });
});

function formatarTelefone(input) {
        var telefone = input.value.replace(/\D/g, '');

        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');

        input.value = telefone;
    }