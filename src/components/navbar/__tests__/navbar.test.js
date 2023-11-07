import { Navbar } from "../navbar";
import { render, screen } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom'

describe('the Navbar component',() => {
    it('Renders links correctly', () => {
        render(<Router><Navbar/></Router>);
        
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('Cart')).toBeInTheDocument()
        
    });
})
