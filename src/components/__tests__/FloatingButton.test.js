/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FloatingButton from "../FloatingButton.vue";
describe("testFAB", () => {
  it("render properly", () => {
    const wrapper = mount(FloatingButton);
    expect(wrapper.find("span").exists()).toBeTruthy();
  });
});
