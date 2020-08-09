document.querySelector('#add-time')
.addEventListener('click', cloneField)

function cloneField() {

    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field, index) {
        field.value = ""
    });

    newFieldContainer.appendChild(getRemoveBtn())
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

function getRemoveBtn() {
    const divButton = document.createElement('div')
    divButton.setAttribute('class', 'container-remove-btn')
    divButton.innerHTML ='<button type="button" onclick="removeField(this)">Remover horário</button>'
    return divButton
}

function removeField(btnRemove) {
    const fieldset = btnRemove.closest('.schedule-item')
    fieldset.remove()    
}