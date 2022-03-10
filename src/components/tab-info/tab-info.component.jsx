import React from 'react';


const TabInfo = ({data}) => {
    return(
        <>
            {data ? (
                <div className="tab-info">
                    <div className="tab-info-desc">
                        {data.desc}    
                    </div>
                    <div className="tab-info-img">
                        {data.images.map((img , index)=> (
                            <img src={img} alt="" key={index} />
                        ))}
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default TabInfo;