# Factory









## Methods

### allPools

```solidity
function allPools(uint256) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### allPoolsLength

```solidity
function allPoolsLength() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### createPool

```solidity
function createPool(uint256 _poolId, address _token, uint8 _sharedDecimals, uint8 _localDecimals, string _name, string _symbol) external nonpayable returns (address poolAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _poolId | uint256 | undefined
| _token | address | undefined
| _sharedDecimals | uint8 | undefined
| _localDecimals | uint8 | undefined
| _name | string | undefined
| _symbol | string | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| poolAddress | address | undefined

### defaultFeeLibrary

```solidity
function defaultFeeLibrary() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### getPool

```solidity
function getPool(uint256) external view returns (contract Pool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract Pool | undefined

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


### router

```solidity
function router() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### setDefaultFeeLibrary

```solidity
function setDefaultFeeLibrary(address _defaultFeeLibrary) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _defaultFeeLibrary | address | undefined

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



