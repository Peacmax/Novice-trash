var age = prompt("How old are u?");
if (Number(age) < 18) {
	alert("Sorry, you are too young to drive this car.");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
} else {
	alert("Powering On. Enjoy the ride!");
}