import PresentSimpleTable from '../../src/components/tables/PresentSimpleTable.vue'

export default {
    title: 'tables/PresentSimpleTable',
    component: PresentSimpleTable,
}

const Template = (args: any) => ({
    components: { PresentSimpleTable },
    setup() {
        return { args };
    },
    template: '<PresentSimpleTable v-bind="args"/>',
});

export const Primary: any = Template.bind({});
Primary.args = {};