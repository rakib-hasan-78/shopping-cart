import React from 'react';
import { useProduct } from '../../hooks/CustomContext/CustomContext';
import SelectedItems from '../SelectedItems/SelectedItems';

const NavProduct = () => {
    const {selectedContent , cart, wishlist} = useProduct()
    return (
        <div className='w-6/12 fixed z-40 py-5 top-16 right-18 bg-violet-800/40 backdrop-blur-md rounded-2xl border border-white/20 text-white shadow-lg
  overflow-y-auto overflow-x-hidden max-h-[80vh] flex items-center flex-col space-y-1'>
          {
            selectedContent==='cart'&&(
              cart?.map(ca=>(
                <SelectedItems key={ca.product_id} item={ca} selectedContent={selectedContent} variant={'nav'}/>
              ))
            )
          }
        </div>
    );
};

export default NavProduct; 