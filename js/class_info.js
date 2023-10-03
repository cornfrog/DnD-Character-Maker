const class_list = new Map();

/**
 *  STRUCTURE:
 *      KEY -> CLASS NAME
 *      VALUE -> STARTING SPELLS ARRAY
 */

// FIGHTER CLASS
class_list.set(
    "Fighter",
    [
        "Piercing Strike",
        "Battle Cry",
        "Extra Action",
        "Rally",
        "Distracting Strike",
        "Taunt"
    ]
);

// MAGE CLASS
class_list.set(
    "Mage",
    [
        "Fire Ball",
        "Ice Bolt",
        "Mirror Image",
        "Conjoure Minion",
        "Lightning Bolt",
        "Reveal Magic"
    ]
)

// CLERIC CLASS
class_list.set(
    "Cleric",
    [
        "Healing Word",
        "Holy Bolt",
        "Flash of Light",
        "Divine Sheild",
        "Sacred Flame",
        "Desperate Prayer"
    ]
)

class_list.set(
    "Bard",
    [
        "Infuse Weapon",
        "Enchant Armor",
        "Inspiring Music",
        "Healing Song",
        "Empowering Strike",
        "Distracting Strike"
    ]
);


class_list.set(
    "Barbarian",
    [
        "Ancestral Scream",
        "Raging Strike",
        "Bloodthirsty",
        "Shout",
        "Headbutt",
        "Insult"
    ]
);

class_list.set(
    "Warlock",
    [
        "Summon Lesser Demon",
        "Drain Soul",
        "Boon",
        "Soul Bolt",
        "Soul Ward",
        "Decay"
    ]
);

class_list.set(
    "Shaman",
    [
        "Healing Waters",
        "Ancestral Vision",
        "Spirit of the Bear",
        "War Drum",
        "Spirit of the Wolf",
        "Conjoure Potion"
    ]
);

class_list.set(
    "Theif",
    [
        "Make Poison",
        "Stealth",
        "Pickpocket",
        "Shadowstep",
        "Hide",
        "Silent Steps"
    ]
);