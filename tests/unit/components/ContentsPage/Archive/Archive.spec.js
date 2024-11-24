import { shallowMount } from "@vue/test-utils";
import { describe, beforeEach, afterEach, it, expect } from 'vitest'
import Archive from "@/components/ContentsPage/Archive/Archive.vue";

describe("Archive.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Archive, {
    });
  });
 
  afterEach(() => {
    wrapper.unmount();
  });

  it("formats the date case1", () => {
    const date = "2024-11-23";
    const formattedDate = wrapper.vm.formatDate(date);
    expect(formattedDate).toBe("2024年11月23日");
  });

  it("formats the date case2", () => {
    const date = "2024-12-01";
    const formattedDate = wrapper.vm.formatDate(date);
    expect(formattedDate).toBe("2024年12月1日");
  });
});
