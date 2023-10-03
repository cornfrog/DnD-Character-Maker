function load_page(){
    const good_luck_message_label = document.getElementById("good-luck-message");
    var character_name = window.localStorage.getItem('Character_Name');
    good_luck_message_label.innerText = "Good Luck, " + character_name + "!";
}


