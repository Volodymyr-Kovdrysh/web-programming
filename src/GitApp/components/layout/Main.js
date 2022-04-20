import React from 'react';
import { Route, Routes} from 'react-router-dom'
import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";

const Main = () => {
    return (
        <Routes>
            <Route path='/'
                   element={<div className="container mx-auto">
                       <UserSearch />
            <UserResults />
            </div>} />
            <Route path='/*' element={<>NotFoundPage</>} />
        </Routes>
    );
};

export default Main;
