// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/access/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/extensions/ERC20Permit.sol";


contract StakingContract is Ownable(msg.sender) { // Pass the initial owner address
    IERC20 public stakingToken; // The token users will stake
    uint256 public stakingDuration; // Duration for staking in seconds
    uint256 public rewardRate; // Annual reward rate (in percentage)

    struct Stake {
        uint256 amount;
        uint256 startTime;
    }

    mapping(address => Stake) public stakers;

    event Staked(address indexed staker, uint256 amount, uint256 startTime);
    event Unstaked(address indexed staker, uint256 amount);

    constructor(address _stakingToken, uint256 _duration, uint256 _rate) {
        stakingToken = IERC20(_stakingToken);
        stakingDuration = _duration;
        rewardRate = _rate;
    }
    function stake(uint256 _amount) external {
        require(_amount > 0, "Amount must be greater than zero");
        require(stakers[msg.sender].amount == 0, "You have already staked");
        require(
            stakingToken.transferFrom(msg.sender, address(this), _amount),
            "Stake failed"
        );

        stakers[msg.sender] = Stake(_amount, block.timestamp);

        emit Staked(msg.sender, _amount, block.timestamp);
    }

    function unstake() external {
        Stake storage staker = stakers[msg.sender];
        require(staker.amount > 0, "You haven't staked");
        require(
            block.timestamp >= staker.startTime + stakingDuration,
            "Staking duration not met"
        );

        uint256 reward = calculateReward(staker.amount, staker.startTime);
        uint256 totalAmount = staker.amount + reward;

        delete stakers[msg.sender];

        require(
            stakingToken.transfer(msg.sender, totalAmount),
            "Unstake failed"
        );

        emit Unstaked(msg.sender, totalAmount);
    }

    function calculateReward(uint256 _amount, uint256 _startTime)
        internal
        view
        returns (uint256)
    {
        uint256 elapsedTime = block.timestamp - _startTime;
        uint256 annualReward = (_amount * rewardRate) / 100;
        uint256 reward = (annualReward * elapsedTime) / (stakingDuration);
        return reward;
    }
    
}
