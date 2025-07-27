import { useEffect } from 'react';
import { useSignal } from '@vaadin/hilla-react-signals';
import { Grid } from '@vaadin/react-components/Grid.js';
import { GridFilterColumn } from '@vaadin/react-components/GridFilterColumn.js';
import type Product from 'Frontend/generated/dev/ime/model/Product';
import { ProductController } from 'Frontend/generated/endpoints';

export default function MainView() {

	const items = useSignal<Product[]>([]);

	useEffect(() => {
		ProductController.getAll().then((data) => {
			items.value = data;
		});
	}, []);

	return (
		<Grid
			items={items.value}
			theme="row-stripes"
			className="h-screen"
		>
			<GridFilterColumn path="productId" />
			<GridFilterColumn path="name" />
			<GridFilterColumn path="category" />
			<GridFilterColumn path="price" />
			<GridFilterColumn path="dateAdded" />
			<GridFilterColumn path="supplier.supplierId" />
			<GridFilterColumn path="supplier.supplierName" />
			<GridFilterColumn path="supplier.headquarterCity" />
		</Grid>
	);
}
