import React from 'react';
import{Card,About,Image,TitleImg} from './styles';
export default function events_home() {
    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center',margin:'1rem 2rem',marginTop:'3rem'}}>
            <TitleImg>
            <img src="/events-heading.png" width="100%" height="auto"></img>
            </TitleImg>
            <Card>
                <About>

                </About>

                <Image>
                    <img src="/About-us.png" height="400px"></img>
                </Image>
            </Card>
        </div>
    )
}
