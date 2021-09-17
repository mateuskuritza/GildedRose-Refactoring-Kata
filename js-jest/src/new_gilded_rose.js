class newShop {
	constructor(items = []) {
		this.items = items;
	}

	updateQuality() {
		this.items.forEach((item) => {
			if (item.name === "Sulfuras, Hand of Ragnaros") return;

			item.sellIn--;

			if (item.name != "Aged Brie" && item.name != "Backstage passes to a TAFKAL80ETC concert") {
				item.quality--;
				if (item.sellIn < 0) item.quality--;
			} else {
				item.quality++;

				if (item.name == "Aged Brie" && item.sellIn < 0) item.quality++;

				if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
					if (item.sellIn < 11 && item.quality < 50) item.quality++;
					if (item.sellIn < 6 && item.quality < 50) item.quality++;
					if (item.sellIn < 0) item.quality = 0;
				}
			}

			if (item.sellIn < 0) item.sellIn = 0;
			if (item.quality > 50) item.quality = 50;
		});
		return this.items;
	}
}

module.exports = {
	newShop,
};
