import cases from './caseManager';

let ODDS_EQ_BASE = 1;
let normalRarities = ["blue", "purple", "pink", "red", "gold"];

Array.prototype.sample = function () { // get a random item from an array
   return this[Math.floor(Math.random() * this.length)] || [];
}

class ItemManager {
   generateItems(currentCase, number) {
      let items = [];
      for (let i = 0; i < number; i++) {
         // Make sure you can't land near a knife (like in game) and make sure that it can't try to generate something that has odds of [0,0,0,0,0]
         items[i] = this.generateItem(i > number / 4 && i != number - 3, currentCase);
      }
      //items[37] = generateItem(caseOdds); 
      return items;
   }

   generateItem(nogold = false, currentCase) {
      let color = normalRarities[this.oddsEquation(Math.random(), 5, 1) - 1];
      let _case = (cases.filter(x => x.name == currentCase)[0]);
      // if (nogold && color == 'gold')
      //    return this.generateItem(nogold, currentCase);
      if (color != "gold") {
         if (_case[color].sample().length == 0) {
            return this.generateItem(false, currentCase);
         } else
            return new Item(color, _case[color].sample());
      } else {
         return new Item('gold', _case[color].sample());
      }
   }

   oddsEquation(x, max = 5, top_is_knife = 1) {
      let i = max;
      let total = 0;
      for (; i > 0; i--) {
         if (x < (total += this.oddsOne(i, max, top_is_knife))) return i;
      }
      return i;
   }

   oddsOne(rarity, maxRarity, top_is_knife) {

      var total_chances = 0;

      for (var i = 0; i < maxRarity; i++) {
         total_chances += Math.pow(ODDS_EQ_BASE, i);
      }

      if (top_is_knife) total_chances += 1;

      var chances_of_this = Math.pow(ODDS_EQ_BASE, maxRarity - rarity);

      if (chances_of_this == 1 && top_is_knife) chances_of_this = 2;

      return chances_of_this / total_chances;
   }

   oddsOfEach(top_is_knife = 1, rarities = normalRarities) {
      let maxRarity = rarities.length;
      for (let i = 0; i < rarities.length; i++) {
         console.log(`${rarities[i]}: ${(this.oddsOne(i+1, maxRarity, top_is_knife) * 100).toFixed(4)}%`);
      }
   }
}

export default new ItemManager();

export class Item {

   constructor(rarity, baseItem, STDOverride = false) {
      this.rarity = rarity;
      this.baseItem = baseItem;
      this.statTrak = STDOverride;
      this.icon = baseItem.icon || '-';
      this.joke = baseItem.joke || [];
   }

   getIcon() {
      return 'images/' + this.baseItem.icon;
   }

   getHTMLColor() {
      return ["#B0C3D9", "lightblue", "#4B69FF", "#9747FF", "#D32CE6", "#EB4B4B", "gold", "orange"][this.getRarityValue() - 0.5 * (this.statTrak == true)] || 'warning';
   }

   getRarity() {
      return this.rarity;
   }

   getThaiRarity() {
      var rarityValues = {
         white: 'ปกติ', // futureproofing
         lightblue: 'โคตรกาก', // futureproofing
         blue: 'กาก',
         purple: 'ธรรมดา',
         pink: 'โอเคอยู่',
         red: 'นานๆ ได้',
         gold: 'หายาก',
         orange: 'ตำนาน' // futureproofing
      }
      return rarityValues[this.rarity] || 'ประเมินค่ามิได้';
   }

   getRarityValue() { // return the rarity value for sorting
      var rarityValues = {
         white: 0, // futureproofing
         lightblue: 1, // futureproofing
         blue: 2,
         purple: 3,
         pink: 4,
         red: 5,
         gold: 6,
         orange: 7 // futureproofing
      }

      var value = rarityValues[this.getRarity()];

      if (this.statTrak) {
         value += 0.5;
      }

      return value;
   }

   getTitle() {
      return this.baseItem.name;
   }

   getDescription() {
      return this.baseItem.description;
   }

   getFuckingJoke() {
      return this.joke.sample();
   }
}

export class BaseItem {
   constructor(itemName, itemDescript, icon = '-', joke = []) {
      this.name = itemName || '-';
      this.description = itemDescript || '-';
      this.icon = icon || '-';
      this.joke = joke || [];
   }
}