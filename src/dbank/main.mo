import Debug "mo:base/Debug"

actor DBank {
  var currentValue = 300;
  currentValue := 200;

  let id = 1234567890;

  Debug.print(debug_show(currentValue)); 
  Debug.print(debug_show(id));
}
