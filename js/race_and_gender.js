const male_gender_btn = document.getElementById("Male");        // MALE GENDER BUTTON
const female_gender_btn = document.getElementById("Female");    // FEMALE GENDER BUTTON
const races = document.querySelectorAll(".race");               // ARRAY OF RACE BUTTONS 
const next_button = document.getElementById("next");            // NEXT BUTTON
var selected_gender = null;
var selected_race = null;

// ONPAGE LOAD SELECT 'HUMAN' AS DEFAULT RACE
const default_race = document.getElementById("Human");
default_race.classList.add("selected-race");
function print_default_race_info(){
    var default_race_info = race_info.get(default_race.id);
    selected_gender = male_gender_btn.id;
    selected_race = default_race.id;
    display_race_info(default_race.id, default_race_info);
}


// WHEN MALE BUTTON IS CLICKED
male_gender_btn.addEventListener("click", function(){
    selected_gender = male_gender_btn.id;
    female_gender_btn.classList.remove("selected-gender");
    male_gender_btn.classList.add("selected-gender");
    console.log(selected_gender);
});

// WHEN FEMALE BUTTON IS CLICKED
female_gender_btn.addEventListener("click", function(){
    selected_gender = female_gender_btn.id;
    female_gender_btn.classList.add("selected-gender");
    male_gender_btn.classList.remove("selected-gender");
    console.log(selected_gender);
});


// WHEN ANY OF THE RACES ARE SELECTED
var currently_selected_race = default_race;
races.forEach(function(race){
    race.addEventListener("click", function(){
        if(currently_selected_race){
            currently_selected_race.classList.remove("selected-race");
        }
        race.classList.add("selected-race");
        currently_selected_race = race;
        selected_race = race.id;
        var selected_race_info = race_info.get(race.id);
        display_race_info(selected_race, selected_race_info);
    });
});

// FUNCTION TO PRINT RACE INFO OUT 
function display_race_info(character_race, race_details){
    const race_name_label = document.getElementById("race-name");
    const race_alignment_label = document.getElementById("race-alignment");
    const race_proficiencies_label = document.getElementById("race-proficencies");
    const race_str_label = document.getElementById("race-str");
    const race_dex_label = document.getElementById("race-dex");
    const race_con_label = document.getElementById("race-con");
    const race_int_label = document.getElementById("race-int");
    const race_wis_label = document.getElementById("race-wis");
    const race_cha_label = document.getElementById("race-cha");
    const race_lore = document.getElementById("race-lore");

    race_name_label.innerText = "Race: " + character_race;
    race_alignment_label.innerText = "Alignment: " + race_details[0];
    const proficiencies = race_details[1].split(",");
    race_proficiencies_label.innerText = "Proficencies: " + proficiencies[0] + " " + proficiencies[1];
    race_str_label.innerText = "Strength: " + race_details[2];
    race_dex_label.innerText = "Dexterity: " + race_details[3];
    race_con_label.innerText = "Constitution: " + race_details[4];
    race_int_label.innerText = "Intelligence: " + race_details[5];
    race_wis_label.innerText = "Wisdom: " + race_details[6];
    race_cha_label.innerText = "Charisma: " + race_details[7];
    race_lore.innerText = race_details[8];
}

next_button.addEventListener("click", function(){
    window.location = "../pages/character_class.html";
    window.localStorage.setItem('Gender', selected_gender);
    window.localStorage.setItem('Race', selected_race);
});