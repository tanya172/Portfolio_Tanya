import { Container, Row } from "react-bootstrap"

export const Banner = () => {
    return(
        <section className="banner" id ="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Dive into my Portfolio</span>
                        <h1>{`Greeting, I'm Tanya`}
                        <span className="wrap">Student</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}