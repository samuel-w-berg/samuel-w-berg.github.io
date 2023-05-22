import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default function Skills() {
    return (
        <div className="skills-section">
            <h2>My Skills</h2>
            <Grid divided="vertically" style={{ margin: '0 auto' }}>
                <Grid.Row columns={3}>
                    <Grid.Column style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Image size='tiny' src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' />
                        <p>JavaScript</p>
                    </Grid.Column>
                    <Grid.Column style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Image size='tiny' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' />
                        <p>CSS</p>
                    </Grid.Column>
                    <Grid.Column style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Image size='tiny' src='https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png' />
                        <p>HTML</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Image size='tiny' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' />
                        <p>Python</p>
                    </Grid.Column>
                    <Grid.Column style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Image size='tiny' src='https://download.logo.wine/logo/Django_(web_framework)/Django_(web_framework)-Logo.wine.png' />
                        <p>Django</p>
                    </Grid.Column>
                    <Grid.Column style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Image size='tiny' src='https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg' />
                        <p>MongoDB</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Image size='tiny' src='https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' />
                        <p>Express.Js</p>
                    </Grid.Column>
                    <Grid.Column style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Image size='tiny' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' />
                        <p>React</p>
                    </Grid.Column>
                    <Grid.Column style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Image size='tiny' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png' />
                        <p>Node.Js</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>        
        </div>
    );
}
