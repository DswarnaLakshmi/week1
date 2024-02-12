
    var select = '';
     for (i=1;i<=100;i++){
      select += '<option val=' + i + '>' + i + '</option>';
      }
      document.getElementById('some_selector').innerHTML=select;
function login(){
console.log('login------------------------')
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var logindetails = localStorage.getItem("userDetails")
var details=JSON.parse(logindetails);
console.log(details)
let url;
let validData=true;
for(let i=0;i<details.length;i++){
  if(!email)
  {
    validData = false;
    document.getElementById('eerror').innerHTML="Enter Email"
  }
  else{
    document.getElementById("eerror").innerHTML = "";
   }
  if(!emailCheck(email)){
    validData = false;
    document.getElementById('eerror').innerHTML="Enter Valid Email"
  }
  else{
    document.getElementById("eerror").innerHTML = "";
   }
  if(!password)
  {
    validData = false;
    document.getElementById('perror').innerHTML="Enter Password"
  }
  else{
    document.getElementById("perror").innerHTML = "";
   }
  if(email==details[i].email && password==details[i].password)
  {
    
    url='http://localhost:3000/users/dashboard?userId='+details[i].userId+'&firstName='+details[i].firstName+'&lastName='+details[i].lastName+'&email='+details[i].email;
    break;
  }
  else{
    document.getElementById('error').innerHTML="Invalid Details"
  }
}

console.log('url-----'+url)
if(url) window.location.href=url;
}
function emailCheck(input){
  let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  let valid = emailReg.test(input)       
  return valid
}
/* GET register page*/
function signup(){
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cpassword = document.getElementById("cpassword").value;
  var phoneNumber = document.getElementById("phonenumber").value;
  var age = document.getElementById("some_selector").value;
  var checkBox = document.getElementById("checkBox").checked="Yes";
 //validation Part 
const radioButtons = document.querySelectorAll('input[name="gender"]');
console.log("------------",radioButtons);
let selectedGender = '';
for (const radioButton of radioButtons) {
  if (radioButton.checked) {
      selectedGender = radioButton.value;
      break;
  }
}
  let validData= true;
    if(spellCheck(firstName)){
      validData = false;
      document.getElementById('fnerror').innerHTML="Enter Valid Name"
     }
     else{
      document.getElementById("fnerror").innerHTML = "";
     }
     
    if(select=='select Age'){
      validData = false;
      document.getElementById('aerror').innerHTML="Select Age"
    }
    else{
      document.getElementById("aerror").innerHTML = "";
    }
     if(checkBox=="")
     {
      document.getElementById('cerror').innerHTML="Select Check Box"
     }
     else{
      document.getElementById("cerror").innerHTML = "";
     }
     if(!nameCheck(firstName)){
      validData = false;
      document.getElementById('fnerror').innerHTML="Enter Valid Name"
     }
     else{
      document.getElementById("fnerror").innerHTML = "";
     }
    if(spellCheck(lastName)){
      validData = false;
      document.getElementById('lnerror').innerHTML="Enter Valid Name"
     }
     else{
      document.getElementById("lnerror").innerHTML = "";
     }
     if(!nameCheck(lastName)){
      validData = false;
      document.getElementById('lnerror').innerHTML="Enter Valid Name"
     }
     else{
      document.getElementById("lnerror").innerHTML = "";
     }
     if(!emailCheck(email)){
      validData = false;
      document.getElementById('eerror').innerHTML="Enter Valid Email Id"
     }
     else{
      document.getElementById("eerror").innerHTML = "";
     }
     if(password.length<8){
      validData = false;
      document.getElementById('lerror').innerHTML="password should be minimum 8 characters"
     }
     else{
      document.getElementById("lerror").innerHTML = "";
     }
     if(password!==cpassword){
      validData = false;
      document.getElementById('perror').innerHTML="Password Mismatch"
     } 
     if(!numberCheck(phoneNumber)){
      validData = false;
      document.getElementById('pnerror').innerHTML="Enter Valid Number"
     } 
     else{
      document.getElementById("pnerror").innerHTML = "";
     }
     var users=localStorage.getItem('userDetails');
    if( users)
    {
      validData = false;
      document.getElementById('ierror').innerHTML="Already exist"
    }
    else{
      document.getElementById("ierror").innerHTML = "";
    }              
      if(validData) {
        var usersList=localStorage.getItem('userDetails');
  if(!usersList) usersList=[];
  else usersList=JSON.parse(usersList);
  var data={firstName:firstName,lastName:lastName,email:email,password:password,phoneNumber:phoneNumber,selectedGender:selectedGender,age:age,checkBox:checkBox,userId:usersList.length+1};
  usersList.push(data);
 localStorage.setItem('userDetails',JSON.stringify(usersList));
        axios.post('http://localhost:3000/users/signup', {firstName:firstName,lastName:lastName,email:email,password:password,phoneNumber:phoneNumber,selectedGender:selectedGender,age:age,checkBox:checkBox}).then(response=>{
          console.log('signup post res---'+JSON.stringify(response.data.user));
          window.location.href='http://localhost:3000/users/login';
        });
      }

}
function nameCheck(input){
  let nameReg = /[A-Za-z]/;
  let valid = nameReg.test(input)       
  return valid
}  
  function emailCheck(input){
  let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  let valid = emailReg.test(input)       
  return valid
}
function spellCheck(input){
let nameReg = /[0-9._%+-]/;
let valid = nameReg.test(input)       
return valid
} 
function numberCheck(input){
  let numberReg = /^\d{10}$/;
  let valid = numberReg.test(input)       
  return valid
}
/*const btn = document.getElementById("menu");
btn.addEventListener("click", () =>{
  const data = localStorage.getItem("userDetails")
  const users = JSON.parse(data);
  document.getElementById("table").innerHTML = `
  <div>
  ${createTable(users)}
  </div>`;
})
const createTable = (users) =>{
  return`
  <table class="table">
  <thead>
  <tr>
  <th scope="col">First Name</th>
  <th scope="col">Last Name</th>
  <th scope="col">Email</th>
  <th scope="col">Phone Number</th>
  <th scope="col">Gender</th>
  <th scope="col">Age</th>
  <th scope="col">Termas & Conditions</th>
  </tr>
  </thead>
  <tbody>
  ${createTableData(users)}
  </tbody>
  </table>
  ;`
}
const createTableData =  (users) =>{
  let html ="";
  users.forEach((user) => {
    html +=`
    <tr>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    <td>${user.phoneNumber}</td>
    <td>${user.selectedGender}</td>
    <td>${user.age}</td>
    <td>${user.checkBox}</td>
    </tr>
    `;
  });
  return html;
  }*/

