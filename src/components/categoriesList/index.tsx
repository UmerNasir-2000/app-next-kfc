import {Category} from "@prisma/client";
import CategoryImage from "@/components/categoriesList/categoryImage";
import {Flex} from "@chakra-ui/layout";

type CategoriesListProps = {
    categories: Category[]
}

export default function CategoriesList(props: CategoriesListProps) {

    const {categories} = props

    return (
        <Flex justify='center' gap={3} marginY={5}>
            {categories.map((category) => <CategoryImage key={category.id} image={category.imageUrl}/>)}
        </Flex>
    )

}