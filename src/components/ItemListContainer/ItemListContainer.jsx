import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';
//import { getProducts } from '../../data/asyncMock';
import db from '../../services/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

  const { categoryId } = useParams()

  const [items, setItems] = useState() //State donde grabo los items
  const [load, setLoad] = useState(true) //Flag que me permite mostrar un spinner mientras cargo los datos

  // useEffect(() => {
  //   getProducts(categoryId)
  //     .then(productos => {
  //       setItems(productos)
  //       setLoad(false)
  //     })
  //     .catch(err =>
  //       console.warn(err)
  //     )
  // }, [categoryId])


  // const getDataCategory = async (categoria) => {
  //   try {
  //     setLoad(true)
  //     const document = query(collection(db, "Items"), where("category", "==", categoria))
  //     const col = await getDocs(document)
  //     console.log("col.docs", col.docs)
  //     const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
  //     setItems(result)
  //     setLoad(false)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const getData = async (categoria) => {
    try {
      setLoad(true)
      const document = categoria ? query(collection(db, "Items"), where("category", "==", categoria))
        : collection(db, "Items")
      const col = await getDocs(document)
      const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
      setItems(result)
      setLoad(false)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getData(categoryId)
  }, [categoryId])



  return (
    <>
      {load ? <Spinner /> : <ItemList data={items} />}
    </>
  );
};

export default ItemListContainer;
