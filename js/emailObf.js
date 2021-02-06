function addEmailToDom (a, c, b) {
  let p1= "ma"
  let Duck = Math.pow(2,6);
  let part5 = a + String.fromCharCode(Duck) + b;
  let p2= "ilto:"
  c.href= p1 + p2+ part5;
}

function addEmailToDom2 (a, c, b) {
  let p1= "ma"
  let Duck = Math.pow(2,6);
  let part5 = a + String.fromCharCode(Duck) + b;
  let p2= "ilto:"
  c.innerHTML= part5;
}

setTimeout(() => {
  let marios= document.getElementById("emMarios");
  let chris= document.getElementById("emChris");
  let andreas= document.getElementById("emAndreas");
  addEmailToDom('marios', marios, 'thetensortech.com');
  addEmailToDom('chris', chris, 'thetensortech.com');
  addEmailToDom('andreas', andreas, 'thetensortech.com');

  let contact= document.getElementById("emContact");
  addEmailToDom2('marios', contact, 'thetensortech.com');

}, 1000) 
