/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import SignIn from "../SignIn.vue";
import pinia from "/src/pinia.js";

describe("test sign in", () => {
  it("if form is displayed", () => {
    const wrapper = mount(SignIn, pinia);
    expect(wrapper.find("form").exists()).toBeTruthy();
  });
  it("inputs exist", () => {
    const wrapper = mount(SignIn);
    expect(wrapper.find("form > input").exists()).toBeTruthy();
  });
  it("button submits", async () => {
    const wrapper = mount(SignIn);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });
  it("should not find Error message", () => {
    const wrapper = mount(SignIn);
    expect(wrapper.find("h3").exists()).toBeFalsy();
  });
});
