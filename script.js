
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
        $(".mailbox").append('<div class="mailbox-element" onclick="openLetter(this)">\n' +
            '            <button class="mailbox-element-button">\n' +
            '                <div class="mailbox-inside-element">\n' +
            '                    <input type="checkbox" class="mailbox-inside-element-checkbox">\n' +
            '                    <hr class="vr">\n' +
            '                    <span class="mailbox-inside-element-from">from: myself</span>\n' +
            '                    <hr class="vr">\n' +
            '                    <span class="mailbox-inside-element-topic">' + topic + '</span>\n' +
            '                    <hr class="vr">\n' +
            '                    <span class="mailbox-inside-element-time">01.12.2020</span>\n' +
            '                </div>\n' +
            '            </button>\n' +
            '        </div>');
    }
}

function openLetter(element) {
    let selectedElements = element.parentNode.querySelectorAll(".mailbox-element");
    for (let i = 0; i < selectedElements.length; i++) {
        if (selectedElements[i] == element) {
            Swal.fire({
                text: letterMassive[i],
                width: 800,
                height: 600
            })
        }
    }
}
let temp = 0;
function selectAllLetters() {
    if($("#selectAllButton").prop('checked', true)&&temp%0){
        $(".mailbox-inside-element-checkbox").prop('checked', true);
        temp++;
    }

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
