
var websiteNameInput = document.getElementById("siteName");
var websiteUrlInput = document.getElementById("siteUrl");
var addButton=document.getElementById("addBtn")


if (localStorage.getItem("websites") != null) {
    webSiteContainer = JSON.parse(localStorage.getItem('websites'))
    var container = ``;
    for (var i = 1; i < webSiteContainer.length; i++) {
      container += `
            <tr>
                <td>${i}</td>
                <td>${webSiteContainer[i].websiteName}</td>
                <td><button class="btn fw-bold  "><a href="${webSiteContainer[i].websiteUrl}" class="text-decoration-none"><i class="fa-regular fa-eye px-1"></i>Visit</a></button></td>
                <td><button class="btn fw-bold " onclick="deleteWebsite(i)"><i class="fa-solid fa-trash-can px-1"></i>Delete</button></td>
            </tr>
            `
    } 
}; 
var webSiteContainer = [];
function addWebsite() {
    var website = {
        websiteName: websiteNameInput.value,
        websiteUrl: websiteUrlInput.value,
    };
    webSiteContainer.push(website)
    localStorage.setItem('websites', JSON.stringify(webSiteContainer))
    displayData()
    clear()
    
    document.getElementById("tbody").innerHTML = container;
}
function displayData() {
    var container = ``;
    for (var i = 1; i < webSiteContainer.length; i++) {
      container += `
            <tr>
                <td>${i}</td>
                <td>${webSiteContainer[i].websiteName}</td>
                <td><button class="btn fw-bold "><a href="${webSiteContainer[i].websiteUrl}" class="text-decoration-none"><i class="fa-regular fa-eye px-1"></i>Visit</a></button></td>
                <td><button class="btn fw-bold "><i class="fa-solid fa-trash-can px-1"></i>Delete</button></td>
            </tr>
            `;
    }
    
}
function clear(){
    websiteNameInput.value=""
    websiteUrlInput.value=""
}
function deleteWebsite(index) {
    webSiteContainer.splice(index, 1)
    displayData()

}
var container2=``
function search(search) {
    for (i = 1; i < webSiteContainer.length; i++){
      if (
        webSiteContainer[i].websiteName
          .toLowerCase()
          .include(search.toLowerCase())
      ) {
        container2 += `
         <tr>
                <td>${i}</td>
                <td>${webSiteContainer[i].websiteName}</td>
                <td><button class="btn fw-bold "><a href="${webSiteContainer[i].websiteUrl}" class="text-decoration-none"><i class="fa-regular fa-eye px-1"></i>Visit</a></button></td>
                <td><button class="btn fw-bold "><i class="fa-solid fa-trash-can px-1"></i>Delete</button></td>
            </tr>
            ;
        `;
      }
    }
    
    document.getElementById("tbody").innerHTML = container2;
}
