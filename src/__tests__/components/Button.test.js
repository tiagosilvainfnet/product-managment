import { render, screen } from "@testing-library/react";
import { NativeBaseProvider } from "native-base";

describe("Button test component", () => {
    it("then shows the button build", () => {
        render(<NativeBaseProvider base={'light'}><button>Olá mundo</button></NativeBaseProvider>);
        expect(screen.getByText(/Olá mundo/i)).toBeTruthy();
    })
});