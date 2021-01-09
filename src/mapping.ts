import { BigInt, BigDecimal } from "@graphprotocol/graph-ts";
import { ByteArray } from "@graphprotocol/graph-ts";

import {
  Approval as ApprovalEvent,
  Burn as BurnEvent,
  Exchange as ExchangeEvent,
  Mint as MintEvent,
  SellUniswap as SellUniswapEvent,
  Transfer as TransferEvent, 
  Withdraw as WithdrawEvent
} from "../generated/PodToken/PodToken";

import { OptionCreated as OptionCreatedEvent } from "../generated/PodFActory/PodFActory";
import {
  Burn, 
  Exchange, 
  OptionCreated,
  Approval,
  Mint,
  SellUniswap,
  Transfer,
  Withdraw
} from "../generated/schema";

export function handleOptionCreated(event: OptionCreatedEvent): void {
  let entity = new OptionCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  entity.deployer = event.params.deployer;
  entity.exchangeAddress = event.params.exchangeAddress;
  entity.option = event.params.option;
  entity.save();
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  entity.seller = event.params.seller
  entity.amount = event.params.amount;
  entity.save();
}

export function handleExchange(event: ExchangeEvent): void {
  let entity = new Exchange(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  entity.buyer = event.params.buyer;
  entity.amount = event.params.amount;
  entity.save();
}

export function handleBurn(event: BurnEvent): void {
  let entity = new Burn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  entity.seller = event.params.seller
  entity.amount = event.params.amount;
  entity.save();
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  entity.owner = event.params.owner;
  entity.spender = event.params.spender;
  entity.value = event.params.value;
  entity.save();
}
export function handleSellUniswap(event: SellUniswapEvent): void {
  let entity = new SellUniswap(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  entity.seller = event.params.seller;
  entity.amount = event.params.amount;
  entity.save();
}
export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  entity.to = event.params.to;
  entity.value = event.params.value;
  entity.save();
}
export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  entity.seller = event.params.seller;
  entity.amount = event.params.amount;
  entity.save();
}



