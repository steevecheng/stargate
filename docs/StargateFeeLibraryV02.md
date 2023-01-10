# StargateFeeLibraryV02









## Methods

### DELTA_1

```solidity
function DELTA_1() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### DELTA_2

```solidity
function DELTA_2() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### DENOMINATOR

```solidity
function DENOMINATOR() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### LAMBDA_1

```solidity
function LAMBDA_1() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### LAMBDA_2

```solidity
function LAMBDA_2() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### LP_FEE

```solidity
function LP_FEE() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### PROTOCOL_FEE

```solidity
function PROTOCOL_FEE() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### PROTOCOL_SUBSIDY

```solidity
function PROTOCOL_SUBSIDY() external view returns (uint256)
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

### getEquilibriumFee

```solidity
function getEquilibriumFee(uint256 idealBalance, uint256 beforeBalance, uint256 amountSD) external pure returns (uint256, uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| idealBalance | uint256 | undefined
| beforeBalance | uint256 | undefined
| amountSD | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined
| _1 | uint256 | undefined

### getFees

```solidity
function getFees(uint256 _srcPoolId, uint256 _dstPoolId, uint16 _dstChainId, address, uint256 _amountSD) external view returns (struct Pool.SwapObj s)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcPoolId | uint256 | undefined
| _dstPoolId | uint256 | undefined
| _dstChainId | uint16 | undefined
| _3 | address | undefined
| _amountSD | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| s | Pool.SwapObj | undefined

### getTrapezoidArea

```solidity
function getTrapezoidArea(uint256 lambda, uint256 yOffset, uint256 xUpperBound, uint256 xLowerBound, uint256 xStart, uint256 xEnd) external pure returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| lambda | uint256 | undefined
| yOffset | uint256 | undefined
| xUpperBound | uint256 | undefined
| xLowerBound | uint256 | undefined
| xStart | uint256 | undefined
| xEnd | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getVersion

```solidity
function getVersion() external pure returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


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

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



