import { useEffect } from 'react';
import { useSignal } from '@vaadin/hilla-react-signals';
import { Grid } from '@vaadin/react-components/Grid.js';
import { GridFilterColumn } from '@vaadin/react-components/GridFilterColumn.js';
import type Product from 'Frontend/generated/dev/ime/model/Product';
import { ProductController } from 'Frontend/generated/endpoints';
import { FormLayout } from '@vaadin/react-components/FormLayout.js';
import { TextField } from '@vaadin/react-components/TextField.js';


function detailsRenderer({ item: product }: { item: Product }) {
	return (
		<FormLayout responsiveSteps={[{ minWidth: '0', columns: 3 }]}>
			<TextField label="Supplier Id" value={product.supplier?.supplierId?.toString()} data-colspan="3" readonly />
			<TextField label="Supplier Name" value={product.supplier?.supplierName} data-colspan="3" readonly />
			<TextField label="Supplier Headquarter City" value={product.supplier?.headquarterCity} data-colspan="3" readonly />
		</FormLayout>
	);
}

export default function MainView() {

	const items = useSignal<Product[]>([]);
	const detailsOpenedItem = useSignal<Product[]>([]);

	useEffect(() => {
		ProductController.getAll().then((data) => {
			items.value = data;
		});
	}, []);

	return (
		<Grid
			theme="row-stripes"
			items={items.value}
			detailsOpenedItems={detailsOpenedItem.value}
			onActiveItemChanged={(event) => {
				const person = event.detail.value;
				detailsOpenedItem.value = person ? [person] : [];
			}}
			rowDetailsRenderer={detailsRenderer}
			className="h-full"
		>
			<GridFilterColumn path="productId" />
			<GridFilterColumn path="name" />
			<GridFilterColumn path="category" />
			<GridFilterColumn path="price" />
			<GridFilterColumn path="dateAdded" />

			<span slot="empty-state">No employees found.</span>
		</Grid>
	);
}
