Feature: Site Search

  Scenario Outline: Successful search returns relevant results
    Given the user searches for a "<query>"
    When the user submits the search
    Then the results list shows relevant items ordered matching the "<query>"
    Examples:
      | query |
      | car   |

  Scenario Outline: Empty query handled gracefully
    Given the search field is blank space
    When the user submits the search
    Then the site shows all the listings by best match

  Scenario Outline: No results shows helpful guidance
    Given the user searches for a "<query>"
    When the user submits the search
    Then the UI shows No results found message
    Examples:
      | query      |
      | lawn mover |

  Scenario Outline: Verify search results update when sorted by lowest price
    Given the user searches for a "<query>"
    When the user submits the search
    And the user sorts the results by "Lowest Price"
    Then the search results should be ordered with the lowest price first
    Examples:
      | query |
      | car   |

  Scenario Outline: Clicking a result navigates to correct page
    Given the user searches for a "<query>"
    When the user submits the search
    And the user clicks a result
    Then the browser navigates to the correct target with expected content
    Examples:
      | query |
      | car   |