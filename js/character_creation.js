const character_race_label = document.getElementById("character-race");
const character_gender_label = document.getElementById("character-gender");
const character_spell_1 = document.getElementById("character-spell-1");
const character_spell_2 = document.getElementById("character-spell-2");
const character_spell_3 = document.getElementById("character-spell-3");
const character_name = document.getElementById("character-name");
const create_btn = document.getElementById("next");
function load_character_info(){
    var character_race = window.localStorage.getItem('Race');
    var characer_gender = window.localStorage.getItem('Gender');
    var character_spells = JSON.parse(window.localStorage.getItem('Character_Spells'));
    character_race_label.innerText = "Race: " + character_race;
    character_gender_label.innerText = "Gender: " + characer_gender;
    character_spell_1.innerText = character_spells[0];
    character_spell_2.innerText = character_spells[1];
    character_spell_3.innerText = character_spells[2];
    create_btn.disabled = true;
}

character_name.addEventListener("input", function(){
    if(character_name.value.length >= 3){
        create_btn.classList.add("create-enabled");
        create_btn.disabled = false;
    }
    else{
        create_btn.classList.remove("create-enabled");
        create_btn.disabled = true;
    }
});


create_btn.addEventListener("click", function(){
    var entered_name = character_name.value;
    window.localStorage.setItem('Character_Name', entered_name);
    window.location = "../pages/character_items.html"
});