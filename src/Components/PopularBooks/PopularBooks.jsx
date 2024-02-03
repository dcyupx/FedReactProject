import './PopularBooks.css'
import TitileTypeOne from '../../UI/TitileTypeOne/TitileTypeOne'
import { galleryData } from '../../Data/Data'
import { useState } from 'react';


export default function PopularBooks(){

    const [activeButton, setActiveButton] = useState('all');
    const handleFilterChange =(category)=> {
        setActiveButton(category);
    }

    const filterItems = activeButton === 'all' ? galleryData : galleryData.filter((item)=> item.category === activeButton);

    return(
        <section className='PopularBooks'>
            <div className="container popularbooks-container">
                <TitileTypeOne TitleTop={'Some Top-Notch items'} Title={'Popular Books'}
                className={'popularbooks-title'}/>

                <div className="filter-buttons">
                    <button
                    className={activeButton === 'all' ? 'active' : ''}
                    onClick={()=> handleFilterChange('all')}>
                        All
                    </button>

                    <button
                    className={activeButton === 'Romance' ? 'active' : ''}
                    onClick={()=> handleFilterChange('Romance')}>
                        Romance
                    </button>

                    <button 
                    className={activeButton === 'Technology' ? 'active' : ''}
                    onClick={()=> handleFilterChange('Technology')}>
                        Technology
                    </button>

                    <button 
                    className={activeButton === 'Adventure' ? 'active' : ''}
                    onClick={()=> handleFilterChange('Adventure')}>
                        Adventure
                    </button>

                    <button 
                    className={activeButton === 'Mystery' ? 'active' : ''}
                    onClick={()=> handleFilterChange('Mystery')}>
                        Mystery
                    </button>

                    <button 
                    className={activeButton === 'Thriller' ? 'active' : ''}
                    onClick={()=> handleFilterChange('Thriller')}>
                        Thriller
                    </button>

                    <button 
                    className={activeButton === 'Horror' ? 'active' : ''}
                    onClick={()=> handleFilterChange('Horror')}>
                        Horror
                    </button>
                </div>

                <div className="gallery">
                    {
                        filterItems.map(({name, writer, price, image}, index)=> {
                            return(
                                <div className="gallery-item" key={index}>
                                    <div className="popularbook-image">
                                        <img src={image} alt="" />
                                    </div>
                                    <div className="popularbook-info">
                                        <h4>{name}</h4>
                                        <div><small>{writer}</small></div>
                                        <h5><span>{price}</span></h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}