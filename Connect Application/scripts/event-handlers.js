export const loginForm = document.getElementById('login-form');
export const handleLoginForm=(e)=>{
    e.preventDefault();

    const formData= new FormData(e.target());// Cannot directly access from here so we 
    const credentials={};//Create new object (Why?)

    for(let [key,value] of formData.entries()){
        credentials={...credentials,[key]:value}
    }

    // console.log(credentials);
    return credentials;

}