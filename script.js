
//========================================= LetterFunctions =========================================

let letterMassive = [];
async function showEmailSendWindow() {
    const {value: letter} = await Swal.fire({
        showCancelButton: true,
        customClass: {
            input: 'mail-input'
        },
        html:
            '<button class="popup-button">B</button>' +
            '<button class="popup-button">I</button>' +
            '<button class="popup-button">U</button>' +
            '<br>' +
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
            '.mail-input {' +
            'height: 50vh;' +
            'width: 50vw;' +
            'resize: none;' +
            '}' +
            '</style>',
        input: 'textarea',
        confirmButtonText: 'Send',
    });
    letterMassive.push(letter);
    if(letter!==undefined) {
        let topic = letter;
        if(letter.length>60){
            topic = topic.substring(0, 57) + '...';
        }
        let date = new Date();
        let finalDate = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        $(".mailbox").append('<div class="mailbox-element" >\n' +
            '            <button class="mailbox-element-button">\n' +
            '              <input type="checkbox" class="mailbox-inside-element-checkbox">\n' +
            '               <hr class="vr">\n' +
            '                <div class="mailbox-inside-element" onclick="openLetter(this)">\n' +
            '                    <span class="mailbox-inside-element-from">from: myself</span>\n' +
            '                    <hr class="vr">\n' +
            '                    <span class="mailbox-inside-element-topic">' + topic + '</span>\n' +
            '                    <hr class="vr">\n' +
            '                    <span class="mailbox-inside-element-time">' + finalDate + '</span>\n' +
            '                </div>\n' +
            '            </button>\n' +
            '        </div>');
    }
}

function openLetter(element) {
    let selectedLetters = document.getElementById('mailbox').children;
    for (let i = 0; i < selectedLetters.length; i++) {
        if(selectedLetters[i] === element.parentElement.parentElement){
            Swal.fire({
                text: letterMassive[i],
                width: 800,
                height: 600
            });
            break;
        }
    }
}

let isNotSelected = true;
function selectAllLetters() {
    if($("#selectAllButton").prop('checked', true) && isNotSelected === true){
        $(".mailbox-inside-element-checkbox").prop('checked', true);
        isNotSelected=false;
    }
    else{
        $(".mailbox-inside-element-checkbox").prop('checked', false);
        $("#selectAllButton").prop('checked', false);
        isNotSelected=true;
    }
}
function deleteSelectedLetters() {
    //Пробежаться по всем элементам мейлбокса этим: Если чекбокс true - parent удаляется
    $('.mailbox-element').each(function (element, index) {
        if($(this).children()[0].children[0].checked === true){
            $(this).remove();
        $('#selectAllButton').checked = false;
        }
    })
}
//========================================= FolderFunctions =========================================

function createFolder(){
    let folderName = $(".sidebar-folders-navigation-new-folder-name").val();
    let allFoldersNames = [];
    $(".sidebar-folders-navigation-list li").each(function(index){
        allFoldersNames[index] = $(this).text();
    });
    if(!allFoldersNames.includes(folderName) && folderName !== ""){
        $(".sidebar-folders-navigation-list").append("<li>"+folderName+"</li>");
        $(".sidebar-folders-navigation-new-folder-name").val('');
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Введено невалидное название папки.',
            width: 630
        })
    }
}
function deleteFolder(){
    let constFolders = ['входящие', 'отправленные', 'черновики', 'корзина', 'Входящие', 'Отправленные', 'Черновики', 'Корзина',];
    let folderName = $(".sidebar-folders-navigation-new-folder-name").val();
    let allFoldersNames = [];
    $(".sidebar-folders-navigation-list li").each(function(index){
        allFoldersNames[index] = $(this).text();
    }); //Если value li в foldersList равен folderName, то удалить этот li
    let foldersList = document.getElementById('foldersList');
    if(!constFolders.includes(folderName)) {
        foldersList.innerHTML = foldersList.innerHTML.replace('<li>' + folderName + '</li>', "");
        $(".sidebar-folders-navigation-new-folder-name").val('');
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Невозможно удалить эту папку',
            width: 630
        })
    }
}
