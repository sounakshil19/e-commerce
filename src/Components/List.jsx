import React from 'react'
import { useFetchProductQuery } from '../Hooks/React-Query/useReactQuery'
import CardList from './CardList';

const List = () => {
    const {data,isLoading,isFetching}= useFetchProductQuery()
    console.log(data);
    

    if(isLoading){
        return <div>loading...</div>
    }
    if(isFetching){
        return <div>Fetching...</div>
    }

    const renderlist = data?.map((item)=>{
      const {id,title,price,category,image,description} = item
        return (
            <CardList id={id}title={title} price ={price} category ={category}  image={image} description={description}/>
        )
    })

  return (
    <div>
  {renderlist}
    </div>
  )
}

export default List