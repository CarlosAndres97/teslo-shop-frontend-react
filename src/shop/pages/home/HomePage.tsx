import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mocks/products.mock"
import { CustomJumbotrom } from "@/shop/components/CustomJumbotrom"
import { ProductsGrid } from "@/shop/components/ProductsGrid"

export const HomePage = () => {
  return (
    <>
    <CustomJumbotrom title="Todos los productos"/>
    <ProductsGrid products={products}/>
    <CustomPagination totalPages={7} />
    </>
  )
}
