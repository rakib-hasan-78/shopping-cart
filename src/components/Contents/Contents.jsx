import React, { useContext, useState } from 'react';
import Card from './../Card/Card';
import { ProductContext } from '../Products/Products';

const Contents = () => {
    const {products} = useContext(ProductContext);
    const [currentPage, setCurrentPage] = useState(1);

    const contentsPerPage = 12;
    const totalPages = Math.ceil(products.length/contentsPerPage);
    const currentIndex = (currentPage-1) * contentsPerPage;
    const totalItems = products.slice(currentIndex, currentIndex + contentsPerPage);

    const paginationHandler = value =>{
        if (value>= 1 && value<= totalPages) {
            setCurrentPage(value)
        }
    }
    return (
        <div className='w-full lg:w-7/12 h-auto flex flex-col space-y-2'>

            <div className='lg:w-full h-auto grid lg:grid-cols-3 justify-items-center items-center gap-3'>
                {
                    totalItems.map(product=>(
                        <Card key={product.product_id} product={product} />
                    ))
                }
            </div>
            <div className='w-full h-auto flex items-center justify-between'>
                {currentPage===1 ?
                <button className="btn btn-sm btn-disabled" tabIndex="-1" role="button" aria-disabled="true">
                Prev
                </button> :
                <button
                onClick={()=>paginationHandler(currentPage - 1)}
                 className="btn btn-primary btn-sm"
                 >
                 Prev
                 </button>
                }

                {
                    Array.from({length:totalPages}, (_,idx)=>(
                        <button
                        onClick={()=>paginationHandler(idx+1)} 
                        key={idx+1} 
                        className={`btn btn-xs font-light ${currentPage===idx + 1? 'bg-green-600' : ''} `}
                        >
                        {idx+1}
                        </button>
                    ))
                }

                {currentPage===totalPages ?
                <button className="btn btn-disabled btn-sm" tabIndex="-1" role="button" aria-disabled="true">
                Next
                </button> :
                <button
                onClick={()=>paginationHandler(currentPage + 1)}
                 className="btn btn-primary btn-sm"
                 >
                 Next
                 </button>
                }
            </div>
        </div>
    );
};

export default Contents;