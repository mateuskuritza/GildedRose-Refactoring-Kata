const { Shop, Item } = require("../src/gilded_rose");
const { newShop } = require("../src/new_gilded_rose");
const { TextTest } = require("./texttest_fixture");

describe("Gilded Rose", function () {
	it("should foo", function () {
		const gildedRose = new Shop([new Item("foo", 0, 0)]);
		const items = gildedRose.updateQuality();
		expect(items[0].name).toBe("foo");
	});
	it("new shop shold be equal original shop", function () {
		const originalShopResult = TextTest(Shop);
		const newShopResult = TextTest(newShop);
		expect(originalShopResult).toBe(newShopResult);
	});
});
