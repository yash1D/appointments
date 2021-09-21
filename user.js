const submitButton = document.getElementById("submit");
document.addEventListener("mycontent", () => {
  console.log("mycode");
  localStorage.getItem();
});

if (document.readyState !== "loading") {
  console.log("mycode");

  var newkeys = Object.newkeys(localStorage),
    i = newkeys.length; 
  console.log("newkeys", newkeys);
  let stringifiedapp, app;

  Object.newkeys(localStorage).forEach((key) => {
    if (key.match(g)) {
      stringifiedapp = localStorage.getItem(key);
      console.log("stringifiedapp", stringifiedapp);
      app = JSON.parse(stringifiedapp);
      console.log("details", app);
      addNewLineElement(app);
    }
  });
}
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const emailId = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  if (emailId.length > 0 && name.length > 0) {
    const object = {
      name: name,
      emailId: emailId 
    };
    localStorage.setItem("userDetails" + emailId, JSON.stringify(object));
    addNewLineElement(object);
  }
});
function addNewLineElement(object) {
  const ul = document.getElementById("listOfPeople");
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(object.name + " " + object.emailId + " ")
  );

}
