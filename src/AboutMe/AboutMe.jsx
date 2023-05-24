import {Card, Image, Icon } from 'semantic-ui-react';

export default function AboutMe() {
    return (
        <div className="about-section">
        <div className="about-me">
            <h1>About Me</h1>
        </div>
        <div className="about-me-card">
                <Card className="wide-card">
                    <div className="card-content-flex">
                        <Image src='https://imgur.com/v9tfIgS.jpeg' wrapped style={{maxWidth: '300px'}} />
                        <div className="card-content-flex">
                        <Card.Content >
                            <Card.Header>Sam Berg</Card.Header>
                            <Card.Meta>Software Engineer | Geologist | Officiant</Card.Meta>
                            <Card.Description>
                                I am an enthusiastic, highly motivated Software Engineer with a passion for practical applications and cutting edge technology. My previous experience as an environmental scientist taught me the value of breaking down a large problem into manageable pieces, and my experience as a tech salesman honed my communication skills and strong customer focus, which allows me to understand and meet the needs of clients. I hope to bring my strengths to the development of useful applications for the average consumer and everyday life. <br/><br/>
                                When I'm not coding, I enjoy reading, exercising, spending time outside, and enjoying life with my fiancee, friends and family. In addition to my passion for technology, I am also a licensed wedding officiant and have performed several weddings for friends and family.<br/><br/>
                                Please don't hesitate to reach out! You can find my contact information at the bottom of the page.
                            </Card.Description>
                        </Card.Content>
                        </div>
                    </div>
                </Card>
            </div>
        </div> 
    )
}
