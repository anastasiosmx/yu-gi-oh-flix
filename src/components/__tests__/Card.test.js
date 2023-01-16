import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Card } from '../Body/Card/Card';

afterEach(() => {
    cleanup();
})

test('should render the card name', ()=>{
    render(<Card id={1} name={"Test Name"} description={"This is a test description"} race={"Test race"} type={"Test type"}/>);
    const cardName = screen.getByTestId("card-name");

    expect(cardName).toHaveTextContent("Test Name");
})

test('should render the card description', ()=>{
    render(<Card id={1} name={"Test Name"} description={"This is a test description"} race={"Test race"} type={"Test type"}/>);
    const cardDescription = screen.getByTestId("card-details");

    expect(cardDescription).toHaveTextContent("This is a test description");
})

test('should render the card race', ()=>{
    render(<Card id={1} name={"Test Name"} description={"This is a test description"} race={"Test race"} type={"Test type"}/>);
    const cardRace = screen.getByTestId("card-details");

    expect(cardRace).toHaveTextContent("Test race");
})

test('should render the card type', ()=>{
    render(<Card id={1} name={"Test Name"} description={"This is a test description"} race={"Test race"} type={"Test type"}/>);
    const cardType = screen.getByTestId("card-details");

    expect(cardType).toHaveTextContent("Test type");
})

test('should render the card image', ()=>{
    render(<Card id={1} name={"Test Name"} description={"This is a test description"} race={"Test race"} type={"Test type"}/>);
    const cardImage = screen.getByTestId("card-image");

    expect(cardImage).toBeInTheDocument();
    expect(cardImage).toContainHTML('img');
})