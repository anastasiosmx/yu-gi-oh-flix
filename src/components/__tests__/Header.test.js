import { render, screen, cleanup } from '@testing-library/react'
import { Header } from '../Header/Header';
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup();
})

test('should render Header component', ()=>{
    render(<Header />);
    const headerElement = screen.getByTestId('header-1');

    expect(headerElement).toBeInTheDocument();
})

test('should render the image inside the header component', ()=>{
    render(<Header />);
    const headerElement = screen.getByTestId('header-1');

    expect(headerElement).toContainHTML('img');
})

test('should render the input field inside the header component', ()=>{
    render(<Header />);
    const headerElement = screen.getByTestId('header-1');

    expect(headerElement).toContainHTML('input');
})

test('should render the filters inside the header component', ()=>{
    render(<Header />);
    const headerFiltersElement = screen.getByTestId('header-2');

    expect(headerFiltersElement).toBeInTheDocument();
})

test('should render the "Free" filter inside the header component', ()=>{
    render(<Header />);
    const headerFiltersElement = screen.getByTestId('header-2');

    expect(headerFiltersElement).toHaveTextContent("Free");
})

test('should render the "Name" filter inside the header component', ()=>{
    render(<Header />);
    const headerFiltersElement = screen.getByTestId('header-2');

    expect(headerFiltersElement).toHaveTextContent("Name");
})

test('should render the "Type" filter inside the header component', ()=>{
    render(<Header />);
    const headerFiltersElement = screen.getByTestId('header-2');

    expect(headerFiltersElement).toHaveTextContent("Type");
})