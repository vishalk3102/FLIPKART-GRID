import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors, getProduct } from '../../redux/actions/productAction'
import ProductCard from '../Home/ProductCard'
import { productListData } from '../data'
import { Slider } from '@material-tailwind/react'
import { toast } from 'react-hot-toast'

const categories = [
  'Apparel',
  'Jewellery',
  'Luggage',
  'Watches',
  'Shoes',
  'Beauty',
  'Gift Card'
]

const Products = ({ match }) => {
  const params = useParams()
  const dispatch = useDispatch()

  const [price, setPrice] = useState([0, 25000])
  const [category, setCategory] = useState('')
  const [ratings, setRatings] = useState(0)

  const { loading, error, products } = useSelector(state => state.products)

  const keyword = params.keyword

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice)
    console.log(price)
  }

  const groupedProducts = categories.reduce((groups, category) => {
    groups[category] = products.filter(
      product => product.product_category === category
    )
    return groups
  }, {})

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearErrors())
    }
    // dispatch(getProduct())
    dispatch(getProduct(keyword))
  }, [category, dispatch, error, keyword])

  return (
    <>
      <section id='products' className='h-full w-full my-20'>
        <div className='grid grid-cols-12'>
          <div className='col-span-2 h-[100%] w-[100%]'>
            <div className='flex flex-col justify-center items-center py-10'>
              <div className='w-[90%] mx-auto mt-5'>
                <h5 className='text-[1rem] font-bold'>Price</h5>
                <div className='w-[100%] mx-auto p-2 flex justify-center items-center my-2'>
                  {' '}
                  <Slider
                    defaultValue={50}
                    value={price}
                    onChange={priceHandler}
                  />
                </div>
              </div>
              <div className='w-[90%]  mx-auto mt-5'>
                <h5 className='text-[1rem] font-bold'>Category</h5>
                <div className='ml-3 inline-block'>
                  <ul className='categoryBox'>
                    {categories.map(category => (
                      <li
                        className='text-[0.8rem] text-normal p-[4px] hover:cursor-pointer'
                        key={category}
                        onClick={() => setCategory(category)}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='w-[90%] mx-auto mt-5'>
                <h5 className='text-[1rem] font-bold'>Rating</h5>
                <div className='w-[100%] mx-auto p-2 flex justify-center items-center my-2'>
                  {' '}
                  <Slider
                    defaultValue={50}
                    value={ratings}
                    onChange={(e, newRating) => {
                      setRatings(newRating)
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-10 h-[100%] w-[100%]'>
            {/*   <div className='grid grid-cols-3  '>
              {products &&
                products.map(product => (
                  <div className='col-span-1'>
                    <ProductCard key={product._id} product={product} />
                  </div>
                ))}
            </div> */}

            {categories.map(category => {
              return (
                <>
                  <div className='ml-5 my-5'>
                    <h2 className='text-[1.4rem] font-bold capitalize p-2'>
                      {category}
                    </h2>
                    <div className='grid grid-cols-3  '>
                      {groupedProducts[category].map(product => (
                        <div className='col-span-1'>
                          <ProductCard key={product._id} product={product} />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
