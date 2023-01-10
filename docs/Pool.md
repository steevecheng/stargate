# Pool





Pool contracts on other chains and managed by the Stargate protocol.



## Methods

### BP_DENOMINATOR

```solidity
function BP_DENOMINATOR() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined

### PERMIT_TYPEHASH

```solidity
function PERMIT_TYPEHASH() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined

### activateChainPath

```solidity
function activateChainPath(uint16 _dstChainId, uint256 _dstPoolId) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _dstPoolId | uint256 | undefined

### allowance

```solidity
function allowance(address, address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined
| _1 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### amountLPtoLD

```solidity
function amountLPtoLD(uint256 _amountLP) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _amountLP | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### approve

```solidity
function approve(address spender, uint256 value) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined
| value | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### balanceOf

```solidity
function balanceOf(address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### batched

```solidity
function batched() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### callDelta

```solidity
function callDelta(bool _fullMode) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _fullMode | bool | undefined

### chainPathIndexLookup

```solidity
function chainPathIndexLookup(uint16, uint256) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined
| _1 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### chainPaths

```solidity
function chainPaths(uint256) external view returns (bool ready, uint16 dstChainId, uint256 dstPoolId, uint256 weight, uint256 balance, uint256 lkb, uint256 credits, uint256 idealBalance)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| ready | bool | undefined
| dstChainId | uint16 | undefined
| dstPoolId | uint256 | undefined
| weight | uint256 | undefined
| balance | uint256 | undefined
| lkb | uint256 | undefined
| credits | uint256 | undefined
| idealBalance | uint256 | undefined

### convertRate

```solidity
function convertRate() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### createChainPath

```solidity
function createChainPath(uint16 _dstChainId, uint256 _dstPoolId, uint256 _weight) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _dstPoolId | uint256 | undefined
| _weight | uint256 | undefined

### creditChainPath

```solidity
function creditChainPath(uint16 _dstChainId, uint256 _dstPoolId, Pool.CreditObj _c) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _dstPoolId | uint256 | undefined
| _c | Pool.CreditObj | undefined

### decimals

```solidity
function decimals() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### decreaseAllowance

```solidity
function decreaseAllowance(address spender, uint256 subtractedValue) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined
| subtractedValue | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### defaultLPMode

```solidity
function defaultLPMode() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### defaultSwapMode

```solidity
function defaultSwapMode() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### deltaCredit

```solidity
function deltaCredit() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### eqFeePool

```solidity
function eqFeePool() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### feeLibrary

```solidity
function feeLibrary() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### getChainPath

```solidity
function getChainPath(uint16 _dstChainId, uint256 _dstPoolId) external view returns (struct Pool.ChainPath)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _dstPoolId | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | Pool.ChainPath | undefined

### getChainPathsLength

```solidity
function getChainPathsLength() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### increaseAllowance

```solidity
function increaseAllowance(address spender, uint256 addedValue) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined
| addedValue | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### instantRedeemLocal

```solidity
function instantRedeemLocal(address _from, uint256 _amountLP, address _to) external nonpayable returns (uint256 amountSD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined
| _amountLP | uint256 | undefined
| _to | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| amountSD | uint256 | undefined

### localDecimals

```solidity
function localDecimals() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### lpDeltaBP

```solidity
function lpDeltaBP() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### mint

```solidity
function mint(address _to, uint256 _amountLD) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined
| _amountLD | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### mintFeeBP

```solidity
function mintFeeBP() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### mintFeeBalance

```solidity
function mintFeeBalance() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### name

```solidity
function name() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### nonces

```solidity
function nonces(address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### permit

```solidity
function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined
| spender | address | undefined
| value | uint256 | undefined
| deadline | uint256 | undefined
| v | uint8 | undefined
| r | bytes32 | undefined
| s | bytes32 | undefined

### poolId

```solidity
function poolId() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### protocolFeeBalance

```solidity
function protocolFeeBalance() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### redeemLocal

```solidity
function redeemLocal(address _from, uint256 _amountLP, uint16 _dstChainId, uint256 _dstPoolId, bytes _to) external nonpayable returns (uint256 amountSD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined
| _amountLP | uint256 | undefined
| _dstChainId | uint16 | undefined
| _dstPoolId | uint256 | undefined
| _to | bytes | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| amountSD | uint256 | undefined

### redeemLocalCallback

```solidity
function redeemLocalCallback(uint16 _srcChainId, uint256 _srcPoolId, address _to, uint256 _amountSD, uint256 _amountToMintSD) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcPoolId | uint256 | undefined
| _to | address | undefined
| _amountSD | uint256 | undefined
| _amountToMintSD | uint256 | undefined

### redeemLocalCheckOnRemote

```solidity
function redeemLocalCheckOnRemote(uint16 _srcChainId, uint256 _srcPoolId, uint256 _amountSD) external nonpayable returns (uint256 swapAmount, uint256 mintAmount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcPoolId | uint256 | undefined
| _amountSD | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| swapAmount | uint256 | undefined
| mintAmount | uint256 | undefined

### redeemRemote

```solidity
function redeemRemote(uint16 _dstChainId, uint256 _dstPoolId, address _from, uint256 _amountLP) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _dstPoolId | uint256 | undefined
| _from | address | undefined
| _amountLP | uint256 | undefined

### router

```solidity
function router() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### sendCredits

```solidity
function sendCredits(uint16 _dstChainId, uint256 _dstPoolId) external nonpayable returns (struct Pool.CreditObj c)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _dstPoolId | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| c | Pool.CreditObj | undefined

### setDeltaParam

```solidity
function setDeltaParam(bool _batched, uint256 _swapDeltaBP, uint256 _lpDeltaBP, bool _defaultSwapMode, bool _defaultLPMode) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _batched | bool | undefined
| _swapDeltaBP | uint256 | undefined
| _lpDeltaBP | uint256 | undefined
| _defaultSwapMode | bool | undefined
| _defaultLPMode | bool | undefined

### setFee

```solidity
function setFee(uint256 _mintFeeBP) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _mintFeeBP | uint256 | undefined

### setFeeLibrary

```solidity
function setFeeLibrary(address _feeLibraryAddr) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _feeLibraryAddr | address | undefined

### setSwapStop

```solidity
function setSwapStop(bool _swapStop) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _swapStop | bool | undefined

### setWeightForChainPath

```solidity
function setWeightForChainPath(uint16 _dstChainId, uint256 _dstPoolId, uint16 _weight) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _dstPoolId | uint256 | undefined
| _weight | uint16 | undefined

### sharedDecimals

```solidity
function sharedDecimals() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### stopSwap

```solidity
function stopSwap() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### swap

```solidity
function swap(uint16 _dstChainId, uint256 _dstPoolId, address _from, uint256 _amountLD, uint256 _minAmountLD, bool newLiquidity) external nonpayable returns (struct Pool.SwapObj)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _dstPoolId | uint256 | undefined
| _from | address | undefined
| _amountLD | uint256 | undefined
| _minAmountLD | uint256 | undefined
| newLiquidity | bool | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | Pool.SwapObj | undefined

### swapDeltaBP

```solidity
function swapDeltaBP() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### swapRemote

```solidity
function swapRemote(uint16 _srcChainId, uint256 _srcPoolId, address _to, Pool.SwapObj _s) external nonpayable returns (uint256 amountLD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcPoolId | uint256 | undefined
| _to | address | undefined
| _s | Pool.SwapObj | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| amountLD | uint256 | undefined

### symbol

```solidity
function symbol() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### token

```solidity
function token() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### totalLiquidity

```solidity
function totalLiquidity() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### totalWeight

```solidity
function totalWeight() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### transfer

```solidity
function transfer(address to, uint256 value) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined
| value | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 value) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined
| to | address | undefined
| value | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### withdrawMintFeeBalance

```solidity
function withdrawMintFeeBalance(address _to) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined

### withdrawProtocolFeeBalance

```solidity
function withdrawProtocolFeeBalance(address _to) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined



## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 value)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| spender `indexed` | address | undefined |
| value  | uint256 | undefined |

### Burn

```solidity
event Burn(address from, uint256 amountLP, uint256 amountSD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from  | address | undefined |
| amountLP  | uint256 | undefined |
| amountSD  | uint256 | undefined |

### ChainPathUpdate

```solidity
event ChainPathUpdate(uint16 dstChainId, uint256 dstPoolId, uint256 weight)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| dstChainId  | uint16 | undefined |
| dstPoolId  | uint256 | undefined |
| weight  | uint256 | undefined |

### CreditChainPath

```solidity
event CreditChainPath(uint16 chainId, uint256 srcPoolId, uint256 amountSD, uint256 idealBalance)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| chainId  | uint16 | undefined |
| srcPoolId  | uint256 | undefined |
| amountSD  | uint256 | undefined |
| idealBalance  | uint256 | undefined |

### DeltaParamUpdated

```solidity
event DeltaParamUpdated(bool batched, uint256 swapDeltaBP, uint256 lpDeltaBP, bool defaultSwapMode, bool defaultLPMode)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| batched  | bool | undefined |
| swapDeltaBP  | uint256 | undefined |
| lpDeltaBP  | uint256 | undefined |
| defaultSwapMode  | bool | undefined |
| defaultLPMode  | bool | undefined |

### FeeLibraryUpdated

```solidity
event FeeLibraryUpdated(address feeLibraryAddr)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| feeLibraryAddr  | address | undefined |

### FeesUpdated

```solidity
event FeesUpdated(uint256 mintFeeBP)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| mintFeeBP  | uint256 | undefined |

### InstantRedeemLocal

```solidity
event InstantRedeemLocal(address from, uint256 amountLP, uint256 amountSD, address to)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from  | address | undefined |
| amountLP  | uint256 | undefined |
| amountSD  | uint256 | undefined |
| to  | address | undefined |

### Mint

```solidity
event Mint(address to, uint256 amountLP, uint256 amountSD, uint256 mintFeeAmountSD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to  | address | undefined |
| amountLP  | uint256 | undefined |
| amountSD  | uint256 | undefined |
| mintFeeAmountSD  | uint256 | undefined |

### RedeemLocal

```solidity
event RedeemLocal(address from, uint256 amountLP, uint256 amountSD, uint16 chainId, uint256 dstPoolId, bytes to)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from  | address | undefined |
| amountLP  | uint256 | undefined |
| amountSD  | uint256 | undefined |
| chainId  | uint16 | undefined |
| dstPoolId  | uint256 | undefined |
| to  | bytes | undefined |

### RedeemLocalCallback

```solidity
event RedeemLocalCallback(address _to, uint256 _amountSD, uint256 _amountToMintSD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _to  | address | undefined |
| _amountSD  | uint256 | undefined |
| _amountToMintSD  | uint256 | undefined |

### RedeemRemote

```solidity
event RedeemRemote(uint16 chainId, uint256 dstPoolId, address from, uint256 amountLP, uint256 amountSD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| chainId  | uint16 | undefined |
| dstPoolId  | uint256 | undefined |
| from  | address | undefined |
| amountLP  | uint256 | undefined |
| amountSD  | uint256 | undefined |

### SendCredits

```solidity
event SendCredits(uint16 dstChainId, uint256 dstPoolId, uint256 credits, uint256 idealBalance)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| dstChainId  | uint16 | undefined |
| dstPoolId  | uint256 | undefined |
| credits  | uint256 | undefined |
| idealBalance  | uint256 | undefined |

### StopSwapUpdated

```solidity
event StopSwapUpdated(bool swapStop)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| swapStop  | bool | undefined |

### Swap

```solidity
event Swap(uint16 chainId, uint256 dstPoolId, address from, uint256 amountSD, uint256 eqReward, uint256 eqFee, uint256 protocolFee, uint256 lpFee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| chainId  | uint16 | undefined |
| dstPoolId  | uint256 | undefined |
| from  | address | undefined |
| amountSD  | uint256 | undefined |
| eqReward  | uint256 | undefined |
| eqFee  | uint256 | undefined |
| protocolFee  | uint256 | undefined |
| lpFee  | uint256 | undefined |

### SwapRemote

```solidity
event SwapRemote(address to, uint256 amountSD, uint256 protocolFee, uint256 dstFee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to  | address | undefined |
| amountSD  | uint256 | undefined |
| protocolFee  | uint256 | undefined |
| dstFee  | uint256 | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 value)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| value  | uint256 | undefined |

### WithdrawMintFeeBalance

```solidity
event WithdrawMintFeeBalance(address to, uint256 amountSD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to  | address | undefined |
| amountSD  | uint256 | undefined |

### WithdrawProtocolFeeBalance

```solidity
event WithdrawProtocolFeeBalance(address to, uint256 amountSD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to  | address | undefined |
| amountSD  | uint256 | undefined |

### WithdrawRemote

```solidity
event WithdrawRemote(uint16 srcChainId, uint256 srcPoolId, uint256 swapAmount, uint256 mintAmount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| srcChainId  | uint16 | undefined |
| srcPoolId  | uint256 | undefined |
| swapAmount  | uint256 | undefined |
| mintAmount  | uint256 | undefined |



