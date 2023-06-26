
//-------------------------------
function shareListHideShow(actionId){
    var divs = document.getElementsByClassName("share-list");
    for(var i=0;i<divs.length;i++) {
        if(divs[i].id == actionId){
            if(divs[i].style.display === "inline-block"){
                divs[i].style.display = "none";
            }else{
                divs[i].style.display = "inline-block";
            }
        }
        else
            divs[i].style.display = "none";
    }
}