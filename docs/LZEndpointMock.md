# LZEndpointMock









## Methods

### addrToPackedBytes

```solidity
function addrToPackedBytes(address _a) external pure returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _a | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined

### estimateFees

```solidity
function estimateFees(uint16, address, bytes, bool, bytes) external view returns (uint256, uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined
| _1 | address | undefined
| _2 | bytes | undefined
| _3 | bool | undefined
| _4 | bytes | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined
| _1 | uint256 | undefined

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
function getConfig(uint16, uint16, address, uint256) external pure returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined
| _1 | uint16 | undefined
| _2 | address | undefined
| _3 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined

### getInboundNonce

```solidity
function getInboundNonce(uint16 _chainID, bytes _srcAddress) external view returns (uint64)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _chainID | uint16 | undefined
| _srcAddress | bytes | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined

### getOutboundNonce

```solidity
function getOutboundNonce(uint16 _chainID, address _srcAddress) external view returns (uint64)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _chainID | uint16 | undefined
| _srcAddress | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined

### getReceiveLibraryAddress

```solidity
function getReceiveLibraryAddress(address) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### getReceiveVersion

```solidity
function getReceiveVersion(address) external pure returns (uint16)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

### getSendLibraryAddress

```solidity
function getSendLibraryAddress(address) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### getSendVersion

```solidity
function getSendVersion(address) external pure returns (uint16)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

### hasStoredPayload

```solidity
function hasStoredPayload(uint16, bytes) external pure returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined
| _1 | bytes | undefined

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
function isReceivingPayload() external pure returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### isSendingPayload

```solidity
function isSendingPayload() external pure returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### lzEndpointLookup

```solidity
function lzEndpointLookup(address) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### mockBlockConfirmations

```solidity
function mockBlockConfirmations() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### mockChainId

```solidity
function mockChainId() external view returns (uint16)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

### mockLayerZeroVersion

```solidity
function mockLayerZeroVersion() external view returns (uint16)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

### mockLibraryVersion

```solidity
function mockLibraryVersion() external view returns (uint16)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

### mockOracle

```solidity
function mockOracle() external view returns (address payable)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address payable | undefined

### mockReceiveVersion

```solidity
function mockReceiveVersion() external view returns (uint16)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

### mockRelayer

```solidity
function mockRelayer() external view returns (address payable)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address payable | undefined

### mockSendVersion

```solidity
function mockSendVersion() external view returns (uint16)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined

### mockStaticNativeFee

```solidity
function mockStaticNativeFee() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

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

### packedBytesToAddr

```solidity
function packedBytesToAddr(bytes _b) external pure returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _b | bytes | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### receiveAndForward

```solidity
function receiveAndForward(address _destAddr, uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes _payload) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _destAddr | address | undefined
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined
| _nonce | uint64 | undefined
| _payload | bytes | undefined

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

### retryPayload

```solidity
function retryPayload(uint16 _srcChainId, bytes _srcAddress, bytes _payload) external pure
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _srcChainId | uint16 | undefined
| _srcAddress | bytes | undefined
| _payload | bytes | undefined

### send

```solidity
function send(uint16 _chainId, bytes _destination, bytes _payload, address payable, address, bytes dstGas) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _chainId | uint16 | undefined
| _destination | bytes | undefined
| _payload | bytes | undefined
| _3 | address payable | undefined
| _4 | address | undefined
| dstGas | bytes | undefined

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

### setDestLzEndpoint

```solidity
function setDestLzEndpoint(address destAddr, address lzEndpointAddr) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| destAddr | address | undefined
| lzEndpointAddr | address | undefined

### setReceiveVersion

```solidity
function setReceiveVersion(uint16 _version) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _version | uint16 | undefined

### setSendVersion

```solidity
function setSendVersion(uint16 _version) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _version | uint16 | undefined



## Events

### ForceResumeReceive

```solidity
event ForceResumeReceive(uint16 srcChainId, bytes srcAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| srcChainId  | uint16 | undefined |
| srcAddress  | bytes | undefined |

### SetConfig

```solidity
event SetConfig(uint16 version, uint16 chainId, uint256 configType, bytes config)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint16 | undefined |
| chainId  | uint16 | undefined |
| configType  | uint256 | undefined |
| config  | bytes | undefined |



