# Flow Wallet API Demo (Node.js + express)

This is a demonstration of a RESTful API that
implements a simple custodial wallet for the Flow blockchain.

## Functionality

- [x] Single admin account (hot wallet)
- [x] Send fungible token withdrawals from admin account (FLOW, FUSD)
- [ ] Detect fungible token deposits to admin account (FLOW, FUSD)
- [ ] Create user accounts from admin account
- [ ] Send fungible token withdrawals from a user account (FLOW, FUSD)
- [ ] Detect fungible token deposits to a user account (FLOW, FUSD)
- [ ] Send non-fungible token withdrawals from admin account
- [ ] Detect non-fungible token deposits to admin account
- [ ] Send non-fungible token withdrawals from a user account
- [ ] Detect non-fungible token deposits to aa user account

## API Routes

### Fungible Tokens

Supported tokens:
- `FLOW`
- `FUSD`

#### List all tokens

`GET /v1/fungible-tokens`

**Example**

```sh
curl --request GET \
  --url http://localhost:3000/v1/fungible-tokens
```

---

#### Get details of a token

`GET /v1/fungible-tokens/{tokenName}`

**Parameters**

- `tokenName`: The name of the fungible token (e.g. FLOW)

**Example**

```sh
curl --request GET \
  --url http://localhost:3000/v1/fungible-tokens/flow
```

---

#### List all withdrawals of a token type

:warning: _Not yet implemented_

`GET /v1/fungible-tokens/{tokenName}/withdrawals`

**Parameters**

- `tokenName`: The name of the fungible token (e.g. FLOW)

---

#### Get details of a token withdrawal

:warning: _Not yet implemented_

`GET /v1/fungible-tokens/{tokenName}/withdrawals/{transactionId}`

**Parameters**

- `tokenName`: The name of the fungible token (e.g. FLOW)
- `transactionId`: The Flow transaction ID for the withdrawal

---

#### Create a token withdrawal

`POST /v1/fungible-tokens/{tokenName}/withdrawals`

**Parameters**

- `tokenName`: The name of the fungible token (e.g. FLOW)

**Body (JSON)**

- `amount`: The number of tokens to transfer (e.g. "123.456")
  - Must be a fixed-point number with a maximum of 8 decimal places
- `recipient`: The Flow address of the recipient (e.g. "0xf8d6e0586b0a20c7")

**Example**

```sh
curl --request GET \
  --url http://localhost:3000/v1/fungible-tokens \
  --header 'Content-Type: application/json' \
  --data '{ "recipient": "0xf8d6e0586b0a20c7", "amount": "123.456" }'
```

---

### Non-Fungible Tokens

TODO