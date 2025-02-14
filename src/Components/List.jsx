import React, { useEffect, useState } from 'react';
import { useFetchProductQuery } from '../Hooks/React-Query/useReactQuery';
import CardList from './CardList';
import { fetchcategory } from '../APi/functions/fetchcategory';
import Button from '@mui/material/Button';
import { Select, MenuItem } from '@mui/material';

const List = () => {
    const { data, isLoading, isFetching } = useFetchProductQuery(fetchcategory);

    const [sortedData, setSortedData] = useState([]);
    const [sortOrder, setSortOrder] = useState({ price: 'asc', name: 'A' });
    const [category, setCategory] = useState(""); 

    useEffect(() => {
        if (data) {
            setSortedData([...data]);
        }
    }, [data]);

    const handleSortPrice = () => {
        const newSortOrder = sortOrder.price === 'asc' ? 'desc' : 'asc';
        const sorted = [...sortedData].sort((a, b) =>
            newSortOrder === 'asc' ? a.price - b.price : b.price - a.price
        );
        setSortedData(sorted);
        setSortOrder((prev) => ({ ...prev, price: newSortOrder }));
    };

    const handleSortName = () => {
        const newSortOrder = sortOrder.name === 'A' ? 'Z' : 'A';
        const sorted = [...sortedData].sort((a, b) =>
            newSortOrder === 'A' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        );
        setSortedData(sorted);
        setSortOrder((prev) => ({ ...prev, name: newSortOrder }));
    };

    if (isLoading) return <h1>Loading...</h1>;
    if (isFetching) return <h1>Fetching...</h1>;

    const categoryData = category
        ? sortedData.filter((item) => item.category === category)
        : sortedData;

    const renderlist = categoryData.map(({ id, title, price, category, image, description,rating }) => (
        <CardList key={id} id={id} title={title} price={price} category={category} image={image} description={description} rating={rating} />
    ));

    return (
        <div>
            <div className='sort' style={{marginTop:"50px"}}>
                <Button>Sort by</Button>
                <Select defaultValue="" onChange={(e) => e.target.value === 'price' ? handleSortPrice() : handleSortName()}>
                    <MenuItem value="price">Sort by Price</MenuItem>
                    <MenuItem value="name">Sort by Name</MenuItem>
                </Select>

                <Button>Category</Button>
                <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <MenuItem value="">All Categories</MenuItem>
                    <MenuItem value="men's clothing">Men's Clothing</MenuItem>
                    <MenuItem value="women's clothing">Women's Clothing</MenuItem>
                    <MenuItem value="jewelery">Jewelry</MenuItem>
                    <MenuItem value="electronics">Electronics</MenuItem>
                </Select>
            </div>

            {renderlist}
        </div>
    );
};

export default List;
