import { useState } from "react";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-scroll";

const OrdeForm = ({ card }) => {
    
    const [cardField,setCardField]=useState({  
        count:0,
        price:   card ? card.price : "",
        user_id: card ? card.id : "",
        card_id: card ? card.id : "",
        
      });



      useEffect(() => {
        // منطق تحديث السعر بناءً على count
        const updatedPrice = cardField.count * card.price; // على سبيل المثال، كل وحدة تساوي 10
        setCardField((prevFields) => ({
          ...prevFields,
          price: updatedPrice
        }));

    }, [cardField.count]); 
   

    const csrf = () => axios.get('/sanctum/csrf-cookie');
    const onSubmit = async ( e) => {
          e.preventDefault();
          const response=await axios.post(`http://localhost:8000/api/card/order/${app.id}`,appField,csrf);
          console.log(response.data);
       
      };
    return (
        <div className="form-wrapper-one registration-area">
           
            <form >
                <div className="tagcloud"> 
                <h3 className="mb--30"> اتمام عملية الشراء <Link path="#" className="mybutton-margin"> السعر :
                  {card.price}
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
                       value={cardField.count}
                        onChange={e=> setAppField({ ...appField, count: e.target.value })}
                     
                    />
                       <input
                       className="withRadius  myinput25 mybutton-margin"
                        type="number"
                        id="price"
                        name="price"
                        required=""
                        placeholder="  الاجمالي"
                        readOnly
                         value={cardField.price}
                    
                     
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
