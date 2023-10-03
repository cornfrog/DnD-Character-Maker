const item_buttons = document.querySelectorAll(".item");

var item_list = [];
item_buttons.forEach(function(item_button){
    item_button.addEventListener("click", function(){
        var item_name = item_button.children[1].innerText;
        if(item_list.includes(item_name)){
            if(item_list.length <= 2){
                item_button.classList.remove("selected_item");
                item_list.pop();
            }
            else{
                var index_of_item = item_list.indexOf(item_name);
                var last_item_in_list = item_list[item_list.length-1];
                
                //console.log("Item to Remove: " + item_list[index_of_item]);
                //console.log("Last Item in Array: " + last_item_in_list);

                item_button.classList.remove("selected_item");
                
                item_list[index_of_item] = last_item_in_list;
                //console.log("After - item_list[index_of_item] = last_item_in_list; : " + item_list);

                item_list[-1] = item_list[index_of_item];
                //console.log("After - item_list[-1] = item_list[index_of_item]; : " + item_list);
                
                item_list.pop();
            }
        }
        else{
            item_button.classList.add("selected_item");
            item_list.push(item_name);
        }
        console.log(item_list);
    });
});

const next_button = document.getElementById("next");
next_button.addEventListener("click", function(){
    window.localStorage.setItem("Character_Items", item_list);
    window.location = "../pages/character_sheet.html";
});