$(document).ready(function (){
    const taskForm = $('#task-form')
    const taskList = $('#list')

    $('header button').click(function() {
        $('form').slideDown()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()

        const novaLista = $('#tarefas').val()
        const novoItem = $('<li></li>')

        $(novoItem).text(novaLista)

        $(novoItem).appendTo('ol')
        $('#tarefas').val('')
    })

    $('#list').on('click', 'li', function(e) {
        $(e.target).toggleClass('done')
    })

})