import { useState } from "react";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-scroll";
const primaryprice=110;
const OrdeForm = ({ className }) => {
    const [mobile,setMobile]=useState({
        mobile:"",
        
      });
      const [count,setCount]=useState(0);
      const [price,setPrice]=useState(0);
      const changeCountHandler = (e) => {
        setCount(e.target.value);
        setPrice((e.target.value)*primaryprice);

        
    };
    const changeMobileNoHandler = (e) => {
        const { name, value } = e.target;
        setMobile((prev) => ({
            ...prev,
            [name]: value,
        }));
        
        console.log(mobile);
    };

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
                <div className="mb-5">
                    <label htmlFor="count" className="form-label">
                    </label>
                    <input
                       className="withRadius  myinput25"
                        type="number"
                        id="count"
                        name="count"
                        required=""
                        placeholder="  العدد"
                       defaultValue="1"
                        onChange={e=>changeCountHandler(e)}
                     
                    />
                       <input
                       className="withRadius  myinput25 mybutton-margin"
                        type="number"
                        id="price"
                        name="price"
                        required=""
                        placeholder="  الاجمالي"
                        readOnly
                         value={price}
                    
                     
                    />
                </div>
          
               <div className="mb-5">
                    <label htmlFor="mobile" className="form-label">
                    </label>
                    <input
                       className="withRadius"
                        type="text"
                        id="mobile"
                        name="mobile"
                        required=""
                        placeholder="رقم الهاتف"
                        onSelect={e=>changeMobileNoHandler(e)}
                     
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
