var items = []

function finished(form) {
        alert ("Your list: " + items.sort());
        items = [];
}
function addItem(form) {
  items.push(form.inputbox.value);
  form.inputbox.value  = "";
}
