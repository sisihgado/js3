


var siteNameInput = document.getElementById('siteName')
var siteUrlInput = document.getElementById('siteUrl')
var webContainer =[];

if(localStorage.getItem('webSite') !=null)
{
    webContainer=JSON.parse(localStorage.getItem('webSite'))
    displayWeb(webContainer)
}



function submitUrl()

{
if (validateUrl() == true )
{

var web= {
    name :siteNameInput.value,
    Url :  siteUrlInput.value,
    
    }
    webContainer.push(web);
localStorage.setItem('webSite' , JSON.stringify  (webContainer) )

    displayWeb ()

}

else
{
    alert("invalid Url")
}
console.log(webContainer)

}

function displayWeb ()
{


    var allproduct = ` `;


    for( var i =0 ; i <webContainer.length ; i++)
    {  



        allproduct += ` <tr> 

<td class= "   fs-3 " >${ webContainer[i].name      } </td>


<td> <a href="https://www.google.com/ "  target="blank"  class=" btn btn-sm btn-primary ms-5  p-2 " >Visit </a> </td> 
<td> <button  onclick =" deleteWeb ( ${i} )" class= "btn btn-sm btn-danger ms-3 p-2 ">Delete </button> </td> 

</tr>` ;

}
document.getElementById('tableBody').innerHTML =allproduct ;

}


function deleteWeb (productIndex)
{
    webContainer.splice( productIndex,1);
    displayWeb();
}


function validateUrl ()
{
    var regex = /(http:\/\/)?(www\.)?[a-z]\.com/;
return  regex.test(siteUrlInput.value) ;

}
