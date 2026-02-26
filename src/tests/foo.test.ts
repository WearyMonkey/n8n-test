import { greet } from "../module";

describe("module", () => {
  describe("greet", () => {
    it("should return a greeting", () => {
      expect(greet("World")).toBe("Hello, World!");
    });
  });
});
