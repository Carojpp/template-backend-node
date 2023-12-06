# Create user
curl --location 'http://localhost:7000/createUser' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"Caro",
    "email":"caro@example.com",
    "phone":"3016453022",
    "country":"CO"
}'

# Create account
curl --location 'http://localhost:7000/createAccount' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"Account 3"
}'