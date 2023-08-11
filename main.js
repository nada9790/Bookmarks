var websiteNameInput = document.getElementById('siteName');
var websiteUrlInput = document.getElementById('siteUrl');
var webSiteContainer = [];

if (localStorage.getItem("websites") != null) {
    webSiteContainer=JSON.parse(localStorage.getItem('websites'))
    displayWebsite(webSiteContainer)
}
function addWebSite() {
  if (validateUrl() == true) {
      var website = {
        webSiteName: websiteNameInput.value,
        webSiteURL: websiteUrlInput.value,
      };
    webSiteContainer.push(website);
    localStorage.setItem("websites", JSON.stringify(webSiteContainer));
    displayWebsite(webSiteContainer);
    clear();
    }
  else {
      alert("website url not valid")
    }
}

function clear() {
     websiteNameInput.value = "";
     websiteUrlInput.value = "";
}

function displayWebsite(arr) {
    var cartona = ``;
    for (var i = 0; i < arr.length; i++) {
        cartona += `
         <tr>   
                <td>${i}</td>
                <td>${arr[i].webSiteName}</td>
                
                <td><button class="btn fw-bold "><a href="${webSiteContainer[i].webSiteURL}" class="text-decoration-none"><i class="fa-regular fa-eye px-1"></i>Visit</a></button></td>
                <td><button onclick="deleteWebsite(${i})" class="btn fw-bold "><i class="fa-solid fa-trash-can px-1"></i>Delete</button></td>
            </tr>
        `;
    }
    document.getElementById("tbody").innerHTML=cartona
    
}

function deleteWebsite(websiteIndex) {
    webSiteContainer.splice(websiteIndex, 1)
    localStorage.setItem("websites", JSON.stringify(webSiteContainer));
    displayWebsite(webSiteContainer)
}
function searchWebsite(term) {
    var matchedWebsites = []
    for (var i = 0; i < webSiteContainer.length; i++) {
        if (webSiteContainer[i].webSiteName.toLowerCase().includes(term.toLowerCase())) {
            matchedWebsites.push(webSiteContainer[i])
        }
    }
    displayWebsite(matchedWebsites)
}
function validateUrl() {
     const pattern = new RegExp(
       "^([a-zA-Z]+:\\/\\/)?" + // protocol
         "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
         "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
         "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
         "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
         "(\\#[-a-z\\d_]*)?$", // fragment locator
         "i"
    );
    // if (
    //   websiteUrlInput.value ===
    //   localStorage.setItem("websites", JSON.stringify(webSiteContainer.webSiteURL))
    // ) {
    //     alert ("the website already saved before")
    // }
      return pattern.test(websiteUrlInput.value);
        
 }