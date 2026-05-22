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

  Scenario: No results shows helpful guidance
    Given the user searches for a "<query>"
    When the user submits the search
    Then the UI shows No results found message
    Examples:
      | query      |
      | lawn mover |