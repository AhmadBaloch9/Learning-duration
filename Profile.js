import React, { useState } from 'react'


export default function Profile() {
    const [loggined, setloggined] = useState(2);

    return (
        <div style={{ backgroundColor: `gold`, textAlign: `center`, padding: `30px` }}>
            {
                loggined==1?<h1>Profile User 1</h1>:loggined==2?<h1>Welcome User2 </h1>:<h1>Wellcome Guest</h1>
            }
        </div>
    )
}

