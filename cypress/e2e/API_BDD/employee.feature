Feature: API - Employee

Scenario: Employee CRUD validation
  When I send a POST request to "/create"
  And I set the request body as:
    """
    {
      "name": "Caio Test",
      "salary": "50000",
      "age": "30"
    }
    """
  Then the response status should be 200
  And the response body should have property "status" with value "success"
  And the response body should have property "data" with value "id"
  
  # Store the created user's ID
  And I store the value of property "id" as "createdUserId"

  # Verify if the same user was correctly inserted using the stored ID
  When I send a GET request to "/employee/{createdUserId}"
  Then the response status should be 200
  And the response body should have property "status" with value "success"
  And the response body should have property "data"

  # Delete the same user using the stored ID
  When I send a DELETE request to "/delete/{createdUserId}"
  Then the response status should be 200
  And the response body should have property "status" with value "success"
  And the response body should have property "message" with value "successfully! deleted Records"