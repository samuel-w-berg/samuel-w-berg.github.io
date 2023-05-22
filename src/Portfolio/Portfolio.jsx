import React from 'react';
import { Card, Image } from 'semantic-ui-react';

export default function Portfolio() {
    return (
        <div className="portfolio-section">
            <h2>My Projects</h2>
            <Card.Group>
                <Card>
                    <Image src='https://i.imgur.com/DkcQ2rE.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Connect Four</Card.Header>
                        <Card.Description>
                            A classic game of Connect Four built with JavaScript.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="https://github.com/samuel-w-berg/connect-4">View on GitHub</a>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src='https://i.imgur.com/wQeJbMH.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Java-Ripped</Card.Header>
                        <Card.Description>
                            A workout tracker built with JavaScript.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="https://github.com/samuel-w-berg/Java-Ripped">View on GitHub</a>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src='https://i.imgur.com/xFQaCL6.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>BarFly</Card.Header>
                        <Card.Description>
                            A social app designed for bar enthusiasts built with Python.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="https://github.com/samuel-w-berg/BarFly">View on GitHub</a>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src='https://i.imgur.com/fMLQra7.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>BS Job Hunter</Card.Header>
                        <Card.Description>
                            A Job Search app built with MongoDB, Express, React, and Node.js.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="https://github.com/samuel-w-berg/Job-Tracker-WIP">View on GitHub</a>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
}
        