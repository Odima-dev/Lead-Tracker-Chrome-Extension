let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    //clearing input field after SAVE INPUT button is clicked
    inputEl.value = "";
    //rendering to list
    renderLeads();
});

function renderLeads() {
    let listItem = "";
    //Rendering the leads in the unordered list using ulEl.textContent
    for (let i=0; i<myLeads.length; i++) {
        //improving code by using template string
        listItem += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
        </li>`;
}
    ulEl.innerHTML = listItem;
}

