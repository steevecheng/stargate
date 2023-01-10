# Router









## Methods

### activateChainPath

```solidity
function activateChainPath(uint256 _poolId, uint16 _dstChainId, uint256 _dstPoolId) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _poolId | uint256 | undefined
| _dstChainId | uint16 | undefined
| _dstPoolId | uint256 | undefined

### addLiquidity

```solidity
function addLiquidity(uint256 _poolId, uint256 _amountLD, address _to) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _poolId | uint256 | undefined
| _amountLD | uint256 | undefined
| _to | address | undefined

### bridge

```solidity
function bridge() external view returns (contract Bridge)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract Bridge | undefined

### cachedSwapLookup

```solidity
function cachedSwapLookup(uint16, bytes, uint256) external view returns (address token, uint256 amountLD, address to, bytes payload)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined
| _1 | bytes | undefined
| _2 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| token | address | undefined
| amountLD | uint256 | undefined
| to | address | undefined
| payload | bytes | undefined

### callDelta

```solidity
function callDelta(uint256 _poolId, bool _fullMode) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _poolId | uint256 | undefined
| _fullMode | bool | undefined

### clearCachedSwap

```solidity
function clearCachedSwap(uint16 _srcChainId, bytes _srcAddress, uint256 _nonce) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined
| _nonce | uint256 | undefined

### createChainPath

```solidity
function createChainPath(uint256 _poolId, uint16 _dstChainId, uint256 _dstPoolId, uint256 _weight) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _poolId | uint256 | undefined
| _dstChainId | uint16 | undefined
| _dstPoolId | uint256 | undefined
| _weight | uint256 | undefined

### createPool

```solidity
function createPool(uint256 _poolId, address _token, uint8 _sharedDecimals, uint8 _localDecimals, string _name, string _symbol) external nonpayable returns (address)
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
| _0 | address | undefined

### creditChainPath

```solidity
function creditChainPath(uint16 _dstChainId, uint256 _dstPoolId, uint256 _srcPoolId, Pool.CreditObj _c) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _dstPoolId | uint256 | undefined
| _srcPoolId | uint256 | undefined
| _c | Pool.CreditObj | undefined

### factory

```solidity
function factory() external view returns (contract Factory)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract Factory | undefined

### instantRedeemLocal

```solidity
function instantRedeemLocal(uint16 _srcPoolId, uint256 _amountLP, address _to) external nonpayable returns (uint256 amountSD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcPoolId | uint16 | undefined
| _amountLP | uint256 | undefined
| _to | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| amountSD | uint256 | undefined

### mintFeeOwner

```solidity
function mintFeeOwner() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### protocolFeeOwner

