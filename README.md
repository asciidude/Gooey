# Gooey

A chat app for gamers

Built by

- PIE (front-end)
- asciidude (front-end/back-end)
- rfc (front-end/back-end)

# API Documentation

## Payloads

Payloads are what you recieve when you make calls to the API.

#### User Payloads

```json
{
  "username": string,
  "_id": string,
  "tunnel-vision": array,
  "premium": boolean
}
```

`username` The user's username\
`_id` The user's unique identifier\
`tunnel-vision` An array of servers that the user can see deleted messages in\
`premium` A boolean describing if the user is a premium user or not, this is a placeholder for now and will always be false

_Banned users are removed from the database_

#### Server Payloads

```json
{
  "name": string,
  "_id": string,
  "partnered": boolean,
  "owner": object || "none",
  "private": boolean
}
```

`name` The server's name\
`_id` The server's unique identifier\
`partnered` A boolean describing if the server is partnered with Gooey\
`owner` Returns the server owner's user object or "none", based off if it is through private messages or not\
`private` The determining factor of if the server is private messages or not
