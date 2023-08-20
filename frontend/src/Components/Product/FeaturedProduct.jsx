import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecommendProducts } from '../../redux/actions/recommendAction'
import ProductCard from '../ProductCard'
import Card from './Card'
import Loader from '../Layout/Loader'

const FeaturedProduct = () => {
  const dispatch = useDispatch()
  // const { productIds } = useSelector(state => state.recommend)
  const { loading, products } = useSelector(state => state.recommendProducts)

  /* useEffect(() => {
    const productIds = ['B01DXHX81O', 'B01B3Q4Q0O']
     const interaction = [
       'B019MDXIXG',
       'B01ADDSL9U',
       'B01B3Q4Q0O',
       'B01DXHX81O',
       'B01FWRXN0Y'
     ]
    dispatch(getRecommendProducts(productIds))
  }, [dispatch]) */

  // const data = [
  //   {
  //     id: 0,
  //     product_id: 'B00O09E33C',
  //     product_title:
  //       'Clogged Pores Natural Cleansing Kit - Vegan Cleanser Face Wash Soap 3.4 oz and Facial Cream 1.7 oz Care - Shea, Olive, Jojoba, Tea Tree & Almond Oils Blend Set',
  //     price: 999,
  //     description:
  //       'Remove tanning- Brace yourself for flawless skin with D-Tan. The tea-tree oil helps in lightening the tan in just one wash. Get spotless and brighter skin in no time.; Instant skin brightening- Get instant results with D-Tan, Tan Removal & Brightening Face Pack. This unique herbal formulation will improve skin fairness & remove tanning instantly. Made up of 100% natural elements- Enriched with ingredients and properties that cleanse your skin deeply without getting harsh. It includes elements like Clove Oil, Beeswax, Eucalyptus Oil, Tea Tree Oil, E-wax, PEG 400, Aloe-vera Extract, Basil Oil, Mint Oil, Glycerin IPM, Stearic Acid, and Distilled Water We care about the environment- No animals were harmed in making this product, we use 100% organic ingredients, we are NABL Certified, FDA approved, paraben-free, and no chemicals are used in the making of Kaina skincare products.',
  //     product_category: 'Jewellery',
  //     rating: 5,
  //     index: 24
  //   },
  //   {
  //     id: 1,
  //     product_id: 'B00DQZ8VF2',
  //     product_title: 'Adidas unisex-adult Terrex Ax4 Gtx Hiking Footwear',
  //     price: 6000,
  //     description:
  //       'Introducing the EZSUPPORT and AEROFOAM technology for enhanced comfort and support during physical activity. The shoe also includes a breathable mesh material to keep your feet cool and dry, and a TPU back support for added stability. Overall, this shoe is designed to provide both comfort and performance for athletes and fitness enthusiasts.',
  //     product_category: 'Shoes',
  //     rating: 5,
  //     index: 25
  //   },
  //   {
  //     id: 2,
  //     product_id: 'B005FGQIL4',
  //     product_title: 'Amazon.com Gift Cards, Pack of 3 (Various Designs)',
  //     price: 6000,
  //     description:
  //       'Send some Instant cheer: With Instant Delivery, purchasing a Gift Card is not only stress-free, it also allows the recipient to carefully select their own gift from a choice of millions of items.Last minute Gifting hustle: Even if it’s a last-minute gifting hustle, with this e-gift card you are giving them the gift of choice, from your heart to their cart.You can make this Gift Card personal by choosing a specific design and adding your personal message with the Gift card',
  //     product_category: 'Gift Card',
  //     rating: 5,
  //     index: 26
  //   }
  // ]
  return (
    <>
      <section className='h-full w-full my-10'>
        {loading === false ? (
          <div className='w-[100%] max-w-[1200px] mx-auto'>
            <h3 className='font-bold text-[1.4rem] '>
              Showing Recommended Results from All categories
            </h3>
            <div className='grid grid-cols-3 gap-5'>
              {/* {products &&
              products.map(product => (
                <Card key={product._id} product={product} />
              ))} */}
              {products &&
                products.map(product => (
                  <Card key={product.key} product={product} />
                ))}
            </div>
          </div>
        ) : (
          <Loader />
        )}

        {/*  <div className='w-[100%] max-w-[1200px] mx-auto'>
          <h3 className='font-bold text-[1.4rem] '>Recommended Product</h3>

          <div className='grid grid-cols-3 gap-5'>
            {products &&
              products.map(product => (
                <Card key={product._id} product={product} />
              ))}
          </div>
        </div> */}
      </section>
    </>
  )
}

export default FeaturedProduct
