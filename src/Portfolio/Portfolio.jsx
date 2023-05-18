import React from 'react';
import { Card } from 'semantic-ui-react';

export default function Portfolio() {
    return (
        <div className="portfolio-section">
            <h2>My Projects</h2>
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>Connect Four</Card.Header>
                        <Card.Description>
                            A classic game of Connect Four built with React.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="#">View on GitHub</a>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Card.Header>Java-Ripped</Card.Header>
                        <Card.Description>
                            A workout tracker built with JavaScript.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="#">View on GitHub</a>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Card.Header>BarFly</Card.Header>
                        <Card.Description>
                            A social app designed for bar enthusiasts built with Python.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="#">View on GitHub</a>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
}
        