# LoopBackMock









## Methods

### pause

```solidity
function pause(bool _paused) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _paused | bool | undefined

### router

```solidity
function router() external view returns (contract IStargateRouter)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IStargateRouter | undefined

### sgReceive

```solidity
function sgReceive(uint16 _chainId, bytes _srcAddress, uint256, address _token, uint256 amountLD, bytes payload) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _chainId | uint16 | undefined
| _srcAddress | bytes | undefined
| _2 | uint256 | undefined
| _token | address | undefined
| amountLD | uint256 | undefined
| payload | bytes | undefined



## Events

### LoopBack

```solidity
event LoopBack(bytes srcAddress, uint256 srcPoolId, uint256 dstPoolId, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| srcAddress  | bytes | undefined |
| srcPoolId  | uint256 | undefined |
| dstPoolId  | uint256 | undefined |
| amount  | uint256 | undefined |



