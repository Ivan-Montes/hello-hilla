import {
    HorizontalLayout,
    RadioButton,
    RadioGroup,
    TextField,
    VerticalLayout
} from "@vaadin/react-components";

import { useSearchParams } from 'react-router';
import { useSignal } from "@vaadin/hilla-react-signals";
import { useEffect } from "react";
import { ProductService } from "Frontend/generated/endpoints";

export default function ProductsView() {
    const [searchParams, setSearchParams] = useSearchParams();
    const rawCategory = searchParams.get('category');
    const rawSort = searchParams.get('sort');

    const queryParams = useSignal(
        { category: rawCategory || '', sort: rawSort || 'asc' }
    );

    const products = useSignal<string[]>([]);

    useEffect(() => {
        if (rawCategory !== queryParams.value.category
            || rawSort !== queryParams.value.sort) {
            setSearchParams({
                category: queryParams.value.category,
                sort: queryParams.value.sort
            });
        }
        if (queryParams.value.category === '') {
            ProductService.allProducts(queryParams.value.sort)
                .then((data) => products.value =  (data ?? []).filter((item): item is string => typeof item === 'string'));
        } else {
            ProductService.productsInCategory(
                queryParams.value.category,
                queryParams.value.sort
            ).then((data) => products.value =  (data ?? []).filter((item): item is string => typeof item === 'string'));
        }
    }, [queryParams.value]);

// tag::snippet[]
    return (
        <VerticalLayout theme='padding'>
            <HorizontalLayout theme='spacing padding'>
                <TextField
                    label="Category:"
                    value={queryParams.value.category}
                    onValueChanged={(e) => {
                        const newValue = e.detail.value;
                        if (newValue) {
                            queryParams.value = {
                                category: newValue,
                                sort: queryParams.value.sort
                            };
                        } else {
                            queryParams.value = {
                                category: '',
                                sort: queryParams.value.sort
                            };
                        }
                    }}
                />
                <RadioGroup label="Sort order:"
                            onValueChanged={(event) => queryParams.value = {
                                    category: queryParams.value.category,
                                    sort: event.detail.value
                                }
                            }>
                    <RadioButton value="asc"
                                 checked={queryParams.value.sort === 'asc'}
                                 label='Ascending'/>
                    <RadioButton value="desc"
                                 checked={queryParams.value.sort === 'desc'}
                                 label='Descending'/>
                </RadioGroup>
            </HorizontalLayout>
            <div>Current search term: <b>{rawCategory}</b></div>
            <div>Current sort order: <b>{rawSort}</b></div>
            <br/>
            <h3>Products from {queryParams.value.category
                ? `'${queryParams.value.category}' category`
                : "all categories"}:
            </h3>

            <div>
                <ul>{products.value.map((product) => (
                    <li key={product}>{product}</li>
                ))}</ul>
            </div>
        </VerticalLayout>
    );
}