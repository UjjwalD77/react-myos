import React from 'react'
import axios from "axios";


const MessageApi = async(name,email,contactno,message) => {
    console.log(name,email,contactno,message);
    //I know i exposed it but i dont care
    const b64weebhook = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA3MzQ0MTI0MzMyNzExNTI4NC9EMnJUZHo3aE52UFNpdDRBbmU3aVhpOUozREtGSjlNOUVlbkF6MTR6VHhhTjFrS2x2LXVlYU5SMTRaZmpYMF9KYVFEUw" 
    // const b64weebhook = "pdDRBbmU3aVhpOUozREtGSjlNOUVlbkF6MTR6VHhhTjFrS2x2LXVlYU5SMTRaZmpYMF9KYVFEUw" 
    
    let mystring = `Name: ${name} \nEmail: ${email} \nContact No: ${contactno} \nMessage: ${message}`;
    console.log(mystring)
    const data = {
        "content": mystring,
    }
        try{

            const response = await axios.post(atob(b64weebhook), data, {
                headers: {
                    "Content-Type": "application/json"
                },
            });
            console.log(response.status)
            if(response.status == 204){
                return true;
            }
        }
        catch(err){
            console.log(err)
            return false;
        }
        return false;
    
   
}
export default MessageApi;