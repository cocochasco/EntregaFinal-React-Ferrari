import {
    getFirestore,
    doc,
    updateDoc,
    collection,
    addDoc,
  } from "firebase/firestore";
  
  export const Daturla = () =>  {
    const sendOrder = () => {
      const item = {
        title: "",
        price: "",
        description: "",
        pictureURL: "",
        stock: "",
        id: "",
        categoryId: "",
        
      };
  
      const db = getFirestore();
      const itemCollection = collection(db, "items");
  
      addDoc(itemCollection, item).then(({ id }) => {
        if (id) {
          alert("Su orden: " + id + " ha sido completada!");
        }
      });
    };
  
    const buyer = {
      name: "Avantt",
      phone: 33333,
      email: "fweewefff",
    };
  
    const updateOrder = () => {
      const db = getFirestore();
      const orderDoc = doc(db, "orders", "2FA0wF5sKwj7SG1jG4w7");
      updateDoc(orderDoc, {
        total: 333331,
        cuotas: 5,
        buyer: { ...buyer, phone: 55 },
      });
    };
  
    return (
      <div>
        <button onClick={sendOrder}>ENVIAR ORDEN</button>
        <button onClick={updateOrder}>ACTUALIZAR ORDEN</button>
      </div>
    );
  }
  
