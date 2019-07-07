import React from "react";
import ChatContent from "./ChatContent";
import { render, waitForElement, cleanup } from "@testing-library/react";
import { toBeVisible } from "jest-dom";

expect.extend({ toBeVisible });

describe("<Chat/>", () => {
  describe("Given that no chat history", () => {
    afterEach(cleanup);

    test('when see the display, user see the "No history"', async () => {
      const chatHistory = [];
      const { getByText } = render(<ChatContent history={chatHistory} />);
      const noHistoryText = await waitForElement(() => getByText("No History"));
      expect(noHistoryText).toBeVisible();
    });
  });

  describe("Given that has chat history", () => {
    afterEach(cleanup);

    test("when see the display, user see the Divider", async () => {
      const chatHistory = [
        { name: "Bob", message: "Hi" },
        { name: "Jane", message: "hello" }
      ];
      const { getByTestId } = render(<ChatContent history={chatHistory} />);
      const noHistoryText = await waitForElement(() => getByTestId("divider"));
      expect(noHistoryText).toBeVisible();
    });
  });
});
