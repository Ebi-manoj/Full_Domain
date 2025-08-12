/////////////////////////////////////////////////
//POLYFILLS
//these are patch up code that used if the older browser didnt support native features (like a backup plan)
//suppose if write arr.includes and includes is not supported in older browser we will create a includes methods manually
// Array.prototype.includes....thus every browser will now support arr.includes

/////////////////////////////////////////////////////
///PROXY OBJECT
//this is a special object that wraps over another object new Proxy() accepts a object as first params and handle {}
//as second params we can restrict or decribe the behaviour of the original object using this handler function

const person = { name: 'Ebi', password: 123 };
const proxyPerson = new Proxy(person, {
  get(target, propert) {
    if (propert == 'password') return console.log('no access to this property');
  },
});
// proxyPerson.password;

/////////////////////////////////////////////////////
///EVENT PROPAGATION
///when an event occurs event travells from root to target (capturing phase) and when reached target event bubbles
//towards the top of dom which is root(html) also called bubbling phase,this can be stoped using event.stopPropagation()

///////////////////////////////////////////////////////
////EVENT DELEGATION
////insted of giving multiple listenrs to each childs we can attach a single listener to parent element and
///use the bubbling phase to know which child is triggered

const parent = document.getElementById('parent');
parent.addEventListener('click', function (e) {
  if (e.target.tagName == 'LI') {
    console.log('clicked on', e.target.dataset.action);
  }
});
