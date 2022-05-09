import React from 'react'
import './ClientPage.css';
const Cards = ({name,pic,city,email}) => {
    return (
        <div className="project-card">
            <div className="image-container">
                <a target='_blank' rel='noreferrer'  className="project-external-link">
                    <img src={pic} alt="project" className="project-image"/>
                </a>
            </div>
            <div className="project-details-container">
                <h2 className="project-heading">{name}</h2>
                <h2 className="project-heading">{email}</h2>
                <p className="project-details">{city}</p>
            </div>
        </div>
    )
}
export default Cards;