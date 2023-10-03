// print current character info and show available classes onload
const current_character_race_label = document.getElementById("character-race");
const current_character_gender_label = document.getElementById("character-gender");
function print_current_character(){
    var current_character_race = window.localStorage.getItem('Race');
    var current_character_gender = window.localStorage.getItem('Gender');
    current_character_race_label.innerText = "Current Race: " + current_character_race;
    current_character_gender_label.innerText = "Current Gender: " + current_character_gender;
    print_class_options(current_character_race);
    spells_section.classList.add("hidden");
    next_button.disabled = true;
}

//print class options based on race selected
const class_opt_btn1 = document.getElementById("class-opt-1");
const class_opt_btn2 = document.getElementById("class-opt-2");
const class_opt_btn3 = document.getElementById("class-opt-3");
const class_opts = document.querySelectorAll(".class-opt");
const spells_section = document.getElementById("spells-section");
const spell_one_name = document.getElementById("spell-one-name")
const spell_two_name = document.getElementById("spell-two-name")
const spell_three_name = document.getElementById("spell-three-name")
const spell_four_name = document.getElementById("spell-four-name")
const spell_five_name = document.getElementById("spell-five-name")
const spell_six_name = document.getElementById("spell-six-name")
function print_class_options(character_race){
    var class_options = race_info.get(character_race)[9].split(",");
    class_opt_btn1.innerText = class_options[0];
    class_opt_btn2.innerText = class_options[1];
    class_opt_btn3.innerText = class_options[2];
}

// when a class button is clicked
var currently_selected_class = null;
class_opts.forEach(function(class_opt){
    class_opt.addEventListener("click", function(){
        spells_section.classList.remove("hidden");  // show spell options
        if(currently_selected_class){
            currently_selected_class.classList.remove("selected-class");
            clear_spell_list();
        }
        class_opt.classList.add("selected-class"); 
        currently_selected_class = class_opt;
        var selected_class = class_opt.innerText;   // get selected class
        window.localStorage.setItem('Class', selected_class);   // set selected class in localStorage
        var class_spells = class_list.get(selected_class);
        spell_one_name.innerText = class_spells[0];
        spell_two_name.innerText = class_spells[1];
        spell_three_name.innerText = class_spells[2];
        spell_four_name.innerText = class_spells[3];
        spell_five_name.innerText = class_spells[4];
        spell_six_name.innerText = class_spells[5];        
    })
});

function clear_spell_list(){
    spell_list = [];item_button
    class_spells.forEach(function(class_spell){
        class_spell.classList.remove("selected-spell");
        next_button.classList.remove("next-enabled");
        next_button.disabled = true;
    })
}

//WHEN SPELL IS CLICKED
var spell_list = [];
const class_spells = document.querySelectorAll(".class-spell");
class_spells.forEach(function(class_spell){
    class_spell.addEventListener("click", function(){
        if(spell_list.includes(class_spell)){
            if(spell_list.length == 1){
                class_spell.classList.remove("selected-spell");
                spell_list.pop();
            }
            else{
                var index_of_same_spell = spell_list.indexOf(class_spell);
                var last_spell_in_spell_list = spell_list[spell_list.length-1];
                class_spell.classList.remove("selected-spell");
                spell_list[-1] = spell_list[index_of_same_spell];
                spell_list[index_of_same_spell] = last_spell_in_spell_list;
                spell_list.pop();
            }
        }
        else if(spell_list.length >= 3){ // limit number of selectable spells to 3
            spell_list[0].classList.remove("selected-spell");
            spell_list[0] = spell_list[1];
            spell_list[1] = spell_list[2];
            spell_list.pop();
            class_spell.classList.add("selected-spell");
            spell_list.push(class_spell);
        }
        else{
            if(spell_list.includes(class_spell)){
                if(spell_list.length == 1){
                    class_spell.classList.remove("selected-spell");
                    spell_list.pop();
                }
                else{
                    //var index_of_element = spell_list.indexOf(class_spell);
                    class_spell.classList.remove("selected-spell");
                }
            }
            class_spell.classList.add("selected-spell");
            spell_list.push(class_spell);
        }
        if(spell_list.length == 3){
            next_button.classList.add("next-enabled");
            next_button.disabled = false;
        }
        else if(spell_list.length < 3){
            next_button.classList.remove("next-enabled");
            next_button.disabled = true;
        }
        // console.log(class_spell.children[1].innerText);
        console.log(spell_list);
    });
});

//WHEN NEXT BUTTON IS CLICKED
const next_button = document.getElementById("next");
next_button.addEventListener("click", function(){
    var spell_one = spell_list[0].children[1].innerText;
    var spell_two = spell_list[1].children[1].innerText;
    var spell_three = spell_list[2].children[1].innerText;
    var character_spells = [spell_one,spell_two,spell_three];
    var character_spells_string = JSON.stringify(character_spells);
    window.localStorage.setItem('Character_Spells', character_spells_string);
    window.location = "../pages/character_name.html";
});