function validateForm()
{
    let x=document.forms["my-form"]["FirstName"].value;  
    if(x==null || x=="" )
    {
        alert("Field Must be filled");
        return false;
    }

    let y=document.forms["my-form"]["LastName"].value;
    if(y==null || y=="")
    {
        alert("Field Must be filled");
        return false;
    }

    let y=document.forms["my-form"]["Email"].value;
    if(y==null || y=="")
    {
        alert("Field Must be filled");
        return false;
    }
    else
    {
        return true;
    }

}