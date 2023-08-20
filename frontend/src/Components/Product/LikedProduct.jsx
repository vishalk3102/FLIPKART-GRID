import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card'
import Loader from '../Layout/Loader'

// const data = [
//   {
//     id: 0,
//     product_id: 'B000NXGR9M',
//     product_title: 'DISHIS 22K/18K/14K Yellow Gold and Zircon Ring for Women',
//     price: 1000,
//     description:
//       'This Ring made of 14K (585) Yellow Gold.The Ring is BIS Hallmarked. Bis Hallmark Is Not A Separate Certificate, It Is An Inscription Made On The Product',
//     product_category: 'Jewellery',
//     rating: 5,
//     index: 21
//   },
//   {
//     id: 1,
//     product_id: 'B00GU82FQS',
//     product_title: '925 Sterling Silver Celtic Knot Eternity Band Ring',
//     price: 3343,
//     description:
//       'This sterling silver band ring features celtc knot design going to the way around it. Rhodium plating to prevent tarnishing. The width of the ring is approximately 4mm. The mixture that is created with Swiss technology also makes our sterling silver extremely hard like 14k gold rings. Unlike regular sterling silver rings that tend to bend out of round, our rings retain the perfectly round shape under normal daily activities. It is virtually a carefree wedding ring. High quality finish gives it the elegance of any fine jewelry',
//     product_category: 'Jewellery',
//     rating: 4,
//     index: 22
//   },
//   {
//     id: 2,
//     product_id: 'B004POJT5O',
//     product_title:
//       'Sahiba Gems Exclusive 925 Sterling Silver 6 Ball Beads and Black Cotton Thread Nazariya Bracelet for Kids (Safe for Babies)',
//     price: 200,
//     description:
//       "Sahiba Gems brings to you this exclusive babies nazariya Kada / Bangle . You can combine this with any outfit to complete your chic look. Bracelet comes with adjuster chain so as to fit and give mesmerizing look to your babies hand.Baby Bracelet is one of the most beautiful ornaments for babies. Suits to wear in any occasion like Daily, Party ,and Festival. A Perfect Gift for you Beloved One's -Babies (Boy or Girl) . Excellent Gift for Birthday , Naming Ceremony and Festivals celebrations.",
//     product_category: 'Jewellery',
//     rating: 4,
//     index: 23
//   }
// ]
const LikedProduct = () => {
  const dispatch = useDispatch()
  const { loading, products } = useSelector(state => state.recommendCategory)

  return (
    <>
      <section className='h-full w-full my-10'>
        {loading === false ? (
          <div className='w-[100%] max-w-[1200px] mx-auto'>
            <h3 className='font-bold text-[1.4rem] '>Product You may Like</h3>

            <div className='grid grid-cols-3 gap-5'>
              {products &&
                products.map(product => (
                  <Card key={product.key} product={product} />
                ))}
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </section>
    </>
  )
}

export default LikedProduct
