// let fragment = new DocumentFragment(); // OR, let fragment = document.createDocumentFragment();

// let languages = ['HTML', 'CSS', 'JavaScript'];

// let langEl = document.querySelector('#language');

// languages.forEach((language) => {
//     let li = document.createElement('li');
//     li.innerHTML = language;
//     fragment.appendChild(li);
// });

// langEl.appendChild(fragment);



// after() method

// let langEl = document.querySelector('ul');

// let addedLanguages = ['Python', 'Java', 'C++', 'C#', 'Ruby', 'PHP'];

// const items = addedLanguages.map((language) => {
//     const li = document.createElement('li');
//     li.innerText = language;
//     return li;
// })

// langEl.lastChild.after(...items);





// cloneNode() method

//Syntax
// let cloneNode = originalNode.cloneNode(deep);

// If we use true as an argument, it will clone the node and all its children. If we use false, it will clone only the node.

// let langEl = document.querySelector('ul');
// let cloneLangEl = langEl.cloneNode(false);
// cloneLangEl.id = 'newLang';
// document.body.appendChild(cloneLangEl);



// removeChild() method

//Syntax
// let childNode = parentNode.removeChild(childNode);

// let langEl = document.querySelector("ul");
// langEl.removeChild(langEl.lastElementChild); // Removes the last child of the ul element.


// Remove all the children of the ul element.
// let langEl = document.querySelector("#language");
// langEl.innerHTML = ""; // Removes all the children of the ul element.

// while(langEl.lastChild) {
//     langEl.removeChild(langEl.lastChild);
// } // Removes all the children of the ul element.



// insertBefore() method

//Syntax
// parentNode.insertBefore(newNode, existingNode);

// let langEl = document.querySelector('#language');
// let newLang = document.createElement('li');
// newLang.innerHTML = 'Python';
// langEl.insertBefore(newLang, langEl.firstElementChild); // Inserts the newLang before the second child of the ul element.
// langEl.insertBefore(newLang, langEl.children[1]);


// insertAfter() method

let langEl = document.querySelector('#language');

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

let newLang = document.createElement('li');
newLang.innerHTML = 'Python';
insertAfter(newLang, langEl.lastElementChild);