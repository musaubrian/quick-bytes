/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import SignUp from "../SignUp.vue";
import pinia from "/src/pinia.js";

describe("form is rendered", () => {
  it("if form is displayed", () => {
    const wrapper = mount(SignUp, pinia);
    expect(wrapper.find("form").exists()).toBeTruthy();
  });
  it("inputs exist", () => {
    const wrapper = mount(SignUp);
    expect(wrapper.find("form > input").exists()).toBeTruthy();
  });
  it("button submits", async () => {
    const wrapper = mount(SignUp);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });
  it("should not find Error message", () => {
    const wrapper = mount(SignUp);
    expect(wrapper.find("h3").exists()).toBeFalsy();
  });
});
