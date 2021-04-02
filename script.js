function ElementBuilder(name) {
  this.element = document.createElement(name);

  this.text = function (text) {
    this.element.textContent = text;
    return this;
  };

  this.class = function (name) {
    this.element.className = name;
    return this;
  };

  this.placeholder = function (placeholder) {
    this.element.placeholder = placeholder;
    return this;
  }

  this.attr = function (name, value) {
    this.element.setAttribute(name, value);
    return this;
  };

  this.id = function (id) {
    this.element.id = id;
    return this;
  };

  this.type = function (type) {
    this.element.type = type;
    return this;
  };

  this.setValue = function (value) {
    this.element.value = value;
    return this;
  };

  this.onclick = function (name, phone, ul) {
    this.element.onclick = function () {
      const nameVal = name.value;
      const phoneVal = phone.value;

      const list = new Render(ul);
      if (!list.checkEmpty(nameVal, phoneVal)) {
        list.addContact(nameVal, phoneVal);
      };
    }
    return this;
  };
  

  this.appendTo = function (container) {
    container.append(this.element);
    return this;
  };

  this.build = function () {
    return this.element;
  };
}

const builder = {
  create: function (name) {
    return new ElementBuilder(name);
  },
};

function PhoneBookRecord(name, phone) {
  this.name = name;
  this.phone = phone;
}

function PhoneBook() {
  this.records = [];

  this.add = function (name, phone) {
    const contact = new PhoneBookRecord(name, phone);
    this.records.push(contact);

    // this.records.forEach(function (item) {
      
    // })

    
    console.log(this.records);
    return this;
  };

  this.search = function (name) {
    const result = this.records.includes(name);
  };

  this.remove = function () {

  };
  
}

function Render(container) {
  this.container = container;
  const phoneBook = new PhoneBook();

  this.init = function () {

    const innerContainer = builder
    .create("div")
    .id("innerContainer")
    .appendTo(this.container)
    .build();

    const h1 = builder
    .create("h1")
    .text("Phone Book")
    .appendTo(innerContainer)
    .build();

    const phoneIcon = builder
    .create("i")
    .class("far fa-address-book")
    .appendTo(h1)
    .build();

    const search = builder
    .create("div")
    .class("search")
    .appendTo(innerContainer)
    .build();

    const searchField = builder
    .create("input")
    .placeholder("search")
    .type("search")
    .id("search")
    .appendTo(search)
    .build();

    const searchBtn = builder
    .create("button")
    .id("searchBtn")
    .appendTo(search)
    .build();

    const searchIcon = builder
    .create("i")
    .class("fa fa-search")
    .appendTo(searchBtn)
    .build();

    const form = builder
    .create("form")
    .appendTo(innerContainer)
    .build();

    const h2 = builder
    .create("h2")
    .text("Add New Contact")
    .appendTo(form)
    .build();

    const name = builder
    .create("input")
    .type("text")
    .class("block")
    .id("name")
    .placeholder("name")
    .appendTo(form)
    .build();

    const phone = builder
    .create("input")
    .type("text")
    .class("block")
    .id("phone")
    .placeholder("phone")
    .appendTo(form)
    .build();
    
    const table = builder
    .create("section")
    .class("table")
    .appendTo(innerContainer)
    .build();

    const thead = builder
    .create("div")
    .class("thead")
    .appendTo(table)
    .build();

    const firstTh = builder
    .create("div")
    .text("Name")
    .appendTo(thead)
    .build();

    const secondTh = builder
    .create("div")
    .text("Phone")
    .appendTo(thead)
    .build();

    const ul = builder
    .create("ul")
    .appendTo(table)
    .build();

    const addBtn = builder
    .create("button")
    .text("Add")
    .class("block")
    .id("addBtn")
    .onclick(name, phone, ul)
    .appendTo(form)
    .build();
  };

  this.checkEmpty = function (val1, val2) {
    
    if (val1 === "" || val2 === "") {
      alert(`please fill both field!`);
      return true;
    }
    return false;
  };

  this.addContact = function (name, phone) {
    const result = phoneBook.add(name, phone);
    console.log( phoneBook.records);
    console.log(result);

    const li = builder
      .create("li")
      .appendTo(this.container)
      .build();

      const nameLi = builder
      .create("div")
      .text(name)
      .appendTo(li)
      .build();

      const phoneLi = builder
      .create("div")
      .text(phone)
      .appendTo(li)
      .build();

      const removeLi = builder
      .create("div")
      .appendTo(li)
      .build();

      const removeIcon = builder
      .create("i")
      .class("fas fa-minus-circle")
      .appendTo(removeLi)
      .build();

  };

  //other functions 
}

const phoneBookContainer = document.getElementById("phone-book-container");
const app = new Render(phoneBookContainer);
app.init();
