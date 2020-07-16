
$('#input_textarea').on('input selectionchange propertychange', function() {
    processInput($(this).val())
})

function processInput(input) {
    $('#output_textarea').val(input)
}