```solidity
function protocolFeeOwner() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### quoteLayerZeroFee

```solidity
function quoteLayerZeroFee(uint16 _dstChainId, uint8 _functionType, bytes _toAddress, bytes _transferAndCallPayload, IStargateRouter.lzTxObj _lzTxParams) external view returns (uint256, uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
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
function redeemLocal(uint16 _dstChainId, uint256 _srcPoolId, uint256 _dstPoolId, address payable _refundAddress, uint256 _amountLP, bytes _to, IStargateRouter.lzTxObj _lzTxParams) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _srcPoolId | uint256 | undefined
| _dstPoolId | uint256 | undefined
| _refundAddress | address payable | undefined
| _amountLP | uint256 | undefined
| _to | bytes | undefined
| _lzTxParams | IStargateRouter.lzTxObj | undefined

### redeemLocalCallback

```solidity
function redeemLocalCallback(uint16 _srcChainId, bytes _srcAddress, uint256 _nonce, uint256 _srcPoolId, uint256 _dstPoolId, address _to, uint256 _amountSD, uint256 _mintAmountSD) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined
| _nonce | uint256 | undefined
| _srcPoolId | uint256 | undefined
| _dstPoolId | uint256 | undefined
| _to | address | undefined
| _amountSD | uint256 | undefined
| _mintAmountSD | uint256 | undefined

### redeemLocalCheckOnRemote

```solidity
function redeemLocalCheckOnRemote(uint16 _srcChainId, bytes _srcAddress, uint256 _nonce, uint256 _srcPoolId, uint256 _dstPoolId, uint256 _amountSD, bytes _to) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined
| _nonce | uint256 | undefined
| _srcPoolId | uint256 | undefined
| _dstPoolId | uint256 | undefined
| _amountSD | uint256 | undefined
| _to | bytes | undefined

### redeemRemote

```solidity
function redeemRemote(uint16 _dstChainId, uint256 _srcPoolId, uint256 _dstPoolId, address payable _refundAddress, uint256 _amountLP, uint256 _minAmountLD, bytes _to, IStargateRouter.lzTxObj _lzTxParams) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _srcPoolId | uint256 | undefined
| _dstPoolId | uint256 | undefined
| _refundAddress | address payable | undefined
| _amountLP | uint256 | undefined
| _minAmountLD | uint256 | undefined
| _to | bytes | undefined
| _lzTxParams | IStargateRouter.lzTxObj | undefined

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### retryRevert

```solidity
function retryRevert(uint16 _srcChainId, bytes _srcAddress, uint256 _nonce) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined
| _nonce | uint256 | undefined

### revertLookup

```solidity
function revertLookup(uint16, bytes, uint256) external view returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined
| _1 | bytes | undefined
| _2 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined

### revertRedeemLocal

```solidity
function revertRedeemLocal(uint16 _dstChainId, bytes _srcAddress, uint256 _nonce, address payable _refundAddress, IStargateRouter.lzTxObj _lzTxParams) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _srcAddress | bytes | undefined
| _nonce | uint256 | undefined
| _refundAddress | address payable | undefined
| _lzTxParams | IStargateRouter.lzTxObj | undefined

### sendCredits

```solidity
function sendCredits(uint16 _dstChainId, uint256 _srcPoolId, uint256 _dstPoolId, address payable _refundAddress) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _srcPoolId | uint256 | undefined
| _dstPoolId | uint256 | undefined
| _refundAddress | address payable | undefined

### setBridgeAndFactory

```solidity
function setBridgeAndFactory(contract Bridge _bridge, contract Factory _factory) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _bridge | contract Bridge | undefined
| _factory | contract Factory | undefined

### setDeltaParam

```solidity
function setDeltaParam(uint256 _poolId, bool _batched, uint256 _swapDeltaBP, uint256 _lpDeltaBP, bool _defaultSwapMode, bool _defaultLPMode) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _poolId | uint256 | undefined
| _batched | bool | undefined
| _swapDeltaBP | uint256 | undefined
| _lpDeltaBP | uint256 | undefined
| _defaultSwapMode | bool | undefined
| _defaultLPMode | bool | undefined

### setFeeLibrary

```solidity
function setFeeLibrary(uint256 _poolId, address _feeLibraryAddr) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _poolId | uint256 | undefined
| _feeLibraryAddr | address | undefined

### setFees

```solidity
function setFees(uint256 _poolId, uint256 _mintFeeBP) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _poolId | uint256 | undefined
| _mintFeeBP | uint256 | undefined

### setMintFeeOwner

```solidity
function setMintFeeOwner(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined

### setProtocolFeeOwner

```solidity
function setProtocolFeeOwner(address _owner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined

### setSwapStop

```solidity
function setSwapStop(uint256 _poolId, bool _swapStop) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _poolId | uint256 | undefined
| _swapStop | bool | undefined

### setWeightForChainPath

```solidity
function setWeightForChainPath(uint256 _poolId, uint16 _dstChainId, uint256 _dstPoolId, uint16 _weight) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _poolId | uint256 | undefined
| _dstChainId | uint16 | undefined
| _dstPoolId | uint256 | undefined
| _weight | uint16 | undefined

### swap

```solidity
function swap(uint16 _dstChainId, uint256 _srcPoolId, uint256 _dstPoolId, address payable _refundAddress, uint256 _amountLD, uint256 _minAmountLD, IStargateRouter.lzTxObj _lzTxParams, bytes _to, bytes _payload) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _srcPoolId | uint256 | undefined
| _dstPoolId | uint256 | undefined
| _refundAddress | address payable | undefined
| _amountLD | uint256 | undefined
| _minAmountLD | uint256 | undefined
| _lzTxParams | IStargateRouter.lzTxObj | undefined
| _to | bytes | undefined
| _payload | bytes | undefined

### swapRemote

```solidity
function swapRemote(uint16 _srcChainId, bytes _srcAddress, uint256 _nonce, uint256 _srcPoolId, uint256 _dstPoolId, uint256 _dstGasForCall, address _to, Pool.SwapObj _s, bytes _payload) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined
| _nonce | uint256 | undefined
| _srcPoolId | uint256 | undefined
| _dstPoolId | uint256 | undefined
| _dstGasForCall | uint256 | undefined
| _to | address | undefined
| _s | Pool.SwapObj | undefined
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

### withdrawMintFee

```solidity
function withdrawMintFee(uint256 _poolId, address _to) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _poolId | uint256 | undefined
| _to | address | undefined

### withdrawProtocolFee

```solidity
function withdrawProtocolFee(uint256 _poolId, address _to) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _poolId | uint256 | undefined
| _to | address | undefined



## Events

### CachedSwapSaved

```solidity
event CachedSwapSaved(uint16 chainId, bytes srcAddress, uint256 nonce, address token, uint256 amountLD, address to, bytes payload, bytes reason)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| chainId  | uint16 | undefined |
| srcAddress  | bytes | undefined |
| nonce  | uint256 | undefined |
| token  | address | undefined |
| amountLD  | uint256 | undefined |
| to  | address | undefined |
| payload  | bytes | undefined |
| reason  | bytes | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### RedeemLocalCallback

```solidity
event RedeemLocalCallback(uint16 srcChainId, bytes indexed srcAddress, uint256 indexed nonce, uint256 srcPoolId, uint256 dstPoolId, address to, uint256 amountSD, uint256 mintAmountSD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| srcChainId  | uint16 | undefined |
| srcAddress `indexed` | bytes | undefined |
| nonce `indexed` | uint256 | undefined |
| srcPoolId  | uint256 | undefined |
| dstPoolId  | uint256 | undefined |
| to  | address | undefined |
| amountSD  | uint256 | undefined |
| mintAmountSD  | uint256 | undefined |

### Revert

```solidity
event Revert(uint8 bridgeFunctionType, uint16 chainId, bytes srcAddress, uint256 nonce)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| bridgeFunctionType  | uint8 | undefined |
| chainId  | uint16 | undefined |
| srcAddress  | bytes | undefined |
| nonce  | uint256 | undefined |

### RevertRedeemLocal

```solidity
event RevertRedeemLocal(uint16 srcChainId, uint256 _srcPoolId, uint256 _dstPoolId, bytes to, uint256 redeemAmountSD, uint256 mintAmountSD, uint256 indexed nonce, bytes indexed srcAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| srcChainId  | uint16 | undefined |
| _srcPoolId  | uint256 | undefined |
| _dstPoolId  | uint256 | undefined |
| to  | bytes | undefined |
| redeemAmountSD  | uint256 | undefined |
| mintAmountSD  | uint256 | undefined |
| nonce `indexed` | uint256 | undefined |
| srcAddress `indexed` | bytes | undefined |



