import React from 'react';
import { Route, Routes} from 'react-router-dom'
import UserResults from "../users/UserResults";

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<UserResults />} />
            <Route path='/*' element={<>NotFoundPage</>} />
        </Routes>
    );
};

export default Main;
