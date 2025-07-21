import React from 'react';
import { useProduct } from '../../hooks/CustomContext/CustomContext';
import PurchaseHandler from './../PurchaseHandler/PurchaseHandler';

const Invoice = ({cart}) => {
    const {getCardAmount, totals} = useProduct();
    return (
        <div 
        className='w-9/12 py-3 bg-project-white flex flex-col items-center justify-center rounded-xl'>
            <h3 className='italic font-black text-3xl underline underline-offset-8  decoration-2 decoration-project-violet uppercase'>invoice</h3>
            <div className="overflow-x-auto">
                <table className="table table-sm table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>sl</th>
                        <th>item</th>
                        <th>quantity</th>
                        <th>rate</th>
                        <th>tax</th>
                        <th>shipping</th>
                        <th>amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        cart.map((ca, idx)=>{
                            const [,taxItem, priceWithShipping] = getCardAmount(ca);
                            return (
                                <tr key={ca.product_id}>
                                    <th>{idx+1}</th>
                                    <td className=' text-sm w-24 truncate'>{ca.product_title}</td>
                                    <td>{ca.quantity}</td>
                                    <td>$ {ca.price}</td>
                                    <td>$ {taxItem}</td>
                                    <td>$ {ca.shipping_charge}</td>
                                    <td>$ {priceWithShipping}</td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        
                        <td className='text-right font-extrabold
                        ' colSpan={6}>sub Total =  </td>
                        <td className='font-extrabold' colSpan={2}>$ {totals.subTotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        
                        <td className='text-right font-extrabold
                        ' colSpan={6}>shipping cost =  </td>
                        <td className='font-extrabold' colSpan={2}>$ {totals.shipping.toFixed(2)}</td>
                    </tr>
                    <tr>
                        
                        <td className='text-right font-extrabold
                        ' colSpan={6}>tax (5%) =  </td>
                        <td className='font-extrabold' colSpan={2}>$ {totals.tax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        
                        <td className='text-right font-extrabold
                        ' colSpan={6}>grand total =  </td>
                        <td className='font-extrabold' colSpan={2}>$ {totals.grandTotal.toFixed(2)}</td>
                    </tr>
                    </tbody>
                </table>
                {/* purchase handler */}
                <div className='w-full py-3 flex items-center justify-end my-6'>
                    <PurchaseHandler  className={`text-lg py-6 px-7`} />
                </div>
            </div>
        </div>
    );
};

export default Invoice;