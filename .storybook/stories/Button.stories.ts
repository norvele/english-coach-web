import UiButton from '../../src/components/UiButton.vue'

export default {
    title: 'UiButton',
    component: UiButton,
}

const Template = (args: any) => ({
    components: { UiButton },
    setup() {
        return { args };
    },
    template: '<UiButton v-bind="args">Awesome button</UiButton>',
});

export const Primary: any = Template.bind({});
Primary.args = {};