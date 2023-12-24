var siteName= document.getElementById("siteName");
var URL= document.getElementById("URL");
var siteList=[];
if(localStorage.getItem("sites")!=null){
    siteList=JSON.parse( localStorage.getItem("sites"));
    displaySite();

}
function addSite(){
   if(validationName()){
    var site={
        siteName: siteName.value,
        URL : URL.value
    }
    siteList.push(site);
    localStorage.setItem("sites" , JSON.stringify(siteList))
    clearInput();
    displaySite()
    
   }

}
function clearInput(){
    siteName.value="";
    URL.value="";
}
function displaySite(){
    var cartona="";
    for(var i=0 ; i < siteList.length ; i++){
        cartona+=`<tr>
        <td>${i}</td>
        <td>${siteList[i].siteName}</td>
        <td><button class="btn btn-success button px-4"><i class="fa-solid fa-eye pe-2"></i><a href="${siteList[i].URL}" class=" text-white text-decoration-none">Visit</a></button></td>
        <td><button onclick="deleteSite(${i})" class="btn btn-danger button px-4"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        
    </tr>`}
    document.getElementById("tableBody").innerHTML=cartona
}
function deleteSite(index){
    siteList.splice(index , 1);
    localStorage.setItem("sites" , JSON.stringify(siteList))
    displaySite();

}
var nameMessage=document.getElementById("nameMessage")
function validationName(){
    var text = URL.value;
    var regexName = /^https?:\/\//;
    if(regexName.test (text)){
        URL.classList.add( "is-valid");
        URL.classList.remove( "is-invalid");
        nameMessage.classList.add("d-none")
        return true;
    }
    else{
        URL.classList.add( "is-invalid") ;
        URL.classList.remove( "is-valid") ;
        nameMessage.classList.remove("d-none")
        return false;

    }
}
