import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-02";
import Footer from "@layout/footer/footer-02";
import HeroArea from "@containers/hero/layout-08";
import TopBarArea from "@containers/top-bar";
import OrderForm from "@components/order-form/app";

export async function getStaticProps() {
    return { props: { className: "home-sticky-pin sidebar-header position-relative" } };
}

const Order = () => (
    <Wrapper>
        <SEO pageTitle=" شراء" />
        <Header /> 
        <main id="main-content"   className="rn-nft-mid-wrapper nft-left-sidebar-nav pr--40 pr_sm--15">
        <div className="list-item-1">
          <TopBarArea />
          <HeroArea/>
        </div>
            <OrderForm />
          
        </main>
        <Footer />
    </Wrapper>
);

export default Order;
