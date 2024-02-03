import './BestSellingBook.css'
import TitileTypeTwo from '../../UI/TitileTypeTwo/TitileTypeTwo'
import TreeShape from '../../assets/treeShape.png'
import { sellingBooksData } from '../../Data/Data'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";

export default function BestSellingBook(){
    return(
        <section className='BestSellingBook'>
            <div className="treeShape">
                <img src={TreeShape} alt="" />
            </div>
                {
                    sellingBooksData.map(({img, infoTitle, infoTitleTop, desc, price, shopbtnLink })=>{
                        return(
                            <div className="container bestselling-container">

                                <div className="selling-book-left">
                                    <img src={img} alt="" />
                                </div>

                                <div className="selling-book-right">
                                    <TitileTypeTwo Title={'Best Selling Book'} 
                                    className="sellingBookTitle"/>
                                    
                                    <div><small>{infoTitleTop}</small></div>
                                    <h3>{infoTitle}</h3>
                                    <p>{desc}</p>
                                    <h5><span>{price}</span></h5>
                                    <Link to={shopbtnLink} className='btn'>
                                    {/* <Link to={'/shop'} className='btn'> */}
                                        <small>Buy it now</small>
                                        <BsArrowRight />
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
        </section>
    )
}