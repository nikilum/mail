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
        confirmButtonText: 'Send'
    });
}

function createNewFolder(){
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
    let constFolders = ['Входящие', 'Отправленные', 'Черновики', 'Корзина'];
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
function addNewLetter(){

}