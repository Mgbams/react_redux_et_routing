import CakeContainer from "../cakeShop/components/cakeContainer";
import HooksCakeContainer from "../cakeShop/components/HooksCakeContainer";
import IceCreamContainer from "../cakeShop/components/IceCreamContainer";
import Counter from "../components/Counter";
import ExampleUseEffect from "../components/ExampleUseEffect";

const Home = () => {
    return (  
    <div className='home'>
        <Counter />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <ExampleUseEffect />

    </div>);
}
 
export default Home;