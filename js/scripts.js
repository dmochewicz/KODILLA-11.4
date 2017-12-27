function Phone(color, brand, battery, display, price) {

	this.color = color;	
	this.brand = brand;
	this.battery = battery;
	this.display = display;
	this.price = price;	
}

Phone.prototype.printInfo = function() {
	console.log("The " + this.color + " " + this.brand + " mobile is equipped with " + this.battery + " battery." + " On the board we have " + this.display + " display and the price is " + this.price + ".");
}

var iPhone6s = new Phone("red", "Apple iPhone 6s", "2800mAh", "5 inch", "3600zł");
var galaxys8 = new Phone("black", "Samsung Galaxy S8", "3100mAh", "5,7 inch", "3200zł");
var mate8 = new Phone("silver", "Huawei Mate 8", "3500mAh", "6 inch", "2800zł");

iPhone6s.printInfo();
galaxys8.printInfo();
mate8.printInfo();
