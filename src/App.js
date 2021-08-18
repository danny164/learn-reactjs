import CounterFeature from 'features/Counter';
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import productApi from './api/productApi';
import Header from './components/Header';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
    useEffect(() => {
        const fetchProducts = async () => {
            const params = {
                _limit: 10,
            };
            const productList = await productApi.getAll(params);
            console.log(productList);
        };

        fetchProducts();
    }, []);

    return (
        <div className="App">
            <Header />

            <Route path="/" component={CounterFeature} />

            <Route path="/todos" component={TodoFeature} />
            <Route path="/albums" component={AlbumFeature} />

            {/* <Debounce /> */}

            {/* <TodoFeature />
            <AlbumFeature /> */}
        </div>
    );
}

export default App;
