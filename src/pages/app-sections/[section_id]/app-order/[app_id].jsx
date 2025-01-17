import PropTypes from "prop-types";
import clsx from "clsx";
import Sticky from "@ui/sticky";
import Button from "@ui/button";
import GalleryTab from "@components/product-details/gallery-tab";
import ProductTitle from "@components/product-details/title";
import ProductCategory from "@components/product-details/category";
import ProductCollection from "@components/product-details/collection";
import BidTab from "@components/product-details/bid-tab";
import PlaceBet from "@components/product-details/place-bet";
import OrderForm from "@components/order-form/app";
import { ImageType } from "@utils/types";
import axios from "axios";

export async function getServerSideProps(context) {
    try {
        console.log("home-sticky-pin sidebar-header position-relative");
        const result = await axios.get(
            `http://127.0.0.1:8000/api/app/${context.query.app_id}`
        );
        console.log(result.data.app);
        console.log(`http://127.0.0.1:8000/api/app/${context.query.app_id}`);
        return {
            props: {
                className: "home-sticky-pin sidebar-header position-relative",
                myApp: result?.data?.app,
            },
        };
    } catch (error) {
        console.log(error); 
    
        return {
            props: {
                className: "home-sticky-pin sidebar-header position-relative",
            },
        };
    }
}

const ProductDetailsArea = ({ myApp }) => (
    <div className={clsx("product-details-area")}>
        <div className="container">
            <div className="row g-5">
                {/* <div className="col-lg-7 col-md-12 col-sm-12">
                    <Sticky>
                        <GalleryTab images={myApp?.image} />
                    </Sticky>
                </div> */}
                <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
                    <div className="rn-pd-content-area">
                        <ProductTitle
                            title={myApp?.name}
                            likeCount={myApp?.likeCount}
                        />
                        <span className="bid">
                            Height bid{" "}
                            <span className="price">
                                {myApp?.price}
                                {/* {myApp.price.currency} */}
                            </span>
                        </span>
                        <h6 className="title-name">{myApp?.note}</h6>

                        <OrderForm app={myApp} />
                        {/* <div className="rn-bid-details">
                            <BidTab
                                bids={product?.bids}
                                owner={product.owner}
                                properties={product?.properties}
                                tags={product?.tags}
                                history={product?.history}
                            />
                            <PlaceBet
                                highest_bid={product.highest_bid}
                                auction_date={product?.auction_date}
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

ProductDetailsArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        likeCount: PropTypes.number,
        price: PropTypes.shape({
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired,
        owner: PropTypes.shape({}),
        collection: PropTypes.shape({}),
        bids: PropTypes.arrayOf(PropTypes.shape({})),
        properties: PropTypes.arrayOf(PropTypes.shape({})),
        tags: PropTypes.arrayOf(PropTypes.shape({})),
        history: PropTypes.arrayOf(PropTypes.shape({})),
        highest_bid: PropTypes.shape({}),
        auction_date: PropTypes.string,
        images: PropTypes.arrayOf(ImageType),
    }),
};

ProductDetailsArea.defaultProps = {
    space: 1,
};

export default ProductDetailsArea;
