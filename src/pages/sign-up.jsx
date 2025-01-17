import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import SignUpArea from "@containers/signup";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const SignUp = () => (
    <Wrapper>
        <SEO pageTitle=" انشاء حساب جديد" />
       
        <main id="main-content">
            <Breadcrumb pageTitle="انشاء حساب جديد " currentPage="Sign Up" />
            <SignUpArea />
        </main>
      
    </Wrapper>
);

export default SignUp;
