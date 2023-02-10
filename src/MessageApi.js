import React from 'react'
import axios from "axios";


const MessageApi = async(name,email,contactno,message) => {
    console.log(name,email,contactno,message);
    //I know i exposed it but i dont care
    const webhook = "https://discord.com/api/webhooks/1073441239518679040/0ID_9xZlevtfCX_Yap_FPNnNMg8_G99H3zMiDEIUmdiuIO-zyB18xQiawqocy9_7emRW" 
 
    let mystring = `Name: ${name} \nEmail: ${email} \nContact No: ${contactno} \nMessage: ${message}`;
    console.log(mystring)
    const data = {
        "content": mystring,
    }
        try{

            const response = await axios.post(webhook, data, {
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
            return false;
        }
        return false;
    
   
}
export default MessageApi;