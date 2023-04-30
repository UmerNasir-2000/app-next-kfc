import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/tabs";
import {Category} from "@prisma/client";

type CustomTabsProps = {
    list: Category[]
}

export default function CustomTabs(props: CustomTabsProps) {

    const {list} = props
    return (
        <Tabs variant='soft-rounded' colorScheme='red'>
            <TabList>
                {list.map((category) => <Tab key={category.id}>{category.name}</Tab>)}
            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}