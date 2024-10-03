import { useState } from "react";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-scroll";
const primaryprice=110;
const OrdeForm = ({ className }) => {
  

    const csrf = () => axios.get('/sanctum/csrf-cookie');
    const onSubmit = async ( e) => {
          e.preventDefault();
       //   const response=await axios.post("http://localhost:8000/api/login",,csrf);
          console.log(response.data);
       
      };
    return (
        <div className="form-wrapper-one registration-area">
           
            <form >
                <div className="tagcloud"> 
                <h3 className="mb--30"> اتمام عملية الشراء <Link path="#" className="mybutton-margin"> السعر :
                     50TL
                     </Link></h3>
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
