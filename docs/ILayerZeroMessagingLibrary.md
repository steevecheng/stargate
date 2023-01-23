# ILayerZeroMessagingLibrary









## Methods

### estimateFees

```solidity
function estimateFees(uint16 _chainId, address _userApplication, bytes _payload, bool _payInZRO, bytes _adapterParam) external view returns (uint256 nativeFee, uint256 zroFee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _chainId | uint16 | undefined
| _userApplication | address | undefined
| _payload | bytes | undefined
| _payInZRO | bool | undefined
| _adapterParam | bytes | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| nativeFee | uint256 | undefined
| zroFee | uint256 | undefined

### getConfig

```solidity
function getConfig(uint16 _chainId, address _userApplication, uint256 _configType) external view returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _chainId | uint16 | undefined
| _userApplication | address | undefined
| _configType | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined

### send

```solidity
function send(address _userApplication, uint64 _lastNonce, uint16 _chainId, bytes _destination, bytes _payload, address payable refundAddress, address _zroPaymentAddress, bytes _adapterParams) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _userApplication | address | undefined
| _lastNonce | uint64 | undefined
| _chainId | uint16 | undefined
| _destination | bytes | undefined
| _payload | bytes | undefined
| refundAddress | address payable | undefined
| _zroPaymentAddress | address | undefined
| _adapterParams | bytes | undefined

### setConfig

```solidity
function setConfig(uint16 _chainId, address _userApplication, uint256 _configType, bytes _config) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _chainId | uint16 | undefined
| _userApplication | address | undefined
| _configType | uint256 | undefined
| _config | bytes | undefined




