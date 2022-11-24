/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import pinia from "/src/pinia.js";
import MealDbCards from "../MealDbCards.vue";
describe("recipe cards from mealDB", () => {
  it("render content", () => {
    const wrapper = mount(MealDbCards, pinia);
    expect(wrapper.find("div").exists()).toBeTruthy();
  });
});
