import { Grid } from '@vaadin/react-components/Grid.js';
import { GridSortColumn } from '@vaadin/react-components/GridSortColumn.js';
import { ProductController } from 'Frontend/generated/endpoints';
import { useGridDataProvider } from '@vaadin/hilla-react-crud';

export default function MainView() {

	const dataProvider = useGridDataProvider(
	  async (pageable) => ProductController.getAllPage(pageable),
	  []
	);
	
	return (
		<Grid dataProvider={dataProvider} theme="row-stripes">
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
