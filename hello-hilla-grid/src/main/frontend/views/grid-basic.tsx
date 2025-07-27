import { useEffect } from 'react';
import { useSignal } from '@vaadin/hilla-react-signals';
import { Grid } from '@vaadin/react-components/Grid.js';
import { GridColumn } from '@vaadin/react-components/GridColumn.js';
import type Product from 'Frontend/generated/dev/ime/model/Product';
import { ProductController } from 'Frontend/generated/endpoints';

export default function MainView() {
	
	const items = useSignal<Product[]>([]);
	
	 useEffect(() => {
	   ProductController.getAll().then(( data ) => {
		items.value = data;
	   });
	 }, []);

	 return (
	   <Grid items={items.value}>
	     <GridColumn path="productId" />
	     <GridColumn path="name" />
	     <GridColumn path="category" />
	     <GridColumn path="price" />
		 <GridColumn path="dateAdded" />
	   </Grid>
	 );	
}
