# StargateFeeLibraryV01









## Methods

### BP_DENOMINATOR

```solidity
function BP_DENOMINATOR() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### eqFeeBP

```solidity
function eqFeeBP() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### eqRewardBP

```solidity
function eqRewardBP() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### factory

```solidity
function factory() external view returns (contract Factory)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract Factory | undefined

### getFees

```solidity
function getFees(uint256, uint256, uint16, address, uint256 _amountSD) external view returns (struct Pool.SwapObj s)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined
| _1 | uint256 | undefined
| _2 | uint16 | undefined
| _3 | address | undefined
| _amountSD | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| s | Pool.SwapObj | undefined

### getVersion

```solidity
function getVersion() external pure returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### lpFeeBP

```solidity
function lpFeeBP() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### protocolFeeBP

```solidity
function protocolFeeBP() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### setFees

```solidity
function setFees(uint256 _lpFeeBP, uint256 _protocolFeeBP, uint256 _eqFeeBP, uint256 _eqRewardBP) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _lpFeeBP | uint256 | undefined
| _protocolFeeBP | uint256 | undefined
| _eqFeeBP | uint256 | undefined
| _eqRewardBP | uint256 | undefined

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined



## Events

### FeesUpdated

```solidity
event FeesUpdated(uint256 lpFeeBP, uint256 protocolFeeBP)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| lpFeeBP  | uint256 | undefined |
| protocolFeeBP  | uint256 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



