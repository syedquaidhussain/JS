class User{
 constructor(mail)
 {
    this.email = mail;
 }

 static print()
 {
    console.log("I am inside the static method ");
 }
 static loop(x)
 {
    console.log(x);
 }

}

const aman = new User("onpnc@");
User.loop(aman);







// Note:
// Static methods belong to the class itself and not to any instance. They are called on the class, not on objects created from the class.