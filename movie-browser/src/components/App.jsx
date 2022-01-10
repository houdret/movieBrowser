import React from "react";
import "./styles/App.scss";
import { BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import MovieDetails from "../pages/MovieDetails";
import { LandingPage } from "../pages/LandingPage";

export function App() {
    return (
        <div  className="App">       
            <BrowserRouter>
                <header>
                    <Link to="/" style={{ textDecoration: 'none' }} >
                        <h1 className="title">Movies</h1> 
                    </Link>    
                </header>
                <main>
                    <Routes>
                        <Route path="/movies/:movieId" element={<MovieDetails />} />
                        <Route path="/" element={<LandingPage />} />
                        <Route path="*" element={<Navigate replace to="/" />} />
                        
                    </Routes>
                </main>
            
            </BrowserRouter>
        </div>
    );
}
