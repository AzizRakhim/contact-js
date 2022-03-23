let elFirstName = document.querySelector("#first-name");
let elLastName = document.querySelector("#last-name");
let elPhone = document.querySelector("#phone");
let elRelation = document.querySelector("#relationship");
let elForm = document.querySelector(".form-group");
let elNameList = document.querySelector(".name-list");
let elBtnGroup = document.querySelector(".btn-groups");

let elArr = [
  {
    firstName : "Aziz",
    lastName : "Rakhim",
    phone : "+998-95-011-36-33",
    relation : "Friends"
  }
];
 
let elNewList = [];

elArr.forEach((el) => {
  elNewList = elArr.map((el) => {
    return `
      <li class="name-item col-6">
        <div class="cover">
          <p class="name-text">
            ${el.firstName} ${el.lastName}
          </p>
          <p class="joint">
            ${el.relation}
          </p>
          <a href="tel:+998950113633">
            ${el.phone}
          </a>
        </div>
      </li>
    `;
  })

  elNameList.innerHTML = elNewList.join("");
})

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let a = {
    firstName : elFirstName.value,
    lastName : elLastName.value,
    phone : elPhone.value,
    relation : elRelation.value
  }

  elArr.push(a);

  elNewList = elArr.map((el) => {
    return `
      <li class="name-item col-6">
        <div class="cover">
          <p class="name-text">
            ${el.firstName} ${el.lastName}
          </p>
          <p class="joint">
            ${el.relation}
          </p>
          <a href="tel:+998950113633">
            ${el.phone}
          </a>
        </div>
      </li>
    `;
  })

  elNameList.innerHTML = elNewList.join("");

  elFirstName.value = "";
  elLastName.value = "";
  elPhone.value = "";
  elRelation.value = "";
  
});

elBtnGroup.addEventListener("click", (e) => {
 
    let newestArr = elArr.filter((item) => {
      return item.relation == e.target.textContent;
    });

    if(e.target.textContent == "All"){
      newestArr = elArr;
    }

    let elNewListOne = newestArr.map((el) => {
      return `
        <li class="name-item col-6">
          <div class="cover">
            <p class="name-text">
              ${el.firstName} ${el.lastName}
            </p>
            <p class="joint">
              ${el.relation}
            </p>
            <a href="tel:+998950113633">
              ${el.phone}
            </a>
          </div>
        </li>
      `;
    });
  
    elNameList.innerHTML = elNewListOne.join("");

});

