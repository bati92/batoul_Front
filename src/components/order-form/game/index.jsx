import { useState } from "react";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-scroll";

const OrdeForm = () => {
    const [useField,setUserField]=useState({

        user_id_game:"",
    
        
      }); 
      const changeUserFieldHandler = (e) => {
        const { name, value } = e.target;
        setUserField((prev) => ({
            ...prev,
            [name]: value,
        }));
    };const csrf = () => axios.get('/sanctum/csrf-cookie');
    const onSubmit = async ( e) => {
      e.preventDefault();
      try{
        console.log(useField);
         // const response=await axios.post("http://localhost:8000/api/login",useField,csrf);
          console.log(response.data);
       
      }
      catch(err){
  
     console.log(err);
      }
  
  
      };
    return (
        <div className="form-wrapper-one registration-area">
           
            <form >
                <div className="tagcloud"> 
                <h3 className="mb--30"> اتمام عملية الشراء <Link path="#" className="mybutton-margin"> السعر :
                     50TL
                     </Link></h3>
                   
                </div>
               <div className="mb-5">
                    <label htmlFor="user_id_game" className="form-label">
                    </label>
                    <input
                       className="withRadius"
                        type="text"
                        id="user_id_game"
                        name="user_id_game"
                        required=""
                        placeholder=" ايدي اللاعب"
                        onChange={e=>changeUserFieldHandler(e)}
                     
                    />
                </div>

             
                <Button type="submit" size="medium" onClick={e=>onSubmit(e)}  className="mr--15">
                      شراء                   </Button>
                <Button path="/" color="primary-alta" size="medium">
                    الغاء الأمر 
                </Button>
            </form>
            <br>
            </br>
            <br>
            </br>
            <div>

            <p>ملاحظة ملاحظة ....
            </p>
            </div>
        </div>
    );
};
export default OrdeForm;
