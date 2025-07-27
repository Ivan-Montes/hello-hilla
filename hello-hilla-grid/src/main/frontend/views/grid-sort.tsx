import { useEffect } from 'react';
import { useSignal } from '@vaadin/hilla-react-signals';
import { Grid } from '@vaadin/react-components/Grid.js';
import { GridSortColumn } from '@vaadin/react-components/GridSortColumn.js';
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
		     <GridSortColumn path="productId" />
		     <GridSortColumn path="name" />
		     <GridSortColumn path="category" />
		     <GridSortColumn path="price" />
			 <GridSortColumn path="dateAdded" />
			 <GridSortColumn path="supplier.supplierId" />
			 <GridSortColumn path="supplier.supplierName" />
			 <GridSortColumn path="supplier.headquarterCity" />
		   </Grid>
		 );	
}
