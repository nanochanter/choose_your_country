const selected = document.querySelector(".selected");
const selectBoxOptions = document.querySelector(".select-box__options"); 
const optionList = document.querySelectorAll(".select-box__option");
const searchBox = document.querySelector(".search-box input");

selected.addEventListener("click", () => {
    selectBoxOptions.classList.toggle("active");

    searchBox.value = "";
    filterList("");
    if (selectBoxOptions.classList.contains("active")) {
        searchBox.focus();
    }
});

optionList.forEach( o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        selectBoxOptions.classList.remove("active");
    });
});

searchBox.addEventListener("keyup", function(e){
    filterList(e.target.value);
});

const filterList = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    optionList.forEach(option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase ();
        if (label.indexOf(searchTerm) != -1) {
            option.style.display = "block";
        }else{
            option.style.display = "none";    
        }
    });
};

