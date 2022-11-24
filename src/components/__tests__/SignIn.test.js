/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import SignIn from "../SignIn.vue";
import pinia from "/src/pinia.js";

describe("test sign in", () => {
  it("sign in", () => {
    const wrapper = mount(SignIn, pinia);
    expect(
      wrapper.find("h1", "h2", "p", "span", "button").exists()
    ).toBeTruthy();
  });
  it("should not find Error message", () => {
    const wrapper = mount(SignIn);
    expect(wrapper.find("h3").exists()).toBeFalsy();
  });
});
