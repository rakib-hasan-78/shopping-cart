
import Hero from './../../components/Hero/Hero';
import SelectedItems from './../../components/SelectedItems/SelectedItems';
import { useProduct } from './../../hooks/CustomContext/CustomContext';

const Dashboard = () => {
    const {cart, wishlist, selectedContent , setSelectedContent} = useProduct();

    // tab handler ===>
    const tabHandler = (e , type) =>{
        e.preventDefault();
        setSelectedContent(type);
    }

    return (
        <div className='w-full h-auto flex flex-col bg-project-gray/80 relative'>
            <main className="main">
                {/* hero section */}
                <Hero className={`h-72`}>
                    <div className='hero-content text-center w-11/12 flex-col mt-10'>
                        <h2 
                        className='xxxl-title text-project-white'
                        >
                        dashboard
                        </h2>
                        <p
                        className='lg:py-3 brief max-w-3xl text-xs lg:text-sm text-project-white/80'
                        >
                         Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!   
                        </p>
                        <div 
                        className='w-full flex items-center justify-center py-3 space-x-5'>
                            <button 
                            type="button" 
                            className={`btn btn-lg rounded-3xl px-12 border border-project-white shadow-none ${selectedContent==='cart'?'bg-project-white text-project-violet font-bold':'bg-transparent text-project-white font-light'}
                            `}
                            onClick={(e)=>tabHandler(e,'cart')}
                            >
                            cart
                            </button>

                            <button 
                            type="button" 
                            className={`btn btn-lg rounded-3xl px-12 border border-project-white shadow-none ${selectedContent==='wishlist'?'bg-project-white text-project-violet font-bold':'bg-transparent text-project-white font-light'}
                            `}
                            onClick={(e)=>tabHandler(e,'wishlist')}
                            >
                            wishlist
                            </button>
                        </div>
                    </div>
                </Hero>
                {/* content section */}
                <section 
                className='w-full h-auto py-10 flex flex-col items-center justify-start space-y-2
                '>
                    {
                        selectedContent==='cart'&&(
                            cart.map(ca=>(
                                <SelectedItems key={ca.product_id} item={ca} selectedContent={selectedContent} variant={'dashboard'} />
                            ))
                        )
                    }
                    {
                        selectedContent==='wishlist' &&(
                            wishlist.map(wl=>(
                                <SelectedItems key={wl.product_id} item={wl} selectedContent={selectedContent} variant={'dashboard'} />
                            ))
                        )
                    }
                </section>
            </main>
            
        </div>
    );
};

export default Dashboard;