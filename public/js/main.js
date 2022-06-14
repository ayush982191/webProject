const submitbtn=document.getElementById("submitbtn");
const cityname=document.getElementById("cityname");
const city_name=document.getElementById("city_name");

const getinfo=async(event)=>{
    event.preventDefault();
    let cityval=cityname.value;
    if(cityval==="")
    city_name.innerHTML="Please input some data";
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid={e8fce74839507d366bc0fc4c9650f6f1}`
            const response=await fetch(url);
        }
        catch{
            city_name.innerHTML=`Please enter cityname properly`;
        }
       
    }
    // alert("Hiiii");
   
}
submitbtn.addEventListener('click',getinfo);

