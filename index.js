let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    //input content to page as a list
    renderLeads()
});

function renderLeads() {
    let listItem = "";
    //Rendering the leads in the unordered list using ulEl.textContent
    for (let i=0; i<myLeads.length; i++) {
        listItem += "<li>" + myLeads[i] + "</li>";
}
    ulEl.innerHTML = listItem;
}

