
$('#input_textarea').on('input selectionchange propertychange', function () {
    processInput($(this).val())
})

function processInput(input) {
    var lines = splitLines(input)
    var outputLines = []
    lines.forEach(function (line) {
        var outputLine = evaluateLine(line)
        outputLine = outputLine.substring(0, 16)
        outputLines.push(outputLine)
    });
    var output = outputLines.join('\n')
    $('#output_textarea').val(output)
}

function evaluateLine(line) {
    try {
        line = line.replace(/%/g, '/100')
        var evaluated = eval(line)
        if (typeof evaluated !== 'undefined') {
            return '' + evaluated
        } else {
            return ''
        }
    } catch (err) {
        return ''
    }
}

function splitLines(t) { return t.split(/\r\n|\r|\n/); }
