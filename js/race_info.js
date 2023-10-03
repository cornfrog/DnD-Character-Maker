/**
 * CHARACTER RACE INFO FILE
 * 
 * ALL RACE LORE AND BONUSES GO HERE
 * 
 */


const race_info = new Map();

/**
 * STRUCTURE OF 'race_info' MAP:
 *      > KEY: Race Name
 *      > VALUE: INFO ARRAY 
 *          0. ALIGNMENT
 *          1. PROFICIENCY BONUS
 *          2. STRENGTH
 *          3. DEXTERITY
 *          4. CONSTITUTION
 *          5. INTELLIGENCE
 *          6. WISDOM
 *          7. CHARISMA
 *          8. LORE 
 *          9. CLASSES
 */

race_info.set(  //HUMAN RACE
    "Human",
    [
        "Good", //Alignment
        "Intelligence,Charisma",   //Proficiencies
        1,    //STR
        2,    //DEX
        3,    //CON
        4,    //INT
        5,    //WIS
        6,    //CHA
        //LORE
        "Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
        "Fighter,Mage,Cleric"
    ]
);

race_info.set(  //ELF RACE
    "Elf",
    [
        "Good", //Alignment
        "Dexterity,Wisdom",   //Proficiencies
        6,    //STR
        7,    //DEX
        8,    //CON
        9,    //INT
        10,    //WIS
        11,    //CHA
        //LORE
        "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.",
        "Bard,Mage,Cleric"
    ]
);

race_info.set(  //DWARF RACE
    "Dwarf",
    [
        "Good", //Alignment
        "Constitution,Charisma",   //Proficiencies
        12,    //STR
        13,    //DEX
        14,    //CON
        15,    //INT
        16,    //WIS
        17,    //CHA
        //LORE
        "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.",
        "Fighter,Cleric,Bard"
    ]
);

race_info.set(  //ORC RACE
    "Orc",
    [
        "Bad", //Alignment
        "Strength,Charisma",   //Proficiencies
        17,    //STR
        18,    //DEX
        19,    //CON
        20,    //INT
        21,    //WIS
        22,    //CHA
        //LORE
        "Orcs are prideful and resolute. Some venture into the world to prove their worth. Many of these become adventurers, achieving greatness for their mighty deeds.",
        "Barbarian,Shaman,Theif"
    ]
);

race_info.set(  //TROLL RACE
    "Troll",
    [
        "Bad", //Alignment
        "Constitution,Charisma",   //Proficiencies
        23,    //STR
        24,    //DEX
        25,    //CON
        26,    //INT
        27,    //WIS
        28,    //CHA
        //LORE
        "Savage and witty, Trolls kill any helpless wanderer making their way through the lands. Some break away from their natural tendencies and lead their clans as wise and cunning leaders.",
        "Barbarian,Warlock,Shaman"
    ]
);

race_info.set(  //DARK-ELF RACE
    "Dark-Elf",
    [
        "Bad", //Alignment
        "Intelligence,Dexterity",   //Proficiencies
        29,    //STR
        30,    //DEX
        31,    //CON
        32,    //INT
        33,    //WIS
        34,    //CHA
        //LORE
        "As a drow, you are infused with the magic of the Underdark, an underground realm of wonders and horrors rarely seen on the surface above. You are at home in shadows and, thanks to your innate magic, learn to conjure forth both light and darkness.",
        "Warlock,Shaman,Theif"
    ]
);

race_info.set(  //Dragonborne RACE
    "Dragonborne",
    [
        "Neutral", //Alignment
        "Wisdom,Intelligence",   //Proficiencies
        35,    //STR
        36,    //DEX
        37,    //CON
        38,    //INT
        39,    //WIS
        40,    //CHA
        //LORE
        "Old and wise, Dragonbornes have been a part of the world since the beginning. They will help any cause they see fit. While they come across as apathetic Dragonborne advisors and mages are the best in the land.",
        "Barbarian,Mage,Shaman"
    ]
);