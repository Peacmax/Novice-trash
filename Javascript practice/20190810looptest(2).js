for (var i = 1; i < 10; i++) {
    var str = ""
    for (var k = 1; k< 10; k++) {
        str = str + (i + "x" + k + "=" + i * k + ",")
   }
   console.log(str)
}