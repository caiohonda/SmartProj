Feature: Employee API Testing

Scenario: Create an employee
  When I send a POST request to "/api/v1/create"
  And I set the request body as:
    """
    {
      "name": "John Doe",
      "salary": "50000",
      "age": "30"
    }
    """
  Then the response status should be 200
  And the response body should have property "status" with value "success"
  And the response body should have property "data"

Scenario: Validate if the employee was created correctly
  When I send a GET request to "/api/v1/employee/1"
  Then the response status should be 200
  And the response body should have property "status" with value "success"
  And the response body should have property "data"

Scenario: Delete this user
  When I send a DELETE request to "/api/v1/delete/2"
  Then the response status should be 200
  And the response body should have property "status" with value "success"
  And the response body should have property "message" with value "successfully! deleted Records"