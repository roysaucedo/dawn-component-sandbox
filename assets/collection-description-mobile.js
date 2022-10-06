//used onClick on read more/read less


function showDescription(){
    document.getElementsByClassName("collection__banner__description__read_more")[0].style.display = "none";
    document.getElementsByClassName("collection__banner__description__read_less")[0].style.display = "block";
    document.getElementsByClassName("collection__banner__description__ctr")[0].style.maxHeight = "none";
};

function hideDescription(){
    document.getElementsByClassName("collection__banner__description__read_less")[0].style.display = "none";
    document.getElementsByClassName("collection__banner__description__read_more")[0].style.display = "block";
    document.getElementsByClassName("collection__banner__description__ctr")[0].style.maxHeight = "30px";
};
