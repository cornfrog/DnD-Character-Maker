function load_page(){
    
    const character_name_label = document.getElementById("character_name");
    const character_race_label = document.getElementById("character_race");
    const character_gender_label = document.getElementById("character_gender");
    const character_class_label = document.getElementById("character_class");
    const character_class_proficencies = document.getElementById("character_proficencies");
    const character_str_label = document.getElementById("character_str");
    const character_dex_label = document.getElementById("character_dex");
    const character_con_label = document.getElementById("character_con"); 
    const character_int_label = document.getElementById("character_int"); 
    const character_wis_label = document.getElementById("character_wis"); 
    const character_cha_label = document.getElementById("character_cha"); 
    const character_spells_area = document.getElementById("character_spells");
    const character_items_area = document.getElementById("character_items");

    var character_name = window.localStorage.getItem("Character_Name");
    var character_race = window.localStorage.getItem("Race");
    var character_gender = window.localStorage.getItem("Gender");
    var character_class = window.localStorage.getItem("Class");
    var character_spells = window.localStorage.getItem("Character_Spells");
    var character_items = window.localStorage.getItem("Character_Items");

    var character_spells_array = JSON.parse(character_spells);
    var character_item_array = character_items.split(",");

    character_name_label.innerText = "Name: " + character_name;
    character_race_label.innerText = "Race: " + character_race;
    character_gender_label.innerText = "Gender: " + character_gender;
    character_class_label.innerText = "Class: " + character_class;


    var class_proficiencies = race_info.get(character_race)[1];
    var class_proficiencies_array = class_proficiencies.split(",");
    for(const class_proficiency of class_proficiencies_array){
        const proficiency_element = document.createElement("p");
        proficiency_element.textContent = class_proficiency
        character_class_proficencies.append(proficiency_element);
    }

    var character_str = race_info.get(character_race)[2];
    var character_dex = race_info.get(character_race)[3];
    var character_con = race_info.get(character_race)[4];
    var character_int = race_info.get(character_race)[5];
    var character_wis = race_info.get(character_race)[6];
    var character_cha = race_info.get(character_race)[7];

    character_str_label.innerText = character_str;
    character_dex_label.innerText = character_dex;
    character_con_label.innerText = character_con;
    character_int_label.innerText = character_int;
    character_wis_label.innerText = character_wis;
    character_cha_label.innerText = character_cha;

    for(const spell of character_spells_array){
        const spell_element = document.createElement("p");
        spell_element.textContent = spell;
        character_spells_area.append(spell_element);
    }

    for(const item of character_item_array){
        const item_element = document.createElement("p");
        item_element.textContent = item;
        character_items_area.append(item_element);
    }
}