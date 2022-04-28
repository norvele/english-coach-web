import { ContainerI, containerKey, createContainer } from "../container";
import { Task } from "../Task";
import { CurrentStep, Pronoun, Settings, Sign, Tense, Verb } from "../common";
import { defineComponent, ref } from "vue";
import { useGame } from "./useGame";
import { mount, VueWrapper } from "@vue/test-utils";

let wrapper: VueWrapper;
describe("useGame", () => {
  beforeEach(() => {
    const container = getMockedContainer();
    const settings = ref<Settings>({
      taskLanguage: "russian",
      solutionLanguage: "english",
      usedVerbs: Object.values(Verb),
    });
    const TestComponent = defineComponent({
      setup() {
        return {
          ...useGame(settings),
        };
      },
    });
    wrapper = mount(TestComponent, {
      global: {
        provide: {
          [containerKey]: container,
        },
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test("The component mounts", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test("The gameplay is correct", () => {
    const vm = wrapper.vm as unknown as any;

    expect(vm.currentStep).toEqual(CurrentStep.task);
    expect(vm.taskText).toEqual("Я (обычно) работаю");
    expect(vm.solutionText).toEqual("I work");

    vm.toNextStep();

    expect(vm.currentStep).toEqual(CurrentStep.solution);
    expect(vm.taskText).toEqual("Я (обычно) работаю");
    expect(vm.solutionText).toEqual("I work");

    vm.toNextStep();

    expect(vm.currentStep).toEqual(CurrentStep.task);
    expect(vm.taskText).toEqual("Я работал");
    expect(vm.solutionText).toEqual("I worked");
  });
});

function getMockedContainer(): ContainerI {
  return {
    ...createContainer(),
    taskBuilder: {
      createRandomTask: jest
        .fn()
        .mockReturnValueOnce(
          new Task({
            tense: Tense.presentSimple,
            pronoun: Pronoun.i,
            sign: Sign.positive,
            verb: Verb.work,
          })
        )
        .mockReturnValueOnce(
          new Task({
            tense: Tense.pastSimple,
            pronoun: Pronoun.i,
            sign: Sign.positive,
            verb: Verb.work,
          })
        ),
    },
  };
}
