import React from 'react'
import { FaChromecast } from 'react-icons/fa'
import {Container,ECard,Title,Para,Content,Image,About} from './styles'
export default function AboutHome() {
    return (
        <Container>
            <ECard>
                <About>
                    <Para>
                    <Title>About Us</Title>
                    <Content>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Content>
                    </Para>

                    
                    <Para>
                    <Title>About Our Goals</Title>
                    <Content>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Content>
                    </Para>
                </About>

                <Image>
                    <img src="/About-us.png" width="auto" height="100%"></img>
                </Image>
            </ECard>
        </Container>
    )
}
