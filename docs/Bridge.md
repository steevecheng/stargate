# Bridge









## Methods

### approveTokenSpender

```solidity
function approveTokenSpender(address token, address spender, uint256 amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | undefined
| spender | address | undefined
| amount | uint256 | undefined

### bridgeLookup

```solidity
function bridgeLookup(uint16) external view returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined

### forceResumeReceive

```solidity
function forceResumeReceive(uint16 _srcChainId, bytes _srcAddress) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined

### gasLookup

```solidity
function gasLookup(uint16, uint8) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined
| _1 | uint8 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### layerZeroEndpoint

```solidity
function layerZeroEndpoint() external view returns (contract ILayerZeroEndpoint)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ILayerZeroEndpoint | undefined

### lzReceive

```solidity
function lzReceive(uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes _payload) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined
| _nonce | uint64 | undefined
| _payload | bytes | undefined

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### quoteLayerZeroFee

```solidity
function quoteLayerZeroFee(uint16 _chainId, uint8 _functionType, bytes _toAddress, bytes _transferAndCallPayload, IStargateRouter.lzTxObj _lzTxParams) external view returns (uint256, uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _chainId | uint16 | undefined
| _functionType | uint8 | undefined
| _toAddress | bytes | undefined
| _transferAndCallPayload | bytes | undefined
| _lzTxParams | IStargateRouter.lzTxObj | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined
| _1 | uint256 | undefined

### redeemLocal

```solidity
function redeemLocal(uint16 _chainId, uint256 _srcPoolId, uint256 _dstPoolId, address payable _refundAddress, Pool.CreditObj _c, uint256 _amountSD, bytes _to, IStargateRouter.lzTxObj _lzTxParams) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _chainId | uint16 | undefined
| _srcPoolId | uint256 | undefined
| _dstPoolId | uint256 | undefined
| _refundAddress | address payable | undefined
| _c | Pool.CreditObj | undefined
| _amountSD | uint256 | undefined
| _to | bytes | undefined
| _lzTxParams | IStargateRouter.lzTxObj | undefined

### redeemLocalCallback

```solidity
function redeemLocalCallback(uint16 _chainId, address payable _refundAddress, Pool.CreditObj _c, IStargateRouter.lzTxObj _lzTxParams, bytes _payload) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _chainId | uint16 | undefined
| _refundAddress | address payable | undefined
| _c | Pool.CreditObj | undefined
| _lzTxParams | IStargateRouter.lzTxObj | undefined
| _payload | bytes | undefined

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### router

```solidity
function router() external view returns (contract Router)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract Router | undefined

### sendCredits

```solidity
function sendCredits(uint16 _chainId, uint256 _srcPoolId, uint256 _dstPoolId, address payable _refundAddress, Pool.CreditObj _c) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _chainId | uint16 | undefined
| _srcPoolId | uint256 | undefined
| _dstPoolId | uint256 | undefined
| _refundAddress | address payable | undefined
| _c | Pool.CreditObj | undefined

### setBridge

```solidity
function setBridge(uint16 _chainId, bytes _bridgeAddress) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _chainId | uint16 | undefined
| _bridgeAddress | bytes | undefined

### setConfig

```solidity
function setConfig(uint16 _version, uint16 _chainId, uint256 _configType, bytes _config) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _version | uint16 | undefined
| _chainId | uint16 | undefined
| _configType | uint256 | undefined
| _config | bytes | undefined

### setGasAmount

```solidity
function setGasAmount(uint16 _chainId, uint8 _functionType, uint256 _gasAmount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _chainId | uint16 | undefined
| _functionType | uint8 | undefined
| _gasAmount | uint256 | undefined

### setReceiveVersion

```solidity
function setReceiveVersion(uint16 version) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version | uint16 | undefined

### setSendVersion

```solidity
function setSendVersion(uint16 version) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version | uint16 | undefined

### setUseLayerZeroToken

```solidity
function setUseLayerZeroToken(bool enable) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| enable | bool | undefined

### swap

```solidity
function swap(uint16 _chainId, uint256 _srcPoolId, uint256 _dstPoolId, address payable _refundAddress, Pool.CreditObj _c, Pool.SwapObj _s, IStargateRouter.lzTxObj _lzTxParams, bytes _to, bytes _payload) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _chainId | uint16 | undefined
| _srcPoolId | uint256 | undefined
| _dstPoolId | uint256 | undefined
| _refundAddress | address payable | undefined
| _c | Pool.CreditObj | undefined
| _s | Pool.SwapObj | undefined
| _lzTxParams | IStargateRouter.lzTxObj | undefined
| _to | bytes | undefined
| _payload | bytes | undefined

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined

### useLayerZeroToken

```solidity
function useLayerZeroToken() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined



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

### SendMsg

```solidity
event SendMsg(uint8 msgType, uint64 nonce)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| msgType  | uint8 | undefined |
| nonce  | uint64 | undefined |



