const API = "https://api.themoviedb.org/3";

export function get(path) {
    
    return fetch(API + path, {
        headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmFmNGUxNWJmNmQ2NThhMDdmOTI1ZTEyZWE4ZTQxYyIsInN1YiI6IjViNTIzNTgwOTI1MTQxMTJiMzAxODdjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2a6Z7-ntr4E6tBtSnXgrkAlWmye6MKXT9CF9H6L2wh8",
            "Content-Type": "application/json; charset=utf-8",
        },
    })
    .then(result => result.json());
   
}
