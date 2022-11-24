/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import pinia from "/src/pinia";
import HomePage from "../HomePage.vue";
describe("homepage", () => {
  it("render homepage", () => {
    const wrapper = mount(HomePage, pinia);
    expect(wrapper.find("h1", "p", "span").exists()).toBeTruthy();
  });
});
