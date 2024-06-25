import { defineValue } from "../../utils/conversor";

describe("conversor test", () => {
    it("conversor for material", () => {
        const result = defineValue(true, 'Outlined');
        expect(result).toBe('Outlined');
    });
    it("conversor for not material container", () => {
        const result = defineValue(false, 'Outlined');
        expect(result).toBe('Outline');
    });
    it("conversor for not material underlined", () => {
        const result = defineValue(false, 'Standard');
        expect(result).toBe('Underlined');
    });
    it("conversor for not material filled", () => {
        const result = defineValue(false, 'Filled');
        expect(result).toBe('Filled');
    })
});