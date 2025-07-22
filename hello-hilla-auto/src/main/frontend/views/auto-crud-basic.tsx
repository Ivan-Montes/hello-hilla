import { AutoCrud } from '@vaadin/hilla-react-crud';
import ProductModel from 'Frontend/generated/dev/ime/model/ProductModel';
import { ProductAutoCrudController } from 'Frontend/generated/endpoints';

export default function Example() {
  return <AutoCrud service={ProductAutoCrudController} model={ProductModel} />;
}