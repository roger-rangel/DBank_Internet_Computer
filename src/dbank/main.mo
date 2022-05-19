import Debug "mo:base/Debug"

actor DBank {
  var currentValue = 300;
  currentValue := 200;

  let id = 1234567890;
  // Debug.print(debug_show(id));

  public func topUp(amount: Nat) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdraw(amount: Nat) {
    currentValue -= amount;
    Debug.print(debug_show(currentValue));
  }

  
}
