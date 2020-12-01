

function showEmailSendWindow(){
    Swal.fire({
        width:700,
        html:
            '<button class="popup-button">B</button>' +
            '<button class="popup-button">I</button>' +
            '<button class="popup-button">U</button>' +
            '<br>' +
            '<textarea style="width: 600px; height: 400px; resize: none"></textarea>' +
            '<style>' +
            '.popup-button {' +
            'margin:5px; ' +
            'width: 35px;' +
            'height:35px;' +
            'border: none;' +
            '}' +
            '.popup-button:hover {' +
            'background: white;' +
            '}' +
            '.popup-button:focus {' +
            'outline: none;' +
            '}' +
            '' +
            '</style>',
        confirmButtonText: 'Send',
    })
}