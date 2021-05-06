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
                    CodeChef VIT Bhopal Chapter is a programming club run and maintained by the official chapter leaders and mentored by CodeChef. The chapter drives to make learning competitive programming accessible to students.    
                    </Content>
                    </Para>

                    
                    <Para>
                    <Title>About Vision</Title>
                    <Content>
                    CodeChef VIT Bhopal Chapter believes in providing everyone with a community of dedicated programmers to build a robust Competitive Programming culture on our campus. The chapter aims to make the college's coding culture the very best culture. The community emphasis to smooth your coding skills, data structures and algorithmic knowledge.
                    </Content>
                    </Para>
                </About>

                <Image>
                    <img src="/imageasset/About-us.png" width="auto" height="100%"></img>
                </Image>
            </ECard>
        </Container>
    )
}
