# 1. User and Role Management APIs

---

### API 1

#### Path: `/api/user/register`

#### Method: `POST`

#### Description:

Creates a new user with role and status after validating input fields.

#### Request

```
{
  "name": "Prem Kumar",
  "email": "prem@gmail.com",
  "password": "prem1234",
  "role": "ADMIN",
  "status": "active"
}
```

#### Response

```
User registered successfully
```

---

### API 2

#### Path: `/api/user/register`

#### Method: `POST`

#### Description:

Returns error when required fields are missing.

#### Request

```
{}
```

#### Response

```
Required fields missing
```

---

### API 3

#### Path: `/api/user/register`

#### Method: `POST`

#### Description:

Returns error when name is missing.

#### Response

```
Name is required
```

---

### API 4

#### Path: `/api/user/register`

#### Method: `POST`

#### Description:

Returns error when email is missing.

#### Response

```
Email is required
```

---

### API 5

#### Path: `/api/user/register`

#### Method: `POST`

#### Description:

Returns error when email format is invalid.

#### Response

```
Invalid email format
```

---

### API 6

#### Path: `/api/user/register`

#### Method: `POST`

#### Description:

Returns error when password is missing.

#### Response

```
Password is required
```

---

### API 7

#### Path: `/api/user/register`

#### Method: `POST`

#### Description:

Returns error when password is less than 6 characters.

#### Response

```
Password must be at least 6 characters
```

---

### API 8

#### Path: `/api/user/register`

#### Method: `POST`

#### Description:

Returns error when role is missing.

#### Response

```
Role is required
```

---

### API 9

#### Path: `/api/user/register`

#### Method: `POST`

#### Description:

Returns error when role is invalid.

#### Response

```
Invalid Role
```

---

### API 10

#### Path: `/api/user/register`

#### Method: `POST`

#### Description:

Returns error when status is missing.

#### Response

```
Status is required
```

---

### API 11

#### Path: `/api/user/register`

#### Method: `POST`

#### Description:

Returns error when status is invalid.

#### Response

```
Invalid status
```

---

### API 12

#### Path: `/api/user/register`

#### Method: `POST`

#### Description:

Returns error when email is already registered.

#### Response

```
Email already registered
```

---

### API 13

#### Path: `/api/user/login`

#### Method: `POST`

#### Description:

Authenticates user and returns JWT token.

#### Request

```
{
  "email": "prem@gmail.com",
  "password": "prem1234"
}
```

#### Response

```
{
  "jwt_token": "token_here"
}
```

---

### API 14

#### Path: `/api/user/login`

#### Method: `POST`

#### Description:

Returns error when request body is empty.

#### Request

```
{}
```

#### Response

```
Required fields missing
```

---

### API 15

#### Path: `/api/user/login`

#### Method: `POST`

#### Description:

Returns error when email is missing.

#### Response

```
Email is required
```

---

### API 16

#### Path: `/api/user/login`

#### Method: `POST`

#### Description:

Returns error when email format is invalid.

#### Response

```
Invalid email format
```

---

### API 17

#### Path: `/api/user/login`

#### Method: `POST`

#### Description:

Returns error when password is missing.

#### Response

```
Password is required
```

---

### API 18

#### Path: `/api/user/login`

#### Method: `POST`

#### Description:

Returns error when user does not exist.

#### Response

```
User not found
```

---

### API 19

#### Path: `/api/user/login`

#### Method: `POST`

#### Description:

Returns error when password is incorrect.

#### Response

```
Invalid credentials
```

---

### API 20

#### Path: `/api/user/login`

#### Method: `POST`

#### Description:

Returns error when user account is inactive.

#### Response

```
User inactive
```

---

# Summary

```
Total User APIs = 20

Covers:
- Registration
- Login
- Validation
- Edge cases
- Security scenarios
```



# 2. Financial Records Management APIs

---

### API 1

#### Path: `/api/finance/create-record`

#### Method: `POST`

#### Description:

Creates a new financial record. Only Admin can create records.

#### Request

```
{
  "amount": 5000,
  "type": "INCOME",
  "category": "SALARY",
  "description": "Monthly salary"
}
```

#### Response

```
Record created successfully
```

---

### API 2

#### Path: `/api/finance/create-record`

#### Method: `POST`

#### Description:

Returns error when required fields are missing.

#### Response

```
Required fields missing
```

---

### API 3

#### Path: `/api/finance/create-record`

#### Method: `POST`

#### Description:

Returns error when amount is missing.

#### Response

```
Required amount
```

---

### API 4

#### Path: `/api/finance/create-record`

#### Method: `POST`

#### Description:

Returns error when type is invalid.

#### Response

```
Invalid type
```

---

### API 5

#### Path: `/api/finance/records`

#### Method: `GET`

#### Description:

Returns all financial records of the logged-in user.

#### Response

```
[
  {
    "id": "recordId",
    "amount": 5000,
    "type": "INCOME",
    "category": "SALARY",
    "description": "Monthly salary"
  }
]
```

---

### API 6

#### Path: `/api/finance/records`

#### Method: `GET`

#### Description:

Returns error when records are not found.

#### Response

```
Records not found
```

---

### API 7

#### Path: `/api/finance/record/:recordId`

#### Method: `GET`

#### Description:

Returns a single financial record.

#### Response

```
{
  "id": "recordId",
  "amount": 5000,
  "type": "INCOME",
  "category": "SALARY",
  "description": "Monthly salary"
}
```

---

### API 8

#### Path: `/api/finance/record/:recordId`

#### Method: `GET`

#### Description:

Returns error when record is not found.

#### Response

```
Record not found
```

---

### API 9

#### Path: `/api/finance/record/:recordId`

#### Method: `PUT`

#### Description:

Updates a financial record. Only Admin can update.

#### Request

```
{
  "amount": 6000
}
```

#### Response

```
Record updated successfully
```

---

### API 10

#### Path: `/api/finance/record/:recordId`

#### Method: `PUT`

#### Description:

Returns error when no fields are provided.

#### Response

```
Required fields missing
```

---

### API 11

#### Path: `/api/finance/record/:recordId`

#### Method: `PUT`

#### Description:

Returns error when record is not found.

#### Response

```
Record not found
```

---

### API 12

#### Path: `/api/finance/record/:recordId`

#### Method: `DELETE`

#### Description:

Deletes a financial record. Only Admin can delete.

#### Response

```
Record deleted successfully
```

---

### API 13

#### Path: `/api/finance/record/:recordId`

#### Method: `DELETE`

#### Description:

Returns error when record is not found.

#### Response

```
Record not found
```

---

### API 14

#### Path: `/api/finance/filter-records`

#### Method: `GET`

#### Description:

Filters financial records based on query parameters.

---

#### Scenario 1: Filter by Type

```
/api/finance/filter-records?type=INCOME
```

---

#### Scenario 2: Filter by Category

```
/api/finance/filter-records?category=FOOD
```

---

#### Scenario 3: Filter by Date Range

```
/api/finance/filter-records?startDate=2026-04-01&endDate=2026-04-05
```

---

#### Response

```
[
  {
    "id": "recordId",
    "amount": 200,
    "type": "EXPENSE",
    "category": "FOOD",
    "description": "Lunch"
  }
]
```

---

# Summary

```
Total APIs: 14+

Features:
- Create records
- View records
- Update records
- Delete records
- Filter records
- Role-based access control
- Input validation
```
