// CREATING A NEW ELEMENT

const elFirstName = document.querySelector("#first-name");
const elLastName = document.querySelector("#last-name");
const elPhone = document.querySelector("#phone");
const elRelation = document.querySelector("#relationship");
const elForm = document.querySelector(".form-group");
const elNameList = document.querySelector(".name-list");

const elContact = {};


elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let oName = elContact.firstName = elFirstName.value;
  let oLastName = elContact.lastName = elLastName.value;
  let oPhone = elContact.phone = elPhone.value;
  let oRelation = elContact.relation = elRelation.value;
  
  let elItem = document.createElement("li");
  
  elItem.className = "name-item col-6"
  elItem.innerHTML = `
    <div class="cover">
    <p class="name-text">
        ${oName} ${oLastName}
    </p>
    <p class="joint">
        ${oRelation}
    </p>
    <a href="tel:+998950113633">
        ${oPhone}
    </a>
    </div>`;

  elNameList.appendChild(elItem);

  elFirstName.value = "";
  elLastName.value = "";
  elPhone.value = "";
});

// FILTERING ELEMENTS

const elAllBtn = document.querySelector("#allBtn");
const elFamilyBtn = document.querySelector("#familyBtn");
const elFriendBtn = document.querySelector("#friendBtn");
const elColleagueBtn = document.querySelector("#colleagueBtn");

elAllBtn.addEventListener("click", filterThings);
elFamilyBtn.addEventListener("click", filterThings);
elFriendBtn.addEventListener("click", filterThings);
elColleagueBtn.addEventListener("click", filterThings);

function filterThings(e) {

  const elListItems = elNameList.childNodes;

     for(let i = 0; i < elListItems.length; i++){
      switch(e.target.innerText){
        case "All" :
          elListItems[i].className = "name-item col-6";
          break;
        case "Family" :
          if(elContact.relation == "family"){
            elListItems[i].className = "name-item col-6";
          } else {
            elListItems[i].className = "d-none";
          }
          break;
        case "Friends" :
          if(elContact.relation == "friend"){
            elListItems[i].className = "name-item col-6";
          } else {
            elListItems[i].className = "d-none";
          }
          break;
        case "Colleagues" :
          if(elContact.relation == "colleague"){
            elListItems[i].className = "name-item col-6";
          } else {
            elListItems[i].className = "d-none";
          }
          break;
      }
    }
} 
