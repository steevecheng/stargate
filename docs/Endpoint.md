# Endpoint









## Methods

### BLOCK_VERSION

```solidity
function BLOCK_VERSION() external view returns (uint16)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

### DEFAULT_VERSION

```solidity
function DEFAULT_VERSION() external view returns (uint16)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

### chainId

```solidity
function chainId() external view returns (uint16)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

### defaultReceiveLibraryAddress

```solidity
function defaultReceiveLibraryAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### defaultReceiveVersion

```solidity
function defaultReceiveVersion() external view returns (uint16)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

### defaultSendLibrary

```solidity
function defaultSendLibrary() external view returns (contract ILayerZeroMessagingLibrary)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ILayerZeroMessagingLibrary | undefined

### defaultSendVersion

```solidity
function defaultSendVersion() external view returns (uint16)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

### estimateFees

```solidity
function estimateFees(uint16 _dstChainId, address _userApplication, bytes _payload, bool _payInZRO, bytes _adapterParams) external view returns (uint256 nativeFee, uint256 zroFee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _userApplication | address | undefined
| _payload | bytes | undefined
| _payInZRO | bool | undefined
| _adapterParams | bytes | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| nativeFee | uint256 | undefined
| zroFee | uint256 | undefined

### forceResumeReceive

```solidity
function forceResumeReceive(uint16 _srcChainId, bytes _srcAddress) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined

### getChainId

```solidity
function getChainId() external view returns (uint16)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

### getConfig

```solidity
function getConfig(uint16 _version, uint16 _chainId, address _userApplication, uint256 _configType) external view returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _version | uint16 | undefined
| _chainId | uint16 | undefined
| _userApplication | address | undefined
| _configType | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined

### getInboundNonce

```solidity
function getInboundNonce(uint16 _srcChainId, bytes _srcAddress) external view returns (uint64)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined

### getOutboundNonce

```solidity
function getOutboundNonce(uint16 _dstChainId, address _srcAddress) external view returns (uint64)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _srcAddress | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined

### getReceiveLibraryAddress

```solidity
function getReceiveLibraryAddress(address _userApplication) external view returns (address receiveLibraryAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _userApplication | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| receiveLibraryAddress | address | undefined

### getReceiveVersion

```solidity
function getReceiveVersion(address _userApplication) external view returns (uint16)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _userApplication | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

### getSendLibraryAddress

```solidity
function getSendLibraryAddress(address _userApplication) external view returns (address sendLibraryAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _userApplication | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| sendLibraryAddress | address | undefined

### getSendVersion

```solidity
function getSendVersion(address _userApplication) external view returns (uint16)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _userApplication | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

### hasStoredPayload

```solidity
function hasStoredPayload(uint16 _srcChainId, bytes _srcAddress) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### inboundNonce

```solidity
function inboundNonce(uint16, bytes) external view returns (uint64)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined
| _1 | bytes | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined

### isReceivingPayload

```solidity
function isReceivingPayload() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### isSendingPayload

```solidity
function isSendingPayload() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### latestVersion

```solidity
function latestVersion() external view returns (uint16)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

### libraryLookup

```solidity
function libraryLookup(uint16) external view returns (contract ILayerZeroMessagingLibrary)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ILayerZeroMessagingLibrary | undefined

### newVersion

```solidity
function newVersion(address _newLayerZeroLibraryAddress) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _newLayerZeroLibraryAddress | address | undefined

### outboundNonce

```solidity
function outboundNonce(uint16, address) external view returns (uint64)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined
| _1 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### receivePayload

```solidity
function receivePayload(uint16 _srcChainId, bytes _srcAddress, address _dstAddress, uint64 _nonce, uint256 _gasLimit, bytes _payload) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined
| _dstAddress | address | undefined
| _nonce | uint64 | undefined
| _gasLimit | uint256 | undefined
| _payload | bytes | undefined

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### retryPayload

```solidity
function retryPayload(uint16 _srcChainId, bytes _srcAddress, bytes _payload) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined
| _payload | bytes | undefined

### send

```solidity
function send(uint16 _dstChainId, bytes _destination, bytes _payload, address payable _refundAddress, address _zroPaymentAddress, bytes _adapterParams) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _dstChainId | uint16 | undefined
| _destination | bytes | undefined
| _payload | bytes | undefined
| _refundAddress | address payable | undefined
| _zroPaymentAddress | address | undefined
| _adapterParams | bytes | undefined

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

### setDefaultReceiveVersion

```solidity
function setDefaultReceiveVersion(uint16 _newDefaultReceiveVersion) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _newDefaultReceiveVersion | uint16 | undefined

### setDefaultSendVersion

```solidity
function setDefaultSendVersion(uint16 _newDefaultSendVersion) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _newDefaultSendVersion | uint16 | undefined

### setReceiveVersion

```solidity
function setReceiveVersion(uint16 _newVersion) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _newVersion | uint16 | undefined

### setSendVersion

```solidity
function setSendVersion(uint16 _newVersion) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _newVersion | uint16 | undefined

### storedPayload

```solidity
function storedPayload(uint16, bytes) external view returns (uint64 payloadLength, address dstAddress, bytes32 payloadHash)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined
| _1 | bytes | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| payloadLength | uint64 | undefined
| dstAddress | address | undefined
| payloadHash | bytes32 | undefined

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined

### uaConfigLookup

```solidity
function uaConfigLookup(address) external view returns (uint16 sendVersion, uint16 receiveVersion, address receiveLibraryAddress, contract ILayerZeroMessagingLibrary sendLibrary)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| sendVersion | uint16 | undefined
| receiveVersion | uint16 | undefined
| receiveLibraryAddress | address | undefined
| sendLibrary | contract ILayerZeroMessagingLibrary | undefined



## Events

### DefaultReceiveVersionSet

```solidity
event DefaultReceiveVersionSet(uint16 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint16 | undefined |

### DefaultSendVersionSet

```solidity
event DefaultSendVersionSet(uint16 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint16 | undefined |

### NewLibraryVersionAdded

```solidity
event NewLibraryVersionAdded(uint16 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint16 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### PayloadCleared

```solidity
event PayloadCleared(uint16 srcChainId, bytes srcAddress, uint64 nonce, address dstAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| srcChainId  | uint16 | undefined |
| srcAddress  | bytes | undefined |
| nonce  | uint64 | undefined |
| dstAddress  | address | undefined |

### PayloadStored

```solidity
event PayloadStored(uint16 srcChainId, bytes srcAddress, address dstAddress, uint64 nonce, bytes payload, bytes reason)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| srcChainId  | uint16 | undefined |
| srcAddress  | bytes | undefined |
| dstAddress  | address | undefined |
| nonce  | uint64 | undefined |
| payload  | bytes | undefined |
| reason  | bytes | undefined |

### UaForceResumeReceive

```solidity
event UaForceResumeReceive(uint16 chainId, bytes srcAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| chainId  | uint16 | undefined |
| srcAddress  | bytes | undefined |

### UaReceiveVersionSet

```solidity
event UaReceiveVersionSet(address ua, uint16 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| ua  | address | undefined |
| version  | uint16 | undefined |

### UaSendVersionSet

```solidity
event UaSendVersionSet(address ua, uint16 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| ua  | address | undefined |
| version  | uint16 | undefined |



