import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import OrderForm from "@components/order-form/transfer";

const OrderFormArea = ({ space, className }) => (
    <div
        className={clsx(
            "login-area message-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
       
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-duration="800"
                >
                    <OrderForm />
                </div>
            </div>
        </div>
    </div>
);

OrderFormArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

OrderFormArea.defaultProps = {
    space: 1,
};

export default OrderFormArea;
