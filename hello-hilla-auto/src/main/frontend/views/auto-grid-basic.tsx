import { AutoGrid, AutoGridRef } from '@vaadin/hilla-react-crud';
import { useSignal } from '@vaadin/hilla-react-signals';
import { VerticalLayout } from '@vaadin/react-components';
import ProductModel from 'Frontend/generated/dev/ime/model/ProductModel';
import type Product from 'Frontend/generated/dev/ime/model/Product';
import { ProductAutoGridController } from 'Frontend/generated/endpoints';
import React from 'react';
import { Button } from '@vaadin/react-components/Button.js';


export default function Example() {
	
	const autoGridRef = React.useRef<AutoGridRef>(null);
	const selectedItems = useSignal<Product[]>([]);

	function refreshGrid() {
	  autoGridRef.current?.refresh();
	}
	
  return (
	<VerticalLayout>
	  <Button theme="primary" onClick={() => { refreshGrid() }}>Refresh Data</Button>
	  <AutoGrid
	    service={ProductAutoGridController}
		model={ProductModel}
		visibleColumns={['category', 'name', 'price', 'supplier.supplierName', 'supplier.headquarterCity']}
		selectedItems={selectedItems.value}
		    onActiveItemChanged={(e) => {
		      const item = e.detail.value;
		      selectedItems.value = item ? [item] : [];
		    }}
	  />
	</VerticalLayout>
  );
}

