import React, { useState } from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageheadercontent";
import ImageOne from '../../images/image1.webp'
import ImageTwo from '../../images/image2.jpg'
import "./styles.scss"

const portfolioData = [
    {
        id: 2,
        name: '',
        image: ImageOne,
        link: ""
    },
    {
        id: 3,
        name: '',
        image: ImageTwo,
        link: ""
    }
]

const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Developement'
    },
    {
        filterId: 3,
        label: 'Design'
    }
]

const Portfolio = () => {

    const [filteredvalue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleFilter(currentId) {
        setFilteredValue(currentId)
    };

    function handleHover(index) {
        setHoveredValue(index)
    };

    console.log('====================================');
    console.log(hoveredValue);
    console.log('====================================');

    const filteredItems = filteredvalue === 1 ? portfolioData :
        portfolioData.filter(item => item.id === filteredvalue)

    console.log(filteredItems);
    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio_content">
                <ul className="portfolio_content_filter">
                    {
                        filterData.map(item => (
                            <li className={item.filterId === filteredvalue ? 'active' : ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>
                                {
                                    item.label
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio_content_cards">
                    {
                        filteredItems.map((item,index) => (
                            <div className="portfolio_content_cards_item" key={`cardItem${item.name.trim()}`} onMouseEnter={()=>handleHover(index)} onMouseLeave={()=>handleHover(null)}>
                                <div className="portfolio_content_cards_item_img-wrapper">
                                    <a>
                                        <img alt="dummy data" src={item.image} />
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index===hoveredValue&&(
                                            <div>
                                                <p>{item.name}</p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Portfolio;