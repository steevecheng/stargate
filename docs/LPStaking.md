# LPStaking









## Methods

### BONUS_MULTIPLIER

```solidity
function BONUS_MULTIPLIER() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### add

```solidity
function add(uint256 _allocPoint, contract IERC20 _lpToken) external nonpayable
```

handles adding a new LP token (Can only be called by the owner)



#### Parameters

| Name | Type | Description |
|---|---|---|
| _allocPoint | uint256 | The alloc point is used as the weight of the pool against all other alloc points added.
| _lpToken | contract IERC20 | The lp token address

### bonusEndBlock

```solidity
function bonusEndBlock() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### deposit

```solidity
function deposit(uint256 _pid, uint256 _amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _pid | uint256 | undefined
| _amount | uint256 | undefined

### emergencyWithdraw

```solidity
function emergencyWithdraw(uint256 _pid) external nonpayable
```

Withdraw without caring about rewards.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _pid | uint256 | The pid specifies the pool

### getMultiplier

```solidity
function getMultiplier(uint256 _from, uint256 _to) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | uint256 | undefined
| _to | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### lpBalances

```solidity
function lpBalances(uint256) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### massUpdatePools

```solidity
function massUpdatePools() external nonpayable
```






### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### pendingStargate

```solidity
function pendingStargate(uint256 _pid, address _user) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _pid | uint256 | undefined
| _user | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### poolInfo

```solidity
function poolInfo(uint256) external view returns (contract IERC20 lpToken, uint256 allocPoint, uint256 lastRewardBlock, uint256 accStargatePerShare)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| lpToken | contract IERC20 | undefined
| allocPoint | uint256 | undefined
| lastRewardBlock | uint256 | undefined
| accStargatePerShare | uint256 | undefined

### poolLength

```solidity
function poolLength() external view returns (uint256)
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


### set

```solidity
function set(uint256 _pid, uint256 _allocPoint) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _pid | uint256 | undefined
| _allocPoint | uint256 | undefined

### setStargatePerBlock

```solidity
function setStargatePerBlock(uint256 _stargatePerBlock) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _stargatePerBlock | uint256 | undefined

### stargate

```solidity
function stargate() external view returns (contract StargateToken)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract StargateToken | undefined

### stargatePerBlock

```solidity
function stargatePerBlock() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### startBlock

```solidity
function startBlock() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### totalAllocPoint

```solidity
function totalAllocPoint() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined

### updatePool

```solidity
function updatePool(uint256 _pid) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _pid | uint256 | undefined

### userInfo

```solidity
function userInfo(uint256, address) external view returns (uint256 amount, uint256 rewardDebt)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined
| _1 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| amount | uint256 | undefined
| rewardDebt | uint256 | undefined

### withdraw

```solidity
function withdraw(uint256 _pid, uint256 _amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _pid | uint256 | undefined
| _amount | uint256 | undefined



## Events

### Deposit

```solidity
event Deposit(address indexed user, uint256 indexed pid, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | undefined |
| pid `indexed` | uint256 | undefined |
| amount  | uint256 | undefined |

### EmergencyWithdraw

```solidity
event EmergencyWithdraw(address indexed user, uint256 indexed pid, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | undefined |
| pid `indexed` | uint256 | undefined |
| amount  | uint256 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### Withdraw

```solidity
event Withdraw(address indexed user, uint256 indexed pid, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | undefined |
| pid `indexed` | uint256 | undefined |
| amount  | uint256 | undefined |



