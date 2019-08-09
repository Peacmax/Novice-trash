for (var i = 1; i <= 5; i++) {
    var a = Math.floor(Math.random()*101);
    var b = Math.floor(Math.random()*101);
    var sum = a + b
    if (sum > 60) {
        console.log(i + ".OK "+ sum)
    }else {
        console.log(i + "."+ sum)
    }
}
