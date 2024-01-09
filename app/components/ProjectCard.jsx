import React from 'react';

const ProjectCard = ({ imgUrl, title, description}) => {
    return (
        <div>
                <div 
                className="h-52 md:h-72"
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}>
                <div classNamme="text-white">
                    <h5>{title}</h5>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;