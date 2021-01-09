# Pods.finance Subgraph

A TheGraph's subgraph showcasing all options executed in Pods.Finance

[### Contracts](/developerfred/pods-finance-contracts)

### Abis

- [PodFactory](./abis/PodFactory.json)
- [PodToken](./abis/PodToken.json)

## Mapping ( Aqui que a mágica acontence)

- [Mapping](./src/mapping.ts)

## GraphQl Querys 

```graphql 
# Vendas Feitas na  Uniswap 
sellUniswap(first: 100) {
    id
    seller
    amount
  }

# Options Criadas 
optionCreated(first: 5) {
    id
    exchangeAddress
    option
    deployer
  }```

---
[support my code on gitcoin 👨‍🚀](https://gitcoin.co/grants/646/gitcoin-developer-grant-codignsh)