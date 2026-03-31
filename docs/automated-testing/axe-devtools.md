# Axe DevTools

The Axe DevTools browser extension by Deque is the industry standard for automated accessibility testing. It allows you to catch up to 57% of accessibility issues (like missing alt text or poor color contrast) instantly without leaving your browser.

Here is the documentation and a visual guide for using the tool as of early 2026.

## Installation and Setup

Before scanning, ensure you have the extension installed for your preferred browser.

- **Chrome/Edge:** Download from the [Chrome Web Store](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US&utm_source=ext_sidebar).
- **Firefox:** Download from the [Firefox Add-ons store](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/).

![Axe DevTools in the Chrome Web Store](/screenshots/axe-installation.png)

## Launching the Tool

Axe DevTools lives inside your browser's Developer Tools.

1. Navigate to the website you want to scan.
2. Right-click anywhere on the page and select **Inspect**, or use the keyboard shortcut:
   - **Windows/Linux:** `F12` or `Ctrl + Shift + I`
   - **macOS:** `Cmd + Option + I`
3. In the DevTools panel (usually at the top or right), look for the **axe DevTools** tab.

::: tip
If you don't see it, click the **»** (double arrow) icon to reveal hidden tabs.
:::

![Right-click context menu showing Inspect, with the axe DevTools tab visible in DevTools](/screenshots/axe-launch.png)

## Running a Scan

Once the Axe tab is open, you have two primary options for a free scan:

- **Scan ALL of my page:** Analyzes the entire visible DOM and any nested iframes.
- **Scan part of my page:** Allows you to click a specific element (like a header or a form) to scan only that section.

Click the blue **Scan ALL of my page** button to begin. The process usually takes less than 5 seconds.

![Axe DevTools panel showing Scan All and Scan Part options](/screenshots/axe-scan.png)

## Analyzing the Results

After the scan, the interface will divide into an Overview and an Issue List.

You can choose to export the results to a CSV file, which can make it easier to quantify and view findings.

![Scan results showing 18 total issues with the Export Issues option highlighted](/screenshots/axe-results.png)

## The Dashboard Overview

Issues are categorized by their **Impact** level:

| Impact | Description |
|---|---|
| **Critical** | Must be fixed immediately (e.g., missing labels on buttons) |
| **Serious** | Significant barriers for many users |
| **Moderate/Minor** | Lower impact, but still violate standards |

## Reviewing Specific Issues

1. Select an issue from the list (e.g., "Elements must have sufficient color contrast").
2. **Highlight:** Click the "Highlight" button to draw a red box around the offending element on the live website.
3. **Inspect:** Click the code icon (`</>`) to jump directly to that element's source code in the Elements tab.
4. **Remediation Guidance:** Each issue includes a "More Information" link that leads to Deque University, providing specific code fixes.

![Issue detail panel showing Highlight, Inspect, and More Information options](/screenshots/axe-review.png)
