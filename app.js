var getText=document.querySelector("#txtarea");
var btnAdd=document.querySelector("#btn");
var outputDiv=document.querySelector("#output");
var url="https://api.funtranslations.com/translate/minion.json";
btnAdd.addEventListener("click",getTranslated);
function getTranslated(){
    var updateUrl=url+"?"+"text="+getText.value;
    console.log(updateUrl);
    fetch(updateUrl)
    .then(response=>response.json())
    .then(json=>{
        var output=json.contents.translated;
        outputDiv.innerHTML=output;
    })
    .catch(gotError)
}
function gotError(){
    console.log("Error");
}