import React, { useState, useContext } from 'react';
import firebase from '../utils/firebaseConfig';
import { UidContext } from "./UidContext";


const UpdateDelete = ({item} ) => {
    const [update, setUpdate] = useState(false);
    const [authorUpdate, setAuthorUpdate] = useState(null);
    const [textUpdate, setTextUpdate] = useState(null);

    const uid = useContext(UidContext); 
    const authorCheck = () => {
        if(item.uid === uid) {
            return true;
        }else {
            return false;
        }
    };
    authorCheck();

    const upDateItem = () => {
        let quote = firebase.database().ref("quotesDB").child(item.id);
        if(authorUpdate !== null ) {
            quote.update({
                author: authorUpdate
            });
        }
        if(textUpdate !== null ) {
            quote.update({
                text: textUpdate
            });
        }
        setUpdate(false)
    }
    const deleteItem = () => {
        let quote = firebase.database().ref("quotesDB").child(item.id);
        quote.remove();
    }

    return (
        <li>
            {update === false && (
                <>
                <div className="item-container">
                    <p>{item.author}</p>
                    <h6>{item.text}</h6>
                </div>
                {authorCheck() &&
                    <div className="button-container">
                        <button onClick={()=> setUpdate(!update)}>Validate Update</button>
                        <button onClick={()=> setUpdate(deleteItem)}>Delete</button>
                    </div>
                 }
                </>
                )
            }
            {update && (
                <div className="item-container-update">
                    <input 
                        type="text"
                        defaultValue={item.author}
                        onChange={ (e) => setAuthorUpdate(e.target.value)}
                    />
                    <textarea 
                        defaultValue={item.text}
                        onChange={ (e) => setTextUpdate(e.target.value)}
                    />
                    <button onClick={upDateItem}>Update</button>
                </div>
            )}
        </li>
    );
};

export default UpdateDelete;