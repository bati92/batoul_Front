import { useState } from "react";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-scroll";

const OrdeForm = ({ className ,app }) => {
    const [appField,setAppField]=useState({

        player_no:"",
        count:"",
        price:"",
        user_id:"",
        app_id:"",
        
      });
    const [player_no,setPlayerNo]=useState({
        player_no :"",
        
      });
      const [count,setCount]=useState(0);
      const [price,setPrice]=useState(app.price); 
      const [app_id,setappId]=useState(app.id);

      const changeCountHandler = (e) => {
        setCount(e.target.value);
        setPrice((e.target.value)*app.price);

        
    };
    const changePlayerNoHandler = (e) => {
        const { name, value } = e.target;
        setPlayerNo((prev) => ({
            ...prev,
            [name]: value,
        }));
        
        console.log(player_no);
    };
    const csrf = () => axios.get('/sanctum/csrf-cookie');
    const onSubmit = async ( e) => {
    try{
        setAppField(player_no,count,price);
          e.preventDefault();
          console.log(appField);
  const response=await axios.post(`http://localhost:8000/api/app/order/${app.id}`,appField,csrf);
   //   const response=await axios.post(`http://localhost:8000/api/myuser`,csrf);
       
     console.log(response.data);
       }
       catch(error){
        if (error.response) {
            // The request was made, and the server responded with a status code
            console.log('Error Data:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
       }}
      };
    return (
        <div className="form-wrapper-one registration-area">
           
            <form >
                <div className="tagcloud"> 
                <h3 className="mb--30"> اتمام عملية الشراء <Link path="#" className="mybutton-margin"> السعر :
                    {app.price}
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
                    <label htmlFor="player_no" className="form-label">
                    </label>
                    <input
                       className="withRadius"
                        type="text"
                        id="player_no"
                        name="player_no"
                        required=""
                        placeholder=" معرف اللاعب"
                        onSelect={e=>changePlayerNoHandler(e)}
                     
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

            <p>{app.note}
            </p>
            </div>
        </div>
    );
};
export default OrdeForm;
