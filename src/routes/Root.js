import {Outlet} from "react-router-dom";

import Header from "../components/Header";

const Root = () => {
    return (
        <>
        <body>
        <Header />
        <Outlet />
        </body>
        </>
    )
};

export default Root