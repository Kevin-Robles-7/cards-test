import { useState } from 'react';
import Home from '../components/home/Home';
import ContentCategory from '../components/contentCategory/ContentCategory';
import ContentDetails from '../components/contentDetails/ContentDetails';

const AppRouter = () => {
    const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

    const handleRouteChange = (route: any) => {
        setCurrentRoute(route);
        window.history.pushState({}, route, route);
    };

    return (
        <div>
            <nav>
                <ul>
                    <li><button onClick={() => handleRouteChange('/')}>Home</button></li>
                    <li><button onClick={() => handleRouteChange('/content-category')}>Content Category</button></li>
                    {/* You can add more buttons for other routes here */}
                </ul>
            </nav>

            {/* Render components based on current route */}
            {currentRoute === '/' && <Home />}
            {currentRoute === '/content-category' && <ContentCategory />}
            {currentRoute.startsWith('/content-details') && <ContentDetails />}
            {/* Add more conditions to render other components */}
        </div>
    );
}

export default AppRouter;










