import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import  Skeleton  from 'react-loading-skeleton';


const Products = ()=> {

    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {

        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://fakestoreapi.com/products/${id}`);
            setProducts(await response.json());
            setLoading(false);
        }
      getProduct();
    }, []);

    const Loading = ()=>{
        return(
            <>
             <div className="col-md-6">
                 <Skeleton height={400}/>
             </div>
             
             <div className="col-md-6 " style={{lineHeight:2}}>
                 <Skeleton height={50} width={300}/>
                 <Skeleton height={75} />
                 <Skeleton height={25} width={300}/>
                 <Skeleton height={50} />
                 <Skeleton height={150} />
                 <Skeleton height={50} width={300}/>
                 <Skeleton height={50} width={300} style={{marginLeft:6}}/>
             </div>
            </>
        )
    }
    
    const ShowProducts = () => {
        return(
            <>
              <div className="col-md-6 d-flex">
                  <img src={products.image} alt={products.title} height='400px' width='400px' />
              </div>
              <div className="col-md-6">
                  <h4 className="text-uppercase text-black-50">
                      {products.category}
                  </h4>
                  <h1 className="display-5">{products.title}</h1>
                  <p className="lead fw-bolder">Rating {products.rating && products.rating.rate}
                  <i className="fa fa-star"></i>
                  </p>
                  <h3 className="display-6 fw-bold my-4">
                      $ {products.price}
                      </h3>
                      <p className='lead'>{products.description}</p>
                      <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(products)}> Add to cart</button>
                      
                      <NavLink to="/cart" className="btn btn-dark mx-2 py-2 px-3"> Go to cart</NavLink>
                 
              </div>
            </>
        );
    }
    
  return (
    <div>
        <div className="container py-5">
            <div className="row py-4">
                {loading ? <Loading/> : <ShowProducts/>}
                
            </div>
        </div>
         
    </div>
  );
  
  
}

export default Products;