function DoThis(iidd, src_name) {
    alert(iidd);
    alert(src_name);
    var like = document.getElementById(src_name).src;
    var count = document.getElementById(iidd).innerHTML;
    //alert(like.innerHTML);
    alert(count.innerHTML);
    if(like === "images/like-filled.svg"){
        document.getElementById("src_name").src = "images/like.svg";
        alert("hahah");
    }
    else{
        document.getElementById("src_name").src = "images/like-filled.svg";
        alert("nonon");
    }
}