/*9. Method Chaining
👉 Scenario: You are developing a game inventory system where a player can collect items and upgrade weapons.

✅ Task:

Create a Player class with methods collectItem(item), upgradeWeapon(level), and showInventory().
Implement method chaining so that player.collectItem("sword").upgradeWeapon(2).showInventory(); works.*/



class Player {
    constructor() {
        this.inventory = [];
        this.weaponLevel = 0;
    }

    collectItem(item) {
        this.inventory.push(item);
        return this;  
    }

    upgradeWeapon(level) {
        this.weaponLevel += level;
        return this; 
    }

    showInventory() {
        document.writeln(`Inventory: ${this.inventory.join(', ')}`);
        document.writeln(`Weapon Level: ${this.weaponLevel}`);
        return this; 
    }
}

const player = new Player();
player.collectItem("sword").upgradeWeapon(2).showInventory();

player.collectItem("shield").collectItem("potion").upgradeWeapon(1).showInventory();

