const fun = (function () {
  print((new Error()).stack);
})

fun()
