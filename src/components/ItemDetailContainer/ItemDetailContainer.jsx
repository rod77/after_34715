import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../services/firebase';
// import { getProductById } from '../../data/asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState()   //State donde grabo el item  segun el id
    const [load, setLoad] = useState(true) //Flag que me permite mostrar un spinner mientras cargo los datos


    // useEffect(() => {
    //     getProductById(id)
    //         .then(productos => {
    //             setSelectedItem(productos)
    //             setLoad(false)
    //         })
    //         .catch(err =>
    //             console.warn(err)
    //         )
    // }, [id])

    const getSelected = async (idItem) => {
        try {
            const document = doc(db, "Items", idItem)
            const response = await getDoc(document)
            const result = { id: response.id, ...response.data() }
            setSelectedItem(result)
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSelected(id)
    }, [id])




    return (
        <>
            {load ? <Spinner /> : <ItemDetail item={selectedItem} />}
        </>
    )
}

export default ItemDetailContainer