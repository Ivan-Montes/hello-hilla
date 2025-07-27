import { useEffect } from 'react';
import { useSignal } from '@vaadin/hilla-react-signals';
import { Grid, GridDragStartEvent, GridDropEvent } from '@vaadin/react-components/Grid.js';
import { GridColumn } from '@vaadin/react-components/GridColumn.js';
import type Product from 'Frontend/generated/dev/ime/model/Product';
import { ProductController } from 'Frontend/generated/endpoints';

export default function MainView() {

	const items = useSignal<Product[]>([]);
	const draggedItem = useSignal<Product | undefined>(undefined);

	useEffect(() => {
		ProductController.getAll().then((data) => {
			items.value = data;
		});
	}, []);

	function handleDragStart(event: GridDragStartEvent<Product>): void {
		draggedItem.value = event.detail.draggedItems[0];
	}

	function handleDragEnd(): void {
		draggedItem.value = undefined;
	}

	function handleDrop(event: GridDropEvent<Product>): void {
		const { dropTargetItem, dropLocation } = event.detail;
		// Only act when dropping on another item
		if (draggedItem.value && dropTargetItem !== draggedItem.value) {
			// Remove the item from its previous position
			const draggedItemIndex = items.value.indexOf(draggedItem.value);
			items.value.splice(draggedItemIndex, 1);
			// Re-insert the item at its new position
			const dropIndex = items.value.indexOf(dropTargetItem) + (dropLocation === 'below' ? 1 : 0);
			items.value.splice(dropIndex, 0, draggedItem.value);
			// Re-assign the array to refresh the grid
			items.value = [...items.value];
		}
	}

	return (
		<Grid
			items={items.value}
			theme="column-borders"
			rowsDraggable
			dropMode={draggedItem.value ? 'between' : undefined}
			onGridDragstart={handleDragStart}
			onGridDragend={handleDragEnd}
			onGridDrop={handleDrop}
			className="h-full"
		>
			<GridColumn path="productId" />
			<GridColumn path="name" />
			<GridColumn path="category" />
			<GridColumn path="price" />
			<GridColumn path="dateAdded" />
		</Grid>
	);
}
