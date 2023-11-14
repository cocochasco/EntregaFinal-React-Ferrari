import { Item } from "./Item"

import Container from 'react-bootstrap/Container';

export const ItemList = ({ item, loading }) => {
    return(
        <Container className="d-flex flex-wrap mt-3 justify-content-center " >
            {loading ? (
                <div>Loading..</div>
            ) : (
                item.map(item => <Item key={item.key} item={item} /> )
                        
            )}
        </Container >   
    )
}
