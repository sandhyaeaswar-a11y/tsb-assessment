# Task 1 Testing (Home Page Test Case)

| ID | Test Scenario | Can be Automated | Test Suite | Why? |
|---:|---|---:|---|---|
| HP_001 | Verify the home page loads successfully and returns HTTP 200 | Yes | Smoke | Basic application availability check |
| HP_002 | Verify that the "trademe" logo is displayed properly and clicking it from any other page redirects the user to the home page  | Yes | Smoke | Navigation validation |
| HP_003 | Verify the global search bar is visible and accepts user input | Yes | Smoke | Business functionality |
| HP_004 | Verify valid search input return relevant listings | Yes | Sanity / Regression | End user workflow |
| HP_005 | Verify invalid search input display “No results found” message correctly | Yes | Regression | Negative search validation |
| HP_006 | Verify that when the user clicks the search button without entering any search input, no action is performed and the user remains on the same page | Yes | Sanity / Regression | Validates empty search handling |
| HP_007 | Verify category navigation links redirect to correct category pages | Yes | Sanity | Navigation workflows |
| HP_008 | Verify clicking a listing opens the corresponding listing details page | Yes | Integration / Regression | Frontend-backend integration validation |
| HP_009 | Verify sign up and login options are visible and accessible | Yes | Smoke | Authentication check |
| HP_010 | Verify search result sorting options function correctly | Yes | Regression | Search usability and sorting validation |
| HP_011 | Verify filters refine search results correctly | Yes | Regression | Search refinement |
| HP_012 | Verify search results contain title, price, image and additional information about the listing | Yes | Regression | Data validation |
| HP_013 | Verify that homepage looks good and works properly on desktop, tablet, and mobile screens | Partial | Regression | Cross device usability |
| HP_014 | Verify that the homepage works correctly in different browsers (Chrome, Edge, Firefox, etc.) | Partial | Regression | Cross browser compatibility |
| HP_015 | Verify that all images, icons, and other static content on the homepage load properly | Yes | Sanity | UI integrity validation |
| HP_016 | Verify that all links on the homepage are working properly and none of them are broken | Yes | Regression | Navigation validation |
| HP_017 | Verify that all links in the footer section of the website work correctly and open the correct legal pages without errors | Yes | Regression | Compliance and navigation validation |
| HP_018 | Verify that the website loads quickly and responds within an acceptable time limit | Yes | Non-functional / Regression | User experience and performance |
| HP_019 | Verify that the application shows proper error messages or fallback UI when network or API calls fail instead of crashing | Yes | Integration / Regression | Error handling and resilience |
| HP_020 | Verify that the users who are not logged in cannot access pages or features meant only for authenticated users | Yes | Security / Regression | Access control validation |
| HP_021 | Verify that the application does not lose important user information like login status or selected settings after browser refresh | Yes | Integration | Session management validation |
| HP_022 | Verify that when a user searches or clicks a listing, the correct API/network tracking requests are sent in the background with the right data | Yes | Regression | Frontend-backend integration  validation |
| HP_023 | Verify the UI still displays correctly and remains usable when network speed is slow | Partial | Non-functional | Performance validation |