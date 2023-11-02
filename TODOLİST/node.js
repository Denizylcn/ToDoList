//!---------------------------SELECTORS----------------------------------------------//*
let list = document.querySelectorAll("li");
let option = document.querySelector("#day");
let content = document.querySelector(".content");
let add_btn = document.querySelector(".bi-plus-circle");
let remove_all = document.querySelector(".remove-all");
let input_text = document.querySelector("#input-text");
const alertWarning = document.querySelector(".alert-warning");
const alertWarning_Full = document.querySelector(".alert-warning-full");
const alertSuccess = document.querySelector(".alert-success");
let tiklama = 0;
//!------------------------------EVENTS-------------------------------------------//*
add_btn.addEventListener("click", innertext);
content.addEventListener("click", completed);
//!------------------------------FUNCTİON-------------------------------------------//*

function innertext() {
  if (isEmpty(input_text.value)) {
    alertWarning.style.display = "block";
    setTimeout(() => {
      alertWarning.style.display = "none";
    }, 1500);
  } else {
    tiklama += 1;

    if (tiklama <= 7) {
      alertSuccess.style.display = "block";
      setTimeout(() => {
        alertSuccess.style.display = "none";
      }, 1500);
      //!------------------------------CREATE ELEMENTS-------------------------------------------//*
      let p = document.createElement("p");
      let wrapper_paragraph = document.createElement("div");
      let to_do_list_circle_box = document.createElement("div");
      let to_do_list_li = document.createElement("li");
      let to_do_list_ol = document.createElement("ol");

      //!------------------------------ADD CLASS-------------------------------------------//*
      wrapper_paragraph.classList.add("wrapper_paragraph");
      to_do_list_circle_box.classList.add("input");

      //!------------------------------ADD AND APPEND-------------------------------------------//*
      p.innerHTML = input_text.value;
      wrapper_paragraph.innerHTML = p.textContent;
      to_do_list_li.append(to_do_list_circle_box, wrapper_paragraph);
      to_do_list_ol.appendChild(to_do_list_li);
      content.appendChild(to_do_list_ol);
      input_text.value = "";
      //?-------------------------------------------------------------------------//*
      let input_circle = [];
      input_circle = [...document.querySelectorAll(".input")];

      console.log(tiklama);
      remove_all.addEventListener("click", function () {
        tiklama = 0;

        to_do_list_ol.remove();
        input_text.value = "";
      });
      //!-------------------------------------------------------------------------//*
    } else {
      alertWarning_Full.style.display = "block";
      setTimeout(() => {
        alertWarning_Full.style.display = "none";
      }, 1500);
    }
  }
}

function completed(e) {
  const item = e.target;
  class_name = item.getAttribute("class");
  if (class_name == "input") {
    item.setAttribute("class", "input active");
  }
  if (class_name == "input active") {
    item.setAttribute("class", "input");
  }
}

const isEmpty = (str) => !str.trim().length;
